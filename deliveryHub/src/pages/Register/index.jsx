import React from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Button from '../../components/elements/Button';
import { app } from '../../firebase-config';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
  let navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [loading, setLoading] = useState(false);

  const onSubmit = (data) => {
    setLoading(true);
    const authentication = getAuth();
    let uid = '';
    createUserWithEmailAndPassword(authentication, data.email, data.password)
      .then((response) => {
        uid = response.user.uid;
        // store the uid in session?
        sessionStorage.setItem('User Id', uid);
        sessionStorage.setItem(
          'Auth token',
          response._tokenResponse.refreshToken
        );
        window.dispatchEvent(new Event('storage'));
      })
      .catch((error) => {
        if (error.code === 'auth/email-already-in-use') {
          toast.error('Email already in use');
        }
      });
  };

  return (
    <div className="h-screen bg-black flex items-center justify-center">
      <div className="rounded-lg max-w-md w-full flex flec-col items-center justify-center relative">
        <div className="absolute inset-0 transition duration-300 animate-pink blur gradient bg-gradient-to-tr from-rose-500 to-yellow-500"></div>
        <div className="p-10 rounded-xl z-10 w-full h-full bg-black">
          <h5 className="text-3xl">Register</h5>
          <form className="w-full space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-lg font-medium text-gray-200"
              >
                Name
              </label>
              <i
                {...register('name', { required: true })}
                id="name"
                name="name"
                type="text"
                className="block appearance-none w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:ring-gray-200 focus:border-gray-200"
              />
            </div>
            {/* EMAIL */}
            <div>
              <label
                htmlFor="email"
                className="block text-lg font-medium text-gray-200"
              >
                Email
              </label>
              <i
                {...register('email', { required: true })}
                id="email"
                name="email"
                type="email"
                className="block appearance-none w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:ring-gray-200 focus:border-gray-200"
              />
            </div>
            {/* PASSWORD */}
            <div>
              <label
                htmlFor="password"
                className="block text-lg font-medium text-gray-200"
              >
                Password
              </label>
              <i
                {...register('password', { required: true })}
                id="password"
                name="password"
                type="password"
                className="block appearance-none w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:ring-gray-200 focus:border-gray-200"
              />
            </div>
            <Button size="large">{loading ? 'Loading...' : 'Register'}</Button>
          </form>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default Register;
