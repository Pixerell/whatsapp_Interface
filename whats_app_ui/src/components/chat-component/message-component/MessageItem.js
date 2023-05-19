import React from "react";
import { Paper, Typography } from "@mui/material";
import "./MessageItem.css"

function Message({ content, sender, time }) {

    const formattedTime = new Date(time).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'short'
    }) + ', ' + new Date(time).toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: 'numeric',
        hour12: false
    });
    const isMe = sender === 'Me';
    const messageClassName = isMe ? 'message sent' : 'message received';


    return (
        <Paper elevation={1} className={messageClassName}>
            <Typography variant="body1" className="messageContent">
                {content}
            </Typography>

            <Typography variant="caption" className="messageTime">
                {formattedTime}
            </Typography>
        </Paper>
    );
}

export default Message;
