import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'fdde376658374ce7ae316ac9c3f92a65'
    }
})