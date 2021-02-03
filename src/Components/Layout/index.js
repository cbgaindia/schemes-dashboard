import React, { useState, useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Header from "../Header";
import SchemesDashboardHomepage from "../SchemesDashboardHomepage";
import SchemeDashboard from "../SchemeDashboard";
import Footer from "../Footer";
import "./index.css";

const Layout = () => {

  useEffect(() => {
  }, []);

  return (
    <div className="app-container">
      {/* Here comes the Header */}
      <Header />
      <div className="app-content-wrapper position-relative">
        {/* Here comes the main app content */}
        <Switch>
          <Route
            path="/"
            render={(props) => (
              <SchemesDashboardHomepage
                {...props}
              />
            )}
            exact
          />
          <Route
            path="/scheme/:scheme_slug/:indicator_slug"
            render={(props) => (
              <SchemeDashboard
                {...props}
              />
            )}
          />
          <Redirect to="/" />
        </Switch>
      </div>
      {/* Here comes the footer */}
      <Footer />
    </div>
  );
};

export default Layout;
