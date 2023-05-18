import "./Chat.css"
import Avatar from "@mui/material/Avatar";
import {Icon, Input, Typography} from "@mui/material";
import Message from "./message-component/MessageItem";
import SendIcon from '@mui/icons-material/Send';


export default function Chat({ contact }) {

    const { messageHistory } = contact;

    return (
        <div className="Chatbg">
            <div className="userInfo">
                <div className="chatHead">
                    <Avatar className="avatar chatAvatar" alt="Profile Image" src={contact.avatar}/>
                    <span className="chatName">
                        <Typography className="HeadName" variant="body1">{contact.name}</Typography>
                        <Typography className="SubName" variant="body2">+{contact.phoneNumber}</Typography>
                    </span>
                </div>
            </div>
            <div className="chatBody">
                {messageHistory.map((message) => (
                    <Message
                        key={message.id}
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

                    />
                </div>
                <Icon className="sendIcon">
                    <SendIcon/>
                </Icon>
            </div>
        </div>
    )
}