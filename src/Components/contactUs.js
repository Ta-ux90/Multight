import React, { useState } from 'react';
import {
    Box,
    Button,
    TextField,
    Container,
    Snackbar,
    Alert,
    Card,
    CardContent,
    CardHeader,
    Divider,
    Avatar,
} from '@mui/material';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

const ContactUs = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const [snackbarSeverity, setSnackbarSeverity] = useState('success');

    const handleSubmit = (event) => {
        event.preventDefault();

        if (name && email && message) {
            setSnackbarMessage('Your message has been sent successfully!');
            setSnackbarSeverity('success');
        } else {
            setSnackbarMessage('Please fill out all fields.');
            setSnackbarSeverity('error');
        }

        setOpenSnackbar(true);
        setName('');
        setEmail('');
        setMessage('');
    };

    const handleSnackbarClose = () => {
        setOpenSnackbar(false);
    };

    return (
        <Container maxWidth="sm" sx={{ mt: 5, mb: 5 }}>
            <Card elevation={5} sx={{ borderRadius: 2, boxShadow: 3 }}>
                <CardHeader
                    title="Contact Us"
                    titleTypographyProps={{ variant: 'h4', align: 'center', sx: { fontWeight: 'bold', color: '#2a386e' } }}
                    sx={{ bgcolor: '#f7f7f7' }}
                />
                <CardContent>
                    <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
                        <Avatar sx={{ bgcolor: '#2a386e', width: 56, height: 56 }}>
                            <MailOutlineIcon />
                        </Avatar>
                    </Box>
                    <Divider sx={{ mb: 2 }} />
                    <form onSubmit={handleSubmit}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                            <TextField
                                label="Name"
                                variant="outlined"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                fullWidth
                                required
                                sx={{ bgcolor: '#f7f7f7', borderRadius: 1 }}
                            />
                            <TextField
                                label="Email"
                                variant="outlined"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                fullWidth
                                required
                                type="email"
                                sx={{ bgcolor: '#f7f7f7', borderRadius: 1 }}
                            />
                            <TextField
                                label="Message"
                                variant="outlined"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                fullWidth
                                required
                                multiline
                                rows={4}
                                sx={{ bgcolor: '#f7f7f7', borderRadius: 1 }}
                            />
                            <Button
                                type="submit"
                                variant="contained"
                                color="primary"
                                sx={{ mt: 2, borderRadius: 1, boxShadow: 1, '&:hover': { boxShadow: 3 } }}
                            >
                                Submit
                            </Button>
                        </Box>
                    </form>
                </CardContent>
            </Card>
            <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleSnackbarClose}>
                <Alert onClose={handleSnackbarClose} severity={snackbarSeverity} sx={{ width: '100%' }}>
                    {snackbarMessage}
                </Alert>
            </Snackbar>
        </Container>
    );
};

export default ContactUs;
