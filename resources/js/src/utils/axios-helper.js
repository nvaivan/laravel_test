import { ApiResponse } from "../model/generic/api-response";
import { HttpStatusCode } from "../common/enum/http-status";

export class AxiosHelper {
  static statusValidator(statusCode) {
    return statusCode >= 200 && statusCode <= 503
  }
  static requestInterceptor(config) {
    return config;
  }
  static responseIntercetor(response) {
    switch (response.status) {
      case HttpStatusCode.OK:
        return new ApiResponse(true, { data: response.data });
      case HttpStatusCode.CRREATED:
        return new ApiResponse(true, { data: response.data });
      default:
        return new ApiResponse(false, { error: response.statusText });
    }
  }
  static exceptionHandler(error) {
    console.log(error)
    return error;
  }
}

