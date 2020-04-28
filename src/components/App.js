import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './Navbar';
import SidebarToggleProvider from '../context/SidebarToggleProvider';
import PublishersProvider from '../context/PublishersProvider';
import SideBar from './SideBar';
import Home from './Home';
import Publishers from './Publishers';


const App = () => {
  return (
    <Router>
      <SidebarToggleProvider>
        <Navbar />
        <SideBar />
        <PublishersProvider>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/publishers" component={Publishers} />
          </Switch>
        </PublishersProvider>
      </SidebarToggleProvider>
    </Router>
  );
}

export default App;



