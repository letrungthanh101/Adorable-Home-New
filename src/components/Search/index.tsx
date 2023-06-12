import React from 'react'
import { styled, alpha } from '@mui/material/styles';
import { Box, Button, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import "./search.css"
export default function Search() {
  return (
    <Button startIcon={<SearchIcon/>} variant='outlined'>
       Bắt đầu tìm kiếm...
    </Button>
  )
}
