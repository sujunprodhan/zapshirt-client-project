import React, { useState, useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router'; // <-- react-router-dom
import GoogleLogin from '../GoogleLogin/GoogleLogin';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { toast } from 'react-toastify';
import useAuth from '../Hooks/useAuth';

const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
   const { signInUser } = useAuth();
   const location = useLocation()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleLogin = (data) => {
    signInUser(data.email, data.password)
      .then((result) => {
        console.log(result.user);
        toast.success('Login Successfully')
        navigate(location.state || '/'); 
      })
      .catch((e) => {
        toast.error(e.message)
      });
  };

  return (
    <div>
      <div className="card mt-10 p-4 border bg-white border-gray-200 w-11/12 mx-auto max-w-sm shadow-2xl">
        <h1 className="text-3xl text_primary text-center font-bold">Welcome Back</h1>
        <h3 className="text-center">Please Log in zafShift</h3>

        <div className="card-body">
          <form onSubmit={handleSubmit(handleLogin)} className="fieldset">
            {/* Email */}
            <label className="label">Email</label>
            <input
              type="email"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-indigo-300"
              placeholder="Email"
              {...register('email', { required: true })}
            />
            {errors.email && <p className="text-red-500 font-semibold">Email is required</p>}

            {/* Password with eye icon */}
            <div className="relative mt-3">
              <label className="label">Password</label>
              <input
                type={showPassword ? 'text' : 'password'}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl pr-12 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-indigo-300"
                placeholder="Password"
                {...register('password', { required: true })}
              />
              {errors.password && (
                <p className="text-red-500 font-semibold mt-1">Password Not Match</p>
              )}
              <button
                type="button"
                aria-label={showPassword ? 'Hide password' : 'Show password'}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                onClick={() => setShowPassword((s) => !s)}
              >
                {showPassword ? <FaEye /> : <FaEyeSlash />}
              </button>
            </div>

            <div className="mt-2">
              <h3 className="font-semibold">
                Forget Password? <span className="text-green-600 cursor-pointer">Reset</span>
              </h3>
            </div>

            <button type="submit" className="btn btn-neutral mt-4 w-full">
              Login
            </button>
          </form>
          <div className="flex items-center gap-2 my-4">
            <hr className="flex-1" />
            <span>Or</span>
            <hr className="flex-1" />
          </div>
          <h3 className="font-semibold mt-4 text-center">
            Don't Have Any Account?{' '}
            <Link state={location.state} to="/register" className="text-green-600 hover:underline font-semibold">
              Register
            </Link>
          </h3>

          <GoogleLogin />
        </div>
      </div>
    </div>
  );
};

export default Login;
