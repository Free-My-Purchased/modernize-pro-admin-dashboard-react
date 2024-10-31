import CodeDialog from "src/components/shared/CodeDialog";
const FormCustomCode = () => {
    return (
        <>
            <CodeDialog>
                {`

import * as React from 'react';
import {
  Grid,
  Box,
  Typography,
  FormControl,
  MenuItem,
  RadioGroup,
  FormControlLabel,
  Button,
  SliderValueLabelProps,
} from '@mui/material';
import { SliderThumb } from '@mui/material/Slider';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { styled } from '@mui/material/styles';
import { TextField } from '@mui/material';
import { Select } from '@mui/material';
import { Slider } from '@mui/material';
import { Switch } from '@mui/material';
import { Button } from '@mui/material';
import { Typography } from '@mui/material';
import Checkbox, { CheckboxProps } from '@mui/material/Checkbox';
import Radio, { RadioProps } from '@mui/material/Radio';
import { useTheme } from '@mui/material/styles';
import { Card, CardHeader, CardContent, Divider, Box } from '@mui/material';
import { useSelector } from '@/store/hooks';
import { AppState } from '@/store/store';
import { IconVolume, IconVolume2 } from '@tabler/icons-react';
import { Stack } from '@mui/material';

const CustomTextField = styled((props: any) => <TextField {...props} />)(({ theme }) => ({
  '& .MuiOutlinedInput-input::-webkit-input-placeholder': {
    color: theme.palette.text.secondary,
    opacity: '0.8',
  },
  '& .MuiOutlinedInput-input.Mui-disabled::-webkit-input-placeholder': {
    color: theme.palette.text.secondary,
    opacity: '1',
  },
  '& .Mui-disabled .MuiOutlinedInput-notchedOutline': {
    borderColor: theme.palette.grey[200],
  },
}));

const CustomSelect = styled((props: any) => <Select {...props} />)(({}) => ({}));

const CustomSlider = styled(Slider)(({ theme }) => ({
  '& .MuiSlider-rail': {
    height: '9px',
    borderRadius: '9px',
    opacity: '1',
    backgroundColor: theme.palette.grey[200],
  },
  '& .MuiSlider-thumb': {
    borderRadius: '50%',
    backgroundColor: () => theme.palette.secondary.main,
    width: '23px',
    height: '23px',
  },
  '& .MuiSlider-track': {
    height: '9px',
    borderRadius: '9px',
  },
}));

const CustomRangeSlider = styled(Slider)(({ theme }) => ({
  '& .MuiSlider-rail': {
    height: '9px',
    borderRadius: '9px',
    opacity: '1',
    backgroundColor: theme.palette.grey[200],
  },
  '& .MuiSlider-thumb': {
    borderRadius: '50%',
    backgroundColor: () => theme.palette.secondary.main,
    width: '23px',
    height: '23px',
  },
  '& .MuiSlider-track': {
    height: '9px',
  },
}));

const CustomSwitch = styled((props: any) => <Switch {...props} />)(({ theme }) => ({
  '&.MuiSwitch-root': {
    width: '68px',
    height: '49px',
  },
  '&  .MuiButtonBase-root': {
    top: '6px',
    left: '6px',
  },
  '&  .MuiButtonBase-root.Mui-checked .MuiSwitch-thumb': {
    backgroundColor: 'primary.main',
  },
  '& .MuiSwitch-thumb': {
    width: '18px',
    height: '18px',
    borderRadius: '6px',
  },

  '& .MuiSwitch-track': {
    backgroundColor: theme.palette.grey[200],
    opacity: 1,
    borderRadius: '5px',
  },
  '& .MuiSwitch-switchBase': {
    '&.Mui-checked': {
      '& + .MuiSwitch-track': {
        backgroundColor: 'primary',
        opacity: 0.18,
      },
    },
  },
}));

const CustomDisabledButton =  styled((Button))(({ theme })  => ({
  backgroundColor: theme.palette.grey[100]
}));

const CustomOutlinedButton = styled(Button)(({ theme }) => ({
  border: '1px solid {theme.palette.grey[100]}',
  color: theme.palette.text.primary,

  '&:hover': {
    border: theme.palette.mode === 'dark' ? '1px solid {theme.palette.grey[200]}' : '1px solid {theme.palette.grey[300]}' ,
    backgroundColor: theme.palette.grey[100],
    color: theme.palette.text.secondary,
  },
}));

const CustomFormLabel = styled((props: any) => (
  <Typography
    variant="subtitle1"
    fontWeight={600}
    {...props}
    component="label"
    htmlFor={props.htmlFor}
  />
))(() => ({
  marginBottom: '5px',
  marginTop: '25px',
  display: 'block',
}));

const BpIcon = styled('span')(({ theme }) => ({
  borderRadius: 3,
  width: 19,
  height: 19,
  marginLeft: '4px',
  boxShadow:
    theme.palette.mode === 'dark'
      ? '0 0 0 1px {theme.palette.grey[200]}'
      : 'inset 0 0 0 1px {theme.palette.grey[300]}',
  backgroundColor: 'transparent',

  '.Mui-focusVisible &': {
    outline:
      theme.palette.mode === 'dark'
        ? '0px auto {theme.palette.grey[200]}'
        : '0px auto  {theme.palette.grey[300]}',
    outlineOffset: 2,
  },
  'input:hover ~ &': {
    backgroundColor: theme.palette.mode === 'dark' ? theme.palette.primary : theme.palette.primary,
  },
  'input:disabled ~ &': {
    boxShadow: 'none',
    background: theme.palette.grey[100],
  },
}));

const BpCheckedIcon = styled(BpIcon)({
  boxShadow: 'none',
  width: 19,
  height: 19,
  '&:before': {
    display: 'block',
    width: 19,
    height: 19,
    backgroundImage:
      "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath" +
      " fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 " +
      "1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23fff'/%3E%3C/svg%3E\")",
    content: '""',
  },
});


function CustomCheckbox(props: CheckboxProps) {
  return (
    <Checkbox
      disableRipple
      color={props.color ? props.color : 'default'}
      checkedIcon={
        <BpCheckedIcon
          sx={{
            backgroundColor: props.color ? '{props.color}.mai' : 'primary.main',
          }}
        />
      }
      icon={<BpIcon />}
      inputProps={{ 'aria-label': 'Checkbox demo' }}
      {...props}
    />
  );
}

const BpIcon2 = styled('span')(({ theme }) => ({
  borderRadius: '50%',
  width: 21,
  height: 21,
  boxShadow:
    theme.palette.mode === 'dark'
      ? '0 0 0 1px {theme.palette.grey[200]}'
      : 'inset 0 0 0 1px {theme.palette.grey[300]}',
  backgroundColor: 'transparent',
  '.Mui-focusVisible &': {
    outline:
      theme.palette.mode === 'dark'
        ? '0px auto {theme.palette.grey[200]}'
        : '0px auto  {theme.palette.grey[300]}',
    outlineOffset: 2,
  },
  'input:hover ~ &': {
    backgroundColor: theme.palette.primary,
  },
  'input:disabled ~ &': {
    boxShadow: 'none',
    background: theme.palette.grey[100],
  },
}));

const BpCheckedIcon2 = styled(BpIcon2)(({ theme }) => ({
  boxShadow: 'none',
  '&:before': {
    display: 'block',
    width: 21,
    height: 21,
    backgroundImage:
      theme.palette.mode === 'dark'
        ? 'radial-gradient({theme.palette.background.paper},{theme.palette.background.paper} 28%,transparent 32%)'
        : 'radial-gradient(#fff,#fff 28%,transparent 32%)',
    content: '""',
  },
}));


function CustomRadio(props: RadioProps) {
  return (
    <Radio
      disableRipple
      color="default"
      checkedIcon={
        <BpCheckedIcon2
          sx={{
            backgroundColor: props.color ? '{props.color}.main' : 'primary.main',
          }}
        />
      }
      icon={<BpIcon2 />}
      inputProps={{ 'aria-label': 'Checkbox demo' }}
      {...props}
    />
  );
}

function CustomThumbComponent(props: SliderValueLabelProps) {
  const { children, ...other } = props;

  return (
    <SliderThumb {...other}>
      {children}
      <Box
        sx={{
          height: 9,
          width: '2px',
          backgroundColor: '#fff',
        }}
      />
      <Box
        sx={{
          height: '14px',
          width: '2px',
          backgroundColor: '#fff',
          ml: '2px',
        }}
      />
      <Box
        sx={{
          height: 9,
          width: '2px',
          backgroundColor: '#fff',
          ml: '2px',
        }}
      />
    </SliderThumb>
  );
}

    setSelect(event2.target.value);
  };

  const handleChange5 = (event3: any) => {
    setSelect2(event3.target.value);
  };

  const [value, setValue] = React.useState(null);
  const [value2, setValue2] = React.useState(null);

  const [value3, setValue3] = React.useState(30);
  const handleChange6 = (event: any, newValue: any) => {
    setValue3(newValue);
  };

  return (
    <Grid container spacing={3}>
          <Grid item xs={12} sm={12} lg={4}>
            <CustomFormLabel htmlFor="name">Name</CustomFormLabel>
            <CustomTextField id="name" placeholder="Enter text" variant="outlined" fullWidth />
            <CustomFormLabel htmlFor="demo-simple-select">Select Dropdown</CustomFormLabel>
            <CustomSelect
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              onChange={handleChange}
              fullWidth
            >
              <MenuItem value={1}>One</MenuItem>
              <MenuItem value={2}>Two</MenuItem>
              <MenuItem value={3}>Three</MenuItem>
            </CustomSelect>
          </Grid>
          {/* ----------------------------------- */}
          {/* column 2 */}
          {/* ----------------------------------- */}
          <Grid item xs={12} sm={12} lg={4}>
            <CustomFormLabel htmlFor="cname">Company Name</CustomFormLabel>
            <CustomTextField id="cname" placeholder="Enter text" variant="outlined" fullWidth />
            <CustomFormLabel htmlFor="time">Time</CustomFormLabel>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <TimePicker
                value={value2}
                onChange={(newValue) => {
                  setValue2(newValue);
                }}
                renderInput={(params) => (
                  <CustomTextField
                    {...params}
                    fullWidth
                    sx={{
                      '& .MuiSvgIcon-root': {
                        width: '18px',
                        height: '18px',
                      },
                      '& .MuiFormHelperText-root': {
                        display: 'none',
                      },
                    }}
                  />
                )}
              />
            </LocalizationProvider>
          </Grid>
          {/* ----------------------------------- */}
          {/* column 3 */}
          {/* ----------------------------------- */}
          <Grid item xs={12} sm={12} lg={4}>
            <CustomFormLabel htmlFor="disabled">Industry Type</CustomFormLabel>
            <CustomTextField
              id="disabled"
              placeholder="Disabled filled"
              variant="outlined"
              fullWidth
              disabled
              sx={{
                '& .MuiOutlinedInput-notchedOutline': {
                  borderColor: (theme: any) =>
                    '{theme.palette.mode === 'dark'
                        ? 'rgba(255, 255, 255, 0.12) !important'
                        : '#dee3e9 !important'
                    }',
                },
              }}
            />
            <CustomFormLabel htmlFor="date">Date</CustomFormLabel>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DateTimePicker
                renderInput={(props) => (
                  <CustomTextField
                    {...props}
                    fullWidth
                    sx={{
                      '& .MuiSvgIcon-root': {
                        width: 18,
                        height: 18,
                      },
                      '& .MuiFormHelperText-root': {
                        display: 'none',
                      },
                    }}
                  />
                )}
                value={value}
                onChange={(newValue) => {
                  setValue(newValue);
                }}
              />
            </LocalizationProvider>
          </Grid>
          {/* ----------------------------------- */}
          {/* column 4 */}
          {/* ----------------------------------- */}
          <Grid item xs={12} sm={12} lg={12}>
            <CustomFormLabel>Lorem ipsum dolor sit amet</CustomFormLabel>
            <RadioGroup aria-label="gender" defaultValue="radio1" name="radio-buttons-group">
              <Grid container>
                <Grid item xs={12} sm={4} lg={4}>
                  <FormControl component="fieldset">
                    <FormControlLabel value="radio1" control={<CustomRadio />} label="Male" />
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={4} lg={4}>
                  <FormControl component="fieldset">
                    <FormControlLabel value="radio2" control={<CustomRadio />} label="Female" />
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={4} lg={4}>
                  <FormControl component="fieldset">
                    <FormControlLabel
                      value="radio3"
                      control={<CustomRadio disabled />}
                      label="Disabled"
                    />
                  </FormControl>
                </Grid>
              </Grid>
            </RadioGroup>
          </Grid>
          {/* ----------------------------------- */}
          {/* column 5 */}
          {/* ----------------------------------- */}
          <Grid item xs={12} sm={12} lg={12}>
            <CustomFormLabel>Industry Type</CustomFormLabel>
            <RadioGroup aria-label="gender" defaultValue="radio1" name="radio-buttons-group">
              <Grid container>
                <Grid item xs={12} sm={4} lg={4}>
                  <FormControlLabel
                    control={<CustomCheckbox defaultChecked />}
                    label="Enter text"
                  />
                </Grid>
                <Grid item xs={12} sm={4} lg={4}>
                  <FormControlLabel control={<CustomCheckbox />} label="Enter text" />
                </Grid>
                <Grid item xs={12} sm={4} lg={4}>
                  <FormControlLabel
                    disabled
                    control={<CustomCheckbox disabled />}
                    label="Disabled"
                  />
                </Grid>
              </Grid>
            </RadioGroup>
          </Grid>
          {/* ----------------------------------- */}
          {/* column 6 */}
          {/* ----------------------------------- */}
          <Grid item xs={12} sm={12} lg={4}>
            <CustomFormLabel>Slider</CustomFormLabel>
            <CustomRangeSlider
              slots={{ thumb: CustomThumbComponent }}
              getAriaLabel={(index) => (index === 0 ? 'Minimum price' : 'Maximum price')}
              defaultValue={[20, 40]}
            />
            <Grid container spacing={2} mt={1}>
              <Grid item xs={12} sm={6} lg={6}>
                <CustomSelect id="range1" value={select1} onChange={handleChange4} fullWidth>
                  <MenuItem value={1}>750</MenuItem>
                  <MenuItem value={2}>850</MenuItem>
                  <MenuItem value={3}>950</MenuItem>
                </CustomSelect>
              </Grid>
              <Grid item xs={12} sm={6} lg={6}>
                <CustomSelect id="rang2" value={select2} onChange={handleChange5} fullWidth>
                  <MenuItem value={1}>950</MenuItem>
                  <MenuItem value={2}>1050</MenuItem>
                  <MenuItem value={3}>1150</MenuItem>
                </CustomSelect>
              </Grid>
            </Grid>
            <CustomFormLabel sx={{ mt: 3 }}>Volume</CustomFormLabel>
            <CustomSlider aria-label="Volume" value={value3} onChange={handleChange6} />
            <Box display="flex" alignItems="stretch">
              <Typography>
                <IconVolume2 width={20} />
              </Typography>
              <Box ml="auto">
                <Typography>
                  <IconVolume width={20} />
                </Typography>
              </Box>
            </Box>
          </Grid>

          {/* ----------------------------------- */}
          {/* column 7 */}
          {/* ----------------------------------- */}

          <Grid item xs={12} sm={12} lg={12}>
            <CustomFormLabel>Switch</CustomFormLabel>
            <Grid container spacing={0}>
              <Grid item xs={12} sm={6} lg={3}>
                <FormControlLabel control={<CustomSwitch />} label="Enter text" />
              </Grid>
              <Grid item xs={12} sm={6} lg={3}>
                <FormControlLabel control={<CustomSwitch defaultChecked />} label="Enter text" />
              </Grid>
              <Grid item xs={12} sm={6} lg={3}>
                <FormControlLabel
                  control={
                    <CustomSwitch
                      disabled
                      sx={{
                        '& .MuiSwitch-switchBase.Mui-disabled+.MuiSwitch-track': {
                          opacity: 1,
                        },
                      }}
                    />
                  }
                  label="Disabled"
                />
              </Grid>
              <Grid item xs={12} sm={6} lg={3}>
                <FormControlLabel
                  control={
                    <CustomSwitch
                      defaultChecked
                      disabled
                      sx={{
                        '& .MuiSwitch-switchBase.Mui-checked.Mui-disabled': {
                          opacity: 0.5,
                        },
                      }}
                    />
                  }
                  label="Disabled"
                />
              </Grid>
            </Grid>
            {/* button */}
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={2}
              justifyContent="space-between"
              mt={2}
            >
              <Stack spacing={1} direction="row">
                <Button variant="contained" color="primary">
                  Add New
                </Button>
                <CustomDisabledButton variant="contained" disabled>
                  Add New
                </CustomDisabledButton>
                <CustomOutlinedButton variant="outlined">Add New</CustomOutlinedButton>
              </Stack>
              <Stack direction="row" spacing={1}>
                <Button variant="contained" color="secondary">
                  Add New
                </Button>
                <Button variant="contained" color="success">
                  Add New
                </Button>
              </Stack>
            </Stack>
          </Grid>
        </Grid>
  );
`}
            </CodeDialog>
        </>
    );
};

export default FormCustomCode;