import React, { memo, useEffect } from "react";
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import Detail from "./view/Detail";
import Home from "./view/Home";
import SignIn from "./view/SignIn";
import SignUp from "./view/SignUp";
import { ThemeProvider } from "@material-ui/styles";
import theme from './Theme/index';
import { useDispatch, useSelector } from "react-redux";
import { fetchMe } from "./store/action/auth";
import InfoUser from "./components/Header/InfoUser";
import { AuthRoute, PrivateRoute } from "./HOCs/Route";

function App() {
  const me = useSelector(state => {
    return state.me
  })
  const dispatch = useDispatch();
  useEffect(() => {

    const token = localStorage.getItem('login');
    if (token) {
      dispatch(fetchMe);
    }
  }, [dispatch])
  // {/* //! có Token thì return về HOME
  // {/* //! auth là không có token */ => về redirect
  // } có token thì return về home, không thì về * /}
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Switch>
          <Route path="/user" component={InfoUser} />
          <Route exact path="/" component={Home} redirectPath="/signin" />

          <AuthRoute path="/signin" component={SignIn} redirectPath="/" />
          <AuthRoute path="/signup" component={SignUp} redirectPath="/" />
          <Route path="/detail/:id" component={Detail} />
        </Switch>
      </ThemeProvider>
    </BrowserRouter>
  );


}




export default App;
