import { Axios } from "axios";

const api = Axios.create({
    baseUrl: "http://www.mocky.io/v2/5bc3b9cc30000012007586b7"
})

console.log(api);






export default api;

