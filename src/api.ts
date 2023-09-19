import axios from 'axios'

enum MethodOptions {
  get = 'get',
  post = 'post',
  put = 'put',
  delete = 'delete'
}

const constructor = () => {
  const baseURL = process.env.BASE_URL
  const apiKey = process.env.API_KEY

  const api = axios.create({
    baseURL,
    headers: {
      'Api-Key': apiKey,
      Accept: 'application/vnd.api+json',
      'Content-Type': 'application/vnd.api+json'
    },
    timeout: 20000 // 20s
  })

  api.interceptors.request.use(
    async config => {
      if (Object.keys(config.headers).includes('Authorization')) {
        return config
      }
      config.headers['Cache-Control'] = 'max-age=90'
      return config
    },
    error => {
      Promise.reject(error)
    }
  )

  const handleCall = (
    method: MethodOptions,
    endpoint: string,
    data?: {},
    options?: {}
  ) =>
    api[method](endpoint, data, options)
      .then(res => res.data)
      .catch(error => {
        throw {
          message: error.response.data.errors[0],
          status: error.response.status
        }
      })

  //PROJECTS

  const getProjects = () => handleCall(MethodOptions.get, 'v1/projects')

  return {
    defaults: api,
    getProjects
  }
}

const api = constructor()
export { api }
