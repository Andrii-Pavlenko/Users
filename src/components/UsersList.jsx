import React, { useEffect } from "react";
import { Item, Image, Segment, Loader } from "semantic-ui-react";
import { connect } from "react-redux";
import { getUsers, getLoadingError } from "../redux/selectors";
import { loadUsers } from "../redux/actions/loadingUsers";
import { loadCurrentUser, setName } from "../redux/actions/fromCurrentUser";
import { NavLink } from "react-router-dom";
import Error from "./Error";

function UsersList({
  loadUsers,
  getUsers,
  setName,
  getLoadingError,
  loadCurrentUser,
}) {
  useEffect(() => {
    !getUsers?.length && loadUsers();
  }, [getUsers, loadUsers]);

  const loadUser = (item) => {
    setName(item.login);
    loadCurrentUser(item.url);
  };

  if (getLoadingError) {
    return <Error />;
  } else if (getUsers?.length) {
    return (
      <div className="row">
        <Item.Group>
          {getUsers.map((item) => (
            <Segment raised key={item.id}>
              <Item className="row__container">
                <Image
                  avatar
                  src={item.avatar_url}
                  style={{ height: "100px", width: "auto", margin: "20px" }}
                />

                <Item.Content className="row__content">
                  <Item.Header>{item.login}</Item.Header>
                  <Item.Meta>Profile link</Item.Meta>
                  <Item.Description>
                    <NavLink
                      to={`/${item.login}`}
                      onClick={() => loadUser(item)}
                      className="row__link"
                    >
                      {item.html_url}
                    </NavLink>
                  </Item.Description>
                </Item.Content>
              </Item>
            </Segment>
          ))}
        </Item.Group>
      </div>
    );
  }
  return <Loader inverted />;
}

export default connect(
  (state) => ({
    getUsers: getUsers(state),
    getLoadingError: getLoadingError(state),
  }),
  (dispatch) => ({
    loadUsers: () => dispatch(loadUsers()),
    loadCurrentUser: (url) => dispatch(loadCurrentUser(url)),
    setName: (name) => dispatch(setName(name)),
  })
)(UsersList);
