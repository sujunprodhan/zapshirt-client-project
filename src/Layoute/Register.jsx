import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router';
import GoogleLogin from '../GoogleLogin/GoogleLogin';
import useAuth from '../Hooks/useAuth';
import axios from 'axios';
import { toast } from 'react-toastify';

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { registerUser, updateUserProfile } = useAuth();
  const location = useLocation();
  const navigate = useNavigate()

  const handleRegister = (data) => {
    const profileImg = data.photo[0];

    registerUser(data.email, data.password).then((result) => {
      console.log(result.user);
      // update photo

      const formData = new FormData();
      formData.append('image', profileImg);
      const image_Api_URL = `https://api.imgbb.com/1/upload?key=${
        import.meta.env.VITE_image_host_key
      }`;
      axios
        .post(image_Api_URL, formData)

        // update profile
        .then((imageRes) => {
          const imageUrl = imageRes?.data?.data?.url;
          console.log('After Image Upload', imageUrl);

          const userProfile = {
            displayName: data?.name,
            photoURL: imageUrl,
          };

          updateUserProfile(userProfile)
            .then(() => {
              toast.success('Register Successfully')
              navigate(location.state || '/')
            })
            .catch((error) => console.log(error));
        });
    });
  };

  return (
    <div className="flex justify-center items-center min-h-screen p-4">
      <div className="card bg-white border p-4 border-gray-200 w-full max-w-sm shadow-2xl">
        <h1 className="text-3xl text-center text_primary font-bold mt-4">Welcome Back</h1>
        <h3 className="text-center mb-4">Please Register zafShift</h3>
        <div className="card-body">
          <form onSubmit={handleSubmit(handleRegister)} className="space-y-3">
            <fieldset>
              {/* Photo Fild */}
              <div>
                <label className="label">Add Photo</label>
                <input
                  type="file"
                  {...register('photo', { required: true })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl"
                />
                {errors.photo && <p className="text-red-500">Please add photo</p>}
              </div>
              {/* Name Field */}
              <div>
                <label className="label">Name</label>
                <input
                  type="text"
                  {...register('name', { required: true })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl"
                  placeholder="Enter Your Name"
                />
                {errors.name && <p className="text-red-500">Name is required</p>}
              </div>

              {/* Email */}
              <div>
                <label className="label">Email</label>
                <input
                  type="email"
                  {...register('email', { required: true })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl"
                  placeholder="Email"
                />
                {errors.email && <p className="text-red-500">Email is required</p>}
              </div>

              {/* Password */}
              <div className="relative">
                <label className="label">Password</label>
                <input
                  type={showPassword ? 'text' : 'password'}
                  {...register('password', {
                    required: true,
                    pattern:
                      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                  })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl pr-12"
                  placeholder="Password"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword((s) => !s)}
                  className="absolute right-3 top-10 text-gray-500"
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? <FaEye /> : <FaEyeSlash />}
                </button>

                {errors.password?.type === 'required' && (
                  <p className="text-red-500 font-semibold mt-1">
                    Password is required, min 8 characters
                  </p>
                )}
                {errors.password?.type === 'pattern' && (
                  <p className="text-red-600 font-semibold mt-1">
                    Password must be at least 8 characters, include uppercase, lowercase, number
                    &amp; special character.
                  </p>
                )}
              </div>
            </fieldset>
            <button type="submit" className="btn btn-neutral w-full mt-4">
              Register Now
            </button>
          </form>
          <div className="flex items-center gap-2 my-4">
            <hr className="flex-1" />
            <span>Or</span>
            <hr className="flex-1" />
          </div>
          <h3 className="mt-2">
            Already have account?{' '}
            <Link state={location.state} to="/login" className="text-green-600 font-semibold hover:underline">
              Login
            </Link>
          </h3>
          <GoogleLogin />
        </div>
      </div>
    </div>
  );
};

export default Register;
