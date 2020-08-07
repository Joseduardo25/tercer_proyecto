import React, { useState }from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import { deepOrange } from '@material-ui/core/colors';

import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Button from '@material-ui/core/Button';

function App() {
  const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    orange: {
      color: theme.palette.getContrastText(deepOrange[500]),
      backgroundColor: deepOrange[500],
    },
    margin: {
      margin: theme.spacing(1),
    },
    root_button: {
      '& > *': {
        margin: theme.spacing(1),
      },
    }
  }));
  const classes = useStyles();
  const usuario = []
  const[valueInput, setValueInput] = useState('')
  const[array,setArray] = useState(usuario)
  const onChangeTextField = (e) => {
    setValueInput(e.target.value)
  }
  const onClickButton = () => {
    const copyArray = [...array]
    copyArray.push(valueInput)
    setArray(copyArray)
    setValueInput('')
  }
  const onSubmitForm = (e) => {
    e.preventDefault()
    onClickButton()
  }

    return (
      <div>
       <form onSubmit={onSubmitForm}>
        <div className={classes.root}>
          {array.map((e)=>(<Avatar alt={e} src={e} className={classes.orange} />))}
        </div>
        <TextField
          className={classes.margin}
          id="input-with-icon-textfield"
          label="Nombre"
          value={valueInput}
          onChange={onChangeTextField}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            ),
          }}
        />
        <div className={classes.root_button}>
          <Button onClick={onClickButton} variant="contained" color="primary" href="#contained-buttons">
            Link
          </Button>
        </div>
      </form>
      </div>
    );
  
}

export default App;
