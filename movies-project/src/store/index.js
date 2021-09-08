import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from 'redux-thunk';
import movieList from './reducer/movieList';
import movieDetail from './reducer/detail';
import me from './reducer/me';
const rootReducer = combineReducers({
    // khai báo store con
    movieList,
    movieDetail,
    me,
})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk)),
)

export default store;