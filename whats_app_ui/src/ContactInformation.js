import React, { useState } from "react";
import johnDoe from "./res/johnDoe.jpg"


export const initialContactList = [
    {
        id: 1,
        phoneNumber: '1234567890',
        name: 'John Doe',
        avatar: johnDoe,
        messageHistory: [
            { id: 1, content: 'Hey, how are you?', sender: 'Me', time: '2023-05-18T12:30:00' },
            { id: 2, content: 'Im doing great, thaAAAAAAAAAAAAAAAAAAAAAAAAAAaaaaaaaaaaanks!', sender: "John Doe", time: '2023-05-18T12:32:00' },
            { id: 2, content: 'Im doing great, thaAAAAAAAAAAAAAAAAAAAAAAAAAAaaaaaaaaaaanks!', sender: "John Doe", time: '2023-05-18T12:32:00' },
            { id: 2, content: 'Im doing great, thaAAAAAAAAAAAAAAAAAAAAAAAAAAaaaaaaaaaaanks!', sender: "John Doe", time: '2023-05-18T12:32:00' },
            { id: 2, content: 'Im doing great, thaAAAAAAAAAAAAAAAAAAAAAAAAAAaaaaaaaaaaanks!', sender: "John Doe", time: '2023-05-18T12:32:00' },
            { id: 2, content: 'Im doing great, thaAAAAAAAAAAAAAAAAAAAAAAAAAAaaaaaaaaaaanks!', sender: "John Doe", time: '2023-05-18T12:32:00' },
            { id: 2, content: 'Im doing great, thaAAAAAAAAAAAAAAAAAAAAAAAAAAaaaaaaaaaaanks!', sender: "John Doe", time: '2023-05-18T12:32:00' },
            { id: 2, content: 'Im doing great, thaAAAAAAAAAAAAAAAAAAAAAAAAAAaaaaaaaaaaanks!', sender: "John Doe", time: '2023-05-18T12:32:00' },
            { id: 2, content: 'Im doing great, thaAAAAAAAAAAAAAAAAAAAAAAAAAAaaaaaaaaaaanks!', sender: "John Doe", time: '2023-05-18T12:32:00' },
            { id: 2, content: 'Im doing great, thaAAAAAAAAAAAAAAAAAAAAAAAAAAaaaaaaaaaaanks!', sender: "John Doe", time: '2023-05-18T12:32:00' },
            { id: 2, content: 'Im doing great, thaAAAAAAAAAAAAAAAAAAAAAAAAAAaaaaaaaaaaanks!', sender: "John Doe", time: '2023-05-18T12:32:00' },
            { id: 2, content: 'Im doing great, thaAAAAAAAAAAAAAAAAAAAAAAAAAAaaaaaaaaaaanks!', sender: "John Doe", time: '2023-05-18T12:32:00' },
            { id: 2, content: 'Im doing great, thaAAAAAAAAAAAAAAAAAAAAAAAAAAaaaaaaaaaaanks!', sender: "John Doe", time: '2023-05-18T12:32:00' },
            { id: 2, content: 'Im doing great, thaAAAAAAAAAAAAAAAAAAAAAAAAAAaaaaaaaaaaanks!', sender: "John Doe", time: '2023-05-18T12:32:00' },
            { id: 2, content: 'Im doing great, thaAAAAAAAAAAAAAAAAAAAAAAAAAAaaaaaaaaaaanks!', sender: "John Doe", time: '2023-05-18T12:32:00' },
            { id: 2, content: 'Im doing great, thaAAAAAAAAAAAAAAAAAAAAAAAAAAaaaaaaaaaaanks!', sender: "John Doe", time: '2023-05-18T12:32:00' },
            { id: 2, content: 'Im doing great, thaAAAAAAAAAAAAAAAAAAAAAAAAAAaaaaaaaaaaanks!', sender: "John Doe", time: '2023-05-18T12:32:00' },
            { id: 2, content: 'Im doing great, thaAAAAAAAAAAAAAAAAAAAAAAAAAAaaaaaaaaaaanks!', sender: "John Doe", time: '2023-05-18T12:32:00' },
        ]
    },

    {   id: 2,
        phoneNumber: 'unknown',
        name: 'Anonymous',
        messageHistory: [
            { id: 1, content: 'I know something', sender: "Anonymous", time: '2022-05-18T18:39:00' },]
    },
    {   id: 2,
        phoneNumber: 'unknown',
        name: 'Anonymous',
        messageHistory: [
            { id: 1, content: 'I know something', sender: "Anonymous", time: '2022-05-18T18:39:00' },]
    },
    {   id: 2,
        phoneNumber: 'unknown',
        name: 'Anonymous',
        messageHistory: [
            { id: 1, content: 'I know something', sender: "Anonymous", time: '2022-05-18T18:39:00' },]
    },
    {   id: 2,
        phoneNumber: 'unknown',
        name: 'Anonymous',
        messageHistory: [
            { id: 1, content: 'I know something', sender: "Anonymous", time: '2022-05-18T18:39:00' },]
    },
    {   id: 2,
        phoneNumber: 'unknown',
        name: 'Anonymous',
        messageHistory: [
            { id: 1, content: 'I know something', sender: "Anonymous", time: '2022-05-18T18:39:00' },]
    },
    {   id: 2,
        phoneNumber: 'unknown',
        name: 'Anonymous',
        messageHistory: [
            { id: 1, content: 'I know something', sender: "Anonymous", time: '2022-05-18T18:39:00' },]
    },
    {   id: 2,
        phoneNumber: 'unknown',
        name: 'Anonymous',
        messageHistory: [
            { id: 1, content: 'I know something', sender: "Anonymous", time: '2022-05-18T18:39:00' },]
    },
    {   id: 2,
        phoneNumber: 'unknown',
        name: 'Anonymous',
        messageHistory: [
            { id: 1, content: 'I know something', sender: "Anonymous", time: '2022-05-18T18:39:00' },]
    },
    {   id: 2,
        phoneNumber: 'unknown',
        name: 'Anonymous',
        messageHistory: [
            { id: 1, content: 'I know something', sender: "Anonymous", time: '2022-05-18T18:39:00' },]
    },
    {   id: 2,
        phoneNumber: 'unknown',
        name: 'Anonymous',
        messageHistory: [
            { id: 1, content: 'I know something', sender: "Anonymous", time: '2022-05-18T18:39:00' },]
    },
    {   id: 2,
        phoneNumber: 'unknown',
        name: 'Anonymous',
        messageHistory: [
            { id: 1, content: 'I know something', sender: "Anonymous", time: '2022-05-18T18:39:00' },]
    },
    {   id: 2,
        phoneNumber: 'unknown',
        name: 'Anonymous',
        messageHistory: [
            { id: 1, content: 'I know something', sender: "Anonymous", time: '2022-05-18T18:39:00' },]
    },
    {   id: 2,
        phoneNumber: 'unknown',
        name: 'Anonymous',
        messageHistory: [
            { id: 1, content: 'I know something', sender: "Anonymous", time: '2022-05-18T18:39:00' },]
    },
    {   id: 2,
        phoneNumber: 'unknown',
        name: 'Anonymous',
        messageHistory: [
            { id: 1, content: 'I know something', sender: "Anonymous", time: '2022-05-18T18:39:00' },]
    },
    {   id: 2,
        phoneNumber: 'unknown',
        name: 'Anonymous',
        messageHistory: [
            { id: 1, content: 'I know something', sender: "Anonymous", time: '2022-05-18T18:39:00' },]
    },
];

export function useContactList() {
    const [contactList, setContactList] = useState(initialContactList);
    return [contactList, setContactList];
}
