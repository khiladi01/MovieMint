import { Link } from "react-router-dom";

function Login() {
  return (
    <>
      <div className="h-auto w-full bg-white">
        <div className="h-screen w-full flex justify-center items-center">
          <Link
            to="/registration"
            className="w-[150px] h-10 flex justify-center items-center border-2 border-red-400"
          >
            Registration
          </Link>
        </div>
      </div>
    </>
  );
}

export default Login;
