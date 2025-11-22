import { useForm } from 'react-hook-form';

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleRegister = (data) => {
    console.log(data);
  };

  return (
    <div>
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <h1 className="text-3xl text-center font-bold">Welcome Back</h1>
        <h3 className="text-center">Please Register zafShift</h3>
        <div className="card-body">
          <form onSubmit={handleSubmit(handleRegister)}>
            <fieldset className="fieldset">
              <label className="label">Email</label>
              <input
                type="email"
                {...register('email', { required: true })}
                className="input"
                placeholder="Email"
              />
              {errors.email?.type === 'required' && (
                <p className="text-red-500 font-semibold">Email is required</p>
              )}
              <label className="label">Password</label>
              {/* Password */}
              <input
                type="password"
                {...register('password', {
                  required: true,
                  minLength: 6,
                  pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                })}
                className="input"
                placeholder="Password"
              />

              {errors.password?.type === 'required' && (
                <p className="text-red-500 font-semibold">Password is required min 8 carecter</p>
              )}
              {errors.password?.type === 'pattern' && (
                <p className="font-semibold text-red-600">
                  Password must be at least 8 characters long and include uppercase, lowercase,
                  number, and a special character.
                </p>
              )}
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button className="btn btn-neutral mt-4">Register Now</button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
