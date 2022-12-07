import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Report from './pages/Report';
import Notifications from './pages/Notifications';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/report' component={Report} />
          <Route path='/notifications' component={Notifications} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
