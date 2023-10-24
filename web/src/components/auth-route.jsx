import { Navigate, Route } from "react-router-dom";
import { useAuthContext } from "../contexts/auth-context";

function AuthRoute(props) {
  const { user } = useAuthContext();

  if (!user) {
    return <Route {...props} element={<Navigate to="/login" />} />;
  } else {
    return <Route {...props} />;
  }
}

export default AuthRoute;
