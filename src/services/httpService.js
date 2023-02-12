import Axios from 'axios';


const BASE_URL = process.env.NODE_ENV === 'production'
    ? '/api/' 
    : '//localhost:3000/api/'


var axios = Axios.create({
    withCredentials: true
});

export default {
    get(endpoint, criteria){
        return ajax(endpoint, 'GET', {params:criteria})
    },
    post(endpoint, data){
        return ajax(endpoint, 'POST', {data})
    },
    put(endpoint, data){
        return ajax(endpoint, 'PUT', {data})
    },
    delete(endpoint, data){
        return ajax(endpoint, 'DELETE', {data})
    }
}


async function ajax(endpoint, method='get', {data=null, params}) {
    try {
        const res = await axios({
            url: `${BASE_URL}${endpoint}`,
            method,
            data,
            params
        })
        return res.data;
    } catch (err) {
        // if (err.response.status === 401) {
        // }
        console.log(`Had issues ${method}ing to server for '${endpoint}' - `, err)
        throw err;
    }
}

