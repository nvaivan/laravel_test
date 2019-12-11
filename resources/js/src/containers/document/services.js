import { BaseService } from "../../service/base.service";
import { DocumentUrl } from '../../common/urls/document';

export class FileReaderService extends BaseService {
  /**
   *
   */
  constructor(path) {
    super(path);
  }

  fetchFileReader(param) {
    return super.select(DocumentUrl.Fetch)
      .then((response) => {
       return response
      })
      .catch((error) => {
        console.log(error);
        return Promise.reject(error)
      })
  }

  fetchDetail(param) {
    return super.select(DocumentUrl.Fetch + param)
      .then((response) => {
       return response
      })
      .catch((error) => {
        console.log(error);
        return Promise.reject(error)
      })
  }

  uploadFile(data) {
    return super.post(DocumentUrl.Fetch, data)
      .then((response) => {
       return response
      })
      .catch((error) => {
        console.log(error);
        return Promise.reject(error)
      })
  }
}