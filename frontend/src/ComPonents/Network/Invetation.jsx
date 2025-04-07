import { Box, Button, Typography } from '@mui/material'
import React from 'react'

const Invetation = ({ invetation }) => {
    if (invetation.length > 0) {
        return (
            <Box>
                <Box>
                    <Typography> THere is the invetation</Typography>
                    <Typography>{invetation}</Typography>
                </Box>
                <Box>
                    <Button>Accept</Button>
                    <Button>Reject</Button>
                </Box>
            </Box>
        )
    }

    return (
        <Box sx={{ display: 'flex', padding: '10px 20px', alignItems: 'center', justifyContent: 'space-between', color: '#666666' }}>
            <Typography variant='h6' >No pending invitations</Typography>
            <Button sx={{ fontSize: 18, textTransform: 'none', color: '#666666', fontWeight: 600 }}>Manage</Button>
        </Box>
    )
}
export default Invetation
