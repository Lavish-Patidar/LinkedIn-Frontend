import { Box, Card, CardContent, styled, Typography } from "@mui/material"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EditIcon from '@mui/icons-material/Edit';
import { useState } from "react";
import { About, RightSideBar } from "../ComPonents/Sidebar/Sidebar";
import { ContainerBox } from "../ComPonents/CSS_Componetns/Common";

const Profile = () => {
    const URL = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs-Zs1jAhbmypFTiTem5s6YzJpLB4tyD2F_Q&s';
    const Banner = styled(Box)(({ theme }) => ({
        width: '100%',
        height: '40%',
        background: `url(${URL})`,
        backgroundSize: 'cover',
        zIndex: 1,
    }))

    const [showMore, setShowMore] = useState(false);
    const AboutContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam dicta quae rem! Soluta deserunt perspiciatis similique exercitationem, reprehenderit beatae ducimus omnis, aliquid possimus ratione, dolor facilis vero laboriosam. Soluta itaque nemo veniam, in consequuntur repellendus perferendis laudantium illo odio, quas repellat excepturi ipsum doloribus tempore? Quasi in ipsam quia ad ab corrupti officia et nostrum facere blanditiis amet excepturi adipisci aliquam sed, eaque perspiciatis nisi ducimus voluptatum cupiditate sint fuga ullam eos. Quibusdam, enim similique? Officia illo, ipsam velit corrupti at doloribus sit facilis neque voluptatem! Possimus';

    const EditHandlingBanner = () => {
        console.log('enter');

    }

    const HandleEdit = () => {

    }

    return (
        <ContainerBox sx={{ marginTop: '80px', display: 'flex', flexDirection: { md: 'column', lg: 'row', sm: 'column', xs: 'column' }, justifyContent: 'center' }}>
            <Box sx={{ width: { lg: '75%' } }}>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Card sx={{ margin: '1rem', position: 'relative', height: '50vh' }}>
                        <Banner>
                            <AccountCircleIcon sx={{ fontSize: 200, top: 70, left: 30, position: 'absolute', }} />
                            <Box onClick={EditHandlingBanner}>
                                <EditIcon sx={{ background: 'white', borderRadius: 10, fontSize: 30, color: '#0A66C2', position: 'absolute', top: 20, cursor: 'pointer', right: 20, }} />
                            </Box>
                        </Banner>
                        <CardContent sx={{ margin: '6rem 3rem', display: 'flex', justifyContent: 'space-between' }}>
                            <Box >
                                <Typography variant="h5" sx={{ fontSize: 30, fontWeight: 600 }} >User Name </Typography>
                                <Typography variant="body" sx={{ fontSize: 20, color: '#666666' }}>Address of the User </Typography>
                                <Box onClick={HandleEdit}>
                                    <EditIcon sx={{ background: 'white', borderRadius: 10, fontSize: 28, color: '#000', cursor: 'pointer', position: 'absolute', top: '16rem', right: 20, }} /></Box>
                            </Box>
                            <Box sx={{ display: 'flex', gap: 2, cursor: 'pointer' }}>
                                <img src="fgjfgj" alt="img" />
                                <Typography variant="h5" sx={{ fontSize: 20, fontWeight: 600 }}
                                >Acadmec details </Typography>
                            </Box>
                        </CardContent>
                    </Card>

                    <Card sx={{ margin: '1rem', position: 'relative' }}>

                        <CardContent sx={{ padding: '1rem  10px' }}>

                            <Box sx={{ margin: '20px' }}>
                                <Typography variant="h5" sx={{ fontSize: 30, fontWeight: 600 }}>About User </Typography>
                                <Box sx={{ margin: '15px' }}>
                                    <Typography variant="body" sx={{ fontSize: 20 }}>
                                        {AboutContent.length > 150 ? (
                                            <span>
                                                {AboutContent.substring(0, 150)}
                                                {!showMore && <span style={{ cursor: 'pointer' }} onClick={() => setShowMore(true)}> More...</span>}
                                            </span>
                                        ) : (
                                            AboutContent
                                        )}
                                        {showMore && (
                                            <span>
                                                {AboutContent.substring(150)}
                                                {showMore && <span style={{ cursor: 'pointer' }} onClick={() => setShowMore(false)}> Less...</span>}
                                            </span>
                                        )}
                                    </Typography>
                                </Box>
                            </Box>
                        </CardContent>
                    </Card>

                    <Card sx={{ margin: '1rem', position: 'relative' }}>

                        <CardContent sx={{ padding: '1rem  10px' }}>

                            <Box sx={{ margin: '20px' }}>
                                <Typography variant="h5" sx={{ fontSize: 30, fontWeight: 600 }}>Education</Typography>
                                <Box sx={{ margin: '15px' }}>
                                    <Typography variant="body" sx={{ fontSize: 20 }}>
                                        User Education detales
                                    </Typography>
                                </Box>
                            </Box>
                        </CardContent>
                    </Card>

                    <Card sx={{ margin: '1rem', position: 'relative' }}>

                        <CardContent sx={{ padding: '1rem  10px' }}>

                            <Box sx={{ margin: '20px' }}>
                                <Typography variant="h5" sx={{ fontSize: 30, fontWeight: 600 }}>Skills</Typography>
                                <Box sx={{ margin: '15px', display: 'flex', flexDirection: 'column', gap: 2, }}>
                                    <Typography variant="body" sx={{ fontSize: 20, fontWeight: 600, padding: '10px 0', borderBottom: '2px solid #E3E3E3', cursor: 'pointer', '&:hover': { color: 'blue', textDecoration: 'underline' } }}>
                                        React
                                    </Typography>
                                    <Typography variant="body" sx={{ fontSize: 20, fontWeight: 600, padding: '10px 0', borderBottom: '2px solid #E3E3E3', cursor: 'pointer', '&:hover': { color: 'blue', textDecoration: 'underline' } }}>
                                        NodeJs
                                    </Typography>
                                </Box>
                            </Box>
                        </CardContent>
                    </Card>
                </Box>
            </Box>

            <Box sx={{ width: { lg: '25%' }, display: 'flex', flexDirection: { lg: 'column', md: 'row', sm: 'column', xs: 'column' }, justifyContent: { md: 'center', lg: 'start' } }}>
                <Box sx={{ width: { md: '50%', lg: '100%' } }}>
                    <RightSideBar />

                </Box>
                <Box sx={{ width: { lg: '100%', md: '50%' }, marginTop: '-35px' }}>
                    <About />
                </Box>
            </Box>
        </ContainerBox>
    )
}

export default Profile