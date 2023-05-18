import './App.css';
import Sidebar from "./components/sidebar-component/Sidebar";
import Chat from "./components/chat-component/Chat";
import {useState} from "react";
import {Typography} from "@mui/material";
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';


function App() {
    const [selectedContact, setSelectedContact] = useState(null);

    const handleContactSelect = (contact) => {
        setSelectedContact(contact);
    };
  return (
    <div className="App">
        <Sidebar  onContactSelect={handleContactSelect}/>
        {!selectedContact ? (
            <div className="dummyChat">
                <div className="dummyInfo">
                    <EmojiPeopleIcon className="dummyIcon"/>
                    <Typography variant="body1" className={"dummyText"}>No contact selected</Typography>
                    <Typography variant="body1" className={"dummyText"}>Please click/add a contact to start a chat.</Typography>
                </div>
            </div>
        ) : (
            <Chat contact={selectedContact} />
        )}    </div>
  );
}

export default App;
