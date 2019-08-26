import React, {useEffect} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { PRIMARY_COLOR } from './config';
import Home from './containers/Home';
import Login from './containers/Login';
import Register from './containers/Register';
//import { verifyToken } from './actions/common'

export default (props) => {

  // useEffect(() => {
  //   props.verifyToken()
  // })
  let blueTheme = createMuiTheme({
    palette: {
      primary: PRIMARY_COLOR
    }
  })
  return(
    <ThemeProvider theme={blueTheme}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/Home" component={Home} />> 
          <Route exact path="/register" component={Register} />> 
          <Route exact path="/login" component={Login} />> 
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  )
}


