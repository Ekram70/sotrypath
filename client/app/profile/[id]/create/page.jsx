import StoryPart from '@/components/StoryPart';
import { Button } from '@/components/ui/button';
import Wrapper from '@/components/Wrapper';
import storyData from '@/public/data/storyData';

const CreateStoryPage = () => {
  const [story] = storyData;
  return (
    <div>
      <Wrapper>
        <form action="" className="space-y-4">
          <div className="flex flex-col w-[300px]">
            <label htmlFor="title" className="small-2 !text-gray-600">
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={`${story.title}`}
              placeholder="Enter your story title"
              className="bg-gray-100 px-2 py-1 focus-visible:ring-0 outline-1 outline-blue-600"
            />
          </div>
          <div className="flex flex-col w-[420px]">
            {story.options.length > 0 && <StoryPart options={story.options} />}
          </div>
          <div>
            <Button className="rounded-none">Save</Button>
          </div>
        </form>
      </Wrapper>
    </div>
  );
};

export default CreateStoryPage;
