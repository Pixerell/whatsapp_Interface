import "./Sidebar.css"
import profileAvatarDefault from "../../res/profileDefault.jpg"
import Avatar from '@mui/material/Avatar';
import {Icon, Paper, Stack, TextField} from "@mui/material";
import LogoutIcon from '@mui/icons-material/Logout';
import ContactItem from "./contact-component/ContactItem";
import {useContext, useState} from "react";
import {AuthContext} from "../auth-component/AuthContext";
import PhoneInTalkSharpIcon from '@mui/icons-material/PhoneInTalkSharp';
import {appendNewContact} from "../../helpers/appendMessageToContact";

export default function Sidebar({ onContactSelect, contactList, setContactList }) {
    const handleContactSelect = (contact) => {
        onContactSelect(contact);
    };

    const { updateIsAuthorized } = useContext(AuthContext);

    const handleLogout = () => {
        updateIsAuthorized(false);
    };

    const [phoneNumberInput, setPhoneNumberInput] = useState("");

    const handleAddNewContact = () => {

        if (!phoneNumberInput || phoneNumberInput.trim() === "") {
            alert("Enter a valid phone number!")
            return;
        }

        const createdContact = appendNewContact(contactList, phoneNumberInput);
        const updatedContactList = [...contactList, createdContact];

        const newContact = {
            ...createdContact,
            messageHistory: []
        };

        setPhoneNumberInput("");
        const updatedFoundContact = updatedContactList.find((c) => c.id === newContact.id);
        setContactList(updatedContactList); // Update the contact list in App.js
        onContactSelect(updatedFoundContact, updatedContactList);
    };


    const sortedContactList = [...contactList].sort((a, b) => {
        const lastMessageA = a.messageHistory[a.messageHistory.length - 1];
        const lastMessageB = b.messageHistory[b.messageHistory.length - 1];

        if (lastMessageA && lastMessageB) {
            return new Date(lastMessageB.time) - new Date(lastMessageA.time);
        } else if (lastMessageA) {
            return -1; // Sort contact without message history at the end
        } else if (lastMessageB) {
            return 1; // Sort contact without message history at the end
        } else {
            return 0; // Preserve the existing order if both contacts have no message history
        }
    });



    return (
        <Paper className="sideBarBg">
            <div className="profilePanel">
                <Avatar className="avatar" alt="Profile Image" src={profileAvatarDefault}/>
                <h1 className="title">Chats</h1>
                <Icon className="logoutIcoWrap" onClick={handleLogout}>
                    <LogoutIcon/>
                </Icon>
            </div>
            <div className="chatList">
                <Stack className="Stack" spacing={2}>
                    {sortedContactList.map((contact) => (
                        <ContactItem key={contact.id} contact={contact}  onClick={handleContactSelect}/>
                    ))}
                </Stack>
            </div>
            <div className="searchPanel">
                <TextField className="phoneField" id="outlined-basic"
                           label="Input a phone number to start a chat" size="small" variant="outlined"
                           inputProps={{
                               maxLength: 15,
                           }}
                           value={phoneNumberInput}
                           onChange={(e) => {
                               const input = e.target.value;
                               const formattedInput = input.replace(/\D/g, "").slice(0, 15);
                               setPhoneNumberInput(formattedInput);
                           }}/>
                <Icon className="logoutIcoWrap phoneIcon" onClick={handleAddNewContact}>
                    <PhoneInTalkSharpIcon/>
                </Icon>
            </div>
        </Paper>
    )
}