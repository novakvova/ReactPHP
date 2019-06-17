import axios from "axios";

export default class MalyshkiService {
    static getListData() {
        return axios.get('https://jsonplaceholder.typicode.com/users');
    }
}