import SearchBar from "./SearchBar";
import "./Navbar.css";
import { useDispatch, useSelector } from "react-redux";
import { setLogout } from "../state";
import { useNavigate } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  // const fullName = `${user.firstName} ${user.lastName}`;
  const fullName = "Baby Yoda";

  return (
    <nav>
      <div className="nav_title" onClick={() => navigate("/home")}>
        Socially.
      </div>
      <div className="nav_search">
        <SearchBar />
      </div>
      <div className="nav_auth">
        <h5 className="nav_fullname">{fullName}</h5>
        <LogoutIcon />
      </div>
    </nav>
  );
};

export default Navbar;
