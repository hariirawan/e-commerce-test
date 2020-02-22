import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-logger";
import logger from "redux-logger";
import reducers from "./reducers";

export default function configureStore() {
  const middleware = applyMiddleware([logger, thunk]);
  const rootReducers = combineReducers(reducers);
  const store = createStore(rootReducers, middleware);
  return store;
}
