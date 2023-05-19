import "./AuthView.css"
import {useContext, useState} from "react";
import {Button, Icon, Paper, TextField, Typography} from "@mui/material";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import {ApiTokenInstance, AuthContext, IdInstance} from "./AuthContext";

export default function AuthView() {

    const [authToken, setAuthToken] = useState('');
    const [authId, setAuthId] = useState('');
    const {isAuthorized, updateIsAuthorized } = useContext(AuthContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (authId === IdInstance.toString() && authToken === ApiTokenInstance)
        {
            updateIsAuthorized(true);

        }
        else {
            alert("Failed to log you in, did you use the correct login data?")
        }
    };

    if (isAuthorized) {
        return null
    }

    return (
        <div className="authWrap">
            <Paper elevation={3}>
                <form className="authForm" onSubmit={handleSubmit} >
                    <div>
                        <Icon className="authIcon">
                            <LockOutlinedIcon/>
                        </Icon>
                        <Typography className="loginTypo" variant="h1" gutterBottom>
                            Login
                        </Typography>
                    </div>
                    <TextField
                        label="Api Token Instance"
                        type="text"
                        value={authToken}
                        onChange={(e) => setAuthToken(e.target.value)}
                        fullWidth
                        margin="normal"
                        required
                    />
                    <TextField
                        label="IdInstance"
                        type="number"
                        value={authId}
                        onChange={(e) => setAuthId(e.target.value)}
                        fullWidth
                        margin="normal"
                        required
                    />
                    <Button className="authSignIn" type="submit" variant="contained">
                        Sign In
                    </Button>
                </form>
            </Paper>
        </div>

    )
}