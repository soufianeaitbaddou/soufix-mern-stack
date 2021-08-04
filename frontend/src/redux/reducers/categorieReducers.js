import * as actionTypes from "../constants/categoriesConstants";

const CATEGORIE_INITIAL_STATE = {
  Categories: [],
};

export const CategoriesReducer = (state = CATEGORIE_INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.GET_CATEGORIES_REQUEST:
      return {
        loading: true,
        Categories: [],
      };
    case actionTypes.GET_CATEGORIES_SUCCES:
      return {
        loading: false,
        Categories: action.payload,
      };
    case actionTypes.GET_CATEGORIE_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case actionTypes.ADD_CATEGORIE_REQUEST:
      return {
        add_c_loading: true,
      };
    case actionTypes.ADD_CATEGORIE_SUCCES:
      return {
        add_c_loading: false,
        ...state,
        Categories: [...state.Categories, action.payload],
      };
    case actionTypes.ADD_CATEGORIE_FAIL:
      return {
        add_c_loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
