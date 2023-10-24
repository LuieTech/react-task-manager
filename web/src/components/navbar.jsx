import { useAuthContext } from "../contexts/auth-context";

function NavBar() {
  const value = useAuthContext();

  return (
    <nav className="navbar bg-body-tertiary">
      <div className="container-fluid">
        <span className="navbar-brand mb-0 h1">
          <strong>React Task Manager</strong> | {value.user?.email}
        </span>
      </div>
    </nav>
  );
}

export default NavBar;
