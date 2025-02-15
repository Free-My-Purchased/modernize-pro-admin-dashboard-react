import React from 'react';
import { styled } from '@mui/material/styles';
import { OutlinedInput } from '@mui/material';

const CustomOutlinedInput = styled((props) => <OutlinedInput {...props} />)(({ theme }) => ({
  '& .MuiOutlinedInput-input::-webkit-input-placeholder': {
    color: '#767e89',
    opacity: '1',
  },
  '& .MuiOutlinedInput-notchedOutline': {
    borderColor: `${theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.12)' : '#dee3e9'}`,
  },
  '& .MuiTypography-root': {
    color: '#767e89',
  },
  '& .MuiOutlinedInput-input.Mui-disabled': {
    backgroundColor: `${theme.palette.mode === 'dark' ? 'rgba(0, 0, 0, 0.12) ' : '#f8f9fb '}`,
  },
  '& .MuiOutlinedInput-input.Mui-disabled::-webkit-input-placeholder': {
    color: '#767e89',
    opacity: '1',
  },
}));

export default CustomOutlinedInput;
