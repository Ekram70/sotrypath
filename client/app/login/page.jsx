'use client';

import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import Wrapper from '@/components/Wrapper';
import { login } from '@/context/auth/actions';
import { useAuthDetails } from '@/context/auth/AuthContext';
import { Loader } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { toast } = useToast();

  const router = useRouter();
  const { dispatch, isAuthenticated } = useAuthDetails();

  const [loading, setLoading] = useState(true);

  const onSubmit = async (data) => {
    try {
      await login(data)(dispatch);
      toast({
        variant: 'success',
        title: 'Login Successful',
        duration: 2000,
      });
    } catch (error) {
      toast({
        variant: 'destructive',
        title: 'Login Failed',
        duration: 2000,
      });
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      router.push('/');
    } else {
      setLoading(false);
    }
  }, [isAuthenticated, router]);

  if (loading) {
    return (
      <div className="p-4 flex justify-center">
        <Loader size={64} className="animate-spin" />
      </div>
    );
  }

  return (
    <Wrapper>
      <div className="px-4 sm:px-8 md:px-12 lg:px-16">
        <form
          className="border-4 p-6 sm:p-8 w-full sm:w-[400px] mx-auto space-y-4 shadow-md"
          onSubmit={handleSubmit(onSubmit)}
        >
          <h2 className="title-3 underline decoration-blue-800 mb-6 sm:mb-8 text-center text-xl sm:text-2xl">
            Login to your account
          </h2>

          <div className="flex flex-col">
            <label htmlFor="email" className="small-2 !text-gray-600">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email address"
              className={`bg-gray-100 px-2 py-1 focus-visible:ring-0 outline-1 outline-blue-600 rounded-md ${
                errors.email ? 'border-red-500' : ''
              }`}
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: 'Invalid email address',
                },
              })}
            />
            {errors.email && (
              <span className="text-red-500 text-sm">
                {errors.email.message}
              </span>
            )}
          </div>

          <div className="flex flex-col">
            <label htmlFor="password" className="small-2 !text-gray-600">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              className={`bg-gray-100 px-2 py-1 focus-visible:ring-0 outline-1 outline-blue-600 rounded-md ${
                errors.password ? 'border-red-500' : ''
              }`}
              {...register('password', {
                required: 'Password is required',
                minLength: {
                  value: 8,
                  message: 'Password must be at least 8 characters',
                },
              })}
            />
            {errors.password && (
              <span className="text-red-500 text-sm">
                {errors.password.message}
              </span>
            )}
          </div>

          <div className="flex flex-col sm:flex-row justify-between gap-4">
            <Button type="submit" className="rounded-none px-6 sm:px-8">
              Login
            </Button>
          </div>
        </form>
      </div>
    </Wrapper>
  );
};

export default LoginPage;
