import { useState } from "react";
import { initialContactList } from "./ContactInformation";

export function useContactList() {
    const [contactList, setContactList] = useState(initialContactList);

    const updateContactList = (newContactList) => {
        console.log(newContactList, " - in update contactlist");
        setContactList(newContactList);
    };

    const appendMessageToContact = (contactId, newMessage) => {
        console.log(contactId, newMessage, " check append msg params")
        setContactList((prevContactList) => {
            console.log(prevContactList, " - prevCList"); // Add this line
            const updatedContactList = prevContactList.map((contact) => {
                if (contact.id === contactId) {
                    return {
                        ...contact,
                        messageHistory: [...contact.messageHistory, newMessage],
                    };
                }
                return contact;
            });
            console.log(updatedContactList, " - in append message");
            return updatedContactList;
        });
    };

    return [contactList, updateContactList, appendMessageToContact];
}
