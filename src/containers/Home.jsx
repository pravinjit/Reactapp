import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import { makeStyles } from '@material-ui/core/styles';
import logout from '../actions/logoutUser';
import clearAlert from '../actions/clearAlert';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalOpen: false,
      rentModalOpen:false,
      selectedStation: null,
      showPopUp: false,
      popUpMsg: null
    }
    this.intervalHandle = null;
    //this.droneList = this.droneList.bind(this);
    //this.modalClose = this.modalClose.bind(this);
    //this.handleClick = this.handleClick.bind(this);
    this.handleLogOut = this.handleLogOut.bind(this);
    //this.endFlying = this.endFlying.bind(this);
  }


  async handleLogOut() {
    /* User Logout */
    await this.props.logout();
    this.props.history.push('/login');
  }

  
  render() {
    
    return (
      <div className={useStyles}>
       <Grid container spacing={3}>
         <Grid item xs={12}>
         <Header user={this.props.user} handleLogOut={this.handleLogOut} />
         </Grid>
         <Grid item xs={12} sm={6}>
           
         </Grid>
         <Grid item xs={12} sm={6}>
           
         </Grid>
         <Grid item xs={6} sm={3}>
           
         </Grid>
         <Grid item xs={6} sm={3}>
           
         </Grid>
         <Grid item xs={6} sm={3}>
           
         </Grid>
         <Grid item xs={6} sm={3}>
           
         </Grid>
       </Grid>
     </div>
    )
  }
}

const mapStateToProps = ({ user }) => ({ 
  user 
});

export default connect(mapStateToProps, { logout, clearAlert })(Home);