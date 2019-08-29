import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Moment from 'react-moment';


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
  //console.log("props.state")
  //console.log(props.list)
  let textStyle = {
    color: 'red',
    textDecoration: "line-through" 
  }
  return (
    <div>
    
    <TextField
        id="outlined-with-placeholder"
        label="Task"
        placeholder="My Task"
        className={classes.textField}
        margin="normal"
        value={props.todovalue}
        name="todovalue"
        onChange={event => props.setTodovalue(event.target.value)}
        variant="outlined"
      />
    <Fab color="primary" aria-label="add" className={classes.fab} onClick={()=>props.addTodoAction()}>
      <AddIcon />
    </Fab>
    <Grid item xs={12} md={4}>
      <List className={classes.root}>
        {props.list.map((value, ival) => {
          const labelId = `checkbox-list-label-${ival}`;
            return value ?  (
            <ListItem key={ival} role={undefined} dense button>
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={value.completedStatus}
                  onChange={event => props.editTodoAction(ival)}
                  disableRipple
                  inputProps={{ 'aria-labelledby': labelId }}
                />
              </ListItemIcon>
              <ListItemText
                id={labelId} primary={ value.completedStatus == true ? <Typography type="body2" style={textStyle}> {value.value}</Typography> : <Typography type="body2" >{value.value} </Typography>}
                secondary={value.completedStatus == true ? <Moment date={value.date} style={textStyle} /> : <Moment date={value.date} /> }
              />
              
              
              <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="comments" onClick={() => props.deleteTodoAction(ival)}>
                    <DeleteIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
            ) : <p> No record</p>;
        })}
      </List>
    </Grid>
    </div>
  )
}