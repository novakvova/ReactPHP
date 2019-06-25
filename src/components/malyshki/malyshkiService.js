import axios from "axios";

export default class MalyshkiService {
    static createNewPost(model) {
        return axios.post('http://localhost:100/api/test.php', model)
    };
    static getListData() {
        return axios.get('http://localhost:100/api/test.php');
    }
}