import "semantic-ui-css/semantic.min.css";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { applyMiddleware, compose, createStore } from "redux";
import { HashRouter } from "react-router-dom";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage/session";
import { PersistGate } from "redux-persist/integration/react";

import App from "./App";
import rootReducer from "./redux/reducers/rootReducer";
import "./index.css";

const middlewares = [thunk];

const persistConfig = {
  key: "root",
  storage,
};

//@ts-ignore
const persistedReducer = persistReducer(persistConfig, rootReducer);

const composeEnhancers = //window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || 
compose;

export const store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(...middlewares))
);

export const persistor = persistStore(store);

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      {/* to save redux in sessionStorage */}
      <HashRouter basename="/">
        <App />
      </HashRouter>
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
