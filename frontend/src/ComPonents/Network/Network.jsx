import { Box, Button, Card, CardContent, styled, Typography, Grid } from '@mui/material'
import React, { useState } from 'react'
import { LeftSideBox, NetworkButton, NetworkCard, NetworkRight, NewtworkBox } from '../CSS_Componetns/NetworkCom'
import { About } from '../Sidebar/Sidebar';
import GroupIcon from '@mui/icons-material/Group';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import PersonIcon from '@mui/icons-material/Person';
import GroupsIcon from '@mui/icons-material/Groups';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ArticleIcon from '@mui/icons-material/Article';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import Invetation from './Invetation';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import CancelIcon from '@mui/icons-material/Cancel';

const Network = () => {
    const [invetation, setInvetation] = useState('');

    const URL = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs-Zs1jAhbmypFTiTem5s6YzJpLB4tyD2F_Q&s';

    const ProfileBox = styled(Box)(({ theme }) => ({
        position: 'relative',
        width: '100%',
        height: '10vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: `url(${URL})`,
        backgroundSize: 'cover',
        zIndex: 1,
    }))

    return (
        <NewtworkBox>
            <Box marginTop={'1rem'} sx={{ width: { sm: '100%', md: '25%' } }}>
                <NetworkCard>
                    <Typography variant='h5' sx={{ padding: '18px 29px', fontWeight: 600 }}>Manage my network</Typography>
                    <hr />
                    <LeftSideBox >
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, }}>
                            <GroupIcon sx={{ fontSize: 30, }} />
                            <Typography variant='h6'>Connections</Typography>
                        </Box>
                        <Typography variant='body'>1,000</Typography>
                    </LeftSideBox>
                    <LeftSideBox >
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, }}>
                            <ContactPageIcon sx={{ fontSize: 30, }} />
                            <Typography variant='h6'>Contacts</Typography>
                        </Box>
                        <Typography variant='body'>500</Typography>
                    </LeftSideBox>
                    <LeftSideBox >
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, }}>
                            <PersonIcon sx={{ fontSize: 30, }} />
                            <Typography variant='h6'>Following & followers</Typography>
                        </Box>
                    </LeftSideBox>
                    <LeftSideBox >
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, }}>
                            <GroupsIcon sx={{ fontSize: 30, }} />
                            <Typography variant='h6'>Groups</Typography>
                        </Box>
                        <Typography variant='body'>500</Typography>
                    </LeftSideBox>
                    <LeftSideBox >
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, }}>
                            <CalendarMonthIcon sx={{ fontSize: 30, }} />
                            <Typography variant='h6'>Events</Typography>
                        </Box>
                        <Typography variant='body'>500</Typography>
                    </LeftSideBox>
                    <LeftSideBox >
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, }}>
                            <ArticleIcon sx={{ fontSize: 30, }} />
                            <Typography variant='h6'>Pages</Typography>
                        </Box>
                        <Typography variant='body'>500</Typography>
                    </LeftSideBox>
                    <LeftSideBox >
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, }}>
                            <NewspaperIcon sx={{ fontSize: 30, }} />
                            <Typography variant='h6'>Newsletters</Typography>
                        </Box>
                        <Typography variant='body'>500</Typography>
                    </LeftSideBox>
                </NetworkCard>

                <Box sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }}>
                    <About />
                </Box>
            </Box>

            <NetworkRight >
                <NetworkCard>
                    <Box sx={{ padding: '0 15px', fontWeight: 600, width: '100%' }}>
                        <NetworkButton>Grow</NetworkButton>
                        <NetworkButton >Catch Up</NetworkButton>
                    </Box>
                </NetworkCard>

                <NetworkCard>
                    <Invetation invetation={invetation} />
                </NetworkCard>

                <NetworkCard sx={{ flexWrap: 'wrap' }}>
                    <Typography variant='h6' sx={{ padding: '15px 10px' }}>People you may know</Typography>
                    <Grid container justifyContent={'space-evenly'} gap={3} sx={{ padding: '15px' }}>
                        <Grid item xs={4}>
                            <Box sx={{ width: { sm: '100%', md: 250 } }}>
                                <NetworkCard sx={{ cursor: 'pointer' }}>
                                    <ProfileBox >
                                        <CancelIcon sx={{ position: 'absolute', top: '15px', right: '10px', fontSize: 40, color: '#373839' }} />
                                        <AccountCircleIcon sx={{ position: 'absolute', top: '30px', fontSize: 100 }} />
                                    </ProfileBox>
                                    <CardContent sx={{ textAlign: 'center', paddingTop: '20px' }}>
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
                                    <Button variant='outlined' sx={{ border: '2px solid #0A66C2', color: '#0A66C2', fontWeight: 600, fontSize: 15, gap: 2, margin: '10px', padding: '10px 20px', borderRadius: '50px' }}><PersonAddAlt1Icon />Connect</Button>
                                </NetworkCard>
                            </Box>
                        </Grid>

                        <Grid item xs={4}>
                            <Box sx={{ width: { sm: '100%', md: 250 } }}>
                                <NetworkCard sx={{ cursor: 'pointer' }}>
                                    <ProfileBox >
                                        <CancelIcon sx={{ position: 'absolute', top: '15px', right: '10px', fontSize: 40, color: '#373839' }} />
                                        <AccountCircleIcon sx={{ position: 'absolute', top: '30px', fontSize: 100 }} />
                                    </ProfileBox>
                                    <CardContent sx={{ textAlign: 'center', paddingTop: '20px' }}>
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
                                    <Button variant='outlined' sx={{ border: '2px solid #0A66C2', color: '#0A66C2', fontWeight: 600, fontSize: 15, gap: 2, margin: '10px', padding: '10px 20px', borderRadius: '50px' }}><PersonAddAlt1Icon />Connect</Button>
                                </NetworkCard>
                            </Box>
                        </Grid>

                        <Grid item xs={4}>
                            <Box sx={{ width: { sm: '100%', md: 250 } }}>
                                <NetworkCard sx={{ cursor: 'pointer' }}>
                                    <ProfileBox >
                                        <CancelIcon sx={{ position: 'absolute', top: '15px', right: '10px', fontSize: 40, color: '#373839' }} />
                                        <AccountCircleIcon sx={{ position: 'absolute', top: '30px', fontSize: 100 }} />
                                    </ProfileBox>
                                    <CardContent sx={{ textAlign: 'center', paddingTop: '20px' }}>
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
                                    <Button variant='outlined' sx={{ border: '2px solid #0A66C2', color: '#0A66C2', fontWeight: 600, fontSize: 15, gap: 2, margin: '10px', padding: '10px 20px', borderRadius: '50px' }}><PersonAddAlt1Icon />Connect</Button>
                                </NetworkCard>
                            </Box>
                        </Grid>

                        <Grid item xs={4}>
                            <Box sx={{ width: { sm: '100%', md: 250 } }}>
                                <NetworkCard sx={{ cursor: 'pointer' }}>
                                    <ProfileBox >
                                        <CancelIcon sx={{ position: 'absolute', top: '15px', right: '10px', fontSize: 40, color: '#373839' }} />
                                        <AccountCircleIcon sx={{ position: 'absolute', top: '30px', fontSize: 100 }} />
                                    </ProfileBox>
                                    <CardContent sx={{ textAlign: 'center', paddingTop: '20px' }}>
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
                                    <Button variant='outlined' sx={{ border: '2px solid #0A66C2', color: '#0A66C2', fontWeight: 600, fontSize: 15, gap: 2, margin: '10px', padding: '10px 20px', borderRadius: '50px' }}><PersonAddAlt1Icon />Connect</Button>
                                </NetworkCard>
                            </Box>
                        </Grid>

                        <Grid item xs={4}>
                            <Box sx={{ width: { sm: '100%', md: 250 } }}>
                                <NetworkCard sx={{ cursor: 'pointer' }}>
                                    <ProfileBox >
                                        <CancelIcon sx={{ position: 'absolute', top: '15px', right: '10px', fontSize: 40, color: '#373839' }} />
                                        <AccountCircleIcon sx={{ position: 'absolute', top: '30px', fontSize: 100 }} />
                                    </ProfileBox>
                                    <CardContent sx={{ textAlign: 'center', paddingTop: '20px' }}>
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
                                    <Button variant='outlined' sx={{ border: '2px solid #0A66C2', color: '#0A66C2', fontWeight: 600, fontSize: 15, gap: 2, margin: '10px', padding: '10px 20px', borderRadius: '50px' }}><PersonAddAlt1Icon />Connect</Button>
                                </NetworkCard>
                            </Box>
                        </Grid>

                        <Grid item xs={4}>
                            <Box sx={{ width: { sm: '100%', md: 250 } }}>
                                <NetworkCard sx={{ cursor: 'pointer' }}>
                                    <ProfileBox >
                                        <CancelIcon sx={{ position: 'absolute', top: '15px', right: '10px', fontSize: 40, color: '#373839' }} />
                                        <AccountCircleIcon sx={{ position: 'absolute', top: '30px', fontSize: 100 }} />
                                    </ProfileBox>
                                    <CardContent sx={{ textAlign: 'center', paddingTop: '20px' }}>
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
                                    <Button variant='outlined' sx={{ border: '2px solid #0A66C2', color: '#0A66C2', fontWeight: 600, fontSize: 15, gap: 2, margin: '10px', padding: '10px 20px', borderRadius: '50px' }}><PersonAddAlt1Icon />Connect</Button>
                                </NetworkCard>
                            </Box>
                        </Grid>

                        <Grid item xs={4}>
                            <Box sx={{ width: { sm: '100%', md: 250 } }}>
                                <NetworkCard sx={{ cursor: 'pointer' }}>
                                    <ProfileBox >
                                        <CancelIcon sx={{ position: 'absolute', top: '15px', right: '10px', fontSize: 40, color: '#373839' }} />
                                        <AccountCircleIcon sx={{ position: 'absolute', top: '30px', fontSize: 100 }} />
                                    </ProfileBox>
                                    <CardContent sx={{ textAlign: 'center', paddingTop: '20px' }}>
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
                                    <Button variant='outlined' sx={{ border: '2px solid #0A66C2', color: '#0A66C2', fontWeight: 600, fontSize: 15, gap: 2, margin: '10px', padding: '10px 20px', borderRadius: '50px' }}><PersonAddAlt1Icon />Connect</Button>
                                </NetworkCard>
                            </Box>
                        </Grid>

                        <Grid item xs={4}>
                            <Box sx={{ width: { sm: '100%', md: 250 } }}>
                                <NetworkCard sx={{ cursor: 'pointer' }}>
                                    <ProfileBox >
                                        <CancelIcon sx={{ position: 'absolute', top: '15px', right: '10px', fontSize: 40, color: '#373839' }} />
                                        <AccountCircleIcon sx={{ position: 'absolute', top: '30px', fontSize: 100 }} />
                                    </ProfileBox>
                                    <CardContent sx={{ textAlign: 'center', paddingTop: '20px' }}>
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
                                    <Button variant='outlined' sx={{ border: '2px solid #0A66C2', color: '#0A66C2', fontWeight: 600, fontSize: 15, gap: 2, margin: '10px', padding: '10px 20px', borderRadius: '50px' }}><PersonAddAlt1Icon />Connect</Button>
                                </NetworkCard>
                            </Box>
                        </Grid>


                    </Grid>
                </NetworkCard>
            </NetworkRight>

            <Box sx={{ display: { md: 'none', sm: 'block' } }}>
                <About />
            </Box>
        </NewtworkBox>
    )
}

export default Network
