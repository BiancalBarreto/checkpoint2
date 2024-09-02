import axios from "axios";

const authClient = axios.create({
    baseURL: "https://dummyjson.com/auth/login"
})

export default authClient;