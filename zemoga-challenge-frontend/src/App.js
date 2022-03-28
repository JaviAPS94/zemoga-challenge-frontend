import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { About } from './components/About';
import { Navbar } from './components/Navbar';
import { Portfolio } from './components/Portfolio';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container p-4">
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/" component={Portfolio} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
