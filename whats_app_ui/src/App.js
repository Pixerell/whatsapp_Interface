import './App.css';
import Sidebar from "./components/sidebar-component/Sidebar";
import Chat from "./components/chat-component/Chat";
import {AuthContext, AuthProvider} from './components/auth-component/AuthContext';
import {useContext, useState} from "react";
import {Typography} from "@mui/material";
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import AuthView from "./components/auth-component/AuthView";
import {useContactList} from "./helpers/useContactList";


function App() {


    const [selectedContact, setSelectedContact] = useState(null);
    const [contactList, setContactList] = useContactList();

    const handleContactSelect = (contact) => {
        setSelectedContact(contact);
    };


    const handleContactListUpdate = (updatedContactList) => {
        setContactList(updatedContactList);
    };

    let { isAuthorized } = useContext(AuthContext);

    if (!isAuthorized) {
        return <AuthView />;
    }

    else {
        return (
            <div className="App">
                <AuthView/>
                <Sidebar contactList={contactList}
                         setContactList={setContactList}
                    onContactSelect={(contact, updatedContactList) =>
                        handleContactSelect(contact, updatedContactList)
                    }
                />
                {!selectedContact ? (
                    <div className="dummyChat">
                        <div className="dummyInfo">
                            <EmojiPeopleIcon className="dummyIcon"/>
                            <Typography variant="body1" className={"dummyText"}>No contact selected</Typography>
                            <Typography variant="body1" className={"dummyText"}>Please click/add a contact to start a chat.</Typography>
                        </div>
                    </div>
                ) : (
                    <Chat
                        contactList={contactList}
                        setContactList={setContactList}
                        contact={selectedContact}
                        onContactListUpdate={handleContactListUpdate}
                    />
           )}    </div>
        );
    }
}

const AppWithAuthProvider = () => (
    <AuthProvider>
        <App />
    </AuthProvider>
);

export default AppWithAuthProvider;