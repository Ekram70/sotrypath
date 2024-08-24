import React from 'react';
import { Button } from './ui/button';
import { Textarea } from './ui/textarea';

const StoryPart = ({ options, style, handleStoryPartChange }) => {
  return (
    <div className={`${style} space-y-5`}>
      {options?.map((option) => {
        return (
          <React.Fragment key={option.id}>
            {option.choice !== null && (
              <div className="flex flex-col w-[300px]">
                <h6 className="small-2 !text-gray-600">Option Title</h6>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={`${option.choice}`}
                  onChange={(e) => handleStoryPartChange(option, 'edit', e)}
                  placeholder="Enter your story title"
                  className="px-2 py-1 outline-none border border-blue-600"
                />
              </div>
            )}

            <div>
              <h6 className="small-2 !text-gray-600">Storypart</h6>
              <div className="flex gap-4 items-center">
                <Textarea
                  placeholder="Type your story here."
                  className="rounded-none border border-blue-600 focus-visible:ring-0 w-[300px]"
                  value={`${option.storypart}`}
                  onChange={(e) => handleStoryPartChange(option, 'edit', e)}
                />
                <Button
                  variant="secondary"
                  className="border border-blue-600 rounded-none"
                  onClick={() => handleStoryPartChange(option, 'add')}
                >
                  Add Options
                </Button>
                {option.choice !== null && (
                  <Button
                    variant="secondary"
                    className="border border-blue-600 rounded-none"
                    onClick={() => handleStoryPartChange(option, 'remove')}
                  >
                    Remove This
                  </Button>
                )}
              </div>
            </div>

            <StoryPart
              style="pl-10"
              options={option.options}
              handleStoryPartChange={handleStoryPartChange}
            />
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default StoryPart;
