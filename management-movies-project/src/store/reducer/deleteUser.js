import { actionType } from "../action/type";

const initialState = {
    info: [],
};


// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, { type, payload }) => {
    switch (type) {
        case actionType.DELETE_USER:
            state.info = payload;
            return { ...state };
        default:
            return state;
    }
}