import { useState } from 'react';
import rectangle from '../assets/images/Rectangle 340.png';
import google from '../assets/images/google.png';
import { ToggleSwitch } from 'flowbite-react';
import { MdKeyboardArrowLeft } from 'react-icons/md';
import { GoEyeClosed, GoEye } from 'react-icons/go';
import { useNavigate } from 'react-router-dom'; // Import useNavigate if using React Router

const Login: React.FC = () => {
  const [switch1, setSwitch1] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});
  const navigate = useNavigate(); // Initialize useNavigate for redirection

  const handleToggler = () => {
    setToggle(!toggle);
  };

  const validateForm = () => {
    const errors: { email?: string; password?: string } = {};
    if (!email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Email is invalid';
    }
    if (!password) {
      errors.password = 'Password is required';
    }
    return errors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      // If no errors, proceed to login and redirect to the dashboard
      navigate('/dashboard'); // Redirect to the dashboard
    } else {
      setErrors(formErrors); // Set errors if validation fails
    }
  };

  return (
    <div className="bg-[#F7F9FD] min-h-screen ">
      <nav className="flex justify-between p-5 lg:px-10">
        <div className="flex-1 flex gap-1">
          <p className="my-auto blue-text text-sm lg:text-lg">&lt; Home</p>
        </div>
        <div>
          <button
            type="submit"
            className="btn hover:bg-[#4169E1] bg-[#4169E1] w-[8rem] lg:w-[10rem] text-white text-sm lg:text-base"
          >
            Sign Up
          </button>
        </div>
      </nav>

      <main className="flex-grow flex flex-col justify-center items-center p-4 lg:pt-7 max-w-screen-[200px] mx-auto">
        <h1 className="text-xl lg:text-2xl font-bold cyan-text my-4 lg:my-8">Login</h1>
        <button className="w-full  md:w-auto px-8 md:px-32 btn rounded-lg hover:bg-white bg-white flex gap-2 lg:gap-4 border-[1px] p-2 md:p-3 shadow-lg shadow-[#D7E1F4] text-sm md:text-lg">
          <img src={google} className="my-auto w-4 lg:w-auto" alt="Google logo" /> Login with Google
        </button>
        <div className="flex items-center mt-5 md:w-[28rem] w-full ">
          <hr className="flex-grow  border-gray-300" />
          <span className="mx-4 text-xs lg:text-sm text-gray-500">Or continue with</span>
          <hr className="flex-grow  border-gray-300" />
        </div>
        <form onSubmit={handleSubmit} className="dashboard-card mt-6 p-4 lg:p-6 w-full max-w-md">
          <div className="mb-4">
            <label htmlFor="email" className="cyan-text text-sm lg:text-base">
              Email Address
            </label>
            <input
              className={`input input-bordered w-full border-[#D7E1F4] ${errors.email ? 'border-red-500' : ''}`}
              type="email"
              placeholder="wabdot@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <p className="text-red-500 text-xs lg:text-sm">{errors.email}</p>}
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="cyan-text text-sm lg:text-base">
              Password
            </label>
            <label className="input input-bordered flex items-center gap-2 border-[#D7E1F4]">
              <input
                className={`grow border-0 input input-bordered ${errors.password ? 'border-red-500' : ''}`}
                placeholder="Gabon4351"
                type={toggle ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span
                className="blue-text text-lg cursor-pointer"
                onClick={handleToggler}
              >
                {toggle ? <GoEye /> : <GoEyeClosed />}
              </span>
            </label>
            {errors.password && <p className="text-red-500 text-xs lg:text-sm">{errors.password}</p>}
          </div>
          <div className="flex justify-between mb-7">
            <ToggleSwitch
              checked={switch1}
              label="Remember me"
              className="text-[#4C689E] text-xs lg:text-sm"
              onChange={setSwitch1}
            />
            <p className="text-error text-xs lg:text-sm">Recover Password</p>
          </div>
          <button
            type="submit"
            className="btn hover:bg-[#4169E1] bg-[#4169E1] w-full text-white text-sm lg:text-base"
          >
            Log in
          </button>
        </form>
      </main>
    </div>
  );
};

export default Login;
