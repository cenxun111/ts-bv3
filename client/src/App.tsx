import React,{useEffect} from "react";
import { BrowserRouter as Router, Route,Redirect, Switch } from "react-router-dom";
import {useDispatch, useSelector } from "react-redux";
import Header from "./components/maincontent/header";
import { RootState } from "./redux/store";
import Login from './components/auth/login'
import Register from "./components/auth/register";
// import Footer from './components/global/Footer'
import Main from "./components/maincontent/MainCon";
import { refreshToken } from "./redux/authAction";
import Profile from "./components/maincontent/profile";
const App = () => {
  const  dispatch = useDispatch()
  const user = useSelector((state: RootState)=>state.login.userData)
  const registerSuc = useSelector((state: RootState)=>state.login.reSuccess)
  useEffect(() => {
    dispatch(refreshToken())
},[dispatch])
  return (
    <div className="container">
      <Router>
        <Header />

        <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route path="/login">
            {!user.token ? <Login/> : <Redirect to ="/"/>}
          </Route>
          {/* <Route exact path="/" component={PageRender} />
          <Route exact path="/:page" component={PageRender} />
          <Route exact path="/:page/:slug" component={PageRender} /> */}
          {/* <Route path="/login">
            <Login />
          </Route> */}
          <Route path="/register">
            {!registerSuc ? <Register />:<Redirect to ="login"/>}
          </Route>
          <Route path="/user_info/:username">
            <Profile/>
          </Route>

        </Switch>
        {/* 
        <Footer/> */}
      </Router>
    </div>
  );
};

export default App;
