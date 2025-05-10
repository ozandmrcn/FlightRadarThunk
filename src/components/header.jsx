import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const { isLoading, error, flights } = useSelector((store) => store.flight);

  return (
    <header>
      <Link to="/" className="logo">
        <img src="/logo.webp" alt="logo" width={40} />
        <h2>Flight Radar</h2>
      </Link>

      <nav>
        <NavLink to={"/"}>
          <button>Map</button>
        </NavLink>

        <NavLink to="/list">
          <button>List</button>
        </NavLink>
      </nav>

      <h3>
        {isLoading
          ? "Radar Working.."
          : error
          ? "An error occurred"
          : `${flights.length} Flights Found`}
      </h3>
    </header>
  );
};

export default Header;
