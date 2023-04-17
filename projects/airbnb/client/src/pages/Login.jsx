import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { loggedIn } from '../state/features/auth/authSlice';
import axiosInstance from '../utils/axios';

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSubmit = async (data) => {
    const { email, password } = data || {};

    if (email && password) {
      try {
        const response = await axiosInstance.post('/auth/login', {
          email,
          password,
        });
        localStorage.setItem(
          'airbnb-auth',
          JSON.stringify(response.data?.data)
        );
        dispatch(loggedIn(response.data?.data));
        toast.success(response.data.message);
        navigate('/');
      } catch (error) {
        const errorMessage =
          error.response?.data?.message || 'Something went wrong';
        toast.error(errorMessage);
      }
    }
  };

  return (
    <div className="w-full h-screen flex items-center">
      <div className="space-y-4 w-full -mt-44">
        <h1 className="text-4xl text-center font-medium">Login</h1>
        <form
          className="flex flex-col gap-2 w-full md:max-w-lg mx-auto"
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^\S+@\S+$/i,
                message: 'Email is invalid',
              },
            })}
            type="email"
            placeholder="Email"
          />
          {errors.email && (
            <span className="text-red-500">{errors.email.message}</span>
          )}
          <input
            {...register('password', {
              required: 'Password is required',
              minLength: {
                value: 6,
                message: 'Wrong password',
              },
            })}
            type="password"
            placeholder="Password"
          />
          {errors.password && (
            <span className="text-red-500">{errors.password.message}</span>
          )}
          <button className="btn-primary">Login</button>
          <div className="text-center">
            <span className="text-gray-500">Don't have an account?</span>{' '}
            <Link
              to="/register"
              className="font-medium text-primary cursor-pointer underline"
            >
              Register Now
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
