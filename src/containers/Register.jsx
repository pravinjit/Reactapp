import React, { Component } from 'react';
//import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import _ from 'lodash';
import RegisterForm from '../components/RegisterForm';
//import clearAlert from '../actions/clearAlert';
//import registerUser from '../actions/registerUser';

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      firstNameErr: false,
      lastNameErr: false,
      emailErr: false,
      phoneErr: false
    }
    this.initialState = this.state;
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(e){
    this.setState({
      [e.target.name]: e.target.value
    });
  }
 
  handleClick(){
    let fields = _.pick(this.state, ['firstName', 'lastName', 'email', 'phone']);
    console.log(this.state);
    //console.log(fields);
  }
  render() {
    return (
      <div className="user-wrapper">
        <Grid container spacing={0}>
          
          <Grid className="form-block" item xs={12} sm={6}>
            <RegisterForm 
              handleChange={this.handleChange} 
              handleClick={this.handleClick}
              state={this.state}
            />
          </Grid>
        </Grid>
      </div>
    )
  }
}

// const mapStateToProps = ({ alert, user, registrations }) => ({ 
//   alert, user, registrations 
// });

//export default connect(mapStateToProps, {alert, user, registrations  })(Register);
export default Register;