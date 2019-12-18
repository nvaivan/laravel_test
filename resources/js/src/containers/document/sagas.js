import { takeLatest, put } from "redux-saga/effects";
import ActivityStatus from '../../common/enum/activity';
import { FileReaderService } from './services';
import { fileDocumentActions } from './actions';
import { FileReaderTypes } from './types';

const service = new FileReaderService

export function* fetchFileReader(action) {
  try {
    yield put(fileDocumentActions.loadingActivity(ActivityStatus.Loading,
      FileReaderTypes.FETCH_FILE_READER.LOADING))
      
    const result = yield service.fetchFileReader(action.payload);
    yield put(fileDocumentActions.receivedFileReader(result))
  } catch(ex) {
    console.log('error');
    yield put(fileDocumentActions.failureFileReader());
  }
}
export function* watchfetchFileReader() {
  yield takeLatest(FileReaderTypes.FETCH_FILE_READER.ROOT, fetchFileReader)
}

export function* fetchDetail(action) {
  try {
    yield put(fileDocumentActions.loadingActivity(ActivityStatus.Loading,
      FileReaderTypes.FETCH_DETAIL.LOADING))
      
    const result = yield service.fetchDetail(action.payload);
    if (result.id) {
      yield put(fileDocumentActions.receivedDetail(result))
    } else {
      yield put(fileDocumentActions.failureDetail());
    }
    
  } catch(ex) {
    console.log('error');
    yield put(fileDocumentActions.failureDetail());
  }
}
export function* watchfetchDetail() {
  yield takeLatest(FileReaderTypes.FETCH_DETAIL.ROOT, fetchDetail)
}

export function* uploadFile(action) {
  try {
    yield put(fileDocumentActions.loadingActivity(ActivityStatus.Loading,
      FileReaderTypes.UPLOAD_FILE.LOADING))
      
    const result = yield service.uploadFile(action.payload);
    if (result && result[0] !== 'message') {
      yield put(fileDocumentActions.receivedUploadFile(result))
      yield put(fileDocumentActions.loadingActivity(null, FileReaderTypes.FETCH_FILE_READER.ROOT));
    } else {
      yield put(fileDocumentActions.failureUploadFile(result));
    }
  } catch(ex) {
    console.log(ex);
    yield put(fileDocumentActions.failureUploadFile(ex));
  }
}
export function* watchUploadFile() {
  yield takeLatest(FileReaderTypes.UPLOAD_FILE.ROOT, uploadFile)
}

export function* searchFileReader(action) {
  try {
    yield put(fileDocumentActions.loadingActivity(ActivityStatus.Loading,
      FileReaderTypes.SEARCH_FILE_READER.LOADING))
      
    const result = yield service.searchFileReader(action.payload);
    yield put(fileDocumentActions.receivedFileReader(result))
  } catch(ex) {
    console.log('error');
    yield put(fileDocumentActions.failuresearchFileReader());
  }
}
export function* watchsearchFileReader() {
  yield takeLatest(FileReaderTypes.SEARCH_FILE_READER.ROOT, searchFileReader)
}