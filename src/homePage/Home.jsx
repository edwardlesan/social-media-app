import React from "react";
import Navbar from "../navbar/Navbar";
import UserComponent from "../components/UserComponent";
import { useSelector } from "react-redux";
import "./Home.css";

const Home = () => {
  const { _id, picturePath } = useSelector((state) => state.user);

  return (
    <div>
      <Navbar />
      <div className="home_container">
        <UserComponent userId={_id} picturePath={picturePath} />
      </div>
    </div>
  );
};

export default Home;
