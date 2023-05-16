import "./FriendComponent.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setFriends } from "../state";
import UserImage from "./UserImage";
import { PersonRemoveOutlined, PersonAddOutlined } from "@mui/icons-material";

const FriendComponent = ({ friendId, name, subtitle, userPicturePath }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { _id } = useSelector((state) => state.user);
  const token = useSelector((state) => state.token);
  const friends = useSelector((state) => state.user.friends);

  const isFriend = friends.find((friend) => friend._id === friendId);

  const patchFriend = async () => {
    const response = await fetch(
      `http://localhost:3001/users/${_id}/${friendId}`,
      {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    dispatch(setFriends({ friends: data }));
  };

  return (
    <div className="friend_content">
      <div className="friend_info">
        <UserImage image={userPicturePath} size="55px" />
        <div className="friend_about">
          <h5 className="friend_name">{name}</h5>
          <h6 className="friend_subtitle">{subtitle}</h6>
        </div>
      </div>
      <div className="friend_add_remove" onClick={() => patchFriend()}>
        {isFriend ? (
          <PersonRemoveOutlined sx={{ color: "#2c5784", cursor: "pointer" }} />
        ) : (
          <PersonAddOutlined sx={{ color: "#2c5784", cursor: "pointer" }} />
        )}
      </div>
    </div>
  );
};

export default FriendComponent;
