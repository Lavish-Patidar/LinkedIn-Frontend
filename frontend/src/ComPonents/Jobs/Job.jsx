import React from 'react'
import { ContainerBox, LeftHomeContainer } from '../CSS_Componetns/Common'
import { About, LeftSideBar } from '../Sidebar/Sidebar'
import { Box, Card, Typography } from '@mui/material'
import { JobBox, JobImg, JobMain, JobRight, JobRightBox, JobRightCom, JobText, JobTextBox, JobTitle, JobTypography } from '../CSS_Componetns/Message';
import ListIcon from '@mui/icons-material/List';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ClearIcon from '@mui/icons-material/Clear';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import StickyNote2Icon from '@mui/icons-material/StickyNote2';
import EditSquareIcon from '@mui/icons-material/EditSquare';

const URL = 'https://media.licdn.com/dms/image/v2/C560BAQG6KMZp1zAiTA/company-logo_100_100/company-logo_100_100/0/1630605289074/weareuplers_logo?e=1749081600&v=beta&t=Jsem5MFIu5TMqlyIgoD_f3Pkr7NebUs2b6HeVqvTmlw';

const Job = () => {
    return (
        <ContainerBox sx={{ paddingBottom: 15 }}>
            {/* Left */}
            <Box sx={{
                width: { lg: '35%', md: '35%', sm: '100%' },
                display: 'flex', flexDirection: 'column', alignItems: { xs: 'none ', sm: 'none', md: 'none', lg: 'center', }
            }} >
                <LeftSideBar />

                <JobMain>
                    <JobBox sx={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                        <ListIcon sx={{ fontSize: 30 }} />
                        <JobText variant="h4" component="h4" >Preferences </JobText>
                    </JobBox>

                    <JobBox sx={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                        <BookmarkIcon sx={{ fontSize: 30 }} />
                        <JobText variant="h4" component="h4" >My Jobs </JobText>
                    </JobBox>

                    <JobBox sx={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                        <StickyNote2Icon sx={{ fontSize: 30 }} />
                        <JobText variant="h4" component="h4" >Interview prep </JobText>
                    </JobBox>

                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px', color: '#0A66C2', borderTop: '2px solid #666666', margin: '0 10px', gap: 2, cursor: 'pointer', '&:hover': { background: '#F3F3F3' } }}>
                        <EditSquareIcon sx={{ color: '#0A66C2' }} />
                        <Typography variant="h5" sx={{ fontWeight: 600 }}>Post a free job</Typography>
                    </Box>

                </JobMain>
                <Box sx={{ display: { xs: 'none', sm: 'none', md: 'block', lg: 'block', xl: 'block' } }} >
                    <About />
                </Box>
            </Box>
            {/* Right */}

            <JobRight>
                <Typography variant='h4'>Top job picks for you</Typography>
                <Typography variant='body'>Based on your profile, preferences, and activity like applies, searches, and saves</Typography>




                <JobRightCom>
                    <JobRightBox>
                        <JobImg src={URL} alt="Compony" />
                        <Box >
                            <Box>
                                <JobTitle variant='h6' >Job Details - Salary</JobTitle>
                                <Typography variant='body2' >Details About the Job</Typography>
                            </Box>
                            <JobTextBox>
                                <JobTypography variant='body'>Viewed</JobTypography>
                                <JobTypography variant='body'>Promoted</JobTypography>
                                <LinkedInIcon sx={{ color: '#0A66C2' }} />
                                <JobTypography variant='body'>Easy To Apply</JobTypography>
                            </JobTextBox>
                        </Box>
                    </JobRightBox>
                    <Box>
                        <ClearIcon sx={{ fontSize: 30, borderRadius: 10, '&:hover': { background: '#F3F3F3' } }} />
                    </Box>
                </JobRightCom>

                <JobRightCom>
                    <JobRightBox>
                        <JobImg src={URL} alt="Compony" />
                        <Box >
                            <Box>
                                <JobTitle variant='h6' >Job Details - Salary</JobTitle>
                                <Typography variant='body2' >Details About the Job</Typography>
                            </Box>
                            <JobTextBox>
                                <JobTypography variant='body'>Viewed</JobTypography>
                                <JobTypography variant='body'>Promoted</JobTypography>
                                <LinkedInIcon sx={{ color: '#0A66C2' }} />
                                <JobTypography variant='body'>Easy To Apply</JobTypography>
                            </JobTextBox>
                        </Box>
                    </JobRightBox>
                    <Box>
                        <ClearIcon sx={{ fontSize: 30, borderRadius: 10, '&:hover': { background: '#F3F3F3' } }} />
                    </Box>
                </JobRightCom>

                <JobRightCom>
                    <JobRightBox>
                        <JobImg src={URL} alt="Compony" />
                        <Box >
                            <Box>
                                <JobTitle variant='h6' >Job Details - Salary</JobTitle>
                                <Typography variant='body2' >Details About the Job</Typography>
                            </Box>
                            <JobTextBox>
                                <JobTypography variant='body'>Viewed</JobTypography>
                                <JobTypography variant='body'>Promoted</JobTypography>
                                <LinkedInIcon sx={{ color: '#0A66C2' }} />
                                <JobTypography variant='body'>Easy To Apply</JobTypography>
                            </JobTextBox>
                        </Box>
                    </JobRightBox>
                    <Box>
                        <ClearIcon sx={{ fontSize: 30, borderRadius: 10, '&:hover': { background: '#F3F3F3' } }} />
                    </Box>
                </JobRightCom>

                <Box sx={{
                    display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px 0', cursor: 'pointer', '&:hover': {
                        background: '#F3F3F3'
                    }
                }}>
                    <Typography variant='h6'>See All </Typography>
                    <ArrowForwardIcon />
                </Box>
            </JobRight>


            <Box sx={{ display: { xs: 'block', sm: 'block', md: 'none', lg: 'none', xl: 'none' }, margin: 'auto' }} >
                <About />
            </Box>

        </ContainerBox>
    )
}

export default Job