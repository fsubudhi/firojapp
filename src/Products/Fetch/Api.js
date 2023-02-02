import axios from "axios";

const Clients = axios.create({
    baseURL:"https://dummyjson.com",
});

export default Clients