import React, { useState }  from 'react';
import { makeStyles } from '@material-ui/core/styles';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';

import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import Grid from '@material-ui/core/Grid';

import Icon from '@material-ui/core/Icon';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

import AddPopup from '../components/AddPopup';


const useStyles = makeStyles(theme => ({
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1)
    },
    fab:{
      margin: theme.spacing(1),  
    }
  }));

  
function AddForm()  {

  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  return (
    <div>
    <AddPopup/>
    <Grid item xs={12} md={4}>
      <List className={classes.root}>
      <ListItem key={0} role={undefined} dense button>
        <ListItemIcon>
          <Checkbox
            edge="start"
            checked={false}
            disableRipple
            inputProps={{ 'aria-labelledby': 1 }}
          />
        </ListItemIcon>
        <ListItemText
          id={1} primary={"pravin"}
          secondary={"Date"}
        />
        
        
        <ListItemSecondaryAction>
          <IconButton color="secondary" aria-label="comments">
            <EditIcon />
          </IconButton>
          <IconButton edge="end" aria-label="comments" >
              <DeleteIcon />
          </IconButton>
          <Button variant="contained" color="primary" className={classes.button} onClick={handleClickOpen}>
            Send
            <Icon >send</Icon>
          </Button>
        </ListItemSecondaryAction>
      </ListItem>
           
      </List>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Share With Friends</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="email"
            label="Email Id"
            type="text"
            fullWidth
          />
          
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Submit
          </Button>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </Grid>
    </div>
  )
}

export default (AddForm);