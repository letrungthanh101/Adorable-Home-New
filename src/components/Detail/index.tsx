import React from 'react'
import { Grid, IconButton, Typography, Button, Box, Tooltip, ImageList, ImageListItem } from '@mui/material'
import { CiLocationOn } from "react-icons/ci";
import { BsBuildings } from "react-icons/bs";
import { BiBed, BiBath, BiArea, BiFridge, BiWifi, BiSwim, BiDollar } from "react-icons/bi";
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';
import { TbToolsKitchen2, TbSofa, TbParking, TbGrill, TbAirConditioning } from "react-icons/tb";
import { AiOutlineDesktop, AiOutlineShop } from "react-icons/ai";
import { GiFruitTree, GiTheaterCurtains } from "react-icons/gi";
import { CgGym } from "react-icons/cg";
import { } from "react-icons/tb";
import './detail.css'
import ModalConsultant from '../ModalConsultant';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';;
import { Swiper, SwiperSlide } from 'swiper/react';
import GridOnIcon from '@mui/icons-material/GridOn';
function srcset(image: string, size: number, rows = 1, cols = 1) {
    return {
        src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`, srcSet: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format&dpr=2 2x`,
    };
}
export default function Detail() {
    return (
        <Grid container maxWidth="lg" sx={{ margin: '0 auto', display: 'flex', justifyContent: 'space-between' }}  >
            <ImageList sx={{ width: '100%', height: '450', display: { xs: 'none', sm: 'grid', md: 'grid' } }} variant="quilted" cols={4} rowHeight={180} >
                {itemData.map((item, index) => (
                    <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
                        <img {...srcset(item.img, 450, item.rows, item.cols)} alt={item.title} loading="lazy"
                            style={{
                                objectFit: 'cover', borderTopLeftRadius: `${item.borderRadiusTL}`,
                                borderBottomLeftRadius: `${item.borderRadiusBL}`, borderTopRightRadius: `${item.borderRadiusTR}`,
                                borderBottomRightRadius: `${item.borderRadiusBR}`
                            }} />
                    </ImageListItem>))}

            </ImageList>
            <Button sx={{ position: 'absolute', backgroundColor: 'white', color: 'black', marginTop: '15px', marginLeft: '20px' }} variant='contained' startIcon={<GridOnIcon />} >Hiển thị tất cả ảnh</Button>
            <Grid item xs={12} sx={{ display: { xs: 'block', md: 'none', sm: 'none' } }}>
                <Swiper
                    navigation={true} modules={[Navigation]} className="mySwiper"
                >
                    {itemData.map((item) => (<SwiperSlide>
                        <img src={item.img} alt={item.title} key={item.title} style={{ width: '100%' }} />

                    </SwiperSlide>))}
                </Swiper>
            </Grid>
            <Grid item lg={8} xs={12} mt={2} sm={12} container >
                <Grid container sx={{ display: { xs: 'block', md: 'block', sm: 'block', xl: 'block', lg: 'block' } }} spacing={1}>
                    <Grid item xs={12} container mt={1} justifyContent='space-between' >
                        <Grid item xs={12} sm={10} md={10} > <ul style={{ listStyleType: 'none', margin: '0px', padding: '0px' }}>
                            <li style={{ display: 'inline' }}>
                                <span className='icon'> <BsBuildings /
                                ></span> <span> Empire city</span></li>
                            <li style={{ display: 'inline' }}>
                                <span className='icon'> <CiLocationOn /></span>
                                <span> 21 Tran Bach Dang, Thu Thiem</span>
                            </li>
                        </ul>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} container >
                        <Typography variant='h5'>Căn hộ Vinhomes Central Park diện tích 150m² </Typography>
                    </Grid>
                </Grid>
                <Grid item xs={12} container mt={1} spacing={1}>
                    <Grid item xs={12} sm={6} md={10}  >
                        <ul style={{ listStyleType: 'none', margin: '0px', padding: '0px', fontSize: '18px', display: 'flex' }}>
                            <li className='service padding_service'>
                                <div className=' padding_service icon'> <BiBed />
                                </div>
                                <div style={{ paddingTop: '2px' }}>
                                    3</div>
                            </li>
                            <li className='service padding_service'>
                                <div className=' padding_service icon'> <BiBath />
                                </div>
                                <div style={{ paddingTop: '2px' }}> 3
                                </div>
                            </li>
                            <li className='service padding_service'>
                                <div className=' padding_service icon'>
                                    <BiArea />
                                </div>
                                <div style={{ paddingTop: '2px' }}> 150m²
                                </div>
                            </li>

                            <li className='service '>
                                <Box sx={{ p: 0, border: '1px solid #073965', width: '100px', display: { xs: 'block', sm: 'none', md: 'none' } }}>
                                    <Typography variant='body1' color='#073965' textAlign='center' > Đang có sẵn </Typography>
                                </Box>
                            </li>
                        </ul>
                    </Grid>
                    <Grid item xs={12} md={12} mt={1} container>
                        <Grid item xs={12} sm={10}>
                            <Box sx={{ p: 2, border: '5px', borderLeftStyle: 'solid', borderColor: ' #89CFF0' }}>
                                <Typography variant='body1'> Thông tin đã xác thực, hình ảnh thực, vị trí chính xác, giá đúng
                                    <Tooltip title="Tồn tại thực - Hình ảnh thực tế - Giá đúng thị trường - Có sẵn" placement="right">
                                        <IconButton aria-label="delete">
                                            <PriorityHighIcon />
                                        </IconButton>
                                    </Tooltip>
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={2} sm={2}>
                            <Box sx={{ p: 2, border: '1px solid #073965', display: { xs: 'none', md: 'block' } }}>
                                <Typography variant='body1' color='#073965' textAlign='center' > Đang có sẵn </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} mt={1} md={12} container spacing={2} >
                    <Grid item container xs={12} md={8} sm={12}>
                        <Typography variant='h6'>Tổng quan </Typography>
                        <Typography variant='body1' mt={1}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum se qui veniam ipsam distinctio provident ducimus earum quod! Sint a doloremque illum i ure consequatur rem itaque amet non, magni, optio porro?  </Typography>
                    </Grid>
                    <Grid item xs={12} >
                        <Typography variant='h6'>Thông tin cơ bản</Typography>
                    </Grid>
                    <Grid item xs={12} md={12} sm={12} container spacing={3} >
                        <Grid item xs={12} md={6} sm={6} container justifyContent='space-between' >
                            <ul style={{ width: '100%' }}>
                                <li className='basic info' >
                                    <p className='property'>Loại hình</p>
                                    <p className='right '>Căn hộ</p>
                                </li >
                                <li className='basic info'>
                                    <p className='property'>Phòng tắm</p>
                                    <p className='right'>3</p>
                                </li>
                                <li className='basic info'>
                                    <p className='property'>Tình hình nội thất</p>
                                    <p className='right'>Căn hộ</p>
                                </li>
                                <li className='basic info'>
                                    <p className='property'>Tình trạng sử dụng</p>
                                    <p className='right'>Đang cho thuê</p>
                                </li>
                                <li className='basic info'>
                                    <p className='property'>Giá thuê</p>
                                    <p className='right'>3000$/tháng</p>
                                </li>
                            </ul>
                        </Grid>
                        <Grid item container xs={12} md={6} sm={6} justifyContent='space-between'>
                            <ul style={{ width: '100%' }}>
                                <li className='basic info' >
                                    <p className='property'>Phòng ngủ</p>
                                    <p className='right'>3</p>
                                </li >
                                <li className='basic info'>
                                    <p className='property'>Diện tích</p>
                                    <p className='right'>150 m²</p>
                                </li>
                                <li className='basic info'>
                                    <p className='property'>Loại chủ quyền</p>
                                    <p className='right'>HĐ mua bán</p>
                                </li>
                                <li className='basic info'>
                                    <p className='property'>Dự án</p>
                                    <p className='right'>Vinhome bason</p>
                                </li>
                                <li className='basic info'>
                                    <p className='property'>Tháp</p>
                                    <p className='right'>T1</p>
                                </li>
                            </ul>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} mt={2} >
                    <Typography variant='h6'>Căn hộ có những gì cho bạn</Typography>
                </Grid>
                <Grid item xs={12} md={6}
                    container mt={2} justifyContent='flex-start' >
                    <Grid item md={6} xs={6}>
                        <ul>
                            <li className='service'>
                                <div className='margin_service icon'><TbToolsKitchen2 />
                                </div>
                                <div>Bếp</div>
                            </li>
                            <li className='service'>
                                <div className='margin_service icon'><AiOutlineDesktop />
                                </div>
                                <div >Tivi</div>
                            </li>
                            <li className='service' >
                                <div className='margin_service icon'> <TbSofa />
                                </div>
                                <div >Sofa</div>
                            </li>
                            <li className='service' >
                                <div className='margin_service icon'> <GiTheaterCurtains />
                                </div>
                                <div >Rèm</div>
                            </li>
                        </ul>
                    </Grid>
                    <Grid item md={6} xs={6}>
                        <ul>
                            <li className='service' >
                                <div className='margin_service icon'> <BiWifi /> </div>
                                <div>Wifi</div>
                            </li>
                            <li className='service'>
                                <div className='margin_service icon' ><BiBed /></div>
                                <div >Giường ngủ</div>
                            </li>
                            <li className='service'>
                                <div className='margin_service icon'><BiFridge /></div>
                                <div >Tủ lạnh</div>
                            </li>
                            <li className='service'>
                                <div className='margin_service icon'><TbAirConditioning /></div>
                                <div >Điều hòa</div>
                            </li>
                        </ul>
                    </Grid>
                </Grid> {/* ------------------------------------------------------ */}
                <Grid item xs={12} mt={2} >
                    <Typography variant='h6'>Tiện ích của dự án bạn sẽ ở</Typography>
                </Grid>
                <Grid item xs={12} md={6} container mt={2} justifyContent='flex-start' >
                    <Grid item md={6} xs={6}>
                        <ul>
                            <li className='service'>
                                <div className='margin_service icon'><CgGym />
                                </div>
                                <div>Gym</div>
                            </li>
                            <li className='service'>
                                <div className='margin_service icon'><BiSwim />
                                </div>
                                <div >Hồ bơi</div>
                            </li>
                            <li className='service' >
                                <div className='margin_service icon'> <TbGrill /></div>
                                <div >Khu vực BBQ</div>
                            </li>
                        </ul>
                    </Grid>
                    <Grid item md={6} xs={6}>
                        <ul>
                            <li className='service' >
                                <div className='margin_service icon'> <TbParking />
                                </div>
                                <div>Khu vực đỗ xe</div>
                            </li>
                            <li className='service'>
                                <div className='margin_service icon' ><AiOutlineShop />
                                </div>
                                <div >Shophouse</div>
                            </li>
                            <li className='service'>
                                <div className='margin_service icon'><GiFruitTree />
                                </div>
                                <div >Khu vui chơi</div>
                            </li>
                        </ul>
                    </Grid>
                </Grid>
                {/* <Grid item xs={12}>
                    <Typography variant='h6'>Tiện ích khu vực</Typography>
                </Grid> */}

            </Grid>


            <ModalConsultant />
            {/* <ListSameApartment/> */}
        </Grid >
    )
}



const itemData = [
    {
        img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e', title: 'Breakfast', rows: 2, cols: 2, borderRadiusTL: "15px",
        borderRadiusBL: "15px", borderRadiusTR: "0px", borderRadiusBR: "0px", position: 'static'
    },
    {
        img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d', title: 'Burger', borderRadiusTL: "0px",
        borderRadiusBL: "0px", borderRadiusTR: "0px", borderRadiusBR: "0px", position: 'static'
    },
    {
        img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45', title: 'Camera', borderRadiusTL: "0px",
        borderRadiusBL: "0px", borderRadiusTR: "15px", borderRadiusBR: "0px", position: 'static'
    },
    {
        img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c', title: 'Coffee', borderRadiusTL: "0px",
        borderRadiusBL: "0px", borderRadiusTR: "0px", borderRadiusBR: "0px",
        position: 'static'
    },
    {
        img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8', title: 'Hats', borderRadiusTL: "0px",
        borderRadiusBL: "0px",
        borderRadiusTR: "0px",
        borderRadiusBR: "15px",
        position: 'absolute'
    },];