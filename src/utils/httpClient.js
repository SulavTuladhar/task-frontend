import axios from "axios";

const http = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    responseType: 'json',
    timeout: 10000,
    timeoutErrorMessage: 'Takes too long for response'
})

const GET = (url) =>{
    return http.get(url)
}

const POST = (url,data) =>{
    return http.post(url,data)
}

const PUT = (url,data) =>{
    return http.put(url,data)
}

const DELETE = (url) =>{
    return http.delete(url)
}

export const httpClient = {
    GET,
    POST,
    PUT,
    DELETE
}