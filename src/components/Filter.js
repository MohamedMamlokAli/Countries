import React,{useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
const currencies = [
  {
    value: 'All',
    label: 'All',
  },
  {
    value: 'EU',
    label: 'Europe',
  },
  {
    value: 'LBL',
    label: 'Asia',
  },
  {
    value: 'Afr',
    label: 'Africa',
  },{
    value: 'LCS',
    label: 'America',
  },{
    value: 'OCE',
    label: 'Oceania',
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  colors:{
   backgroundColor:"white"
  }
}));

const Filter = () => {
   const classes = useStyles();
  const [region, setRegion] = useState('All');

  const handleChange = (event) => {
    setRegion(event.target.value);
  };

 return (
    <form className={classes.root} noValidate autoComplete="off">
      <div className="">
        <TextField
          id="standard-select-region"
          select
          value={region}
          onChange={handleChange}
           className={classes.colors}
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </div>
    </form>
 )
}

export default Filter
