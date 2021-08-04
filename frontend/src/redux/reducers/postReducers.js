import * as actionTypes from "../constants/postsConstants";
import { STATES } from "mongoose";
const POST_INITIAL_STATE = {
  posts: [],
};
export const PostReducer = (state = POST_INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.GET_POST_REQUEST:
      return {
        loading: true,
        posts: [],
      };
    case actionTypes.GET_POST_SUCCES:
      return {
        loading: false,
        posts: [...state.posts, ...action.payload],
      };
    case actionTypes.GET_POST_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const SinglePostReducer = (state = POST_INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.GET_SINGLE_POST_REQUEST:
      return {
        loading: true,
        posts: [],
      };
    case actionTypes.GET_SINGLE_POST_SUCCES:
      return {
        loading: false,
        posts: [...state.posts, ...action.payload],
      };
    case actionTypes.GET_SINGLE_POST_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
