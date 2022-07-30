import './App.css';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Landing from './components/Landing/Landing.jsx';
import React from 'react';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import Country from './components/Country/Country';
import CreateActivity from './components/CreateActivity/CreateActivity.jsx';

function App() {
  return (
    <Router>
      <div className='App'>
        <Switch>
          <Route path='/' exact component={Landing} />
          <React.Fragment>
            <NavBar />
            <Route path='/home' exact component={Home} />
            <Route path='/country/:id' component={Country} />
            <Route path='/create-activity' component={CreateActivity} />
          </React.Fragment>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
