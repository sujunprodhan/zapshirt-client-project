import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import Logo from '../assets/banner/logo.png';
import { toast } from 'react-toastify';
import useAuth from '../Hooks/useAuth';

const Navber = () => {
  const { user, logOut } = useAuth()

  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast.success('Logout Successfully')
      })
      .catch((e) => {
        toast.error(e.message);
      });
  };

  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/services">Services</NavLink>
      </li>
      <li>
        <NavLink to="/coverage">Coverage</NavLink>
      </li>
      <li>
        <NavLink to="/rider">Be A Rider</NavLink>
      </li>
      <li>
        <NavLink to="/sendapercel">Send A Percel</NavLink>
      </li>
    </>
  );

  return (
    <div className="bg-white shadow-md">
      <div className="navbar w-11/12 mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {' '}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{' '}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="text_primary menu menu-sm dropdown-content text-primary rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <div className="flex items-center">
            <img src={Logo} alt="" />
            <h1 className="text_primary text-4xl text-primary font-bold">zapShift</h1>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="text_primary menu menu-horizontal px-1 text-primary">{links}</ul>
        </div>
        <div className="navbar-end flex gap-3 font-semibold">
          {user ? (
            <div className="flex gap-3">
              <Link
                onClick={handleLogOut}
                className="text_primary border border-[#C7F464] text-primary px-6 py-2 rounded-full"
              >
                Log Out
              </Link>
            </div>
          ) : (
            <div className="text_color flex gap-3">
              <Link
                to="/login"
                className="text_primary border border-[#CAEB66] bg-socondary px-6 py-2 rounded-full"
              >
                Login
              </Link>
              <Link
                to="/rider"
                className=" bg-[#CAEB66] text_primary text-primary px-6 py-2 rounded-full"
              >
                Be A Rider
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navber;
