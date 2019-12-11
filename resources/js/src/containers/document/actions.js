import { RootAction } from "../../store/root.action";
import { FileReaderTypes } from './types';

export class FileDocumentActions extends RootAction {

  fetchFileReader(param, resolve, reject) {
    return { type: FileReaderTypes.FETCH_FILE_READER.ROOT, payload: param, meta: { resolve, reject } }
  }
  receivedFileReader(payload) {
    return { type: FileReaderTypes.FETCH_FILE_READER.SUCCESS, payload }
  }
  failureFileReader(payload) {
    return { type: FileReaderTypes.FETCH_FILE_READER.FAILURE, payload }
  }

  fetchDetail(param, resolve, reject) {
    return { type: FileReaderTypes.FETCH_DETAIL.ROOT, payload: param, meta: { resolve, reject } }
  }
  receivedDetail(payload) {
    return { type: FileReaderTypes.FETCH_DETAIL.SUCCESS, payload }
  }
  failureDetail(payload) {
    return { type: FileReaderTypes.FETCH_DETAIL.FAILURE, payload }
  }

  uploadFile(param, resolve, reject) {
    return { type: FileReaderTypes.UPLOAD_FILE.ROOT, payload: param, meta: { resolve, reject } }
  }
  receivedUploadFile(payload) {
    return { type: FileReaderTypes.UPLOAD_FILE.SUCCESS, payload }
  }
  failureUploadFile(payload) {
    return { type: FileReaderTypes.UPLOAD_FILE.FAILURE, payload }
  }
}

export const fileDocumentActions = new FileDocumentActions