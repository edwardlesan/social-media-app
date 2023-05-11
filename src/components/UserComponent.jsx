import "./UserComponent.css";
import {
  ManageAccountsOutlined,
  LocationOnOutlined,
  WorkOutlineOutlined,
  FacebookOutlined,
  Twitter,
  Instagram,
  LinkedIn,
} from "@mui/icons-material";
import { Divider } from "@mui/material";
import UserImage from "./UserImage";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const UserComponent = ({ userId, picturePath }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const token = useSelector((state) => state.token);

  const getUser = async () => {
    const response = await fetch(`http://localhost:3001/users/${userId}`, {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await response.json();
    setUser(data);
  };

  useEffect(() => {
    getUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!user) {
    return null;
  }

  const { firstName, lastName, location, occupation, friends } = user;

  return (
    <div className="user_container">
      {/* FIRST ROW */}
      <div className="user_bio" onClick={() => navigate(`/profile/${userId}`)}>
        <div className="user_bio_content">
          <UserImage image={picturePath} />
          <div className="user_bio_name">
            <h4>
              {firstName} {lastName}
            </h4>
            <p>{friends.length} friends</p>
          </div>
        </div>
        <ManageAccountsOutlined
          sx={{
            cursor: "pointer",
            color: "#2c5784",
            "&:hover": { transform: "scale(1.1)" },
          }}
        />
      </div>

      <Divider />

      {/* SECOND ROW */}
      <div className="user_about">
        <div className="user_about_location">
          <LocationOnOutlined fontSize="medium" sx={{ color: "#2c5784" }} />
          <p>{location}</p>
        </div>
        <div className="user_about_occupation">
          <WorkOutlineOutlined fontSize="medium" sx={{ color: "#2c5784" }} />
          <p>{occupation}</p>
        </div>
      </div>

      <Divider />

      {/* THIRD ROW */}
      <div className="user_social">
        <h4 className="user_social_title">Social Profiles</h4>
        <div className="user_social_icons">
          <FacebookOutlined
            sx={{
              cursor: "pointer",
              color: "#2c5784",
              "&:hover": { transform: "scale(1.1)" },
            }}
          />
          <Instagram
            sx={{
              cursor: "pointer",
              color: "#2c5784",
              "&:hover": { transform: "scale(1.1)" },
            }}
          />
          <Twitter
            sx={{
              cursor: "pointer",
              color: "#2c5784",
              "&:hover": { transform: "scale(1.1)" },
            }}
          />
          <LinkedIn
            sx={{
              cursor: "pointer",
              color: "#2c5784",
              "&:hover": { transform: "scale(1.1)" },
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default UserComponent;
