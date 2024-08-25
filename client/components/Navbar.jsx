'use client';

import { Button } from '@/components/ui/button';
import { logout } from '@/context/auth/actions';
import { useAuthDetails } from '@/context/auth/AuthContext';
import { MoveUpRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useToast } from './ui/use-toast';
import Wrapper from './Wrapper';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const { dispatch, isAuthenticated } = useAuthDetails();

  const router = useRouter();
  const { toast } = useToast();

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleLogout = async () => {
    try {
      await logout()(dispatch);
      toast({
        variant: 'success',
        title: 'Logout Successful',
        duration: 2000,
      });
    } catch (error) {
      toast({
        variant: 'destructive',
        title: 'Logout Failed',
        duration: 2000,
      });
    }
  };

  return (
    <Wrapper className="py-4 px-4 md:px-8">
      <div className="flex justify-between items-center">
        <Link
          href="/"
          className="flex gap-3 items-center"
          onClick={closeMobileMenu}
        >
          <Image src="/img/logo.png" alt="logo" width={35} height={50} />
          <h1 className="text-2xl font-bold">StoryPath</h1>
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex items-center text-blue-600"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={
                isMobileMenuOpen
                  ? 'M6 18L18 6M6 6l12 12'
                  : 'M4 6h16M4 12h16M4 18h16'
              }
            />
          </svg>
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-2">
          {isAuthenticated ? (
            <>
              <div>
                <h2 className="title-1 !text-[20px] flex items-center px-4 hover:underline hover:decoration-blue-600 hover:decoration-4">
                  <span className="text-blue-600 leading-none py-4">
                    <Link href="/profile/create">Create Story</Link>
                  </span>
                  <MoveUpRight className="text-blue-600" size={25} />
                </h2>
              </div>
              <Button
                variant="secondary"
                className="rounded-none text-base px-9 h-[52px] text-blue-600 border border-transparent hover:border-blue-600 leading-8"
                asChild
              >
                <Link href="/profile">View Profile</Link>
              </Button>
              <Button
                className="rounded-none text-base text-white px-9 h-[52px] border border-blue-600 hover:bg-white hover:text-blue-600 leading-8"
                onClick={handleLogout}
              >
                Logout
              </Button>
            </>
          ) : (
            <>
              <Button
                variant="secondary"
                className="rounded-none text-base px-9 h-[52px] text-blue-600 border border-transparent hover:border-blue-600 leading-8"
                asChild
              >
                <Link href="/register">Register Now</Link>
              </Button>
              <Button
                className="rounded-none text-base text-white px-9 h-[52px] border border-blue-600 hover:bg-white hover:text-blue-600 leading-8"
                asChild
              >
                <Link href="/login">Sign In</Link>
              </Button>
            </>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
          isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
        } md:hidden`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-bold">Menu</h2>
          <button onClick={closeMobileMenu}>
            <svg
              className="w-6 h-6 text-blue-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="flex flex-col gap-4 p-4">
          {isAuthenticated ? (
            <>
              <div className="mx-auto">
                <h2 className="title-1 !text-[20px] flex items-center px-4 hover:underline hover:decoration-blue-600 hover:decoration-4">
                  <span className="text-blue-600 leading-none py-4">
                    <Link href="/profile/create">Create Story</Link>
                  </span>
                  <MoveUpRight className="text-blue-600" size={25} />
                </h2>
              </div>
              <Link href="/profile" onClick={closeMobileMenu}>
                <Button
                  variant="secondary"
                  className="w-full rounded-none text-base text-blue-600 border border-transparent hover:border-blue-600 leading-8"
                >
                  View Profile
                </Button>
              </Link>

              <Button
                className="w-full rounded-none text-base text-white border border-blue-600 hover:bg-white hover:text-blue-600 leading-8"
                onClick={() => {
                  handleLogout();
                  closeMobileMenu();
                }}
              >
                Logout
              </Button>
            </>
          ) : (
            <>
              <Link href="/register" onClick={closeMobileMenu}>
                <Button
                  variant="secondary"
                  className="w-full rounded-none text-base text-blue-600 border border-transparent hover:border-blue-600 leading-8"
                >
                  Register Now
                </Button>
              </Link>
              <Link href="/login" onClick={closeMobileMenu}>
                <Button className="w-full rounded-none text-base text-white border border-blue-600 hover:bg-white hover:text-blue-600 leading-8">
                  Sign In
                </Button>
              </Link>
            </>
          )}
        </div>
      </div>
    </Wrapper>
  );
};

export default Navbar;
