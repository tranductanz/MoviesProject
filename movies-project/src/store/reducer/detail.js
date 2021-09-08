import { actionType } from "../action/type";

const initialState = {
    detail: [],
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.SET_DETAIL:
            state.detail = [action.payload];
            return { ...state }
        default:
            return state
    }
}
export default reducer;
