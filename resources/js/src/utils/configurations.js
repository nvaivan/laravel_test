import Axios from 'axios'
import { AxiosHelper } from './axios-helper';
import { AppConfig } from '../common/base';

Axios.defaults.baseURL = AppConfig.BaseURL

Axios.interceptors.request.use(
  (config) => AxiosHelper.requestInterceptor(config),
  (error) => AxiosHelper.exceptionHandler(error)
)
Axios.defaults.validateStatus = (statusNumber) => AxiosHelper.statusValidator(statusNumber)
Axios.interceptors.response.use(
  (response) => AxiosHelper.responseIntercetor(response),
  (error) => AxiosHelper.exceptionHandler(error)
)