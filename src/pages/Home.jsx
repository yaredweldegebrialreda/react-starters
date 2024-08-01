import React from "react";
import { Link } from "react-router-dom";
import { routeData } from "../routeData";

const Home = () => {
  console.log("I am in Home ");
  return (
    <>
      <ol>
        {routeData.map((route) => {
          return (
            <li key={route.path}>
              <Link to={route.path}>{route.text}</Link>
            </li>
          );
        })}
      </ol>
    </>
  );
};

export default Home;
