import { Button } from '@/components/ui/button';
import Wrapper from '@/components/Wrapper';
import cardData from '@/public/data/cardData';
import Image from 'next/image';

const SingleStoryPage = ({ params }) => {
  const { id } = params;

  const [story] = cardData.filter((card) => card.id == id);

  return (
    <Wrapper>
      <h2 className="title-1 !text-slate-800 underline decoration-blue-600 text-center mb-12">
        {story.title}
      </h2>
      <div>
        <Image
          src={`${story.imgUrl}`}
          width={400}
          height={400}
          alt="the forest"
          className="float-left mr-8 mb-8"
        />
        <p>{story.description}</p>
      </div>
      <div className="clear-both flex flex-col items-center">
        <h4 className="title-3 mb-4">Choose your story branch</h4>
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <Button
              variant="outline"
              className="inline-block rounded-none text-base text-blue-600  hover:text-white hover:bg-blue-600 border border-blue-600"
            >
              Option 01
            </Button>
            <Button
              variant="outline"
              className="inline-block rounded-none text-base text-blue-600  hover:text-white hover:bg-blue-600 border border-blue-600"
            >
              Option 02
            </Button>
            <Button
              variant="outline"
              className="inline-block rounded-none text-base text-blue-600  hover:text-white hover:bg-blue-600 border border-blue-600"
            >
              Option 03
            </Button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default SingleStoryPage;
