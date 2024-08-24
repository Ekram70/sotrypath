import { Button } from '@/components/ui/button';
import Wrapper from '@/components/Wrapper';
import Link from 'next/link';

const LoginPage = () => {
  return (
    <Wrapper>
      <div className="px-4 sm:px-8 md:px-12 lg:px-16">
        <form className="border-4 p-6 sm:p-8 w-full sm:w-[400px] mx-auto space-y-4 shadow-md">
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
              className="bg-gray-100 px-2 py-1 focus-visible:ring-0 outline-1 outline-blue-600 rounded-md"
            />
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
              className="bg-gray-100 px-2 py-1 focus-visible:ring-0 outline-1 outline-blue-600 rounded-md"
            />
          </div>

          <div className="flex flex-col sm:flex-row justify-between gap-4">
            <Button className="rounded-none px-6 sm:px-8" asChild>
              <Link href="/profile/1">Login</Link>
            </Button>
            <Button variant="link" asChild>
              <Link href="/profile/1">Forgot Password?</Link>
            </Button>
          </div>
        </form>
      </div>
    </Wrapper>
  );
};

export default LoginPage;
