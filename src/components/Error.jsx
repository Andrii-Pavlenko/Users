import React from "react";
import { Modal } from "semantic-ui-react";
import { connect } from "react-redux";
import { getLoadingError } from "../redux/selectors";

function Error() {
  return (
    <Modal
      trigger={getLoadingError.lenght > 0}
      header="Error"
      content={getLoadingError}
      actions={["Ok"]}
    />
  );
}

export default connect(
  (state) => ({
    getLoadingError: getLoadingError(state),
  }),
  (dispatch) => ({})
)(Error);
