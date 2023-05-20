import { useState } from "react";
import { initialContactList } from "./ContactInformation";

export function useContactList() {
    const [contactList, setContactList] = useState([...initialContactList]);

    const updateContactList = (newContactList) => {
        setContactList([...newContactList]);
    };

    return [contactList, updateContactList];
}
