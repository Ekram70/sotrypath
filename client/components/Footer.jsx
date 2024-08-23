import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import Wrapper from './Wrapper';
import { Button } from './ui/button';

const Footer = () => {
  return (
    <div className="bg-blue-600 clear-both">
      <Wrapper className="py-10">
        <div>
          <Image
            src="/img/logo.png"
            alt="logo"
            width={70}
            height={100}
            className="grayscale mx-auto"
          />
          <h2 className="title-3 !text-white text-center mt-5">StoryPath</h2>
        </div>
        <div className="text-center mt-5">
          <Button variant="link" className="text-white" asChild>
            <Link href="#">Privacy Policy</Link>
          </Button>
          <Button variant="link" className="text-white" asChild>
            <Link href="#">Terms & Conditions</Link>
          </Button>
          <Button variant="link" className="text-white" asChild>
            <Link href="#">Cookie Preference</Link>
          </Button>
          <Button variant="link" className="text-white" asChild>
            <Link href="#">About Us</Link>
          </Button>
          <Button variant="link" className="text-white" asChild>
            <Link href="#">Contact Us</Link>
          </Button>
        </div>
        <div className="flex gap-5 justify-center">
          <Link href="#">
            <Facebook className="text-white" />
          </Link>
          <Link href="#">
            <Linkedin className="text-white" />
          </Link>
          <Link href="#">
            <Instagram className="text-white" />
          </Link>
          <Link href="#">
            <Twitter className="text-white" />
          </Link>
        </div>
        <div className="text-center mt-10">
          <span className="small-2 !font-normal">
            &copy;2024 Storypath, Inc. All rights reserved.
          </span>
        </div>
      </Wrapper>
    </div>
  );
};

export default Footer;
