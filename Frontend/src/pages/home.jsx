import React from "react";
import { Helmet } from "react-helmet";
import Home from "../section/landing/home";

const HomePage = () => {
  return (
    <div>
      <Helmet>
        <title>Home | Lyra</title>
        <meta
          name="description"
          content="Welcome to Lyra - Your gateway to advanced AI solutions."
        />
      </Helmet>
      <Home />
    </div>
  );
};

export default HomePage;
