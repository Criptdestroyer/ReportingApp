import xhr from './axios'

import {
  URL_LOGIN,
  URL_REGISTER,
} from '../../Configs/Api'

export const postLogin = (data) => {
  return xhr(URL_LOGIN, 'POST', data)
}
export const postRegister = (data) => {
  return xhr(URL_REGISTER, 'POST', data)
}
