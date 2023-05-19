import React from "react";
import johnDoe from "../res/johnDoe.jpg"


export const initialContactList = [
    {
        id: 1,
        phoneNumber: '1234567890',
        name: 'John Doe',
        avatar: johnDoe,
        messageHistory: [
            { id: 1, content: 'Hey, how are you?', sender: 'Me', time: '2023-05-18T12:30:00' },
            { id: 2, content: 'Im doing great brother', sender: "John Doe", time: '2023-05-18T12:32:00' },
            { id: 3, content: 'Actually I am a programmed-moch-input-man, which makes me feel very sad', sender: "John Doe", time: '2023-05-18T12:38:00' },
            { id: 4, content: 'But atleast we can fit very long messages here!', sender: "John Doe", time: '2023-05-18T12:38:23' },
            { id: 5, content: 'Like this:', sender: "John Doe", time: '2023-05-18T12:39:01' },
            { id: 6, content: 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',
                sender: "John Doe", time: '2023-05-18T12:48:00' },
            { id: 7, content: 'Bro wtf I just asked how you doin', sender: "Me", time: '2023-05-19T02:14:00' },
            { id: 8, content: 'And you can even scroll too! Just try it', sender: "John Doe", time: '2023-05-19T14:37:22' },
            { id: 9, content: 'Man Im out of this dialogue bruh', sender: "Me", time: '2023-05-19T14:39:22' },
            { id: 10, content: 'Player Select 1337', sender: "John Doe", time: '2023-05-19T14:52:29' },
        ]
    },
];
