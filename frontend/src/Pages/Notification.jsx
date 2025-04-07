import React from "react";
import { About, LeftSideBar, RightSideBar } from "../ComPonents/Sidebar/Sidebar";
import { Box, Button, Card, CardContent, Typography } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { CenterButton, ContainerBox, ImageBox, StyledBox } from "../ComPonents/CSS_Componetns/Common";


const truncateText = (text, wordLimit) => {
    const words = text.split(" ");
    return words.length > wordLimit
        ? words.slice(0, wordLimit).join(" ") + "..."
        : text;
};

const Notification = () => {
    const [activeFilter, setActiveFilter] = React.useState('All');
    const longText =
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente nisi architecto, rerum quaerat illo fuga blanditiis? Neque accusamus, nulla quo suscipit fugiat dolore velit!";

    const handleFilterClick = (filter) => {
        setActiveFilter(filter);
    };

    return (
        <ContainerBox >
            {/* Left */}
            <Box>
                <LeftSideBar />
                <Card sx={{ width: { sm: '96%', md: 345, lg: 345 }, margin: '1rem', padding: '1rem' }}>
                    <CardContent>
                        <Typography variant='h6'>Manage Notification</Typography>
                        <Button >View Settings</Button>
                    </CardContent>
                </Card>
            </Box>

            <Box sx={{ display: 'flex', flexDirection: { md: 'column', lg: 'row', sm: 'column', xs: 'column' }, width: { lg: '100%', md: '90%' } }}>
                {/* center */}
                <Box sx={{ margin: '1rem', width: { lg: '70%', md: '95%', sm: '96%' }, overflow: 'auto', '&::-webkit-scrollbar': { display: 'none' } }} >
                    <Box
                        sx={{
                            background: "white",
                            border: "1px solid white",
                            borderRadius: "20px",
                            boxShadow: "0px 1px 4px 0px black",
                            padding: "10px 20px",
                            marginBottom: 4,
                        }}
                    >
                        <CenterButton
                            onClick={() => handleFilterClick('All')}
                            style={{
                                background: activeFilter === 'All' ? 'green' : 'transparent',
                                color: activeFilter === 'All' ? 'white' : 'inherit'
                            }}
                        >
                            All
                        </CenterButton>
                        <CenterButton
                            onClick={() => handleFilterClick('Jobs')}
                            style={{
                                background: activeFilter === 'Jobs' ? 'green' : 'transparent',
                                color: activeFilter === 'Jobs' ? 'white' : 'inherit'
                            }}
                        >
                            Jobs
                        </CenterButton>
                        <CenterButton
                            onClick={() => handleFilterClick('My Post')}
                            style={{
                                background: activeFilter === 'My Post' ? 'green' : 'transparent',
                                color: activeFilter === 'My Post' ? 'white' : 'inherit'
                            }}
                        >
                            My Post
                        </CenterButton>
                        <CenterButton
                            onClick={() => handleFilterClick('Mentions')}
                            style={{
                                background: activeFilter === 'Mentions' ? 'green' : 'transparent',
                                color: activeFilter === 'Mentions' ? 'white' : 'inherit'
                            }}
                        >
                            Mentions
                        </CenterButton>
                    </Box>

                    {/* Notifications */}
                    <Box
                        sx={{
                            background: "white",
                            border: "1px solid white",
                            borderRadius: "20px",
                            boxShadow: "0px 1px 4px 0px black",
                            marginBottom: 4
                        }}
                    >
                        <StyledBox >
                            <ImageBox
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaSX2M4XsluUIXGqm2dDQ5qT6ny7LaQ2gIow&s"
                                alt="Job Image"
                            />

                            <Box>
                                <Typography>
                                    <span style={{ fontWeight: 600 }}>Compony name</span> posted:{" "}
                                    <span>Job Title</span>
                                </Typography>
                                <Typography variant="body2">
                                    {truncateText(longText, 10)}
                                </Typography>
                            </Box>

                            <Box sx={{ color: "#959595", lineHeight: 0, display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                                19m
                                <MoreHorizIcon sx={{ color: "black", fontSize: '2rem' }} />
                            </Box>
                        </StyledBox>
                    </Box>

                    <Box
                        sx={{
                            background: "white",
                            border: "1px solid white",
                            borderRadius: "20px",
                            boxShadow: "0px 1px 4px 0px black",
                            marginBottom: 4
                        }}
                    >
                        <StyledBox >
                            <ImageBox
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaSX2M4XsluUIXGqm2dDQ5qT6ny7LaQ2gIow&s"
                                alt="Job Image"
                            />

                            <Box>
                                <Typography>
                                    <span style={{ fontWeight: 600 }}>Compony name</span> posted:{" "}
                                    <span>Job Title</span>
                                </Typography>
                                <Typography variant="body2">
                                    {truncateText(longText, 10)}
                                </Typography>
                            </Box>

                            <Box sx={{ color: "#959595", lineHeight: 0, display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                                19m
                                <MoreHorizIcon sx={{ color: "black", fontSize: '2rem' }} />
                            </Box>
                        </StyledBox>
                    </Box>

                    <Box
                        sx={{
                            background: "white",
                            border: "1px solid white",
                            borderRadius: "20px",
                            boxShadow: "0px 1px 4px 0px black",
                            marginBottom: 4
                        }}
                    >
                        <StyledBox >
                            <ImageBox
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaSX2M4XsluUIXGqm2dDQ5qT6ny7LaQ2gIow&s"
                                alt="Job Image"
                            />

                            <Box>
                                <Typography>
                                    <span style={{ fontWeight: 600 }}>Compony name</span> posted:{" "}
                                    <span>Job Title</span>
                                </Typography>
                                <Typography variant="body2">
                                    {truncateText(longText, 10)}
                                </Typography>
                            </Box>

                            <Box sx={{ color: "#959595", lineHeight: 0, display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                                19m
                                <MoreHorizIcon sx={{ color: "black", fontSize: '2rem' }} />
                            </Box>
                        </StyledBox>
                    </Box>

                    <Box
                        sx={{
                            background: "white",
                            border: "1px solid white",
                            borderRadius: "20px",
                            boxShadow: "0px 1px 4px 0px black",
                            marginBottom: 4
                        }}
                    >
                        <StyledBox >
                            <ImageBox
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaSX2M4XsluUIXGqm2dDQ5qT6ny7LaQ2gIow&s"
                                alt="Job Image"
                            />

                            <Box>
                                <Typography>
                                    <span style={{ fontWeight: 600 }}>Compony name</span> posted:{" "}
                                    <span>Job Title</span>
                                </Typography>
                                <Typography variant="body2">
                                    {truncateText(longText, 10)}
                                </Typography>
                            </Box>

                            <Box sx={{ color: "#959595", lineHeight: 0, display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                                19m
                                <MoreHorizIcon sx={{ color: "black", fontSize: '2rem' }} />
                            </Box>
                        </StyledBox>
                    </Box>



                </Box>

                {/* Right */}

                <Box sx={{ width: { lg: '25%', md: '95%' }, display: 'flex', flexDirection: { lg: 'column', md: 'row', sm: 'column', xs: 'column' }, alignItems: { lg: 'none', md: 'center' }, justifyContent: { md: 'center', lg: 'start' } }}>
                    <Box sx={{ width: { md: '50%', lg: '100%' } }}>
                        <RightSideBar />

                    </Box>
                    <Box sx={{ width: { lg: '100%', md: '50%' }, marginTop: '-35px' }}>
                        <About />
                    </Box>
                </Box>

            </Box>
        </ContainerBox >
    );
};

export default Notification;
