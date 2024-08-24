import Image from 'next/image';
import Wrapper from './Wrapper';

const HeroSection = () => {
  return (
    <div className="bg-[#e2eaec] w-full">
      <Wrapper className="flex flex-col-reverse md:flex-row justify-between py-8 md:py-16 px-4 md:px-8">
        <div className="w-full md:w-1/2 flex flex-col justify-center mt-6 md:mt-0">
          <h2 className="md:title-1 text-center md:text-left !text-slate-800 mb-6 text-5xl">
            Dive into Interactive{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r to-blue-900 from-sky-400">
              Storytelling
            </span>
          </h2>
          <p className="text-base md:text-lg text-center md:text-left">
            Welcome to our interactive storytelling platform, where your choices
            shape the narrative. Explore stories with multiple paths and
            endings.
          </p>
        </div>

        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            src="/img/hero.jpg"
            height={300}
            width={300}
            alt="banner"
            className="w-full h-auto max-w-[300px] md:max-w-[400px]"
            priority
          />
        </div>
      </Wrapper>
    </div>
  );
};

export default HeroSection;
