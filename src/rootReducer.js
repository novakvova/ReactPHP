import { combineReducers } from "redux";

import counter from './reducers/counter';
import { malyshkiReducer } from './components/malyshki/reducer';

export default combineReducers({
    counter,
    malyshki: malyshkiReducer
});