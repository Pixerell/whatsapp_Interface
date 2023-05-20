import { ApiTokenInstance, IdInstance } from "../auth-component/AuthContext";
import axios from "axios";

export const sendMessage = (contact, message) => {
    return new Promise((resolve, reject) => {
        const phoneNumber = contact.phoneNumber;
        const url = `https://api.green-api.com/waInstance${IdInstance}/sendMessage/${ApiTokenInstance}`;

        const payload = {
            chatId: `${phoneNumber}@c.us`,
            message: message,
        };

        const headers = {
            "Content-Type": "application/json",
        };

        axios
            .post(url, payload, { headers })
            .then(response => {
                if (response.status === 200) {
                    resolve();
                } else {
                    reject(new Error("Failed to send message"));
                }
            })
            .catch(error => {
                reject(error);
            });
    });
};


export const receiveMessage = () => {
    return new Promise((resolve, reject) => {
        const url = `https://api.green-api.com/waInstance${IdInstance}/ReceiveNotification/${ApiTokenInstance}`;
        const headers = {};

        axios
            .get(url, { headers })
            .then((response) => {
                resolve(response.data); // Resolve with the response data
            })
            .catch((error) => {
                reject(error);
            });
    });
};

export const deleteNotification = (receiptId) => {
    return axios.delete(`https://api.green-api.com/waInstance${IdInstance}}/DeleteNotification/${ApiTokenInstance}}/${receiptId}`, {
        headers: {},
        data: {}
    })
        .then((response) => {
            console.log(response.data);
        })
        .catch((error) => {
            console.error(error);
        });
};

