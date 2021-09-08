import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import userList from "./reducer/userList";
import me from './reducer/me';
import info from './reducer/deleteUser';
import addNew from './reducer/addNew';
const rootReducer = combineReducers({
    // store
    userList,
    me,
    info,
    addNew,
})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk)),
)

export default store;