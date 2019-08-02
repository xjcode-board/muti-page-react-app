import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";
import reducers from "./reducers";
//解决redux的长效缓存
import { persistStore, persistReducer } from "redux-persist";
import storageSession from "redux-persist/lib/storage/session";
const logger = createLogger(); //打印日志
const storageConfig = {
    key: "root", // 必须有的
    storage: storageSession, // 缓存机制
    whiteList: [], // 白名单  只缓存该字段
};
const myPersistReducer = persistReducer(storageConfig, reducers);
let store = createStore(myPersistReducer, applyMiddleware(thunk, logger));
export const persistor = persistStore(store);
export default store;
