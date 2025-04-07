import { Box, Button, Card, styled } from "@mui/material";

export const ContainerBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-around",
    gap: 0,
    margin: ' 0 5%',
    marginTop: "80px",
    [theme.breakpoints.down('lg')]: {
        margin: '0px',
        marginTop: "8%"
    },
    [theme.breakpoints.down('md')]: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        margin: '95px auto'
    },
    [theme.breakpoints.down('xs')]: {
        margin: '28% auto',
    }

}));

export const CenterButton = styled(Button)(({ theme }) => ({
    fontSize: 15,
    fontWeight: 600,
    margin: 10,
    color: "#2A2A2A",
    backgroundColor: "white",
    border: "2px solid #858585",
    borderRadius: 10,
    padding: "3px 15px",
}));

export const ImageBox = styled("img")(({ theme }) => ({
    width: "5rem",
    height: "auto",
}));


export const StyledBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: 'space-evenly',
    alignItems: "center",
    gap: 1,
    margin: "10px 20px",
    cursor: 'pointer'
}));






//Home Page Css Handling 

export const LeftHomeContainer = styled(Card)(({ theme }) => ({
    background: '#ffffff',
    fontSize: 15,
    fontWeight: 600,
    padding: 20,
    display: 'flex',
    flexDirection: 'column',
    gap: 20,
    margin: '1rem',
}));



export const RightHomeContainer = styled(Card)(({ theme }) => ({
    background: '#ffffff',
    width: '95%',
    fontSize: 15,
    fontWeight: 600,
    margin: '1rem',
    display: 'flex',
    justifyContent: 'center',
    gap: 20,
    flexDirection: 'column',
    [theme.breakpoints.down('sm')]: {
        width: '100%',
        margin: '0',
    }

}));

export const RightHomeBox = styled(Box)(({ theme }) => ({
    width: '25%',
    [theme.breakpoints.down('lg')]: {
        width: '95%'
    },
    [theme.breakpoints.down('md')]: {
        display: 'flex',
        flexDirection: 'row',
        gap: 10,
    },
    [theme.breakpoints.up('xs')]: {
        flexDirection: 'column',
    }
}))

export const HomeContainer = styled(Box)(({ theme }) => ({
    background: 'transparent',
    display: 'flex',
    flexDirection: 'column',
    marginTop: '1rem',
    width: '70%',
    [theme.breakpoints.down('lg')]: {
        width: '95%',
    },
    [theme.breakpoints.down('md')]: {
        width: '100%',
    }
}));
export const HomeHeader = styled(Card)(({ theme }) => ({
    background: '#ffffff',
    display: 'flex',
    flexDirection: 'column',
    padding: 20,
    height: '25vh'
}));


export const HomeBox = styled(Card)(({ theme }) => ({
    background: '#ffffff',
    padding: 20,
    margin: '10px 0',
}));
