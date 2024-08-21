import axios from "axios";

const fetcher = axios.create({
    baseURL: "http://localhost:8080/",
    headers: {},
    timeout: 30000
});

fetcher.interceptors.request.use((config) => {
    // console.log("config: ", config)
    return config;
});

fetcher.interceptors.response.use((response) => {
    // console.log("response: ", response)
    return response
})

export default fetcher