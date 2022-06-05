import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import { Nav } from 'react-bootstrap';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: theme.spacing(2),

        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '300px',
        },
        '& .MuiButtonBase-root': {
            margin: theme.spacing(2),
        },
    },
}));

const SignUp = ({ handleClose }) => {
    const classes = useStyles();
    // create state variables for each input
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [ConfirmPassword, setConfirmPassword] = useState('');
    const [Contact, setContact] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        console.log(firstName, lastName, email, password, ConfirmPassword, Contact);
        handleClose();
    };

    return (
        <form className={classes.root} onSubmit={handleSubmit}>
            <TextField
                label="First Name"
                variant="filled"
                required
                value={firstName}
                onChange={e => setFirstName(e.target.value)}
            />
            <TextField
                label="Last Name"
                variant="filled"
                required
                value={lastName}
                onChange={e => setLastName(e.target.value)}
            />
            <TextField
                label="Email"
                variant="filled"
                type="email"
                required
                value={email}
                onChange={e => setEmail(e.target.value)}
            />
            <TextField
                label="Password"
                variant="filled"
                type="password"
                required
                value={password}
                onChange={e => setPassword(e.target.value)}
            />
            <TextField
                label="ConfirmPassword"
                variant="filled"
                type="ConfirmPassword"
                required
                value={ConfirmPassword}
                onChange={e => setConfirmPassword(e.target.value)}
            />
            <TextField
                label="Contact"
                variant="filled"
                type="Contact"
                required
                value={Contact}
                onChange={e => setContact(e.target.value)}
            />
            <div>
                <Button variant="contained" onClick={handleClose}>
                    Cancel
                </Button>
                <Button type="submit" variant="contained" color="primary">
                    SignUp
                </Button>
                <Nav.Link href="/login" style={{ color: "blue" }}>Already have an account SignUp</Nav.Link>
            </div>
        </form>
    );
};

export default SignUp;