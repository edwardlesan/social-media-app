import "./UserImage.css";

const UserImage = ({ image }) => {
  return (
    <div className="user_img">
      <img src={`http://localhost:3001/assets/${image}`} alt="user" />
    </div>
  );
};

export default UserImage;
