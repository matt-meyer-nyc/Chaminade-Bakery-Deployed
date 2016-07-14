import React from 'react';
import { Router, Route, IndexRoute, hashHistory} from 'react-router';

import Main from '../components/Main';
import Home from '../components/Home';
import Header from '../components/Header'

import HomePage from '../components/HomePage'
import ContactContainer from '../containers/ContactContainer';
import Menu from '../components/Menu';
import Story from '../components/Story';
import SpecialtyCakes from '../components/SpecialtyCakes';
import JoinTeamContainer from '../containers/JoinTeamContainer';
import Cakes from '../components/Cakes'
import Drinks from '../components/Drinks'
import Admin from '../components/Admin'
import ListViewContainer from '../containers/ListViewContainer'
import UpdateContainer from '../containers/UpdateContainer'



const routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={Home} />
      <Route path="main" component={Main} />
      <Route path="home-page" component={HomePage} />
      <Route path="contact" component={ContactContainer} />
      <Route path="menu" component={Menu} />
      <Route path="cakes" component={Cakes} />
      <Route path="drinks" component={Drinks} />
      <Route path="story" component={Story} />
      <Route path="specialty-cakes" component={SpecialtyCakes} />
      <Route path="join-team" component={JoinTeamContainer} />
      <Route path="admin" component={ListViewContainer} />
      <Route path="manage" component={UpdateContainer} />
  </Route>
  </Router>
);

export default routes
