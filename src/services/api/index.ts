import"dotenv/config";
import axios from "axios";

const spaceUrl = process.env.SPACEX_API_URL;

export const apiSpace = axios.create({
    baseURL: spaceUrl,
    timeout: 10000,
    headers: {'X-Custom-Header': 'foobar'}
});