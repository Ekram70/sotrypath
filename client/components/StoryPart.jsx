import React from 'react';
import { Button } from './ui/button';
import { Textarea } from './ui/textarea';

const StoryPart = ({ options, style }) => {
  return (
    <div className={`${style} space-y-5`}>
      {options?.map((option) => {
        return (
          <React.Fragment key={option.id}>
            {option?.choice && (
              <div className="flex flex-col w-[300px]">
                <label htmlFor="title" className="small-2 !text-gray-600">
                  Option Title
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={`${option.choice}`}
                  placeholder="Enter your story title"
                  className="bg-gray-100 px-2 py-1 focus-visible:ring-0 outline-1 outline-blue-600"
                />
              </div>
            )}

            <div>
              <label className="small-2 !text-gray-600">Storypart</label>
              <div className="flex gap-4 items-center">
                <Textarea
                  placeholder="Type your story here."
                  className="rounded-none"
                  value={`${option.storypart}`}
                />
                <Button
                  variant="secondary"
                  className="border border-blue-600 rounded-none"
                >
                  Add Options
                </Button>
              </div>
            </div>

            <StoryPart style="pl-10" options={option.options} />
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default StoryPart;
