import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:2900/';

const AUTH_TOKEN = localStorage.getItem('token');
axios.defaults.headers.common['authorization'] = AUTH_TOKEN;
axios.defaults.headers.post['Content-Type'] = "application/json"
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

export const callApi = async (method, url, config = {}) => {
    return axios[method](url, config)
        .then(function (response) {
            console.log(response)
            return response
        })
        .catch(function (error) {
            return error
        });
}
