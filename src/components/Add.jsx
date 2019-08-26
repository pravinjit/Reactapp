import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles(theme => ({
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1)
    },
    fab:{
      margin: theme.spacing(1),  
    }
  }));

export default props => {
  const classes = useStyles();
  return (
    <div>
    
    <TextField
        id="outlined-with-placeholder"
        label="Task"
        placeholder="My Task"
        className={classes.textField}
        margin="normal"
        variant="outlined"
      />
      <Fab color="primary" aria-label="add" className={classes.fab}>
        <AddIcon />
      </Fab>
    </div>
  )
}