import { createStore, applyMiddleware, combineReducers } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-logger";
import logger from "redux-logger";
import reducers from "./reducers";

const persistConfig = {
  key: "root",
  storage
};

export default function() {
  const middleware = [logger, thunk];
  const rootReducers = combineReducers(reducers);
  const persistedReducer = persistReducer(persistConfig, rootReducers);
  const store = createStore(persistedReducer, applyMiddleware(...middleware));
  const persistor = persistStore(store);
  return { store, persistor };
}
