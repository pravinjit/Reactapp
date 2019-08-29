import React, { useState } from 'react';
import { connect } from 'react-redux';
//import { BrowserRouter, Route, Switch } from 'react-router-dom';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AddBoxIcon from '@material-ui/icons/AddBox';
import ViewListIcon from '@material-ui/icons/ViewList';
import HomeIcon from '@material-ui/icons/Home';


import { store } from '../store';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Propic from '../assets/propic.jpg';
import _ from 'lodash';

import AddForm from '../components/AddForm';
import addTodo from '../actions/addTodo';
import editTodo from '../actions/editTodo';
import deleteTodo from '../actions/deleteTodo';
import logout from '../actions/logoutUser';
import clearAlert from '../actions/clearAlert';



const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  floatleft:{
    justifyContent: 'flex-end'
  }
}));

function Home(props) {
  const fromStore = store.getState();
  const [state , setState] = useState(fromStore);
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [todovalue , setTodovalue] = useState("");
  

  function handleListItemClick(event, index) {
    setSelectedIndex(index);
    index === 1 ? props.history.push('/add') : index === 2 ? props.history.push('/list') : props.history.push('/home')
  }
  
  function handleDrawerOpen() {
    setOpen(true);
  }

  function handleDrawerClose() {
    setOpen(false);
  }

  let handleLogOut = () => {
    props.logout();
    props.history.push('/login');
  }

  async function addTodoAction(){
    const saveData = {};
    saveData.value = todovalue;
    saveData.date = new Date();
    saveData.completedStatus = false;
    await props.addTodo(saveData);
    setTodovalue("");
  }

 async function editTodoAction(ival){
    
     _.update(state.todolist, ival, function(n){
      n.completedStatus === true ? n.completedStatus = false : n.completedStatus = true; 
      return n;
    })
    
    await props.editTodo(state.todolist);
    //setState(state);
    
  }
  
  async function deleteTodoAction(index){

     _.unset(state.todolist, index);
     await props.deleteTodo(state.todolist);
    //console.log(fromStore);

    
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar justify="flex-end">
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <div className={classes.floatleft}>
            <Avatar alt={state.user.firstName} src={Propic} />
            Hi {state.user.firstName} <Button onClick={()=>handleLogOut()} size="small" variant="contained">LogOut</Button>
          </div>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
        open={open}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            Welcome
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
        <Divider />
        
        <List component="nav" aria-label="main mailbox folders">
          <ListItem
            button
            selected={selectedIndex === 0}
            onClick={event => handleListItemClick(event, 0)}
          >
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>

           <ListItem
            button
            selected={selectedIndex === 1}
            onClick={event => handleListItemClick(event, 1)}
          >
            <ListItemIcon>
              <AddBoxIcon />
            </ListItemIcon>
            <ListItemText primary="Add" />
          </ListItem>

          <ListItem
            button
            selected={selectedIndex === 2}
            onClick={event => handleListItemClick(event, 2)}
          >
            <ListItemIcon>
              <ViewListIcon />
            </ListItemIcon>
            <ListItemText primary="List" />
          </ListItem>
        </List>
        <Divider />
       
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Typography paragraph>
          Welcome to Home page
        </Typography> 
        <AddForm todovalue = {todovalue} setTodovalue={setTodovalue} addTodoAction={addTodoAction} list={state.todolist} editTodoAction={editTodoAction} deleteTodoAction={deleteTodoAction}/>
      </main>
    </div>
  );
};

const mapStateToProps = ({ user }) => ({ 
  user 
});

export default connect(mapStateToProps, {logout, clearAlert, addTodo, editTodo, deleteTodo })(Home);
