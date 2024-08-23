import { Button } from '@/components/ui/button';
import Wrapper from '@/components/Wrapper';

const RegisterPage = () => {
  return (
    <Wrapper>
      <form className="border-4 p-8 w-[400px] mx-auto space-y-4 shadow-md">
        <h2 className="title-3 underline decoration-blue-800 mb-8 text-center">
          Register
        </h2>

        <div className="flex flex-col">
          <label htmlFor="name" className="small-2 !text-gray-600">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            className="bg-gray-100 px-2 py-1 focus-visible:ring-0 outline-1 outline-blue-600"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="email" className="small-2 !text-gray-600">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email address"
            className="bg-gray-100 px-2 py-1 focus-visible:ring-0 outline-1 outline-blue-600"
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
            className="bg-gray-100 px-2 py-1 focus-visible:ring-0 outline-1 outline-blue-600"
          />
        </div>

        <div className="flex justify-between">
          <Button className="rounded-none px-8">Register</Button>
        </div>
      </form>
    </Wrapper>
  );
};

export default RegisterPage;
