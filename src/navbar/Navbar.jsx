import "./Navbar.css";
import { useDispatch, useSelector } from "react-redux";
import { setLogout } from "../state";
import { useNavigate } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";
import { IconButton } from "@mui/material";
import { Search } from "@mui/icons-material";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  // const fullName = `${user.firstName} ${user.lastName}`;
  const fullName = "Edward Lesan";

  return (
    <nav>
      <div className="nav_title" onClick={() => navigate("/home")}>
        Socially.
      </div>
      <div className="nav_search">
        <Search sx={{ color: "#2c5784", cursor: "pointer" }} />
        <input placeholder="Type to search..." />
      </div>
      <div className="nav_auth">
        <h5 className="nav_fullname" onClick={() => navigate(`/profile/`)}>
          {fullName}
        </h5>
        <IconButton onClick={() => dispatch(setLogout())}>
          <LogoutIcon sx={{ color: "#2c5784", cursor: "pointer" }} />
        </IconButton>
      </div>
    </nav>
  );
};

export default Navbar;
