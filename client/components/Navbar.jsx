import Image from 'next/image';
import Link from 'next/link';
import Wrapper from './Wrapper';

import { Button } from '@/components/ui/button';

const Navbar = () => {
  return (
    <Wrapper className="py-2">
      <div className="flex justify-between">
        <Link href="/" className="flex gap-3 items-center">
          <Image src="/img/logo.png" alt="logo" width={35} height={50} />
          <h1 className="text-2xl font-bold">StoryPath</h1>
        </Link>
        <div className="flex gap-2">
          <Button
            variant="secondary"
            className="inline-block rounded-none text-base px-9 h-[52px] text-blue-600 border border-transparent hover:border-blue-600 leading-8"
            asChild
          >
            <Link href="/register"> Register Now</Link>
          </Button>
          <Button
            className="inline-block rounded-none text-base text-white px-9 h-[52px] border border-blue-600 hover:bg-white hover:text-blue-600 leading-8"
            asChild
          >
            <Link href="/login">Sign In</Link>
          </Button>
        </div>
      </div>
    </Wrapper>
  );
};

export default Navbar;
