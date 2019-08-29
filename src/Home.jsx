import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { PRIMARY_COLOR } from './config';
import Home from './containers/Home';
import Login from './containers/Login';
import Register from './containers/Register';
//import { verifyToken } from './actions/common'
import { store } from './store';

export default (props) => {

  // useEffect(() => {
  //   props.verifyToken()
  // })

  const state = store.getState();
  
  let blueTheme = createMuiTheme({
    palette: {
      primary: PRIMARY_COLOR
    }
  })
  return(
    <ThemeProvider theme={blueTheme}>
      <BrowserRouter>
        <Switch>
        
          <Route exact path="/home" component={Home} /> 
          <Route exact path="/add" component={Home} /> 
          <Route exact path="/list" component={Home} />
        
          <Route async exact path="/register" component={Register} />
          {state.user.email === undefined &&
            <Route async exact path={["/", "/login"]} component={Login} />
          }
          
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  )
}


