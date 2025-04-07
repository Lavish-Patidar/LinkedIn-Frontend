import React, { useState } from "react";
import { HomeBox, HomeContainer, HomeHeader } from "../CSS_Componetns/Common";
import {
    Box,
    Button,
    Card,
    TextField,
    Typography,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PermMediaOutlinedIcon from "@mui/icons-material/PermMediaOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import FormatIndentDecreaseOutlinedIcon from "@mui/icons-material/FormatIndentDecreaseOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import CloseIcon from "@mui/icons-material/Close";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import AddLinkIcon from '@mui/icons-material/AddLink';
import CodeOffOutlinedIcon from '@mui/icons-material/CodeOffOutlined';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';
import FlagIcon from '@mui/icons-material/Flag';

const CenterCom = () => {
    const [showBox, setShowBox] = useState(false);
    const [showMore, setShowMore] = useState(false);
    const postContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam dicta quae rem! Soluta deserunt perspiciatis similique exercitationem, reprehenderit beatae ducimus omnis, aliquid possimus ratione, dolor facilis vero laboriosam. Soluta itaque nemo veniam, in consequuntur repellendus perferendis laudantium illo odio, quas repellat excepturi ipsum doloribus tempore? Quasi in ipsam quia ad ab corrupti officia et nostrum facere blanditiis amet excepturi adipisci aliquam sed, eaque perspiciatis nisi ducimus voluptatum cupiditate sint fuga ullam eos. Quibusdam, enim similique? Officia illo, ipsam velit corrupti at doloribus sit facilis neque voluptatem! Possimus ut fuga quisquam sed ipsum quasi quo maiores placeat. Aperiam, esse? Fuga earum nulla rem. Odit harum, aperiam ex velit, voluptates pariatur veniam adipisci officia non maxime porro est nam? Repellat, laborum. Cum, porro officiis perspiciatis aliquid deserunt temporibus quis quia aspernatur quidem laudantium rerum numquam deleniti perferendis velit nesciunt praesentium ea, culpa amet, id at voluptate? Nobis magni similique saepe veritatis soluta hic est provident aut quia non perferendis possimus eaque adipisci, nostrum quod ab reiciendis animi tempore doloribus unde nulla deserunt recusandae praesentium. Quos incidunt ipsam soluta? Temporibus inventore autem nemo quia adipisci, maiores et aut ducimus nesciunt culpa quis repellendus? Ipsam, deleniti cumque eaque molestias cupiditate officiis inventore iste ducimus accusamus itaque necessitatibus, corrupti sequi, est adipisci quos fuga nam nemo sapiente minus illo? Assumenda quos recusandae saepe fugit dolorum nam, est quasi qui quisquam culpa necessitatibus molestiae sequi repellat sit unde illum quia? Alias perspiciatis voluptatem sapiente, asperiores iure distinctio obcaecati consequuntur earum veritatis vero sed voluptatibus voluptas voluptatum molestiae laudantium nisi repellat odit quisquam facilis saepe impedit neque sint doloremque iste. Debitis voluptatem illo earum excepturi repellat porro! Aliquid omnis natus libero ex at? Magnam fugit officia expedita quas autem ut corrupti! Excepturi cumque ducimus repellat numquam at animi rerum sit earum enim porro. Suscipit deserunt natus repudiandae corrupti dolor tempora dolorum recusandae modi aut, cupiditate odio, expedita necessitatibus libero id? Delectus, placeat? Ipsa accusamus asperiores optio quasi dolor? Tenetur nesciunt aliquid modi sint temporibus, perferendis porro in, at distinctio saepe perspiciatis doloribus iusto natus facere suscipit, eveniet eius nostrum labore! Expedita ab eligendi soluta, hic neque vitae. Laborum quos excepturi provident, minima sit similique natus culpa, ipsam quaerat, assumenda necessitatibus iusto reprehenderit consectetur recusandae illo veritatis a qui sapiente? Est fuga ducimus commodi quidem dolorum veniam consequatur at id optio quos nulla possimus voluptas, dignissimos a, earum corporis in cum, adipisci quis explicabo. Inventore quasi impedit id.';
    const URL = 'https://media.licdn.com/dms/image/v2/D5622AQH79N4wOYa5zQ/feedshare-shrink_800/B56ZW7scH6HEAg-/0/1742610745728?e=1746662400&v=beta&t=JL4cK6ZdXwCGzPeNEFqMzE-XmMCX2MlByaVlVBPjMfk'
    return (
        <HomeContainer>
            <HomeHeader>
                <Box
                    sx={{
                        display: "flex",
                        margin: "15px",
                        width: "95%",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: 4,
                    }}
                >
                    <Box>
                        <AccountCircleIcon sx={{ fontSize: 70 }} />
                    </Box>
                    <TextField
                        fullWidth
                        sx={{
                            border: "none",
                            borderRadius: "40px",
                            color: "black",
                            "& .MuiInputBase-root": { border: "none", borderRadius: "40px" },
                            "& .MuiInputBase-input::placeholder": {
                                color: "#000",
                                fontWeight: "bold",
                            },
                            "&:hover": {
                                background: "#E2E2E2",
                            },
                        }}
                        placeholder="Start a Post"
                    />
                </Box>
                <Box
                    display={{
                        padding: " 0 20px",
                        display: "flex",
                        justifyContent: "space-around",
                    }}
                >
                    <Button sx={{ display: "flex", padding: "10px", cursor: "pointer" }}>
                        <PermMediaOutlinedIcon sx={{ color: "#378FE9", fontSize: { lg: 30, sm: 25 } }} />
                        <Typography
                            variant="body1"
                            sx={{ ml: 1, color: "#000", fontSize: { lg: 20, sm: 18 }, fontWeight: 600 }}
                        >
                            Media
                        </Typography>
                    </Button>

                    <Button sx={{ display: "flex", padding: "10px", cursor: "pointer" }}>
                        <CalendarMonthOutlinedIcon
                            sx={{ color: "#C37D16", fontSize: { lg: 30, sm: 25 } }}
                        />
                        <Typography
                            variant="body1"
                            sx={{ ml: 1, color: "#000", fontSize: { lg: 20, sm: 18 }, fontWeight: 600 }}
                        >
                            Media
                        </Typography>
                    </Button>

                    <Button sx={{ display: "flex", padding: "10px", cursor: "pointer" }}>
                        <FormatIndentDecreaseOutlinedIcon
                            sx={{ color: "#E06847", fontSize: { lg: 30, sm: 25 } }}
                        />
                        <Typography
                            variant="body1"
                            sx={{ ml: 1, color: "#000", fontSize: { lg: 20, sm: 18 }, fontWeight: 600 }}
                        >
                            Media
                        </Typography>
                    </Button>
                </Box>
            </HomeHeader>

            <HomeBox>
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        padding: " 0 10px",
                    }}
                >
                    <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
                        <AccountCircleIcon sx={{ fontSize: 40 }} />
                        <Typography variant="body1" sx={{ ml: 1, color: "#191919" }}>
                            User Name
                        </Typography>
                    </Box>
                    <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
                        <MoreHorizIcon
                            sx={{ fontSize: 30, cursor: "pointer" }}
                            onClick={() => setShowBox(!showBox)}
                        />
                        {showBox && (
                            <Card
                                sx={{
                                    width: "20vw",
                                    position: "absolute",
                                    background: "#ffffff",
                                    marginTop: 50,
                                    padding: "10px 0",
                                    marginRight: 40,
                                    borderRadius: 5,
                                }}
                            >
                                <Box
                                    sx={{
                                        display: "flex",
                                        gap: 1,
                                        alignItems: "center",
                                        padding: "10px",
                                        cursor: "pointer",
                                        "&:hover": { background: "#E2E2E2" },
                                    }}
                                >
                                    <BookmarkBorderIcon />
                                    <Typography variant="h6" sx={{ fontWeight: 500 }}>
                                        Save
                                    </Typography>
                                </Box>
                                <Box
                                    sx={{
                                        display: "flex",
                                        gap: 1,
                                        alignItems: "center",
                                        padding: "10px",
                                        cursor: "pointer",
                                        "&:hover": { background: "#E2E2E2" },
                                    }}
                                >
                                    <AddLinkIcon />
                                    <Typography variant="h6" sx={{ fontWeight: 500 }}>
                                        Copy Link to Post
                                    </Typography>
                                </Box>
                                <Box
                                    sx={{
                                        display: "flex",
                                        gap: 1,
                                        alignItems: "center",
                                        padding: "10px",
                                        cursor: "pointer",
                                        "&:hover": { background: "#E2E2E2" },
                                    }}
                                >
                                    <CodeOffOutlinedIcon />
                                    <Typography variant="h6" sx={{ fontWeight: 500 }}>
                                        Emeded This Post
                                    </Typography>
                                </Box>
                                <Box
                                    sx={{
                                        display: "flex",
                                        gap: 1,
                                        alignItems: "center",
                                        padding: "10px",
                                        cursor: "pointer",
                                        "&:hover": { background: "#E2E2E2" },
                                    }}
                                >
                                    <VisibilityOffIcon />
                                    <Typography variant="h6" sx={{ fontWeight: 500 }}>
                                        Not Intrested
                                    </Typography>
                                </Box>
                                <Box
                                    sx={{
                                        display: "flex",
                                        gap: 1,
                                        alignItems: "center",
                                        padding: "10px",
                                        cursor: "pointer",
                                        "&:hover": { background: "#E2E2E2" },
                                    }}
                                >
                                    <CancelRoundedIcon />
                                    <Typography variant="h6" sx={{ fontWeight: 500 }}>
                                        Unfolowe
                                    </Typography>
                                </Box>
                                <Box
                                    sx={{
                                        display: "flex",
                                        gap: 1,
                                        alignItems: "center",
                                        padding: "10px",
                                        cursor: "pointer",
                                        "&:hover": { background: "#E2E2E2" },
                                    }}
                                >
                                    <FlagIcon />
                                    <Typography variant="h6" sx={{ fontWeight: 500 }}>
                                        Report Post
                                    </Typography>
                                </Box>


                            </Card>
                        )}
                        <CloseIcon sx={{ fontSize: 30, cursor: "pointer" }} />
                    </Box>
                </Box>

                <hr style={{ color: '#E2E2E2', margin: '10px 0' }} />

                <Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <AccountCircleIcon sx={{ fontSize: 70 }} />
                        <Box>
                            <Typography variant="h5">User Name</Typography>
                            <Typography variant="body" sx={{}}> User Information</Typography>
                        </Box>
                    </Box>

                    <Box sx={{ margin: '15px' }}>
                        <Typography variant="body" sx={{ fontSize: 20 }}>
                            {postContent.length > 150 ? (
                                <span>
                                    {postContent.substring(0, 150)}
                                    {!showMore && <span style={{ cursor: 'pointer' }} onClick={() => setShowMore(true)}> More...</span>}
                                </span>
                            ) : (
                                postContent
                            )}
                            {showMore && (
                                <span>
                                    {postContent.substring(150)}
                                    {showMore && <span style={{ cursor: 'pointer' }} onClick={() => setShowMore(false)}> Less...</span>}
                                </span>
                            )}
                        </Typography>
                    </Box>

                    <Box marginTop={'15px'}>
                        <img src={URL} alt="Posted Image" style={{ width: '100%', height: 'auto', objectFit: 'cover' }} />
                    </Box>
                </Box>

            </HomeBox>

            <HomeBox>
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        padding: " 0 10px",
                    }}
                >
                    <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
                        <AccountCircleIcon sx={{ fontSize: 40 }} />
                        <Typography variant="body1" sx={{ ml: 1, color: "#191919" }}>
                            User Name
                        </Typography>
                    </Box>
                    <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
                        <MoreHorizIcon
                            sx={{ fontSize: 30, cursor: "pointer" }}
                            onClick={() => setShowBox(!showBox)}
                        />
                        {showBox && (
                            <Card
                                sx={{
                                    width: "20vw",
                                    position: "absolute",
                                    background: "#ffffff",
                                    marginTop: 50,
                                    padding: "10px 0",
                                    marginRight: 40,
                                    borderRadius: 5,
                                }}
                            >
                                <Box
                                    sx={{
                                        display: "flex",
                                        gap: 1,
                                        alignItems: "center",
                                        padding: "10px",
                                        cursor: "pointer",
                                        "&:hover": { background: "#E2E2E2" },
                                    }}
                                >
                                    <BookmarkBorderIcon />
                                    <Typography variant="h6" sx={{ fontWeight: 500 }}>
                                        Save
                                    </Typography>
                                </Box>
                                <Box
                                    sx={{
                                        display: "flex",
                                        gap: 1,
                                        alignItems: "center",
                                        padding: "10px",
                                        cursor: "pointer",
                                        "&:hover": { background: "#E2E2E2" },
                                    }}
                                >
                                    <AddLinkIcon />
                                    <Typography variant="h6" sx={{ fontWeight: 500 }}>
                                        Copy Link to Post
                                    </Typography>
                                </Box>
                                <Box
                                    sx={{
                                        display: "flex",
                                        gap: 1,
                                        alignItems: "center",
                                        padding: "10px",
                                        cursor: "pointer",
                                        "&:hover": { background: "#E2E2E2" },
                                    }}
                                >
                                    <CodeOffOutlinedIcon />
                                    <Typography variant="h6" sx={{ fontWeight: 500 }}>
                                        Emeded This Post
                                    </Typography>
                                </Box>
                                <Box
                                    sx={{
                                        display: "flex",
                                        gap: 1,
                                        alignItems: "center",
                                        padding: "10px",
                                        cursor: "pointer",
                                        "&:hover": { background: "#E2E2E2" },
                                    }}
                                >
                                    <VisibilityOffIcon />
                                    <Typography variant="h6" sx={{ fontWeight: 500 }}>
                                        Not Intrested
                                    </Typography>
                                </Box>
                                <Box
                                    sx={{
                                        display: "flex",
                                        gap: 1,
                                        alignItems: "center",
                                        padding: "10px",
                                        cursor: "pointer",
                                        "&:hover": { background: "#E2E2E2" },
                                    }}
                                >
                                    <CancelRoundedIcon />
                                    <Typography variant="h6" sx={{ fontWeight: 500 }}>
                                        Unfolowe
                                    </Typography>
                                </Box>
                                <Box
                                    sx={{
                                        display: "flex",
                                        gap: 1,
                                        alignItems: "center",
                                        padding: "10px",
                                        cursor: "pointer",
                                        "&:hover": { background: "#E2E2E2" },
                                    }}
                                >
                                    <FlagIcon />
                                    <Typography variant="h6" sx={{ fontWeight: 500 }}>
                                        Report Post
                                    </Typography>
                                </Box>


                            </Card>
                        )}
                        <CloseIcon sx={{ fontSize: 30, cursor: "pointer" }} />
                    </Box>
                </Box>

                <hr style={{ color: '#E2E2E2', margin: '10px 0' }} />

                <Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <AccountCircleIcon sx={{ fontSize: 70 }} />
                        <Box>
                            <Typography variant="h5">User Name</Typography>
                            <Typography variant="body" sx={{}}> User Information</Typography>
                        </Box>
                    </Box>

                    <Box sx={{ margin: '15px' }}>
                        <Typography variant="body" sx={{ fontSize: 20 }}>
                            {postContent.length > 150 ? (
                                <span>
                                    {postContent.substring(0, 150)}
                                    {!showMore && <span style={{ cursor: 'pointer' }} onClick={() => setShowMore(true)}> More...</span>}
                                </span>
                            ) : (
                                postContent
                            )}
                            {showMore && (
                                <span>
                                    {postContent.substring(150)}
                                    {showMore && <span style={{ cursor: 'pointer' }} onClick={() => setShowMore(false)}> Less...</span>}
                                </span>
                            )}
                        </Typography>
                    </Box>

                    <Box marginTop={'15px'}>
                        <img src={URL} alt="Posted Image" style={{ width: '100%', height: 'auto', objectFit: 'cover' }} />
                    </Box>
                </Box>

            </HomeBox>
        </HomeContainer>
    );
};

export default CenterCom;
