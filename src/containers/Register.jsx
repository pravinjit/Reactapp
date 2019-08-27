import React, { Component } from 'react';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import _ from 'lodash';
import RegisterForm from '../components/RegisterForm';
import registerUser from '../actions/registerUser';
//import clearAlert from '../actions/clearAlert';


const options = [
  { value: 'Mr', label: 'Mr' },
  { value: 'Miss', label: 'Miss' },
  { value: 'Dr', label: 'Dr' },
];

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
      phoneErr: false,
      files: []
    }
    this.initialState = this.state;
    this.handleChange = this.handleChange.bind(this);
    this.handleChange = this.handleUpload.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(e){
    this.setState({
      [e.target.name]: e.target.value
    });
  }
 
  handleUpload(files){
    this.setState({
      files: files
    });
  }
  async handleClick(){
    let fields = _.pick(this.state, ['firstName', 'lastName', 'email', 'phone']);
    //console.log(this.state);
    console.log(fields);

    for (let key in fields) {
      this.state[key] === '' ? this.setState({[`${key}Err`]: true}) : this.setState({[`${key}Err`]: false});
    }
    let validEmail = /\S+@\S+\.\S+/.test(this.state.email) ? true : this.setState({emailErr: true});
    if (Object.keys(fields).filter(v => this.state[v] === '').length > 0 || !validEmail) return false;


    await this.props.registerUser(fields, this.props.registrations);
    //if (this.props.alert.type === 'success') this.setState({...this.initialState});
  }
  render() {
    return (
      <div className="user-wrapper">
        <Grid container spacing={0}>
        <Grid className="reg-image" item xs={12} sm={6}></Grid>
          <Grid className="form-block" item xs={12} sm={6}>
            <RegisterForm 
              handleChange={this.handleChange} 
              handleClick={this.handleClick}
              handleUpload={this.handleUpload}
              state={this.state}
              options={options}
            />
            
          </Grid>
         
          
        </Grid>
        
      </div>
    )
  }
}

const mapStateToProps = ({ registrations }) => ({ 
  registrations 
});

export default connect(mapStateToProps, {registerUser})(Register);
//export default Register;