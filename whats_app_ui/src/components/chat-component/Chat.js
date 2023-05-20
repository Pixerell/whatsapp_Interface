import "./Chat.css"
import Avatar from "@mui/material/Avatar";
import {Icon, Input, Typography} from "@mui/material";
import Message from "./message-component/MessageItem";
import SendIcon from '@mui/icons-material/Send';
import {useEffect, useState} from "react";
import {deleteNotification, receiveMessage, sendMessage} from "./SendMessage";
import {appendMessageToContact, appendNewContact} from "../../helpers/appendMessageToContact";
import CallReceivedIcon from '@mui/icons-material/CallReceived';

export default function Chat({ contact, onContactListUpdate, contactList, setContactList }) {
    const [msgInput, setMsgInput] = useState("");
    const foundContact = contactList.find(c => c.id === contact.id);
    const [messageHistory, setMessageHistory] = useState(foundContact.messageHistory);


    const handleSendMessage = async () => {

        if (!msgInput || msgInput.trim() === "") {
            alert("Enter a valid message!")
            return;
        }

        const newMessage = {
            id: foundContact.messageHistory ? foundContact.messageHistory.length + 1 : 1,
            content: msgInput.trim(),
            sender: "Me",
            time: new Date().toISOString(),
        };
        try {
            await sendMessage(foundContact, msgInput.trim());
            const updatedContactList = appendMessageToContact(
                contactList,
                foundContact.id,
                newMessage
            );
            setContactList(updatedContactList);
            onContactListUpdate(updatedContactList);
        } catch (error) {
            alert("Failed to send message - maybe the number doesn't exist, or your API instance has expired");

        }
    };


        const handleReceiveMessage = async () => {

            try {
                const receivedMessage = await receiveMessage();
                console.log(receivedMessage)
                let phoneNumber = '';
                let msgContents = '';
                let senderName = '';


                 if (receivedMessage.body.senderData) {
                    phoneNumber = receivedMessage.body.senderData.chatId.split("@")[0].toString();
                    senderName = receivedMessage.body.senderData.chatName

                    if (receivedMessage.body.messageData.typeMessage === "textMessage") {
                        msgContents = receivedMessage.body.messageData.textMessageData.textMessage;
                    }
                    else {
                        msgContents = receivedMessage.body.messageData.extendedTextMessageData.text;
                    }

                } else {
                    phoneNumber = receivedMessage.chatId.split("@")[0].toString();
                    msgContents = receivedMessage.textMessage;
                    senderName = receivedMessage.senderName;
                }

                const findUnknown = contactList.find(c => c.phoneNumber === phoneNumber);

                if (!findUnknown) {
                    const newContact = appendNewContact(contactList, phoneNumber);
                    const addContactToList = [...contactList, newContact];

                    const updatedFoundContact = addContactToList.find((c) => c.id === newContact.id);

                    const TMessage = {
                        id: updatedFoundContact.messageHistory ? updatedFoundContact.messageHistory.length + 1 : 1,
                        content: msgContents,
                        sender: senderName,
                        time: new Date(receivedMessage.body.timestamp * 1000).toISOString(),
                    };

                    if (updatedFoundContact.phoneNumber === phoneNumber) {

                        const updatedContactList = appendMessageToContact(
                            addContactToList,
                            updatedFoundContact.id,
                            TMessage
                        );
                        setContactList(updatedContactList);
                        onContactListUpdate(updatedContactList);
                        const updatedMessageHistory = [...contact.messageHistory, TMessage];
                        return {...contact, messageHistory: updatedMessageHistory};
                    } else {
                        alert(" seems like a new contact was not found")
                        setContactList(addContactToList);
                        onContactListUpdate(addContactToList);
                    }

                }

                else if (findUnknown) {
                    const updatedContactList = contactList.map(contact => {
                        if (contact.phoneNumber === phoneNumber) {
                            const TMessage = {
                                id: findUnknown.messageHistory ? findUnknown.messageHistory.length + 1 : 1,
                                content: msgContents,
                                sender: findUnknown.name,
                                time: new Date().toISOString(),
                            };

                            const updatedMessageHistory = [...contact.messageHistory, TMessage];
                            return {...contact, messageHistory: updatedMessageHistory};
                        }
                        return contact;
                    });
                    setContactList(updatedContactList);
                    onContactListUpdate(updatedContactList);
                }

                await deleteNotification(receivedMessage.receiptId)

            }
            catch (error) {
                alert("Failed to receive a message");
                console.error(error);

            }

        };

    useEffect(() => {
        setMessageHistory(foundContact.messageHistory);
    }, [foundContact.messageHistory]);

    return (
        <div className="Chatbg">
            <div className="userInfo">
                <div className="chatHead">
                    <Avatar className="avatar chatAvatar" alt="Profile Image" src={foundContact.avatar}/>
                    <span className="chatName">f
                        <Typography className="HeadName" variant="body1">{foundContact.name}</Typography>
                        <Typography className="SubName" variant="body2">+{foundContact.phoneNumber}</Typography>
                    </span>
                </div>
                <div className="receiveMsgPanel">
                    <Typography className="receiveTxt" variant="body1">Получить сообщение</Typography>
                    <Icon className="sendIcon receiveIcon" onClick={handleReceiveMessage}>
                        <CallReceivedIcon/>
                    </Icon>
                </div>
            </div>
            <div className="chatBody">
                {messageHistory.map((message) => (
                    <Message
                        key={`${message.id}-${messageHistory.length}`} // Update the key prop
                        content={message.content}
                        sender={message.sender}
                        time={message.time}
                    />
                ))}
            </div>
            <div className="chatLower">
                <div className="messageInput">
                    <Input
                        className={`textField`}
                        id="standard-basic"
                        placeholder={"Input Message"}
                        variant="standard"
                        disableUnderline={true}
                        value={msgInput}
                        onChange={(e) => {
                            setMsgInput(e.target.value);
                        }}

                    />
                </div>
                <Icon className="sendIcon" onClick={handleSendMessage}>
                    <SendIcon/>
                </Icon>
            </div>
        </div>
    )
}

// sendMessage(contact, msgInput, updatedContactList);
