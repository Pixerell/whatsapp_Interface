import {Button, Typography} from '@mui/material';
import "./ContactItem.css"
import Avatar from "@mui/material/Avatar";

function ContactItem({ contact, onClick }) {

    const handleClick = () => {
        onClick(contact);
    };


    return (
        <div className="ItemWrapper">
            <Button className="ItemButton" onClick={handleClick}>
                <Avatar className="ContactAvatar" alt="Contact Image" src={contact.avatar}/>
                <span className="ContactName">
                    <Typography className="HeadName" variant="body1">{contact.name}</Typography>
                    <Typography className="SubName" variant="body2">
                      {contact && contact.messageHistory && contact.messageHistory.length > 0 && (
                          contact.messageHistory[contact.messageHistory.length - 1].sender === 'Me'
                              ? 'You: '
                              : contact.name + ': '
                      )}
                        {contact && contact.messageHistory && contact.messageHistory.length > 0 &&
                            contact.messageHistory[contact.messageHistory.length - 1].content}
                    </Typography>
                </span>
                <Typography className="LastMsgTime SubName">
                    {contact && contact.messageHistory && contact.messageHistory.length > 0 &&
                        new Date(contact.messageHistory[contact.messageHistory.length - 1].time).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false })}
                </Typography>

            </Button>
        </div>
    );
}

export default ContactItem;
