import request from '@/utils/request'

const _URL = 'users'
const _ADMIN_URL = 'admin'
export function admLogin(data) {
    return request({
        url: _ADMIN_URL + '/login',
        method: 'post',
        data
    })
}

export function userList(data) {
    return request({
        url: _URL + '/list',
        method: 'get',
        data
    })
}

export default {
	userLogin,
	userList
}