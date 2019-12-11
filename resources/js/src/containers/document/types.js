import { asyncActionType } from '../../utils/method';

export const FileReaderTypes = {
  FETCH_FILE_READER: asyncActionType('FETCH_FILE_READER'),
  FETCH_DETAIL: asyncActionType('FETCH_DETAIL'),
  UPLOAD_FILE: asyncActionType('UPLOAD_FILE'),
}