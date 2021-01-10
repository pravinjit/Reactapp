import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import { PRIMARY_COLOR } from "./config";
import Home from "./containers/Home";
import Login from "./containers/Login";
import Register from "./containers/Register";
import { AddVendor } from "./components/Add";
import Helmet from "react-helmet";

function App() {
  let blueTheme = createMuiTheme({
    palette: {
      primary: PRIMARY_COLOR,
    },
  });
  return (
    <ThemeProvider theme={blueTheme}>
      <Helmet>
        <title>Task Managment</title>
      </Helmet>
      <BrowserRouter>
        <Switch>
          <Route exact path={["/", "/login"]} component={Login} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/add" component={AddVendor} />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}
export default App;
