import xhr from './axios'

import {
  URL_LOGIN,
} from '../../Configs/Api'

export const postLogin = (data) => {
  return xhr(URL_LOGIN, 'POST', data)
}
