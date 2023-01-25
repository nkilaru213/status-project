import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./Components/Header";
import RegisterForm from "./Components/RegisterForm";
import LoginForm from "./Components/LoginForm";
import Allincidents from "./Pages/AllIncidentsPage";
import ProfilePage from "./Pages/ProfilePage";
import Home from "./Components/Home";
import ResetPassword from "./Pages/ResetPasswordPage";
import ResetPasswordPage from "./Pages/ResetPasswordPage";

function App() {
  return (
    <div className='App'>
      <Router>
        <Header />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/register' component={RegisterForm} />
          <Route path='/login' component={LoginForm} />
          <Route path='/profile' exact component={ProfilePage} />
          <Route path='/allincidents' component={Allincidents} />
          <Route path='/resetpassword/:id' component={ResetPasswordPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
