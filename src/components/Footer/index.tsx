import React from 'react'
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
export function Footer() {
    const [value, setValue] = React.useState("");
    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    return (
        <div>
            <BottomNavigation sx={{ width: 500 }} value={value} onChange={handleChange}>
                <BottomNavigationAction
                    label="Search"
                    value="Search"
                    icon={<SearchIcon />}
                />
                <BottomNavigationAction
                    label="Favorites"
                    value="favorites"
                    icon={<FavoriteBorderIcon />}
                />
                <BottomNavigationAction
                    label="Accounts"
                    value="Accounts"
                    icon={<AccountCircleOutlinedIcon />}
                />

            </BottomNavigation>
        </div>
    )
}
