import { useSelector, useDispatch } from "react-redux";
import classes from "./Header.module.css";
import { authActions } from "../../../store/auth";

const Header = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.auth.isAuthenticated);

  const logout = () => {
    dispatch(authActions.logout());
  };

  return (
    <header className={classes.header}>
      <h1>A React Playground</h1>
      <nav className={classes.nav}>
        <ul>
          {isAuth && (
            <li>
              <a href="/">Users</a>
            </li>
          )}
          {isAuth && (
            <li>
              <a href="/">Admin</a>
            </li>
          )}
          {isAuth && (
            <li>
              <button onClick={logout}>Logout</button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
