import { Box, Card, styled, Typography } from "@mui/material";

export const MessageCard = styled(Card)(({ theme }) => ({
    background: "#ffffff",
    fontSize: 15,
    fontWeight: 600,
    display: "flex",
    flexDirection: "column",
    width: "100%",
    marginTop: "50px",
}));


export const UserBox = styled(Box)(({ theme }) => ({
    width: '100%',
    padding: '15px 10px',
    cursor: 'pointer',
    '&:hover': {
        background: '#EBEBEB'
    }
}));


//Jobs CSS Hamdling

export const JobMain = styled(Card)(({ theme }) => ({
    background: '#ffffff',
    width: '80%',
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.down('lg')]: {
        width: '98%',
        margin: '1rem auto'
    },
    [theme.breakpoints.down('md')]: {
        width: '94%',
    },

}));

export const JobBox = styled(Box)(({ theme }) => ({
    cursor: 'pointer',
    margin: '10px 0',
    padding: '10px 20px',
    '&:hover': {
        background: '#F3F3F3',
    }
}));

export const JobText = styled(Typography)(({ theme }) => ({
    fontSize: 20,
    fontWeight: 600,
    '&:hover': {
        textDecoration: 'underline'
    }

}));

export const JobRight = styled(Card)(({ theme }) => ({
    width: '60%',
    padding: '20px 30px',
    background: '#ffffff',
    marginTop: '50px',
    display: 'flex',
    flexDirection: 'column',
    borderRadius: '20px',
    [theme.breakpoints.down('lg')]: {
        width: '100%',
    }
}));




export const JobRightCom = styled(Box)(({ theme }) => ({
    padding: '20px 0',
    display: 'flex',
    justifyContent: 'space-between',
    borderBottom: '2px solid rgb(216, 216, 216)',
    cursor: 'pointer',
    '&:hover h6': {
        textDecoration: 'underline'
    }
}));

export const JobRightBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    gap: 15,
    alignItems: 'center',
}));

export const JobImg = styled("img")(({ theme }) => ({
    width: '20%',
    objectFit: 'cover',
}));

export const JobTitle = styled(Typography)(({ theme }) => ({
    fontSize: 24,
    fontWeight: 600,
    color: '#0A66C2',
    [theme.breakpoints.down('sm')]: {
        fontSize: 18
    }
}));

export const JobTextBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    gap: 8,
    color: '#9E9E9E'
}));

export const JobTypography = styled(Typography)(({ theme }) => ({
    fontSize: 15,
    [theme.breakpoints.down('sm')]: {
        fontSize: 12
    }
}));

