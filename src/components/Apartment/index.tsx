import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, CardActionArea, Grid, Stack } from '@mui/material';
import { BiBed, BiBath, BiArea } from "react-icons/bi";
import { Apartment } from '../../models/apartment';

export interface ApartmentProps {
    Apartment: Apartment
}

function Apartment({ Apartment }: ApartmentProps) {

    const { id, ProjectName, Location, BathRoom, BedRoom, Acreage, PriceForRent, Status, Images } = Apartment

    return (
        <Grid item  xs={12} sm={5} md={3.8} xl={2} lg={2.3} >
            <Card sx={{ maxWidth: 345, boxShadow: 'none', cursor: 'pointer', margin: '0 auto' }}>
                {/* <CardActionArea> */}
                <CardMedia
                    component="img"
                    height="270"
                   
                    image={Images[0]}
                    alt="green iguana"
                    sx={{ borderRadius: '10px',  }}
                />
                <CardContent sx={{ padding: '5px 0px' }}>

                    <Typography
                        variant='h6'
                        mt={1}
                        sx={{ fontSize: '15px' }}>
                        {ProjectName}
                    </Typography>

                    <Typography variant='body1'
                        sx={{
                            fontSize: '15px',
                            whiteSpace: 'nowrap',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            color: 'grey'
                        }}>
                        {Location}
                    </Typography>
                    <Typography
                        variant='body1'
                       
                        sx={{
                            fontSize: '15px',
                            whiteSpace: 'nowrap',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            color: 'grey'
                        }}>
                        {BedRoom} bedroom luxury apartment in {ProjectName}
                    </Typography>


                    <ul style={{ listStyleType: 'none', margin: '0px', padding: '0px', fontSize: '18px', display: 'flex', marginTop: '5px' }}>
                        <li style={{ paddingRight: '15px', display: 'flex', fontSize: '15px' }}>
                            <div className=' padding_service icon'>
                                <BiBed />
                            </div>
                            <div style={{ marginTop: '0px',paddingLeft:'3px' }}> {BedRoom}</div>
                        </li>
                        <li style={{ paddingRight: '15px', display: 'flex', fontSize: '15px' }}>
                            <div className=' padding_service icon'>
                                <BiBath />
                            </div>
                            <div style={{ marginTop: '0px',paddingLeft:'3px' }}> {BathRoom}</div>
                        </li>
                        <li style={{ paddingRight: '15px', display: 'flex', fontSize: '18px' }}>
                            <div className=' padding_service icon'>
                                <BiArea />
                            </div>
                            <div style={{ marginTop: '0px',fontSize:'15px',paddingLeft:'3px' }}> {Acreage}m²</div>
                        </li>
                    </ul>
                    <Stack direction='row' justifyContent='space-between' >
                        <Typography variant='h6' sx={{ fontSize: '15px' }}>3000$ / tháng</Typography>

                        {Status == 'Available' ? <Box sx={{ p: 0, border: '1px solid #073965', width: '100px',fontSize:'15px' }} mb={1}>
                            <Typography variant='body1' color='#073965' textAlign='center' >
                                {Status}
                            </Typography>
                        </Box> : <Box sx={{ p: 0, border: '1px solid #E06469', width: '100px' }} mb={1}>
                            <Typography variant='body1' color='#E06469' textAlign='center' >
                                {Status}
                            </Typography>
                        </Box>}

                        {/* // <Box sx={{ p: 0, border: '1px solid #073965', width: '100px' }} mb={1}>
                            //     <Typography variant='body1' color='#073965' textAlign='center' >
                            //         {Status}
                            //     </Typography>
                            // </Box> */}
                    </Stack>

                </CardContent>
                {/* </CardActionArea> */}
            </Card>
        </Grid>

    )
}
const itemData = [
    {
        img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
        title: 'Breakfast',
        rows: 2,
        cols: 2,
    },
    {
        img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
        title: 'Burger',
    },
    {
        img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
        title: 'Camera',
    },
    {
        img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
        title: 'Coffee',
        cols: 2,
    },
    {
        img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
        title: 'Hats',
        cols: 2,
    },
    {
        img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
        title: 'Honey',
        author: '@arwinneil',
        rows: 2,
        cols: 2,
    },
    {
        img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
        title: 'Basketball',
    },
    {
        img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
        title: 'Fern',
    },
    {
        img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
        title: 'Mushrooms',
        rows: 2,
        cols: 2,
    },
    {
        img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
        title: 'Tomato basil',
    },
    {
        img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
        title: 'Sea star',
    },
    {
        img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
        title: 'Bike',
        cols: 2,
    },
];
export default Apartment