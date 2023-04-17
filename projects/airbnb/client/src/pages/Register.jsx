import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import axiosInstance from '../utils/axios';

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const { name, email, password } = data || {};

    if (name && email && password) {
      try {
        const response = await axiosInstance.post('/auth/register', {
          name,
          email,
          password,
        });
        toast.success(response.data.message);
        navigate('/login');
      } catch (error) {
        const errorMessage =
          error.response.data?.message || 'Something went wrong';
        toast.error(errorMessage);
      }
    }
  };

  return (
    <div className="w-full h-screen flex items-center">
      <div className="space-y-4 w-full -mt-44">
        <h1 className="text-4xl text-center font-medium">Register</h1>
        <form
          className="flex flex-col gap-2 w-full md:max-w-lg mx-auto"
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            {...register('name', {
              required: 'Name is required',
            })}
            type="text"
            placeholder="Name"
          />
          {errors.name && (
            <span className="text-red-500">{errors.name.message}</span>
          )}
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
                message: 'Password must be at least 6 characters',
              },
            })}
            type="password"
            placeholder="Password"
          />
          {errors.password && (
            <span className="text-red-500">{errors.password.message}</span>
          )}
          <button className="btn-primary">Register</button>
          <div className="text-center">
            <span className="text-gray-500">Already have an account?</span>{' '}
            <Link
              to="/login"
              className="font-medium text-primary cursor-pointer underline"
            >
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
