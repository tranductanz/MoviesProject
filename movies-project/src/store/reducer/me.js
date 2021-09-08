import { actionType } from "../action/type";

const initialState = null;


export default (state = initialState, { type, payload }) => {
    switch (type) {
        case actionType.SET_ME:
            state = payload;
            return { ...state };
        default:
            return state;
    }
}
