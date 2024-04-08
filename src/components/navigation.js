import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from './App'; // Importez votre première page
import PageLogements from './PageLogements'; // Importez votre deuxième page

function Browser() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/second" component={PageLogements} />
      </Switch>
    </Router>
  );
}

export default Browser;