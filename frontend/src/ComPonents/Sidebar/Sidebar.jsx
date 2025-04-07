import React from 'react';
import { Box, Card, CardContent, colors, styled, Typography } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const URL = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs-Zs1jAhbmypFTiTem5s6YzJpLB4tyD2F_Q&s';


const ProfileBox = styled(Box)(({ theme }) => ({
    width: '100%',
    height: '25%',
    background: `url(${URL})`,
    backgroundSize: 'cover',
    objectFit: 'cover',
    zIndex: 1,
}))


const TextTypography = styled(Typography)(({ theme }) => ({
    cursor: 'pointer',
    '&:hover': {
        color: 'blue',
        textDecoration: 'underline',
    }
}));

export const LeftSideBar = () => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Card sx={{ margin: '1rem', paddingTop: '1rem' }}>
                <ProfileBox >
                    <AccountCircleIcon sx={{ fontSize: 100 }} />
                </ProfileBox>
                <CardContent>
                    <Typography gutterBottom variant="h5" sx={{ paddingTop: '20px' }}>
                        User Name
                    </Typography>
                    <Typography variant="body2" color="text.secondary" fontSize={17}>
                        Address: User Address
                    </Typography>
                    <Typography variant="h6" color="text.secondary" fontSize={17} fontWeight={'bold'}>
                        Education: User Education Details
                    </Typography>
                </CardContent>
            </Card>
        </Box>
    );
}

export const RightSideBar = () => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', }}>
            <Card sx={{ width: '95%', height: 300, margin: '1rem', background: 'url(https://media.licdn.com/media/AAYABATPAAgAAQAAAAAAAKwYrfHUPkoBQGmwnaG71Ps_5Q.png)', backgroundSize: 'cover', borderRadius: '10px' }}>
            </Card>

        </Box>
    );
}



export const About = () => {
    return (
        <Box sx={{ width: '100%', padding: '30px 25px', display: 'flex', flexDirection: 'row', justifyContent: 'center', flexWrap: 'wrap', gap: '10px', alignItems: 'center' }}>
            <TextTypography variant="body2" color="text.secondary">
                About
            </TextTypography>
            <TextTypography variant="body2" color="text.secondary">
                Accessibility
            </TextTypography>
            <TextTypography variant="body2" color="text.secondary">
                Help Center
            </TextTypography>
            <TextTypography variant="body2" color="text.secondary">
                Privacy & Terms
            </TextTypography>
            <TextTypography variant="body2" color="text.secondary">
                Ad Choices
            </TextTypography>
            <TextTypography variant="body2" color="text.secondary">
                Advertising
            </TextTypography>
            <TextTypography variant="body2" color="text.secondary">
                Business Services
            </TextTypography>
            <TextTypography variant="body2" color="text.secondary">
                Get the LinkedIn app
            </TextTypography>
            <TextTypography variant="body2" color="text.secondary">
                More
            </TextTypography>
            <TextTypography variant="body2" color="text.secondary">
                LinkedIn Corporation © 2025
            </TextTypography>
        </Box>
    )
}