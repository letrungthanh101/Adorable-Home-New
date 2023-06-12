import React from 'react'
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { Grid, Typography } from '@mui/material';
import { BiBed, BiBath, BiArea } from "react-icons/bi";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function ListSameApartment() {
    return (
        <Grid container maxWidth="lg"  mt={2} xs={12} >
            <Grid sx={{ width: '100%'}} item md={12}   sm={12}>
                <Typography variant='h6'>Các căn hộ cùng chung dự án</Typography>
                <Stack mt={2} spacing={2} useFlexGap flexWrap="wrap">
                    <Item sx={{ display: 'flex' ,justifyContent:'space-between'}} elevation={3}>
                        <Box>
                            <img src="https://chefjob.vn/wp-content/uploads/2020/04/homestay-duoc-nhieu-du-khach-lua-chon.jpg" alt="" width={90} />
                        </Box>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', marginLeft: '10px', flexWrap: 'wrap' }}>
                            <Box sx={{ display: 'flex' }}>
                                <Typography variant='body1' alignSelf='center'>Căn hộ Vinhomes Central Park diện tích 150m²</Typography>
                            </Box>
                            <Box sx={{ marginTop: '24px' }} >
                                <ul style={{ listStyleType: 'none', margin: '0px', padding: '0px', fontSize: '18px', display: 'flex',flexWrap:'wrap' }} >
                                    <li className='service padding_service'>
                                        <div className=' padding_service icon'>
                                            <BiBed />
                                        </div>
                                        <div> 3</div>
                                    </li>
                                    <li className='service padding_service'>
                                        <div className=' padding_service icon'>
                                            <BiBath />
                                        </div>
                                        <div> 3</div>
                                    </li>
                                    <li className='service padding_service'>
                                        <div className=' padding_service icon'>
                                            <BiArea />
                                        </div>
                                        <div style={{ marginTop: '2px' }}> 150m²</div>
                                    </li>
                                    <li className='service padding_service'>
                                        <div style={{ marginTop: '2px' }}> 3000$/tháng</div>
                                    </li>
                                </ul>
                            </Box>
                        </Box>
                    </Item>
                    <Item sx={{ display: 'flex' }} elevation={3}>
                        <Box>
                            <img src="https://chefjob.vn/wp-content/uploads/2020/04/homestay-duoc-nhieu-du-khach-lua-chon.jpg" alt="" width={100} />
                        </Box>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', marginLeft: '10px', flexWrap: 'wrap' }}>
                            <Box sx={{ display: 'flex' }}>
                                <Typography variant='body1' alignSelf='center' sx={{ wordBreak: 'break-all' }}>Căn hộ Vinhomes Central Park diện tích 150m²</Typography>
                            </Box>
                            <Box sx={{ marginTop: '24px' }} >
                                <ul style={{ listStyleType: 'none', margin: '0px', padding: '0px', fontSize: '18px', display: 'flex' }} >
                                    <li className='service padding_service'>
                                        <div className=' padding_service icon'>
                                            <BiBed />
                                        </div>
                                        <div> 3</div>
                                    </li>
                                    <li className='service padding_service'>
                                        <div className=' padding_service icon'>
                                            <BiBath />
                                        </div>
                                        <div> 3</div>
                                    </li>
                                    <li className='service padding_service'>
                                        <div className=' padding_service icon'>
                                            <BiArea />
                                        </div>
                                        <div style={{ marginTop: '2px' }}> 150m²</div>
                                    </li>
                                    <li className='service padding_service'>
                                        <div style={{ marginTop: '2px' }}> 3000$/tháng</div>
                                    </li>
                                </ul>
                            </Box>
                        </Box>
                    </Item>
                </Stack>
            </Grid>

        </Grid>


    )
}
