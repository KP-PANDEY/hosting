const axios = require('axios').default;
export function CallApiForViewStudent(data) {
    return axios.post('http://localhost:3010/ViewStudent',data)
}