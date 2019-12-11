import { combineReducers, Reducer } from 'redux'

import { fileReaderReducer } from '../containers/document/reducers';

const reducers = combineReducers({
  fileReaderReducer,
})

export default reducers;
