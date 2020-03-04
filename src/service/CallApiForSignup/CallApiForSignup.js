
const axios = require('axios').default;
export function CallApiForSignup(data) {
    return axios.post('http://localhost:3010/get',data)
}