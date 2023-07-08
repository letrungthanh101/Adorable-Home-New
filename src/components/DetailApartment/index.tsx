import React from 'react';
import { Grid, IconButton, Typography, CardActions, CardContent, Card, Button, Box, Tooltip, ImageList, ImageListItem, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import { styled } from '@mui/material/styles';
import { CiLocationOn } from 'react-icons/ci';
import { BsBuildings } from 'react-icons/bs';
import { BiBed, BiBath, BiArea, BiFridge, BiWifi, BiSwim } from 'react-icons/bi';
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';
import CloseIcon from '@mui/icons-material/Close';
import { TbToolsKitchen2, TbSofa, TbParking, TbGrill } from 'react-icons/tb';
import { AiOutlineDesktop, AiOutlineShop } from 'react-icons/ai';
import { GiFruitTree } from 'react-icons/gi';
import { CgGym } from 'react-icons/cg';
import classNames from 'classnames';
function srcset(image: string, size: number, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`, srcSet: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format&dpr=2 2x`,
  };
}
const BootstrapDialog = styled(Dialog)(({ theme }) => (
  {
    '& .MuiDialogContent-root': {
      padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': { padding: theme.spacing(1), },
  }));
export interface DialogTitleProps {
  id: string; children?: React.ReactNode; onClose: () => void;
}
function BootstrapDialogTitle(props: DialogTitleProps) {
  const { children, onClose, ...other } = props;
  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}> {children} {onClose ? (
      <IconButton aria-label="close" onClick={onClose} sx={{ position: 'absolute', right: 8, top: 8, color: (theme) => theme.palette.grey[500], }} >
        <CloseIcon /> </IconButton>) : null} </DialogTitle>);
}
// CiSliderHorizontal filter iconexport 
export default function DetailApartment() {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => { setOpen(true); };
  const handleClose = () => { setOpen(false); };
  return (
    <Grid container maxWidth="md" sx={{ margin: '0 auto' }}>
      <ImageList sx={{ width: '100%', height: '450' }} variant="quilted" cols={4} rowHeight={180} >
        {itemData.map((item, index) => (<ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
          <img {...srcset(item.img, 450, item.rows, item.cols)} alt={item.title} loading="lazy" style={{ objectFit: 'cover', borderTopLeftRadius: `${item.borderRadiusTL}`, borderBottomLeftRadius: `${item.borderRadiusBL}`, borderTopRightRadius: `${item.borderRadiusTR}`, borderBottomRightRadius: `${item.borderRadiusBR}` }} />
        </ImageListItem>))}
      </ImageList>

      <Grid item lg={9} xs={12} sm={12} mt={2} container>
        <Grid container spacing={1}>
          <Grid item xs={12} container mt={1} justifyContent='space-between'>
            <Grid item xs={12} sm={6} md={10}>
              <Typography variant='body1'>
                <span className='icon'><BsBuildings /></span>
                <span> Empire city</span>
              </Typography>
              <Typography variant='body1'>
                <span className='icon'><CiLocationOn /></span>
                <span> 21 Tran Bach Dang, Thu Thiem</span>
              </Typography>
            </Grid>
          </Grid>
          <Grid item xs={12} container>
            <Typography variant='h5'>Căn hộ Vinhomes Central Park diện tích 150m²</Typography>
          </Grid>
          <Grid item xs={12} container mt={1} spacing={1}>
            <Grid item xs={12} sm={6} md={10}>
              <ul className='services-list'>
                {[
                  { icon: <BiBed />, value: '3' },
                  { icon: <BiBath />, value: '3' },
                  { icon: <BiArea />, value: '150m²' },
                ].map((item, index) => (
                  <li key={index} className='service padding_service'>
                    <div className='padding_service icon'>
                      {item.icon}
                    </div>
                    <div>{item.value}</div>
                  </li>
                ))}
                <li className='service'>
                  <Box sx={{ p: 0, border: '1px solid #073965', width: '100px', display: { xs: 'block', sm: 'none', md: 'none' } }}>
                    <Typography variant='body1' color='#073965' textAlign='center'>Đang có sẵn</Typography>
                  </Box>
                </li>
              </ul>
            </Grid>
            <Grid item xs={12} mt={1} container>
              <Grid item>
                <Box sx={{ p: 2, border: '5px', borderLeftStyle: 'solid', borderColor: ' #89CFF0' }}>
                  <Typography variant='body1'>Thông tin đã xác thực, hình ảnh thực, vị trí chính xác, giá đúng
                    <Tooltip title="Tồn tại thực - Hình ảnh thực tế - Giá đúng thị trường - Có sẵn" placement="right">
                      <IconButton aria-label="delete">
                        <PriorityHighIcon />
                      </IconButton>
                    </Tooltip>
                  </Typography>
                </Box>
              </Grid>
              <Grid item>
                <Box sx={{ p: 2, border: '1px solid #073965', display: { xs: 'none', md: 'block' } }}>
                  <Typography variant='body1' color='#073965'>Đang có sẵn</Typography>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} mt={1} md={12} sm={12} container spacing={2} >
          <Grid item container xs={12} md={12}>
            <Typography variant='h6'>Tổng quan </Typography>

            <Typography variant='body1' mt={1}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum se qui veniam ipsam distinctio provident ducimus earum quod! Sint a doloremque illum i ure consequatur rem itaque amet non, magni, optio porro? </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant='h6'>Thông tin cơ bản</Typography>
          </Grid>
          <Grid item xs={12} md={12} sm={9} container spacing={1}>
            <Grid item xs={12} md={5} container justifyContent='space-between'>
              <ul className='basic-info-list'>
                {[
                  { property: 'Loại hình', value: 'Căn hộ' },
                  { property: 'Phòng tắm', value: '3' },
                  { property: 'Tình hình nội thất', value: 'Căn hộ' },
                  { property: 'Tình trạng sử dụng', value: 'Đang cho thuê' },
                  { property: 'Giá thuê', value: '3000$/tháng' },
                ].map((item, index) => (
                  <li key={index} className='basic-info-item'>
                    <p className='property'>{item.property}</p>
                    <p className='right'>{item.value}</p>
                  </li>
                ))}
              </ul>
            </Grid>
            <Grid item container xs={12} md={5} justifyContent='space-between'>
              <ul style={{ width: '100%' }}>
                {[
                  { property: 'Phòng ngủ', right: '3' },
                  { property: 'Diện tích', right: '150 m²' },
                  { property: 'Loại chủ quyền', right: 'HĐ mua bán' },
                  { property: 'Dự án', right: 'Vinhome bason' },
                  { property: 'Tháp', right: 'T1' }
                ].map((item, index) => (
                  <li className={classNames('basic', 'info')} key={index}>
                    <p className='property'>{item.property}</p>
                    <p className='right'>{item.right}</p>
                  </li>
                ))}
              </ul>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} mt={2} >
          <Typography variant='h6'>Căn hộ có những gì cho bạn</Typography>
        </Grid>
        <Grid item xs={12} md={6} container mt={2} justifyContent='flex-start'>
          {[1, 2].map((gridIndex) => (
            <Grid item md={6} key={gridIndex}>
              <ul>
                {[
                  { icon: <TbToolsKitchen2 />, label: 'Bếp' },
                  { icon: <AiOutlineDesktop />, label: 'Tivi' },
                  { icon: <TbSofa />, label: 'Sofa' },
                ].map((item, index) => (
                  <li key={index} className='service margin_service'>
                    <div className='margin_service icon'>{item.icon}</div>
                    <div>{item.label}</div>
                  </li>
                ))}
              </ul>
            </Grid>
          ))}
        </Grid>
        <Grid item xs={12} mt={2} >
          <Typography variant='h6'>Tiện ích của dự án bạn sẽ ở</Typography>
        </Grid>
        <Grid item xs={12} md={6} container mt={2} justifyContent='flex-start'>
          {[1, 2].map((gridIndex) => (
            <Grid item md={6} key={gridIndex}>
              <ul>
                {[
                  { icon: <CgGym />, label: 'Gym' },
                  { icon: <BiSwim />, label: 'Hồ bơi' },
                  { icon: <TbGrill />, label: 'Khu vực BBQ' },
                ].map((item, index) => (
                  <li key={index} className='service margin_service'>
                    <div className='margin_service icon'>{item.icon}</div>
                    <div>{item.label}</div>
                  </li>
                ))}
              </ul>
            </Grid>
          ))}
        </Grid>
        <Grid item xs={12}>
          <Typography variant='h6'>Tiện ích khu vực</Typography>
        </Grid>
      </Grid>
      <Grid item lg={3} xs={12} mt={2} sx={{ display: { sx: 'none', sm: 'none', md: 'block', } }} >
        <Card sx={{ minWidth: 275, borderRadius: '15px', position: 'sticky', top: '130px' }} variant="outlined">
          <CardContent>
            <Typography sx={{ fontSize: 25, fontWeight: 'bold' }} gutterBottom> Liên hệ tư vấn </Typography>
            <Typography variant="body1" component="div"> Căn hộ Vinhomes Central Park diện tích 150m² </Typography>
          </CardContent>
          <CardActions>
            <Button variant='contained' sx={{ margin: '10px auto', backgroundColor: '#77C3EC' }} onClick={handleClickOpen}> Liên hệ chuyên viên tư vấn </Button>
          </CardActions>
        </Card>
      </Grid>
      <BootstrapDialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open} >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}> Modal title </BootstrapDialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom> Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. </Typography>
          <Typography gutterBottom> Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. </Typography>
          <Typography gutterBottom> Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla. </Typography>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}> Save changes </Button>
        </DialogActions>
      </BootstrapDialog>
    </Grid >
  )
}








const itemData = [{ img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e', title: 'Breakfast', rows: 2, cols: 2, borderRadiusTL: "15px", borderRadiusBL: "15px", borderRadiusTR: "0px", borderRadiusBR: "0px", }, { img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d', title: 'Burger', borderRadiusTL: "0px", borderRadiusBL: "0px", borderRadiusTR: "0px", borderRadiusBR: "0px", }, { img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45', title: 'Camera', borderRadiusTL: "0px", borderRadiusBL: "0px", borderRadiusTR: "15px", borderRadiusBR: "0px", }, { img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c', title: 'Coffee', borderRadiusTL: "0px", borderRadiusBL: "0px", borderRadiusTR: "0px", borderRadiusBR: "0px", }, { img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8', title: 'Hats', borderRadiusTL: "0px", borderRadiusBL: "0px", borderRadiusTR: "0px", borderRadiusBR: "15px", },];