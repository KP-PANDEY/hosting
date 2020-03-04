const axios = require('axios').default;
export function CallApiForSignin(data) {
    return axios.post('http://localhost:3010/show', data)
}