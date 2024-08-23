import Image from 'next/image';
import Wrapper from './Wrapper';

const HeroSection = () => {
  return (
    <div className="bg-[#e2eaec] w-full">
      <Wrapper className="flex justify-between py-2">
        <div className="w-1/2 flex flex-col justify-center">
          <h2 className="title-1 !text-slate-800 mb-6">
            Dive into Interactive{' '}
            <span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
              Storytelling
            </span>
          </h2>
          <p className="text-lg ">
            Welcome to our interactive storytelling platform, where your choices
            shape the narrative. Explore stories with multiple paths and
            endings.
          </p>
        </div>
        <Image
          src="/img/hero.jpg"
          height={400}
          width={400}
          alt="banner"
          className="block"
          priority
        />
      </Wrapper>
    </div>
  );
};

export default HeroSection;
