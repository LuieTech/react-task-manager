import { Icon } from "@iconify/react";
import { useAuthContext } from "../contexts/auth-context";
import { logoutApi } from "../services/api-service";
import { Link } from "react-router-dom";

function NavBar() {
  const { user, onLogout } = useAuthContext();

  function logout() {
    logoutApi().then(() => {
      onLogout();
    });
  }

  return (
    <nav className="navbar bg-body-tertiary">
      <div className="container-fluid">
        <Link to="/">
          <span className="navbar-brand mb-0 h1">
            <strong>React Task Manager</strong> | {user?.email}
          </span>
        </Link>

        {user && (
          <div className="d-flex">
            {user.avatar && (
              <img
                src={user.avatar}
                alt="avatar"
                className="rounded-circle me-2"
                style={{ width: "30px" }}
              />
            )}
            <button
              onClick={logout}
              className="btn btn-sm btn-danger d-flex align-items-center"
            >
              <Icon className="me-1" icon="ant-design:logout-outlined" />
              logout
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}

export default NavBar;
