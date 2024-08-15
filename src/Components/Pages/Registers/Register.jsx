import { Link, useLocation, useNavigate } from "react-router-dom";

import { Helmet } from "react-helmet-async";
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import toast, { Toaster } from "react-hot-toast";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import regis from "../../../assets/depositphotos_9125976-stock-photo-register-now.jpg";
const Register = () => {
  const { createUser } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state || "/";
  const handleRegister = (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = form.get("name");
    const photo = form.get("photo");
    const email = form.get("email");
    const password = form.get("password");
    console.log(name, photo, email, password);
    if (password.length < 6) {
      toast.error("Password should be at least 6 character.!");
      return;
    } else if (!/(?=.*[a-z])(?=.*[A-Z]).{6,}/.test(password)) {
      toast.error("please show the on character in Uppercase and Lowercase");
    } else {
      toast.success("Successfully Register");
    }
    createUser(email, password)
      .then((result) => {
        // updateUserProfile(name, photo).then(() => {});
        navigate(from);
        const user = result.user;
        console.log(user);
      })
      .catch();
  };
  return (
    <div>
      <Helmet>
        <title>Register-page</title>
      </Helmet>
      <div className="md:flex w-full p-5 bg-cyan-500 items-center">
        <div className="md:w-1/2">
          <img src={regis} alt="" />
        </div>
        <div className="md:w-1/2">
          <form onSubmit={handleRegister} className="card-body">
            <h1 className="text-4xl text-white text-center shadow-sm">
              Register Now
            </h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                name="name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo</span>
              </label>
              <input
                type="text"
                placeholder="Photo"
                name="photo"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text ">Password</span>
              </label>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="ml-60 md:ml-96 -mt-8"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
            <div className="form-control mt-6">
              <button className="btn text-2xl bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% hover:shadow-xl hover:shadow-black text-white">
                Register
              </button>
            </div>
            <hr />
            <h2 className="text-white">
              Ready For Login Now..!{" "}
              <Link
                className="text-teal-200 text-center font-bold"
                to="/signIn"
              >
                SignIn
              </Link>
            </h2>
            {/* <h2 className="text-white text-center ">Or SignIn</h2> */}
          </form>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default Register;
