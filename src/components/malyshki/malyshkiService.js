import axios from "axios";

export default class MalyshkiService {
    static getListData() {
        return axios.get('http://localhost:100/api/test.php');
    }
}