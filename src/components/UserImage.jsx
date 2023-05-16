const UserImage = ({ image, size = "50px" }) => {
  return (
    <div className="user_img" width={size} height={size}>
      <img
        src={`http://localhost:3001/assets/${image}`}
        alt="user"
        style={{ objectFit: "cover", borderRadius: "50%" }}
        width={size}
        height={size}
      />
    </div>
  );
};

export default UserImage;
