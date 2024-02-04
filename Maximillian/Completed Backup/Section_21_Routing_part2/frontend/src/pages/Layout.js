import React, { Fragment } from "react";
import { NavLink, Outlet, useNavigation } from "react-router-dom";
import NewsletterSignup from "../components/NewsletterSignup";
import classes from "../components/MainNavigation.module.css";

export const Layout = () => {
  const navigation = useNavigation();
  return (
    <Fragment>
      <header className={classes.header}>
        <nav style={{ backgroundColor: "gray", height: "auto" }}>
          <NavLink
            className={({ isActive }) =>
              isActive ? "navLink active" : "navLink"
            }
            to="/"
          >
            Home page
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "navLink active" : "navLink"
            }
            to="events"
            // end={true}
          >
            Event page
          </NavLink>
          <NavLink
            to="/newsletter"
            className={({ isActive }) =>
              isActive ? "navLink active" : "navLink"
            }
          >
            Newsletter
          </NavLink>
        </nav>
        <NewsletterSignup />
      </header>
      {navigation.state === "loading" && <p>Loading...</p>}
      <div>
        <Outlet />
      </div>
    </Fragment>
  );
};
