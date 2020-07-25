import { axiosWithAuth, clearToken } from "../utilities";
export const SIGN_OUT = "SIGN_OUT";
export const signOut = () => (dispatch) => {
    clearToken();
    dispatch({ type: SIGN_OUT });
};

export const UPDATE_INFO_START = "UPDATE_INFO_START";
export const UPDATE_INFO_SUCCESS = "UPDATE_INFO_SUCCESS";
export const UPDATE_INFO_FAILURE = "UPDATE_INFO_FAILURE";
export const updateInfo = (data) => (dispatch) => {
    const { id, req } = data;
    dispatch({ type: UPDATE_INFO_START });
    axiosWithAuth()
        .put(`/api/user/${id}`, req)
        .then((res) => {
            console.log(res);
            dispatch({ type: UPDATE_INFO_SUCCESS, payload: res.data.user });
        })
        .catch((err) => {
            console.log(err);
            dispatch({ type: UPDATE_INFO_FAILURE });
        });
};

export const FILL_FIELDS = "FILL_FIELDS";
export const fillFields = (userData) => (dispatch) => {
    dispatch({ type: FILL_FIELDS, payload: userData });
};

export const HANDLE_SETTINGS_INPUT = "HANDLE_SETTINGS_INPUT";
export const handleSettingsInput = (e) => (dispatch) => {
    dispatch({ type: HANDLE_SETTINGS_INPUT, payload: e.target });
};

export const SET_UPDATED = "SET_UPDATED";
export const setUpdated = (bool) => (dispatch) => {
    dispatch({ type: SET_UPDATED, payload: bool });
};

export const DELETE_PROFILE_START = "DELETE_PROFILE_START";
export const DELETE_PROFILE_SUCCESS = "DELETE_PROFILE_SUCCESS";
export const DELETE_PROFILE_FAILURE = "DELETE_PROFILE_FAILURE";
export const deleteProfile = (id) => (dispatch) => {
    dispatch({ type: DELETE_PROFILE_START });
    axiosWithAuth()
        .delete(`/api/user/${id}`)
        .then((res) => {
            dispatch({ type: DELETE_PROFILE_SUCCESS });
        })
        .catch((err) => {
            dispatch({ type: DELETE_PROFILE_FAILURE });
        });
};