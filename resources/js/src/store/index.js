import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducers from './root.reducers';
import { createLogger } from 'redux-logger';
import { rootSaga } from './root.sagas';

const initStore = () => {
  const logger = createLogger()
  const sagaMiddleware = createSagaMiddleware()
  const store = createStore(
    reducers,
    applyMiddleware(logger, sagaMiddleware),
  )
  sagaMiddleware.run(rootSaga)
  return store
}

export { initStore };