import React, { Component } from 'react';
import moment from "moment";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';


import NoMatch from "./pages/no-match";
import PortfolioDetail from "./portfolio/portfolio-detail";
import NavigationContainer from './navigation/navigation-container';
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import Blog from './pages/blog';

export default class App extends Component {

  render() {
    return (
      <div className='app'>

        <Router>
          <div>
            <h1>Aaron Harrison Portfolio</h1>
            <div>The day started {moment().startOf('day').fromNow()}</div>

            < NavigationContainer />

            <Switch>
              <Route exact path="/" component={Home} />
              <Route path='/about' component={About} />
              <Route path='/contact' component={Contact} />
              <Route path='/blog' component={Blog} />
              <Route path='/portfolio/:slug' component={PortfolioDetail} />
              <Route component={NoMatch} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}
