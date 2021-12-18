import { applyMiddleware, compose, createStore, Middleware } from "redux";
import { createEpicMiddleware } from "redux-observable";
import { createLogger } from "redux-logger";
import { rootReducer, storePreloadState } from "../reducers";
import { rootEpic } from "../epics";
import { isDev } from "../common/appConfig";

const bindMiddleware = (middleware: Middleware[]) => {
  if (isDev) {
    const logger = createLogger({
      collapsed: true,
      diff: true,
    });
    return applyMiddleware(...middleware, logger);
  }
  return applyMiddleware(...middleware);
};

export default function configureStore(initialState = storePreloadState) {
  const epicMiddleware = createEpicMiddleware();
  const composeEnhancers =
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(bindMiddleware([epicMiddleware]))
  );
  epicMiddleware.run(rootEpic);

  return store;
}
