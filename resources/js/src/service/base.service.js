import axios from 'axios'

export class BaseService {

  /**
   *
   */
  select(path, params) {
    return axios.get(path, { params })
      .then((response) => {
        return response.isSuccess
          ? Promise.resolve(response.data)
          : Promise.reject(response.error)
      })
      .catch((error) => {
        return Promise.reject(error)
      })
  }
  post(path, data) {
    return axios.post(path, data, {headers: {
      'Content-Type': 'application/json',
    }})
      .then((response) => {
        return response.isSuccess
          ? Promise.resolve(response.data)
          : Promise.reject(response.error)
      })
      .catch((error) => {
        return Promise.reject(error)
      })
  }
  delete(path, params) {
    return axios.delete(this.getPath(path), { params })
      .then((response) => {
        return response.isSuccess
          ? Promise.resolve(response.data)
          : Promise.reject(response.error)
      })
      .catch((error) => {
        return Promise.reject(error)
      })
  }
}