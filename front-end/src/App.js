import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Report from './pages/Report';
import Notifications from './pages/Notifications';
import User from './pages/User';
import Supports from './pages/Supports';
import Galery from './pages/Galery';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/report' component={Report} />
          <Route path='/user' component={User} />
          <Route path='/notifications' component={Notifications} />
          <Route path='/support' component={Supports} />
          <Route path='/galery' component={Galery} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
