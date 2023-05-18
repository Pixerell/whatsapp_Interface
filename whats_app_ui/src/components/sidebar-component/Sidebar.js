import "./Sidebar.css"
import profileAvatarDefault from "../../res/profileDefault.jpg"
import Avatar from '@mui/material/Avatar';
import {Paper, Stack} from "@mui/material";
import ContactItem from "./contact-component/ContactItem";
import {initialContactList} from "../../ContactInformation";

export default function Sidebar({onContactSelect }) {


    const sortedContactList = initialContactList.sort((a, b) => {
        const lastMessageA = a.messageHistory[a.messageHistory.length - 1];
        const lastMessageB = b.messageHistory[b.messageHistory.length - 1];

        return new Date(lastMessageB.time) - new Date(lastMessageA.time);
    });

    const handleContactSelect  = (contact) => {
        console.log("AAAA")
        onContactSelect(contact);
    };
    return (
        <Paper className="sideBarBg">
            <div className="profilePanel">
                <Avatar className="avatar" alt="Profile Image" src={profileAvatarDefault}/>
                <h1 className="title">Chats</h1>
            </div>
            <div className="chatList">
                <Stack className="Stack" spacing={2}>
                    {sortedContactList.map((contact) => (
                        <ContactItem key={contact.id} contact={contact}  onClick={handleContactSelect}/>
                    ))}
                </Stack>
            </div>
        </Paper>
    )
}