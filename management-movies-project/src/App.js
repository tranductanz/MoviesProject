import React, { useEffect } from "react";
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import { ThemeProvider } from '@material-ui/core/styles';
import theme from "./Theme";
import InfoUser from "./components/Header/InfoUser";
import { useDispatch } from "react-redux";
import { fetchMe } from "./store/action/auth";
import { AuthRoute, PrivateRoute } from "./HOCs/Route";
import AddUser from "./AddNew";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {

    const token = localStorage.getItem('login');
    if (token) {
      dispatch(fetchMe);
    }
  }, [dispatch])
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Switch>
          <Route path="/addnew" component={AddUser} />
          <Route path="/user/" component={InfoUser} redirectPath="/login" />
          <PrivateRoute exact path="/" component={Home} redirectPath="/login" />
          <AuthRoute path="/login" component={Login} redirectPath="/" />
        </Switch>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
