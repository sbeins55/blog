import _ from "lodash";
import jsonPlaceholder from "../api/jsonPlaceholder";

export const getPosts = () => async dispatch => {
  const response = await jsonPlaceholder.get("/posts");

  dispatch({ type: "GET_POSTS", payload: response.data });
};

export const getUser = id => async dispatch => {
  const response = await jsonPlaceholder.get(`/users/${id}`);

  dispatch({ type: "GET_USER", payload: response.data });
};

export const getPostsAndUsers = () => async (dispatch, getState) => {
  await dispatch(getPosts());

  _.chain(getState().posts)
    .map("userId")
    .uniq()
    .forEach(id => dispatch(getUser(id)))
    .value();
};
