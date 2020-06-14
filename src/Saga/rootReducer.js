import {combineReducers} from 'redux';
import Layout from "../Layouts/reducer"
import Home from "../Containers/Home/reducers"

const reducers = combineReducers({
    Layout:Layout,
    Home:Home
});

export default reducers;
