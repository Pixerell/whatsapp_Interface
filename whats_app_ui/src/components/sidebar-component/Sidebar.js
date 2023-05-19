import "./Sidebar.css"
import profileAvatarDefault from "../../res/profileDefault.jpg"
import Avatar from '@mui/material/Avatar';
import {Icon, Paper, Stack, TextField} from "@mui/material";
import LogoutIcon from '@mui/icons-material/Logout';
import ContactItem from "./contact-component/ContactItem";
import {useContactList} from "../../helpers/useContactList";
import {useContext, useState} from "react";
import {AuthContext} from "../auth-component/AuthContext";
import PhoneInTalkSharpIcon from '@mui/icons-material/PhoneInTalkSharp';

export default function Sidebar({onContactSelect }) {

    const handleContactSelect = (contact) => {
        onContactSelect(contact, contactList); // Pass the selected contact and the current contact list
    };



    const { updateIsAuthorized } = useContext(AuthContext);

    const handleLogout = () => {
        updateIsAuthorized(false);
    };

    const [contactList, updateContactList] = useContactList();
    const [phoneNumberInput, setPhoneNumberInput] = useState("");

    const addNewContact = () => {
        const existingContact = contactList.find(
            (contact) => contact.phoneNumber === phoneNumberInput
        );
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

        const updatedContactList = [...contactList, newContact];
        updateContactList(updatedContactList);
        setPhoneNumberInput("");
        onContactSelect(newContact, updatedContactList); // Pass the updated contactList as an argument
    };

    /*
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
*/

    console.log(contactList, " - oh please father in heaven")

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
                    {contactList.map((contact) => (
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
                <Icon className="logoutIcoWrap phoneIcon" onClick={addNewContact}>
                    <PhoneInTalkSharpIcon/>
                </Icon>
            </div>
        </Paper>
    )
}