import React from "react";
import Navbar from "../navbar/Navbar";
import UserComponent from "../components/UserComponent";
import { useSelector } from "react-redux";
import "./Home.css";
import NewPost from "../components/NewPost";

const Home = () => {
  const { _id, picturePath } = useSelector((state) => state.user);

  return (
    <div>
      <Navbar />
      <div className="home_container">
        <UserComponent userId={_id} picturePath={picturePath} />
        <div className="home_feed">
          <NewPost picturePath={picturePath} />
        </div>
        <div
          style={{
            width: "300px",
            height: "600px",
            backgroundColor: "#f5f5f5",
            borderRadius: "10px",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Home;
