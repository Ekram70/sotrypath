'use client';

import { Button } from '@/components/ui/button';
import Wrapper from '@/components/Wrapper';
import { register as registerAction } from '@/context/auth/actions';
import { useAuthDetails } from '@/context/auth/AuthContext';
import { Loader } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

const RegisterPage = () => {
  const { dispatch, isAuthenticated } = useAuthDetails();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [loading, setLoading] = useState(true);

  const onSubmit = async (data) => {
    await registerAction(data)(dispatch);
  };

  useEffect(() => {
    if (isAuthenticated) {
      router.push('/');
    } else {
      setLoading(false);
    }
  }, [isAuthenticated, router]);

  if (loading) {
    return <Loader className="animate-spin" />;
  }

  return (
    <Wrapper>
      <div className="px-4 sm:px-8 md:px-12 lg:px-16">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="border-4 p-6 sm:p-8 w-full sm:w-[400px] mx-auto space-y-4 shadow-md"
        >
          <h2 className="title-3 underline decoration-blue-800 mb-6 sm:mb-8 text-center text-xl sm:text-2xl">
            Register
          </h2>

          <div className="flex flex-col">
            <label htmlFor="name" className="small-2 !text-gray-600">
              Name
            </label>
            <input
              type="text"
              id="name"
              {...register('name', { required: 'Name is required' })}
              placeholder="Enter your name"
              className="bg-gray-100 px-2 py-1 focus-visible:ring-0 outline-1 outline-blue-600 rounded-md"
            />
            {errors.name && (
              <span className="text-red-600">{errors.name.message}</span>
            )}
          </div>

          <div className="flex flex-col">
            <label htmlFor="email" className="small-2 !text-gray-600">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              {...register('email', { required: 'Email is required' })}
              placeholder="Enter your email address"
              className="bg-gray-100 px-2 py-1 focus-visible:ring-0 outline-1 outline-blue-600 rounded-md"
            />
            {errors.email && (
              <span className="text-red-600">{errors.email.message}</span>
            )}
          </div>

          <div className="flex flex-col">
            <label htmlFor="password" className="small-2 !text-gray-600">
              Password
            </label>
            <input
              type="password"
              id="password"
              {...register('password', { required: 'Password is required' })}
              placeholder="Enter your password"
              className="bg-gray-100 px-2 py-1 focus-visible:ring-0 outline-1 outline-blue-600 rounded-md"
            />
            {errors.password && (
              <span className="text-red-600">{errors.password.message}</span>
            )}
          </div>

          <div className="flex justify-center">
            <Button type="submit" className="rounded-none px-6 sm:px-8">
              Register
            </Button>
          </div>
        </form>
      </div>
    </Wrapper>
  );
};

export default RegisterPage;
