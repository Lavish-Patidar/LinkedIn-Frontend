import { Box, Button, Card, styled, TextField, Typography } from "@mui/material";
import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Link } from "react-router-dom";

const LoginContainer = styled(Box)(({ theme }) => ({
    width: "100vw",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
}));

const Signup = ({ setIsAuthenticated }) => {
    setIsAuthenticated = true;
    return (
        <LoginContainer>
            <Box display={'flex'}>
                <Typography sx={{ fontSize: 50, fontWeight: 600, textAlign: 'center' }}>
                    LINKED
                </Typography>
                <LinkedInIcon sx={{ fontSize: 70, color: '#0A66C2' }} />
            </Box>

            <Card sx={{ width: '50rem', padding: 10, display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Typography variant="h4" marginBottom={2}>SignUp</Typography>
                <Box >
                    <Typography variant="body" sx={{ fontSize: 20 }} marginBottom={2}>Email</Typography>
                    <TextField fullWidth placeholder="Email" variant="outlined" />
                </Box>
                <Box >
                    <Typography variant="body" sx={{ fontSize: 20 }} marginBottom={2}>Password</Typography>
                    <TextField fullWidth placeholder="Password" variant="outlined" />
                </Box>

                <Button variant="contained" sx={{ fontSize: 20, fontWeight: 600 }}>LOG IN</Button>

                <hr />
                <Typography variant="body" sx={{ fontSize: 20 }} marginBottom={2}>Alrady have an account?</Typography>
                <Link to={'/login'}><Button variant="contained" sx={{
                    fontSize: 20, fontWeight: 600, backgroundColor
                        : '#0A66C2'
                }}>Sign In</Button></Link>
            </Card>

        </LoginContainer >
    );
};

export default Signup;
