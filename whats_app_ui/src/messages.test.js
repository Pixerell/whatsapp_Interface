import '@testing-library/jest-dom';
import {appendMessageToContact, appendNewContact} from "./helpers/appendMessageToContact";

describe('appendMessageToContact', () => {
    it('should append a new message to the contact message history', () => {
        const contactList = [
            { id: 1, messageHistory: [] },
            { id: 2, messageHistory: [] },
        ];
        const contactId = 1;
        const newMessage = 'Hello!';

        const updatedContactList = appendMessageToContact(contactList, contactId, newMessage);

        expect(updatedContactList).toEqual([
            { id: 1, messageHistory: ['Hello!'] },
            { id: 2, messageHistory: [] },
        ]);
    });

    it('should not modify the contact list if the contact is not found', () => {
        const contactList = [
            { id: 1, messageHistory: [] },
            { id: 2, messageHistory: [] },
        ];
        const contactId = 3;
        const newMessage = 'Hello!';

        const updatedContactList = appendMessageToContact(contactList, contactId, newMessage);

        expect(updatedContactList).toEqual(contactList);
    });
});

describe('appendNewContact', () => {
    it('should append a new contact to the contact list', () => {
        const contactList = [
            { id: 1, phoneNumber: '123', name: 'John', avatar: '', messageHistory: [] },
            { id: 2, phoneNumber: '456', name: 'Jane', avatar: '', messageHistory: [] },
        ];
        const phoneNumberInput = '789';

        const newContact = appendNewContact(contactList, phoneNumberInput);

        expect(newContact).toEqual({
            id: 3,
            phoneNumber: '789',
            name: '789',
            avatar: '',
            messageHistory: [],
        });
    });

    it('should show an alert and return undefined if the phone number already exists', () => {
        const contactList = [
            { id: 1, phoneNumber: '123', name: 'John', avatar: '', messageHistory: [] },
            { id: 2, phoneNumber: '456', name: 'Jane', avatar: '', messageHistory: [] },
        ];
        const phoneNumberInput = '123';

        // Mock the alert function
        window.alert = jest.fn();

        const newContact = appendNewContact(contactList, phoneNumberInput);

        expect(newContact).toBeUndefined();
        expect(window.alert).toHaveBeenCalledWith('Phone number already exists in the contact list.');
    });
});

describe('appendMessageToContact', () => {
    it('should append a new message to the contact message history', () => {
        const contactList = [
            {
                id: 1,
                phoneNumber: '1234567890',
                name: 'John Doe',
                avatar: 'johnDoe',
                messageHistory: [
                    { id: 1, content: 'Hey, how are you?', sender: 'Me', time: '2023-05-18T12:30:00' },
                ],
            },
            {
                id: 2,
                phoneNumber: '9876543210',
                name: 'Jane Smith',
                avatar: 'janeSmith',
                messageHistory: [
                    { id: 1, content: 'Hello!', sender: 'Jane', time: '2023-05-18T12:31:00' },
                ],
            },
        ];
        const contactId = 1;
        const newMessage = {
            id: 2,
            content: 'How have you been?',
            sender: 'Me',
            time: '2023-05-18T12:32:00',
        };

        const updatedContactList = appendMessageToContact(contactList, contactId, newMessage);

        expect(updatedContactList).toEqual([
            {
                id: 1,
                phoneNumber: '1234567890',
                name: 'John Doe',
                avatar: 'johnDoe',
                messageHistory: [
                    { id: 1, content: 'Hey, how are you?', sender: 'Me', time: '2023-05-18T12:30:00' },
                    { id: 2, content: 'How have you been?', sender: 'Me', time: '2023-05-18T12:32:00' },
                ],
            },
            {
                id: 2,
                phoneNumber: '9876543210',
                name: 'Jane Smith',
                avatar: 'janeSmith',
                messageHistory: [
                    { id: 1, content: 'Hello!', sender: 'Jane', time: '2023-05-18T12:31:00' },
                ],
            },
        ]);
    });

    it('should not modify the contact list if the contact is not found', () => {
        const contactList = [
            {
                id: 1,
                phoneNumber: '1234567890',
                name: 'John Doe',
                avatar: 'johnDoe',
                messageHistory: [
                    { id: 1, content: 'Hey, how are you?', sender: 'Me', time: '2023-05-18T12:30:00' },
                ],
            },
            {
                id: 2,
                phoneNumber: '9876543210',
                name: 'Jane Smith',
                avatar: 'janeSmith',
                messageHistory: [
                    { id: 1, content: 'Hello!', sender: 'Jane', time: '2023-05-18T12:31:00' },
                ],
            },
        ];
        const contactId = 3;
        const newMessage = {
            id: 2,
            content: 'How have you been?',
            sender: 'Me',
            time: '2023-05-18T12:32:00',
        };

        const updatedContactList = appendMessageToContact(contactList, contactId, newMessage);

        expect(updatedContactList).toEqual(contactList);
    });
});
