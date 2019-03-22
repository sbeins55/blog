import jsonplaceholder from "../api/jsonplacholder";

export const getPosts = () => async dispatch => {
  const response = await jsonplaceholder.get("/posts");

  dispatch({ type: "GET_POSTS", payload: response });
};
