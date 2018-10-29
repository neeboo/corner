import request from '../utils/request'
import { RESTFUL } from '../utils/constant'

export function getUsers() {
  return request(`${RESTFUL}/getUsers`)
}
