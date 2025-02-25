import React from "react";
import { Link } from "react-router-dom";
import './index.css';

const Home = () => {
  return (
    <div className="bg">
      <h1>Welcome to the Home Page</h1>
      <nav>
        <ul>
          <li>
            <Link to="/register">Register</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Home;
