import { ApiTokenInstance, IdInstance } from "../auth-component/AuthContext";
import axios from "axios";

export const sendMessage = (contact, message) => {
    const phoneNumber = contact.phoneNumber;
    const url = `https://api.green-api.com/waInstance${IdInstance}/sendMessage/${ApiTokenInstance}`;

    console.log(contact)
    console.log(phoneNumber, url, message)
    const payload = {
        chatId: `${phoneNumber}@c.us`,
        message: message,
    };

    const headers = {
        "Content-Type": "application/json",
    };

    axios
        .post(url, payload, { headers })
        .then((response) => {
            const newMessage = {
                id: contact.messageHistory ? contact.messageHistory.length + 1 : 1,
                content: message,
                sender: "Me",
                time: new Date().toISOString(),
            };
            //appendMessageToContact(contact.id, newMessage);
        })
        .catch((error) => {
            console.error(error);
        });
};
