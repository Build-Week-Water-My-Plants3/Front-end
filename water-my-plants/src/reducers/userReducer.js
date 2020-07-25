import { user, signup } from "../actions";
const {
  FETCH_USER_START,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE,
//   SET_ID,
} = user;
const { SET_PREFS_SUCCESS } = signup;
// const { UPDATE_INFO_SUCCESS } = settings;
const initialState = {
  isFetching: false,
  id: null,
  username: null,
  email: null,
  recommendations: null,
};
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    // case UPDATE_INFO_SUCCESS:
    //   return {
    //     ...state,
    //     username: action.payload.username,
    //     email: action.payload.email,
    //   };
    case FETCH_USER_START:
      return {
        ...state,
      };
    case FETCH_USER_SUCCESS:
      return {
        ...state,
        username: action.payload.username,
        recommendations: action.payload.recommendations,
        email: action.payload.email,
      };
    case FETCH_USER_FAILURE:
      return {
        ...state,
      };

    case SET_PREFS_SUCCESS:
      return {
        ...state,
        recommendations: action.payload,
      };
    default:
      return state;
  }
};
