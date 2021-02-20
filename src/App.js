import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Views/Home";
import Login from "./Views/User/Login";
import Signup from "./Views/User/Signup";
import Dashboard from "./Views/User/Dashboard";
import LoginHealthcare from "./Views/Healthcare/LoginHealthcare";
import SignupHealthcare from "./Views/Healthcare/SignupHealthcare";
import DashboardHealthcare from "./Views/Healthcare/DashboardHealthcare";
import { useEffect } from "react";
import { Provider } from "react-redux";
import store from "./Redux/store";
import { ToastContainer, toast } from "react-toastify";
toast.configure();

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Switch>
            <Route path="/" exact component={Home} />
            {/* User routes */}
            <Route path="/user/login" component={Login} />
            <Route path="/user/signup" component={Signup} />
            <Route path="/user/:slug" component={Dashboard} />
            {/* Healthcare worker routes */}
            <Route path="/healthcare/login" component={LoginHealthcare} />
            <Route path="/healthcare/signup" component={SignupHealthcare} />
            <Route path="/healthcare/:slug" component={DashboardHealthcare} />
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
