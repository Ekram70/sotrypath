'use client';

import StoryPart from '@/components/StoryPart';
import { Button } from '@/components/ui/button';
import Wrapper from '@/components/Wrapper';
import { produce } from 'immer';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const CreateStoryPage = () => {
  const [story, setStory] = useState({
    id: uuidv4(),
    author: '',
    date: '',
    title: '',
    imgUrl: '',
    options: [
      {
        id: uuidv4(),
        storypart: ``,
        options: null,
      },
    ],
  });

  const handleTitleChange = (e) => {
    setStory((prevStory) => {
      return produce(prevStory, (draft) => {
        draft.title = e.target.value;
      });
    });
  };

  const handleStoryPartChange = (storypart, actionType) => {
    if (actionType === 'add') {
      setStory((prevStory) => {
        return produce(prevStory, (draft) => {
          const findAndUpdate = (obj) => {
            if (!obj) return;

            if (obj?.id === storypart.id) {
              if (obj.options === null) {
                obj.options = [];
              }
              obj.options.push({
                id: uuidv4(),
                choice: ``,
                storypart: ``,
                options: null,
              });
            } else {
              obj?.options?.map((option) => findAndUpdate(option));
            }
          };

          findAndUpdate(draft.options[0]);
        });
      });
    }
  };

  return (
    <div>
      <Wrapper>
        <div className="space-y-4">
          <div className="flex flex-col w-[300px]">
            <h6 className="small-2 !text-gray-600">Title</h6>
            <input
              type="text"
              id="title"
              name="title"
              value={`${story.title}`}
              onChange={(e) => handleTitleChange(e)}
              placeholder="Enter your story title"
              className="px-2 py-1 outline-none border border-blue-600"
            />
          </div>
          <div className="flex flex-col w-[550px]">
            {story.options.length > 0 && (
              <StoryPart
                options={story.options}
                handleStoryPartChange={handleStoryPartChange}
              />
            )}
          </div>
          <div>
            <Button className="rounded-none">Save</Button>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default CreateStoryPage;
