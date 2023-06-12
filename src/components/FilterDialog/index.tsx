import React, { useState } from 'react'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { Box, Grid, Typography } from '@mui/material';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Slider from '@mui/material/Slider';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export interface DialogTitleProps {
    // id: string;
    children?: React.ReactNode;
    onClose?: () => void;
    openDialog: boolean;
    closeDialog?: (closeDialog:any) => void;
}


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    maxWidth: 400,
}));
function BootstrapDialogTitle(props: DialogTitleProps) {
    const { children, onClose, ...other } = props;

    return (
        <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
            {children}
            {onClose ? (
                <IconButton
                    aria-label="close"
                    onClick={onClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <CloseIcon />
                </IconButton>
            ) : null}
        </DialogTitle>
    );
}


export default function FilterDialog( { onClose, openDialog,closeDialog }:DialogTitleProps) {
 
    const [open, setOpen] = React.useState(openDialog);
  
    const listBedRoms = ['Any', '1', '2', '3', '4', '5+']
    const listProjects = ['Empire City', 'The River', 'Gateway', 'Nassim', 'Q2 Fraser']
    const listType = ['Apartment', 'Studio', 'Penthouse', 'Duplex', 'Garden']
   
    const [sliderValue, setSliderValue] = useState<number>(500);

    
    const handleClose = () => {
        setOpen(false);
        closeDialog(open)
    };

   
    const handleSliderChange = (event: any, newValue: number | number[]) => {
        setSliderValue(newValue as number);
        console.log(newValue)
      };

    return (
        <div>
            {/* <Button variant="outlined" onClick={handleClickOpen}>
                Slide in alert dialog
            </Button> */}
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
                maxWidth='lg'
                sx={{ borderRadius: '15px' }}
            >
                <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
                    Filters
                </BootstrapDialogTitle>

                <DialogContent dividers >
                    <Typography gutterBottom variant='h6'>
                        Price range
                    </Typography>
                    <Box width={250} maxWidth={300} component='div' ml={1}>
                        <Slider
                            size="medium"
                            defaultValue={500}
                            aria-label="Small"
                            valueLabelDisplay="auto"
                            min={0}
                            max={10000}
                            onChange={handleSliderChange}
                        />
                    </Box>
                    <Stack direction='row' useFlexGap flexWrap="wrap">
                        <Box>
                            <TextField
                                label="min price"
                                id="outlined-start-adornment"
                                sx={{ m: 1, width: '25ch' }}
                                InputProps={{
                                    startAdornment: <InputAdornment position="start">USD</InputAdornment>,
                                }}
                                defaultValue={0}
                            />
                        </Box>
                        <Box sx={{alignSelf:'center'}}>
                            <Typography variant='body1' >-</Typography>
                        </Box>
                        <Box>
                            <TextField
                                label="max price"
                                id="outlined-start-adornment"
                                sx={{ m: 1, width: '25ch' }}
                                InputProps={{
                                    startAdornment: <InputAdornment position="start">USD</InputAdornment>,
                                }}
                                value={sliderValue}
                                // defaultValue={10000}
                                onChange={(event) => setSliderValue(parseInt(event.target.value))}
                            />
                        </Box>
                    </Stack>
                    <Typography gutterBottom variant='h6'>
                        Property type
                    </Typography>
                    <Grid container >
                        <FormGroup >
                            <Stack direction='row' useFlexGap flexWrap="wrap" spacing={2} >
                                {listType.map((typeApartment) => <FormControlLabel control={<Checkbox sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }} />} label={typeApartment} key={typeApartment} />)}
                            </Stack>
                        </FormGroup>
                    </Grid>
                    <Typography gutterBottom variant='h6'>
                        Project
                    </Typography>
                    <FormGroup >
                        <Stack direction='row' useFlexGap flexWrap="wrap" spacing={2}>
                            {listProjects.map((projectName) => <FormControlLabel control={<Checkbox sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }} />} key={projectName} label={projectName} />)}
                        </Stack>
                    </FormGroup>
                    <Typography gutterBottom variant='h6'>
                        Bedrooms
                    </Typography>
                    <Stack direction='row' spacing={3} mt={2} useFlexGap flexWrap="wrap">
                        {listBedRoms.map((bedRoom) => {
                            return <Button key={bedRoom} variant='outlined'> {bedRoom}</Button>
                        })}
                    </Stack>
                    <Typography gutterBottom variant='h6' mt={2}>
                        Utilities
                    </Typography>
                    <Stack direction='row' spacing={3} mt={2}>
                        <FormControlLabel control={<Checkbox sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }} />} label="Full Furnished" />
                        <FormControlLabel control={<Checkbox sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }} />} label="Basic Furnished" />
                    </Stack>
                </DialogContent>
                <Stack direction='row' justifyContent='space-between'>
                    <DialogActions>
                        <Button>
                            <Typography sx={{ textDecoration: 'underline', fontSize: '15px', fontWeight: '500' }} variant='body1'>Clear all</Typography>
                        </Button>
                    </DialogActions>
                    <DialogActions>
                        <Button  variant='contained' >Show 662 stays</Button>
                    </DialogActions>
                </Stack>
            </Dialog>
        </div>
    )
}
