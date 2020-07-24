import { plants } from "../actions";
const {
    FETCH_PLANTS_START,
    FETCH_PLANTS_SUCCESS,
    FETCH_PLANTS_FAILURE,
} = plants;
const initialState = {
    isFetching: false,
    plants: null,
    error: "",
};
export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_PLANTS_START:
            return { ...state, isFetching: true };
        case FETCH_PLANTS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                plants: action.payload,
            };
        case FETCH_PLANTS_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload,
            };
        default:
            return state;
    }
};