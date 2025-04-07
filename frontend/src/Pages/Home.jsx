import React from 'react'
import { ContainerBox, LeftHomeContainer, RightHomeBox, RightHomeContainer } from '../ComPonents/CSS_Componetns/Common'
import { About, LeftSideBar, RightSideBar } from '../ComPonents/Sidebar/Sidebar'
import { Box, Typography } from '@mui/material';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import GroupsIcon from '@mui/icons-material/Groups';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import EventNoteIcon from '@mui/icons-material/EventNote';
import CenterCom from '../ComPonents/Home/CenterCom';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <ContainerBox>
            {/* LeftSide */}
            <Box>
                <LeftSideBar />

                <LeftHomeContainer >
                    <Link to={'/profile'} style={{ textDecoration: 'none', color: 'black' }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', cursor: 'pointer', "&:hover": { textDecoration: 'underline' } }}>
                            <Typography variant="h4" component="h4" sx={{ fontSize: 15, fontWeight: 600, }}>Profiled viewers</Typography>
                            <Typography variant="h6" component="h6" sx={{ fontSize: 15, fontWeight: 600, color: 'blue' }}> 10</Typography>
                        </Box>
                    </Link>
                    <Typography variant="h4" component="h4" sx={{ fontSize: 15, fontWeight: 600, cursor: 'pointer', '&:hover': { textDecoration: 'underline' } }}>View all analytics</Typography>

                </LeftHomeContainer>

                <LeftHomeContainer>
                    <Box sx={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                        <BookmarkIcon sx={{ fontSize: 20 }} />
                        <Typography variant="h4" component="h4" sx={{
                            fontSize: 15,
                            fontWeight: 600, cursor: 'pointer', '&:hover': {
                                textDecoration: 'underline'
                            }
                        }}>Saved Items</Typography>
                    </Box>

                    <Box sx={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                        <GroupsIcon sx={{ fontSize: 20 }} />
                        <Typography variant="h4" component="h4" sx={{
                            fontSize: 15,
                            fontWeight: 600, cursor: 'pointer', '&:hover': {
                                textDecoration: 'underline'
                            }
                        }}>Groups</Typography>
                    </Box>

                    <Box sx={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                        <NewspaperIcon sx={{ fontSize: 20 }} />
                        <Typography variant="h4" component="h4" sx={{
                            fontSize: 15,
                            fontWeight: 600, cursor: 'pointer', '&:hover': {
                                textDecoration: 'underline'
                            }
                        }}>News</Typography>
                    </Box>

                    <Box sx={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                        <EventNoteIcon sx={{ fontSize: 20 }} />
                        <Typography variant="h4" component="h4" sx={{
                            fontSize: 15,
                            fontWeight: 600, cursor: 'pointer', '&:hover': {
                                textDecoration: 'underline'
                            }
                        }}>Events</Typography>
                    </Box>
                </LeftHomeContainer>

            </Box>

            <Box sx={{ display: 'flex', flexDirection: { md: 'column', lg: 'row', sm: 'column', xs: 'column' }, justifyContent: 'center', width: { md: '90%' } }}>

                {/* Cenrter */}
                <CenterCom />

                {/* Right */}

                <RightHomeBox >

                    <RightHomeContainer>
                        <Box padding={'10px'}>
                            <Typography variant="h4" component="h4" sx={{ fontSize: 25, fontWeight: 600 }}>Tranding Now</Typography>
                        </Box>

                        <Box padding={'5px 10px'}>
                            <Typography variant="h4" component="h4" sx={{
                                fontSize: 18,
                                fontWeight: 600, color: 'gray'
                            }}>curated by LinkedIn News</Typography>
                        </Box>

                        <Box sx={{ padding: '5px 20px ', cursor: 'pointer', '&:hover': { background: '#E2E2E2' } }}>
                            <Box  >
                                <Typography variant="h5" component="h5" sx={{
                                    fontSize: 15,
                                    fontWeight: 600,
                                }}>Credit growth remains sluggish</Typography>
                                <Typography variant="h6" component="h6" sx={{
                                    fontSize: 15,
                                    color: 'gray',
                                }}>21h ago • 1,414 readers</Typography>
                            </Box>
                        </Box>
                        <Box sx={{ padding: '5px 20px ', cursor: 'pointer', '&:hover': { background: '#E2E2E2' } }}>
                            <Box  >
                                <Typography variant="h5" component="h5" sx={{
                                    fontSize: 15,
                                    fontWeight: 600,
                                }}>Credit growth remains sluggish</Typography>
                                <Typography variant="h6" component="h6" sx={{
                                    fontSize: 15,
                                    color: 'gray',
                                }}>21h ago • 1,414 readers</Typography>
                            </Box>
                        </Box>
                        <Box sx={{ padding: '5px 20px ', cursor: 'pointer', '&:hover': { background: '#E2E2E2' } }}>
                            <Box  >
                                <Typography variant="h5" component="h5" sx={{
                                    fontSize: 15,
                                    fontWeight: 600,
                                }}>Credit growth remains sluggish</Typography>
                                <Typography variant="h6" component="h6" sx={{
                                    fontSize: 15,
                                    color: 'gray',
                                }}>21h ago • 1,414 readers</Typography>
                            </Box>
                        </Box>
                    </RightHomeContainer>

                    <Box sx={{ display: 'flex', flexDirection: { lg: 'column', md: 'row', sm: 'column', xs: 'column' }, alignItems: { md: 'center' }, justifyContent: { md: 'center' } }}>
                        <Box sx={{ width: { md: '50%', lg: '100%' } }}>
                            <RightSideBar />

                        </Box>
                        <Box sx={{ width: { lg: '100%', md: '50%' }, marginTop: '-35px' }}>
                            <About />
                        </Box>
                    </Box>

                </RightHomeBox>
            </Box>

        </ContainerBox>
    )
}

export default Home