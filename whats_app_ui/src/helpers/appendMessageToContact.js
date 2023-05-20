export function appendMessageToContact(contactList, contactId, newMessage) {
    return contactList.map((contact) => {
        if (contact.id === contactId) {
            return {
                ...contact,
                messageHistory: [...contact.messageHistory, newMessage],
            };
        } else {
            return contact;
        }
    });
}

export const appendNewContact = (contactList, phoneNumberInput) => {
    const existingContact = contactList.find((contact) => contact.phoneNumber === phoneNumberInput);
    if (existingContact) {
        alert("Phone number already exists in the contact list.");
        return;
    }
    const newContact = {
        id: contactList.length + 1,
        phoneNumber: phoneNumberInput,
        name: phoneNumberInput,
        avatar: "",
        messageHistory: [],
    };

    return newContact;
};
