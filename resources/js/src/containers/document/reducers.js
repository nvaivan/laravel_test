import { FileReaderState } from './state'
import { FileReaderTypes } from './types';
import ActivityStatus from "../../common/enum/activity";

const initialFileReaderState = new FileReaderState();

export const fileReaderReducer = (state = initialFileReaderState, action) => {
  switch (action.type) {
    case FileReaderTypes.FETCH_FILE_READER.LOADING:
      return { ...state,
        activityStatus: ActivityStatus.Loading,
        error: null }
    case FileReaderTypes.FETCH_FILE_READER.SUCCESS:
      return { ...state, fileReaders: action.payload,
        activityStatus: ActivityStatus.Loaded,
        error: null }
    case FileReaderTypes.FETCH_FILE_READER.FAILURE:
      return { ...state, activityStatus: ActivityStatus.Loaded,
        error: null }
    case FileReaderTypes.FETCH_DETAIL.LOADING:
      return { ...state, fileReader: {},
        activityStatus: ActivityStatus.Loading,
        error: null }
    case FileReaderTypes.FETCH_DETAIL.SUCCESS:
      return { ...state, fileReader: action.payload,
        activityStatus: ActivityStatus.Loaded,
        errorDetail: false,
        error: null }
    case FileReaderTypes.FETCH_DETAIL.FAILURE:
      return { ...state, activityStatus: ActivityStatus.Loaded,
        errorDetail: true }
    case FileReaderTypes.UPLOAD_FILE.LOADING:
      return { ...state,
        activityStatus: ActivityStatus.Loading,
        error: null }
    case FileReaderTypes.UPLOAD_FILE.SUCCESS:
      return { ...state,
        activityStatus: ActivityStatus.Loaded,
        error: null }
    case FileReaderTypes.UPLOAD_FILE.FAILURE:
      return { ...state, activityStatus: ActivityStatus.Loaded,
        error: action.payload }
    default:
      return state;
  }
}