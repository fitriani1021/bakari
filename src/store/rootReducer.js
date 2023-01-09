import {combineReducers} from 'redux';
import menuReducer from "./reducers/menuReducer";
import tableReducer from "./reducers/tableReducer";

const rootReducer = combineReducers({
    menus: menuReducer,
    tables: tableReducer,
});

export default rootReducer;