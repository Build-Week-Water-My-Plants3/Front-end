
import axios from "axios";
import { axiosWithAuth, getToken } from "../utilities";

export const FETCH_STRAINS_START = "FETCH_STRAINS_START";
export const FETCH_STRAINS_SUCCESS = "FETCH_STRAINS_SUCCESS";
export const FETCH_STRAINS_FAILURE = "FETCH_STRAINS_FAILURE";
export const fetchStrains = () => (dispatch) => {
    dispatch({ type: FETCH_STRAINS_START });

    const token = getToken();
    axiosWithAuth()
        .get('/api/cannabis/',  {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
        .then((res) => {
            console.log("res-->", res);
            dispatch({ type: FETCH_STRAINS_SUCCESS, payload: res.data });
        })
        .catch((err) => {
            dispatch({ type: FETCH_STRAINS_FAILURE, payload: err });
        });
};