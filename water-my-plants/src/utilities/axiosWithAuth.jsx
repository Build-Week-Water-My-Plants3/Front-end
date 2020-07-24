import axios from 'axios';
import { getToken } from "./index.js";


export const axiosWithAuth = () => {
    const token = getToken();

    return axios.create({

        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
        },
        baseURL: "https://med-cabinet-backend.herokuapp.com",
    });
};

