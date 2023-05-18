import React from "react";
import { Paper, Typography } from "@mui/material";
import "./MessageItem.css"

function Message({ content, sender, time }) {

    const isMe = sender === 'Me';
    const messageClassName = isMe ? 'message sent' : 'message received';

    return (
        <Paper elevation={1} className={messageClassName}>
            <Typography variant="body1" className="messageContent">
                {content}
            </Typography>
            <Typography variant="caption" className="messageSender">
                {sender}
            </Typography>
            <Typography variant="caption" className="messageTime">
                {time}
            </Typography>
        </Paper>
    );
}

export default Message;
