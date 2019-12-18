import { all, fork } from "redux-saga/effects";

import { watchfetchFileReader, watchUploadFile, watchfetchDetail, watchsearchFileReader } from '../containers/document/sagas'

export function* rootSaga() {
  yield all([
    fork(watchfetchFileReader),
    fork(watchUploadFile),
    fork(watchfetchDetail),
    fork(watchsearchFileReader),
  ])
}