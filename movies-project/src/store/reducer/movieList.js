import { actionType } from "../action/type";

const initialState = {
    movies: [],
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.SET_FETCH_QUESTION:
            state.movies = [action.payload.content];
            return { ...state }
        default:
            return state;
    }
}
export default reducer;
