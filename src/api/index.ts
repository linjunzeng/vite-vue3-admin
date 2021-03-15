import { fetch } from '@/plugins/axios'

export function getList( params: any ) {
  return fetch('/vue-admin-template/table/list', params)
}
