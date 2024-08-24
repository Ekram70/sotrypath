import SingleStoryData from '@/components/SingleStoryData';
import Wrapper from '@/components/Wrapper';
import singleStoryData from '@/public/data/singleStoryData';
import Image from 'next/image';

const SingleStoryPage = ({ params }) => {
  const { id } = params;

  return (
    <Wrapper className="px-4 md:px-8">
      <h2 className="md:title-1 !text-slate-800 underline decoration-blue-600 text-center mb-12 text-5xl">
        {singleStoryData.title}
      </h2>
      <div className="flex flex-col lg:flex-row">
        <div className="flex items-center justify-center mb-8 md:mb-0 break-all">
          <Image
            src={`${singleStoryData.imgUrl}`}
            width={500}
            height={500}
            alt="the forest"
            className="md:min-w-[400px] h-full object-cover"
          />
        </div>
        <p className="text-xl md:ml-8">
          {singleStoryData.options[0].storypart}
        </p>
      </div>
      <SingleStoryData data={singleStoryData.options[0].options} />
    </Wrapper>
  );
};

export default SingleStoryPage;
