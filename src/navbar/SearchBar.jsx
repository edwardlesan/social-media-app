import { Search } from "@mui/icons-material";
import "./SearchBar.css";

const SearchBar = () => {
  return (
    <div className="search">
      <Search sx={{ color: "#2c5784" }} />
      <input placeholder="Type to search..." />
    </div>
  );
};

export default SearchBar;
