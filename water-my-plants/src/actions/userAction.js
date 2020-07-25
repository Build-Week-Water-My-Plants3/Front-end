import { axiosWithAuth } from "../utilities";
export const FETCH_USER_START = "FETCH_USER_START";
export const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS";
export const FETCH_USER_FAILURE = "FETCH_USER_FAILURE";
export const fetchUser = (user) => (dispatch) => {
  dispatch({ type: FETCH_USER_START });
  axiosWithAuth()
    .get(`/api/auth/cannabis/$(user)`)
    .then((res) => {
      console.log(res);
      dispatch({ type: FETCH_USER_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: FETCH_USER_FAILURE, payload: err });
    });
};

export const SET_USER = "SET_USER";
export const setUser = (user) => (dispatch) => {
  dispatch({ type: SET_USER, payload: user });
  console.log(user);
};