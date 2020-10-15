import React, { useEffect } from "react";
import { Image, Button, Icon, Loader } from "semantic-ui-react";
import {
  getCurrentUser,
  getLoadingError,
  getFollowers,
} from "../redux/selectors";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import Error from "./Error";
import { setCurrentUser, setName } from "../redux/actions/fromCurrentUser";
import { setFollowers } from "../redux/actions/followers";

function UserInfo({
  getCurrentUser,
  getLoadingError,
  getFollowers,
  setCurrentUser,
  setFollowers,
  setName,
}) {
  useEffect(() => {
    return () => {
      setCurrentUser({});
      setFollowers([]);
      setName("");
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (getLoadingError) {
    return <Error />;
  } else if (getCurrentUser.id) {
    if (getCurrentUser.email) {
    }
    return (
      <>
        <NavLink to="/" className="home">
          <Button icon color="facebook">
            <Icon name="home" />
          </Button>
        </NavLink>

        <div className="user-info">
          <div>
            <Image
              src={getCurrentUser.avatar_url}
              size="medium"
              className="user-info__image"
            />
          </div>

          <div className="user-info__container">
            <span className="user-info__name user-info__title">
              {getCurrentUser.name}
            </span>

            <div>
              <span className="user-info__title">Followers:</span>{" "}
              <div>
                {getFollowers?.length ? (
                  getFollowers.map((item) => {
                    return <div key={item.id}>{item.login}</div>;
                  })
                ) : (
                  <Loader color="black" />
                )}
              </div>
            </div>

            <div>
              <span className="user-info__title">Crated at:</span>{" "}
              {new Date(getCurrentUser.created_at).toLocaleTimeString("uk-UA")}{" "}
              {new Date(getCurrentUser.created_at).toLocaleDateString("uk-UA")}
            </div>

            <div>
              <span className="user-info__title">Company:</span>{" "}
              {getCurrentUser.company}
            </div>

            <div>
              <span className="user-info__title">Email:</span>{" "}
              {getCurrentUser.email && (
                <a
                  href={`mailto:${getCurrentUser.email}`}
                  className="row__link"
                >
                  {getCurrentUser.email}
                </a>
              )}
            </div>

            <div>
              <span className="user-info__title">Location:</span>{" "}
              {getCurrentUser.location}
            </div>

            <div>
              <span className="user-info__title">Blog:</span>{" "}
              <NavLink to={`/`} className="row__link">
                {getCurrentUser.blog}
              </NavLink>
            </div>

            <div>
              <span className="user-info__title">Bio:</span>{" "}
              {getCurrentUser.bio}
            </div>
          </div>
        </div>
      </>
    );
  }
  return <Loader inverted />;
}

export default connect(
  (state) => ({
    getLoadingError: getLoadingError(state),
    getCurrentUser: getCurrentUser(state),
    getFollowers: getFollowers(state),
  }),
  (dispatch) => ({
    setCurrentUser: (user) => dispatch(setCurrentUser(user)),
    setFollowers: (users) => dispatch(setFollowers()),
    setName: (name) => dispatch(setName(name)),
  })
)(UserInfo);
