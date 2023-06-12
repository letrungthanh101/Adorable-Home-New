import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, CardActionArea, Grid, Tooltip } from '@mui/material';

import { BiGrid, BiBed, BiBath } from 'react-icons/bi';
export default function CardProduct() {
    return (
        
        <Card sx={{ maxWidth: 345 }} style={{ borderRadius: "15px", }} >
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="250"
                    image="https://vov.vn/sites/default/files/styles/large/public/2023-02/z4092139322474_c4be6e6e75c091296898c130f1440a22.jpg"
                    alt="green iguana"

                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        $4500 / month
                    </Typography>
                    <Typography variant="body1" color="text.secondary" >Căn hộ Empire City</Typography >
                    <Typography variant="body1" color="text.secondary">21 Trần bạch đằng</Typography >
                    <Typography variant="body1" style={{ display: 'flex', alignItems: 'center' }} >
                        <BiBath />
                        <span style={{ paddingLeft: '15px' }}>3</span>
                        <BiBed style={{ paddingLeft: '15px' }} />
                        <span style={{ paddingLeft: '15px' }}>3</span>
                        <BiGrid style={{ paddingLeft: '15px' }} />
                        <span style={{ paddingLeft: '15px' }}>150 sqm</span>
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>


    )
}
