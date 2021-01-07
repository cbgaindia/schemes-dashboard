import React from "react";
import { Route, Switch } from 'react-router-dom';

import Header from "../Header";
import SchemesDashboardHomepage from "../SchemesDashboardHomepage"
import SchemeDashboard from "../SchemeDashboard"
import Footer from "../Footer";

import "./index.css";

const Layout = () => {
  return (
    <div className="app-container">
      {/* Here comes the Header */}
      <Header />
      <div className="app-content-wrapper">
         {/* Here comes the main app content */}
        <Switch>
          <Route path="/" component={SchemesDashboardHomepage} exact />
          <Route path="/scheme" component={SchemeDashboard} />
        </Switch>
      </div>
      {/* Here comes the footer */}
      <Footer />
    </div>
  );
};

export default Layout;
