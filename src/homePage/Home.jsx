import React from "react";
import Navbar from "../navbar/Navbar";
import UserComponent from "../components/UserComponent";
import { useSelector } from "react-redux";
import "./Home.css";
import NewPost from "../components/NewPost";
import FriendList from "../components/FriendList";

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
        <FriendList userId={_id} />
      </div>
    </div>
  );
};

export default Home;
