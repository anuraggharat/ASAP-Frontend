import "./App.css";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Views/Home";
import Login from "./Views/User/Login";
import Signup from "./Views/User/Signup";
import Dashboard from "./Views/User/Dashboard";
import LoginHealthcare from "./Views/Healthcare/LoginHealthcare";
import SignupHealthcare from "./Views/Healthcare/SignupHealthcare";
import DashboardHealthcare from "./Views/Healthcare/DashboardHealthcare";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          {/* User routes */}
          <Route path="/user/login" component={Login} />
          <Route path="/user/signup" component={Signup} />
          <Route path="/user/:slug" component={Dashboard} />
          {/* Healthcare worker routes */}
          <Route path="/healthcare/login" component={Login} />
          <Route path="/healthcare/signup" component={SignupHealthcare} />
          <Route path="/healthcare/:slug" component={DashboardHealthcare} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
