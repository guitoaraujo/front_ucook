import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Show from './pages/Show';

const App = () => {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/recipe/:id" component={Show} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;