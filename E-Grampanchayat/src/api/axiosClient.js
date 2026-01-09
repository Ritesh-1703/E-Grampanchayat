import axios from "axios";

const axiosClient = axios.create({
    baseURL: "https://e-grampanchayat-jufy.onrender.com",
    headers: {
        "Content-Type": "application/json",
    },
});

export default axiosClient;
