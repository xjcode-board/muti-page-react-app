import { combineReducers } from "redux";
import defaultState from "./state";

function baseInfo(state = defaultState.baseInfo, action) {
    switch (action.type) {
        case "SET_BASE_INFO":
            return action.data;
        default:
            return state;
    }
}

export default combineReducers({
    baseInfo,
});
