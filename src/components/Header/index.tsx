import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button, Tooltip, Menu, MenuItem, Stack } from '@mui/material';
import { Grid } from "@mui/material"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';
import FilterBar from '../FilterBar';
import { styled } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
interface Props {
  window?: () => Window;
}
const RoundedButton = styled(Button)({
  border: "1px solid",
  borderRadius: '50px',
  width: '90px',
  height: '40px',
  minWidth: 0,
  padding: 0,
  '& .MuiButton-label': {
    // Nếu muốn thêm style cho label bên trong button
  },
  '&:hover': {
    backgroundColor: 'transparent',
  },
})


export function Header(props: Props) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Grid maxWidth='md' container>
      <Box sx={{ flexGrow: 1 }}>
        <CssBaseline />
        <AppBar position="fixed" style={{ backgroundColor: 'white' }}>
          <Toolbar sx={{ display: 'flex', flexDirection: 'row', justifyContent: "space-between", margin: '5px 0px' }} >
            <Grid item>
              <Typography variant="h6" component="div" sx={{ display: { xs: 'none', sm: "block", md: "block", color: 'black' } }} >
                Adorable Home
              </Typography>
            </Grid>
            <Grid sx={{ border: "1px solid grey", borderRadius: "50px" }} item xs={12} sm={6} md={6} lg={3} >
              <FilterBar />
            </Grid>
            <Grid item >
              <Tooltip title="Account">
                <RoundedButton variant="contained"
                  sx={{ display: { xs: 'none', sm: "block", md: "block", border: '1px solid grey', backgroundColor: 'white', color: 'black' } }}
                  onClick={handleClick}
                >
                  <Box mt={1}>
                    <MenuIcon style={{ fontSize: '25px', padding: '0px 2px' }} />
                    <AccountCircleIcon style={{ fontSize: '25px', padding: '0px 2px' }} />
                  </Box>
                </RoundedButton>
              </Tooltip>
            </Grid>
          </Toolbar>
        </AppBar>

        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}

        >
          <MenuItem onClick={handleClose} >Profile</MenuItem>
          <MenuItem onClick={handleClose}>My account</MenuItem>
          <MenuItem onClick={handleClose}>Logout</MenuItem>
        </Menu>

      </Box>

    </Grid>

  )

}