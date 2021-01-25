import React from 'react';
import {
  FormControl, 
  InputLabel, 
  Select, 
  Button, 
  MenuItem, 
  FormHelperText, 
  createStyles,
  makeStyles
} from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      "&.MuiFormHelperText-root.Mui-error": {
        color: 'red', fontWeight: 'bold' 
      }
    },
    button: {
      marginTop: '16px'
    }
  })
);

export const JobForm = ({onSubmit}) => {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const locations = ['Chicago', 'San Francisco', 'Phoenix', 'London', 'Beijing', 'Paris'];
  const descriptions = ['Javascript', 'Java', 'Python', 'React', 'Ruby', 'Go'];
  const [form, setForm] = React.useState({location: '', description: ''});
  const [submitted, setSubmitted] = React.useState(false);

  const handleChange = (name) => (event) => {
    setForm({ ...form, [name]: event.target.value });
  }

  const handleClick = () => {
    setSubmitted(true);
    if (form.location || form.description) {
      onSubmit(form);
    }
  }

  const invalid = !form.location && !form.description; 

  return (
    <div>
      <h2>Search Form</h2>
      <form>
        <FormControl required fullWidth>
          <InputLabel id="location">Location</InputLabel>
          <Select labelId="location" value={form.location} onChange={handleChange('location')}>
              <MenuItem value="">Select a Location</MenuItem>
            {locations.map(location => 
              <MenuItem key={location} value={location.toLowerCase()}>{location}</MenuItem>)}
          </Select>
          <FormHelperText error={submitted} className={invalid? classes.root : ''}>
            Please, select a location.
          </FormHelperText>
        </FormControl>

        <FormControl required fullWidth>
          <InputLabel id="description">Description</InputLabel>
          <Select labelId="description" value={form.description} onChange={handleChange('description')}>
            <MenuItem value="">Select a Description</MenuItem>
            {descriptions.map(description => 
              <MenuItem key={descriptions} value={description.toLowerCase()}>{description}</MenuItem>)}
          </Select>
          <FormHelperText error={submitted} className={invalid ? classes.root : ''}>
            Please, select a description.
          </FormHelperText>
        </FormControl>
        <FormControl fullWidth={isMobile} className={classes.button}>
          <Button onClick={handleClick} color="primary" variant="contained">Search</Button>
        </FormControl>
      </form>
    </div>
  );
}