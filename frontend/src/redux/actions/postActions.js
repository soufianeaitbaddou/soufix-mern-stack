import * as actionTypes from "../constants/postsConstants";
import { listPosts } from "../../axios/services/PostService";

export const getPosts = () => (dispatch) => {
  dispatch({ type: actionTypes.GET_POST_REQUEST });
  listPosts()
    .then((response) => {
      console.log(response);

      dispatch({
        type: actionTypes.GET_POST_SUCCES,
        payload: response.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: actionTypes.GET_POST_FAIL,
        payload: err.response,
      });
    });
};
