import { actionType } from "../action/type";

const initialState = {
    addedUser: [],
};


// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, { type, payload }) => {
    switch (type) {
        case actionType.ADD_NEW_USER:
            state.addedUser = payload;
            return { ...state };
        default:
            return state;
    }
}