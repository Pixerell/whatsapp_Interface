import { useState, useEffect } from "react";
import { initialContactList } from "./ContactInformation";

export function useContactList() {
    const [contactList, setContactList] = useState([...initialContactList]);

    const updateContactList = (newContactList) => {
        setContactList([...newContactList]);
    };

    useEffect(() => {
        console.log(contactList, "REAL UPDATED LIST");
    }, [contactList]);

    return [contactList, updateContactList];
}
