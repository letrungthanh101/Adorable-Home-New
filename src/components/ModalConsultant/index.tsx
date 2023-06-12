import React from 'react'
import { Grid, IconButton, Typography, CardActions, CardContent, Card, Button, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material'

import { BiBed, BiBath, BiArea, BiFridge, BiWifi, BiSwim, BiDollar } from "react-icons/bi";
import CloseIcon from '@mui/icons-material/Close';
import { styled } from '@mui/material/styles';
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

export default function ModalConsultant() {
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => { setOpen(true); };
    const handleClose = () => { setOpen(false); };
    return (

        <Grid item lg={3}  mt={2} sx={{ display: { xs: 'none', sm: 'none', md: 'none',lg:'block' } }} >
            <Card sx={{ minWidth: 275, borderRadius: '15px', position: 'sticky', top: '130px' }} variant="outlined">
                <CardContent>
                    <Typography sx={{ fontSize: 25, fontWeight: 'bold' }} gutterBottom> Liên hệ tư vấn </Typography>
                    <Typography variant="body1" component="div"> Căn hộ Vinhomes Central Park diện tích 150m² </Typography>
                   
                    <Grid item mt={2}>
                        <ul style={{ listStyleType: 'none', margin: '0px', padding: '0px', fontSize: '18px', display: 'flex' ,flexWrap:'wrap'}}>
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
                            <li className='service padding_service'>
                                <div className=' padding_service icon'>
                                    <BiDollar />
                                </div>
                                <div style={{ paddingTop: '2px' }}> 3000 USD/tháng
                                </div>
                            </li>
                        </ul>
                        <hr />
                        <CardActions>
                            <Button variant='contained' sx={{ margin: '0px auto', backgroundColor: '#77C3EC' }} onClick={handleClickOpen}> 
                                <p>Liên hệ chuyên viên ngay</p>

                            </Button>
                        </CardActions>
                    </Grid>
                </CardContent>

            </Card>

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

        </Grid>


    )
}
