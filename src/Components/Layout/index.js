import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Header from '../Header';
import SchemesDashboardHomepage from '../SchemesDashboardHomepage';
import SchemeDashboard from '../SchemeDashboard';
import Footer from '../Footer';
import './index.css';

const Layout = () => (
  <div className="app-container">
    <Header />
    <div className="app-content-wrapper position-relative">
      <Switch>
        <Route
          path="/"
          render={(props) => <SchemesDashboardHomepage {...props} />}
          exact
        />
        <Route
          path="/scheme/:scheme_slug/:indicator_slug"
          render={(props) => <SchemeDashboard {...props} />}
        />
        <Route
          path="/scheme/:scheme_slug"
          render={(props) => <SchemeDashboard {...props} />}
        />

        <Redirect to="/" />
      </Switch>
    </div>
    <Footer />
  </div>
);

export default Layout;
