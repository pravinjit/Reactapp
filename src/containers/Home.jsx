import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import logout from "../actions/logoutUser";
import clearAlert from "../actions/clearAlert";

// import React from 'react';
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import HomeIcon from "@material-ui/icons/Home";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";

import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import LogoutIcon from "@material-ui/icons/HighlightOff";
import VendorIcon from "@material-ui/icons/CardTravel";
import Header from "../components/appbar";
import Nav from "../components/nav";

import axios from "axios";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

function Home(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <List component="nav">
        <ListItem button component="a" href="/home">
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button component="a" href="/add">
          <ListItemIcon>
            <VendorIcon />
          </ListItemIcon>
          <ListItemText primary="Vendors" />
        </ListItem>
        <ListItem
          button
          onClick={(event) => {
            this.logout();
          }}
        >
          <ListItemIcon>
            <LogoutIcon />
          </ListItemIcon>
          <ListItemText primary="Logout" />
        </ListItem>
      </List>
      <Divider />
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header />
      <Nav />

      <main className={classes.content}>
        <div className={classes.toolbar} />

        <Grid container spacing={24}>
          <Grid item xs={3}>
            <Typography>{"Vendor"}</Typography>
          </Grid>
          <Grid item xs={6}></Grid>
          <Grid item xs={3} container justify="flex-end"></Grid>
        </Grid>
        <Grid container spacing={24}>
          <Grid item xs={3}></Grid>
          <Grid item xs={6}></Grid>
          <Grid item xs={3} container justify="flex-end">
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              component="a"
              href="/add-vendor"
            >
              Add Vendor
            </Button>
          </Grid>
        </Grid>
        <br />
        <br />
        <Grid container spacing={24}>
          <Paper className={classes.root}>
            <Table className={classes.table}>
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell numeric>Mobile</TableCell>
                  <TableCell numeric>Phone</TableCell>
                  <TableCell>Address</TableCell>
                  <TableCell>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell component="th" scope="row">
                    name
                  </TableCell>
                  <TableCell numeric>mobile</TableCell>
                  <TableCell numeric>phone</TableCell>
                  <TableCell>address</TableCell>
                  <TableCell>
                    <IconButton
                      className={classes.button}
                      aria-label="Edit"
                      component="a"
                      href={`/edit-vendor/123`}
                    >
                      <EditIcon />
                    </IconButton>
                    <IconButton
                      className={classes.button}
                      aria-label="Delete"
                      onClick={(event) => this.handleClick(event, "123")}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Paper>
        </Grid>
      </main>
    </div>
  );
}

const mapStateToProps = ({ user }) => ({
  user,
});

export default connect(mapStateToProps, { logout, clearAlert })(Home);
