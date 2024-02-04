import React from "react";
import { Outlet } from "react-router-dom";
import PageContent from "../components/PageContent";

const HomePage = () => {
  return (
    <div>
      <PageContent title="Welcome!">
        <p>Browse all our amazing events!</p>
      </PageContent>
      <Outlet />
    </div>
  );
};

export default HomePage;
