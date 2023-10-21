import { useForm } from "react-hook-form";
import { login } from "../../services/groups-service";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  function handleLogin(data) {
    login(data).then(() => {
      navigate("/tasks");
    });
  }

  return (
    <div>
      <h1>Login</h1>

      <form onSubmit={handleSubmit(handleLogin)}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>

          <input
            type="email"
            className="form-control"
            id="email"
            {...register("email")}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            {...register("password")}
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
    </div>
  );
}

export default LoginPage;
