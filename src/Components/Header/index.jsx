import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/"> Home</Link>
          </li>
          <li>
            <Link to="/login"> Login</Link>
          </li>
          <li>
            <Link to="/register"> Register</Link>
          </li>
          <li>
            <a href="https://harrypotter.fandom.com/wiki/Main_Page"> Wiki</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
