import React, { useState } from 'react'
import { Grid, Button, Tooltip, colors } from '@mui/material';
import { styled } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';
import { CiSliderHorizontal } from "react-icons/ci";

import FilterDialog from '../FilterDialog';
import { TransitionProps } from '@mui/material/transitions';
import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';
const CustomButton = styled(Button)({
    '&:hover': {
        backgroundColor: 'transparent',
    },
    padding: '0px'
});
const Item1 = styled('div')((theme) => ({
    margin: "auto 0px",
    display: 'flex',
    flexDirection: 'row',
    width: "35px",
    height: "35px",
    justifyContent: 'center',


}))

const Typo = styled('p')((theme) => ({
    lineHeight: "5px",
    fontSize: '12px'
}))

const Span = styled('span')((theme) => ({
    opacity: "0.7",
    fontSize: "12px",
    // padding: "2px"

}))
export default function FilterBar() {
    const [isOpen, setIsOpen] = useState(false);

    const handleClickOpen = () => {
        setIsOpen(true);

        return (
            <FilterDialog openDialog={isOpen} closeDialog={handleCloseDialog} />
        )
    };



    const handleClose = () => {
        setIsOpen(false)
    };

    const handleCloseDialog = (isClose: any) => {
        if (isClose) {
            // return <FilterDialog/>
            console.log(isClose)
        }

    }
    return (

        <Grid container direction={'row'} justifyContent={'space-between'} >
            <Grid item style={{ minWidth: '100px' }}>
                <Tooltip title="Search">
                    <CustomButton disableRipple disableElevation>
                        <Grid item color='black'>
                            <Item1 >  <SearchIcon style={{ alignSelf: 'center', fontSize: '25px' }} /> </Item1>
                        </Grid>
                        <Grid item color='black' ml={1}>
                            <Typo style={{ fontWeight: "bold", textAlign: "start" }}>Dự án bất kỳ</Typo>
                            <Typo style={{ textAlign: "start" }}>
                                <Span>Khu cư dân</Span >
                                <Span >.</Span >
                                <Span >Tòa nhà</Span >
                            </Typo>
                        </Grid>
                    </CustomButton>
                </Tooltip>
            </Grid>
            <Grid item display={'flex'}>
                    <CustomButton disableRipple disableElevation onClick={handleClickOpen}>
                        <CiSliderHorizontal style={{ alignSelf: 'center', fontSize: '25px', color: 'black' }} />
                        {isOpen && <FilterDialog  openDialog={isOpen} />}
                    </CustomButton>
            </Grid>
        </Grid>
    )

}