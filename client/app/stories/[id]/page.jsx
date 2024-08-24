import SingleStoryData from '@/components/SingleStoryData';
import Wrapper from '@/components/Wrapper';
import singleStoryData from '@/public/data/singleStoryData';
import Image from 'next/image';

const SingleStoryPage = ({ params }) => {
  const { id } = params;

  return (
    <Wrapper>
      <h2 className="title-1 !text-slate-800 underline decoration-blue-600 text-center mb-12">
        {singleStoryData.title}
      </h2>
      <div>
        <Image
          src={`${singleStoryData.imgUrl}`}
          width={400}
          height={400}
          alt="the forest"
          className="float-left mr-8 mb-8"
        />
        <p>{singleStoryData.options[0].storypart}</p>
        <SingleStoryData data={singleStoryData.options[0].options} />
      </div>
    </Wrapper>
  );
};

export default SingleStoryPage;
