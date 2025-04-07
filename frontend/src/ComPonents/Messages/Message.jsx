import React, { useState } from 'react'
import { ContainerBox } from '../CSS_Componetns/Common';
import { Box, TextField, Typography } from '@mui/material';
import { About, RightSideBar } from '../Sidebar/Sidebar';
import { MessageCard, UserBox } from '../CSS_Componetns/Message';
import SearchIcon from '@mui/icons-material/Search';
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import EditSquareIcon from '@mui/icons-material/EditSquare';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


const Message = () => {

    const [Clicked, setClicked] = useState(true)

    const handleClicked = () => {

        setClicked(!Clicked)
    }
    return (
        <ContainerBox >
            {/* Left */}

            <MessageCard>
                <Box sx={{ margin: '20px 30px', display: 'flex', justifyContent: 'space-between', alignItems: "center" }}>
                    <Box sx={{ display: 'flex', width: '50%', gap: 2, alignItems: 'center' }}>
                        <Typography variant='h5' sx={{ fontWeight: 600 }}>Messaging</Typography>
                        <TextField placeholder='Search' sx={{ width: '55%', background: '#f2f2f2' }} size='small' InputProps={{
                            style: { fontWeight: 'bold' },
                            startAdornment: (
                                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginRight: 2 }}>
                                    <SearchIcon sx={{ color: '#3D3D3D' }} />
                                </Box>)
                        }} />
                    </Box>
                    <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                        <MoreHorizIcon sx={{ fontSize: 40, cursor: 'pointer' }} />
                        <EditSquareIcon sx={{ fontSize: 30, cursor: 'pointer' }} />
                    </Box>

                </Box>
                <hr />

                <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                    {/* Left */}
                    <Box width={'40%'} sx={{ overflowY: 'auto', height: '75vh', marginBottom: '15px' }}>
                        <UserBox onClick={handleClicked}>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                <Box sx={{ display: 'flex', gap: 1 }}>
                                    <AccountCircleIcon sx={{ fontSize: 80, color: '#0A66C2' }} />
                                    <Box>
                                        <Typography variant='h6'>User Name</Typography>
                                        <Typography variant='body' sx={{ color: '#666666' }}>Information about User</Typography>
                                    </Box>
                                </Box>
                                <Box sx={{ display: 'flex' }}>
                                    {
                                        Clicked ? (<Typography variant='body'>Apr 1</Typography>)
                                            : (<MoreHorizIcon sx={{ fontSize: 20 }} />)
                                    }

                                </Box>
                            </Box>
                        </UserBox>
                        <UserBox onClick={handleClicked}>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                <Box sx={{ display: 'flex', gap: 1 }}>
                                    <AccountCircleIcon sx={{ fontSize: 80, color: '#0A66C2' }} />
                                    <Box>
                                        <Typography variant='h6'>User Name</Typography>
                                        <Typography variant='body' sx={{ color: '#666666' }}>Information about User</Typography>
                                    </Box>
                                </Box>
                                <Box sx={{ display: 'flex' }}>
                                    {
                                        Clicked ? (<Typography variant='body'>Apr 1</Typography>)
                                            : (<MoreHorizIcon sx={{ fontSize: 20 }} />)
                                    }

                                </Box>
                            </Box>
                        </UserBox>
                        <UserBox onClick={handleClicked}>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                <Box sx={{ display: 'flex', gap: 1 }}>
                                    <AccountCircleIcon sx={{ fontSize: 80, color: '#0A66C2' }} />
                                    <Box>
                                        <Typography variant='h6'>User Name</Typography>
                                        <Typography variant='body' sx={{ color: '#666666' }}>Information about User</Typography>
                                    </Box>
                                </Box>
                                <Box sx={{ display: 'flex' }}>
                                    {
                                        Clicked ? (<Typography variant='body'>Apr 1</Typography>)
                                            : (<MoreHorizIcon sx={{ fontSize: 20 }} />)
                                    }

                                </Box>
                            </Box>
                        </UserBox>
                        <UserBox onClick={handleClicked}>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                <Box sx={{ display: 'flex', gap: 1 }}>
                                    <AccountCircleIcon sx={{ fontSize: 80, color: '#0A66C2' }} />
                                    <Box>
                                        <Typography variant='h6'>User Name</Typography>
                                        <Typography variant='body' sx={{ color: '#666666' }}>Information about User</Typography>
                                    </Box>
                                </Box>
                                <Box sx={{ display: 'flex' }}>
                                    {
                                        Clicked ? (<Typography variant='body'>Apr 1</Typography>)
                                            : (<MoreHorizIcon sx={{ fontSize: 20 }} />)
                                    }

                                </Box>
                            </Box>
                        </UserBox>
                        <UserBox onClick={handleClicked}>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                <Box sx={{ display: 'flex', gap: 1 }}>
                                    <AccountCircleIcon sx={{ fontSize: 80, color: '#0A66C2' }} />
                                    <Box>
                                        <Typography variant='h6'>User Name</Typography>
                                        <Typography variant='body' sx={{ color: '#666666' }}>Information about User</Typography>
                                    </Box>
                                </Box>
                                <Box sx={{ display: 'flex' }}>
                                    {
                                        Clicked ? (<Typography variant='body'>Apr 1</Typography>)
                                            : (<MoreHorizIcon sx={{ fontSize: 20 }} />)
                                    }

                                </Box>
                            </Box>
                        </UserBox>
                        <UserBox onClick={handleClicked}>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                <Box sx={{ display: 'flex', gap: 1 }}>
                                    <AccountCircleIcon sx={{ fontSize: 80, color: '#0A66C2' }} />
                                    <Box>
                                        <Typography variant='h6'>User Name</Typography>
                                        <Typography variant='body' sx={{ color: '#666666' }}>Information about User</Typography>
                                    </Box>
                                </Box>
                                <Box sx={{ display: 'flex' }}>
                                    {
                                        Clicked ? (<Typography variant='body'>Apr 1</Typography>)
                                            : (<MoreHorizIcon sx={{ fontSize: 20 }} />)
                                    }

                                </Box>
                            </Box>
                        </UserBox>
                        <UserBox onClick={handleClicked}>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                <Box sx={{ display: 'flex', gap: 1 }}>
                                    <AccountCircleIcon sx={{ fontSize: 80, color: '#0A66C2' }} />
                                    <Box>
                                        <Typography variant='h6'>User Name</Typography>
                                        <Typography variant='body' sx={{ color: '#666666' }}>Information about User</Typography>
                                    </Box>
                                </Box>
                                <Box sx={{ display: 'flex' }}>
                                    {
                                        Clicked ? (<Typography variant='body'>Apr 1</Typography>)
                                            : (<MoreHorizIcon sx={{ fontSize: 20 }} />)
                                    }

                                </Box>
                            </Box>
                        </UserBox>
                        <UserBox onClick={handleClicked}>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                <Box sx={{ display: 'flex', gap: 1 }}>
                                    <AccountCircleIcon sx={{ fontSize: 80, color: '#0A66C2' }} />
                                    <Box>
                                        <Typography variant='h6'>User Name</Typography>
                                        <Typography variant='body' sx={{ color: '#666666' }}>Information about User</Typography>
                                    </Box>
                                </Box>
                                <Box sx={{ display: 'flex' }}>
                                    {
                                        Clicked ? (<Typography variant='body'>Apr 1</Typography>)
                                            : (<MoreHorizIcon sx={{ fontSize: 20 }} />)
                                    }

                                </Box>
                            </Box>
                        </UserBox>
                        <UserBox onClick={handleClicked}>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                <Box sx={{ display: 'flex', gap: 1 }}>
                                    <AccountCircleIcon sx={{ fontSize: 80, color: '#0A66C2' }} />
                                    <Box>
                                        <Typography variant='h6'>User Name</Typography>
                                        <Typography variant='body' sx={{ color: '#666666' }}>Information about User</Typography>
                                    </Box>
                                </Box>
                                <Box sx={{ display: 'flex' }}>
                                    {
                                        Clicked ? (<Typography variant='body'>Apr 1</Typography>)
                                            : (<MoreHorizIcon sx={{ fontSize: 20 }} />)
                                    }

                                </Box>
                            </Box>
                        </UserBox>
                        <UserBox onClick={handleClicked}>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                <Box sx={{ display: 'flex', gap: 1 }}>
                                    <AccountCircleIcon sx={{ fontSize: 80, color: '#0A66C2' }} />
                                    <Box>
                                        <Typography variant='h6'>User Name</Typography>
                                        <Typography variant='body' sx={{ color: '#666666' }}>Information about User</Typography>
                                    </Box>
                                </Box>
                                <Box sx={{ display: 'flex' }}>
                                    {
                                        Clicked ? (<Typography variant='body'>Apr 1</Typography>)
                                            : (<MoreHorizIcon sx={{ fontSize: 20 }} />)
                                    }

                                </Box>
                            </Box>
                        </UserBox>
                        <UserBox onClick={handleClicked}>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                <Box sx={{ display: 'flex', gap: 1 }}>
                                    <AccountCircleIcon sx={{ fontSize: 80, color: '#0A66C2' }} />
                                    <Box>
                                        <Typography variant='h6'>User Name</Typography>
                                        <Typography variant='body' sx={{ color: '#666666' }}>Information about User</Typography>
                                    </Box>
                                </Box>
                                <Box sx={{ display: 'flex' }}>
                                    {
                                        Clicked ? (<Typography variant='body'>Apr 1</Typography>)
                                            : (<MoreHorizIcon sx={{ fontSize: 20 }} />)
                                    }

                                </Box>
                            </Box>
                        </UserBox>

                    </Box>
                    <hr />
                    {/* Right */}
                    <Box width={'45%'} height={'100%'}>

                    </Box>
                </Box>
            </MessageCard>



            {/* Right */}
            <Box sx={{ display: 'flex', flexDirection: { lg: 'column', md: 'row', sm: 'column', xs: 'column' }, alignItems: { md: 'center' }, justifyContent: { md: 'center', lg: 'start' } }}>
                <Box sx={{ width: { md: '50%', lg: '100%' } }}>
                    <RightSideBar />

                </Box>
                <Box sx={{ width: { lg: '100%', md: '50%' }, marginTop: '-35px' }}>
                    <About />
                </Box>
            </Box>

        </ContainerBox >
    );
}

export default Message