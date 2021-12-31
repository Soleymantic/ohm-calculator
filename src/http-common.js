import axios from "axios";

export default axios.create({
    baseURL: "https://ohmcalc-admin.herokuapp.com/",
    headers: {
        "Content-type": "application/json"
    }
});
