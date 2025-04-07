import React, { useEffect, useRef, useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Box, TextField, styled, Drawer, List, ListItem, ListItemIcon, ListItemText, ListItemButton } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import SmsRoundedIcon from '@mui/icons-material/SmsRounded';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import './Navbar.css';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';

const Text = styled(Typography)(({ theme }) => ({
    color: '#847d7df7',
    fontSize: '17px',
    cursor: 'pointer',
    paddingTop: '5px',
}));
const SliderBox = styled(Box)(({ theme }) => ({
    position: 'absolute',
    top: '100%',
    right: 50,
    backgroundColor: 'white',
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    zIndex: 1,
}))

const Navbar = () => {
    const [showInfo, setShowInfo] = useState(false);
    const [showMenu, setShowMenu] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const sliderBoxRef = useRef(null);



    useEffect(() => {
        const handleClickOutside = (event) => {
            if (showInfo && sliderBoxRef.current && !sliderBoxRef.current.contains(event.target)) {
                setShowInfo(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [showInfo]);


    const toggleInfo = () => {
        setShowInfo(!showInfo);
    };

    const handleManu = () => {
        setShowMenu(!showMenu);
    }

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    return (
        <AppBar position="fixed" sx={{ background: 'white' }}>
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-around' }}>
                <Box sx={{ width: { lg: '40%', md: '100%' }, display: 'flex', alignItems: 'center' }}>
                    <Link to={'/'}><LinkedInIcon sx={{ width: 'auto', height: '3rem', color: '#0A66C2', cursor: 'pointer' }} /></Link>
                    <Box sx={{ width: '100%' }}>
                        <TextField placeholder='Search' sx={{ width: '80%', background: '#f2f2f2' }} size='small' InputProps={{
                            style: { fontWeight: 'bold' },
                            startAdornment: (
                                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginRight: 2 }}>
                                    <SearchIcon sx={{ color: '#3D3D3D' }} />
                                </Box>)
                        }} />
                    </Box>
                </Box>

                <MenuIcon sx={{ color: '#545454ef', fontSize: 40, cursor: 'pointer', display: { xs: 'block', sm: 'block', md: 'none', lg: 'none' } }} onClick={handleManu} />

                <Box display={'flex'} alignItems={'center'} sx={{ display: { xs: 'none', sm: 'none', md: 'flex', lg: 'block' }, gap: { md: 1 } }}>
                    <Link to={'/'}><Button className='Button' ><HomeIcon className='Icons' sx={{ fontSize: 40 }} /> Home</Button></Link>
                    <Link to={'/network'}><Button className='Button'  ><PeopleIcon className='Icons' sx={{ fontSize: 40 }} /> My Network</Button></Link>
                    <Link to={'/jobs'}><Button className='Button' ><BusinessCenterIcon className='Icons' sx={{ fontSize: 40 }} /> Jobs</Button></Link>
                    <Link to={'/message'}><Button className='Button' ><SmsRoundedIcon className='Icons' sx={{ fontSize: 40 }} /> Messages</Button></Link>
                    <Link to={'/notification'}><Button className='Button' ><NotificationsIcon className='Icons' sx={{ fontSize: 40 }} /> Notification</Button></Link>

                    <Button onClick={toggleInfo} className='Button'><AccountCircleIcon className='Icons' sx={{ fontSize: 40 }} />View Profile</Button>
                </Box>

                {<Drawer
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true,
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'block', md: 'none' },
                        '& .MuiDrawer-paper': {
                            boxSizing: 'border-box',
                            width: 240,
                            backgroundColor: 'white',
                            paddingTop: '20px'
                        },
                    }}
                >
                    <List>
                        {[
                            { text: 'Home', icon: <HomeIcon />, path: '/' },
                            { text: 'My Network', icon: <PeopleIcon />, path: '/network' },
                            { text: 'Jobs', icon: <BusinessCenterIcon />, path: '/jobs' },
                            { text: 'Messages', icon: <SmsRoundedIcon />, path: '/message' },
                            { text: 'Notification', icon: <NotificationsIcon />, path: '/notification' },
                        ].map((item) => (
                            <ListItem key={item.text} disablePadding>
                                <Link to={item.path} style={{ width: '100%', textDecoration: 'none', color: 'inherit' }}>
                                    <ListItemButton onClick={handleDrawerToggle}>
                                        <ListItemIcon sx={{ color: '#545454ef' }}>
                                            {item.icon}
                                        </ListItemIcon>
                                        <ListItemText primary={item.text} />
                                    </ListItemButton>
                                </Link>
                            </ListItem>
                        ))}
                    </List>
                </Drawer>
                }


                {showInfo && (
                    <SliderBox ref={sliderBoxRef} onClick={toggleInfo}>

                        <Box display={'flex'} marginTop={3} marginBottom={3} >
                            <AccountCircleIcon sx={{ fontSize: 80, color: '#0A66C2' }} />
                            <Typography variant="h5" color='black' >Lavish Patidar</Typography>
                        </Box>
                        <Link to={'/profile'}> <Button variant="outlined" sx={{ width: '100%', textAlign: 'center', borderRadius: 30, fontWeight: 'bold', marginBottom: 3 }}>View POrofile</Button></Link>
                        <hr style={{ marginBottom: 10 }} />
                        <Text variant="body2">Settings & Privacy</Text>
                        <Text variant="body2">Help</Text>
                        <Text variant='body2'>Language</Text>
                        <hr style={{ marginBottom: 10 }} />
                        <Typography variant='h5' color='black' > Manage</Typography>
                        <Text variant='body2'>Post & Activity</Text>
                        <Text variant='body2'>Job Post Account</Text>
                        <hr style={{ marginBottom: 10 }} />
                        <Typography variant="body2" sx={{
                            color: '#000', fontSize: 18, fontWeight: 600, cursor: 'pointer', '&:hover': {
                                color: 'blue',
                                textDecoration: 'underline'
                            }
                        }} >Sign Out</Typography>
                    </SliderBox>
                )}
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;



