import { Button, Card, styled } from "@mui/material";
import { Box, gap, padding } from "@mui/system";

export const NewtworkBox = styled(Box)(({ theme }) => ({
    display: "flex",
    marginTop: "70px",
    padding: "20px 30px",
    gap: 5,
    width: "100%",
    justifyContent: 'space-evenly',
    [theme.breakpoints.down('md')]: {
        flexDirection: 'column',
        padding: '20px 10px',
        gap: 2,
    }
}));

export const NetworkCard = styled(Card)(({ theme }) => ({
    background: "#ffffff",
    fontSize: 15,
    fontWeight: 600,
    display: "flex",
    flexDirection: "column",
    width: "100%",
}));

export const NetworkImageBox = styled(Box)(({ theme }) => ({
    width: '80%',
    [theme.breakpoints.down('md')]: {
        width: '100%',
    }
}))

export const LeftSideBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 25px",
    color: "#666666",
    cursor: "pointer",
    "&:hover": {
        backgroundColor: "#f0f0f0",
    },
}));

export const NetworkRight = styled(Box)(({ theme }) => ({
    marginTop: '1rem',
    width: '60%',
    display: 'flex',
    flexDirection: 'column',
    gap: 15,
    [theme.breakpoints.down('md')]: {
        width: '100%'
    }
}))

export const NetworkButton = styled(Button)(({ theme }) => ({
    fontSize: 20,
    height: "100%",
    padding: "15px 25px",
    color: "#666666",
    "&:hover": {
        backgroundColor: "#f0f0f0",
    },
}));
