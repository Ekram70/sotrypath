'use client';

import { produce } from 'immer';
import { useState } from 'react';
import { Button } from './ui/button';

const SingleStoryData = ({ data }) => {
  const [storypart, setStorypart] = useState({
    data,
    textArr: [],
  });

  const addStoryPart = (id) => {
    const findStoryPart = (dataArr) => {
      if (!dataArr) return;

      for (let i = 0; i < dataArr.length; i++) {
        if (dataArr[i].id === id) {
          setStorypart((prevState) => {
            return produce(prevState, (draft) => {
              draft.textArr.push(dataArr[i].storypart);
              draft.data = dataArr[i].options;
            });
          });
        } else {
          findStoryPart(dataArr[i].options);
        }
      }
    };

    findStoryPart(storypart.data);
  };

  return (
    <>
      {storypart.textArr.map((singleStoryPart, idx) => (
        <div key={idx} className="mt-8">
          <p>{singleStoryPart}</p>
        </div>
      ))}

      <div className="clear-both flex flex-col items-center">
        {storypart.data && (
          <h4 className="title-3 my-8">Choose your story branch</h4>
        )}
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            {storypart.data &&
              storypart.data.map((singleOption) => (
                <Button
                  key={singleOption.id}
                  variant="outline"
                  className="inline-block rounded-none text-base text-blue-600  hover:text-white hover:bg-blue-600 border border-blue-600"
                  onClick={() => addStoryPart(singleOption.id)}
                >
                  {singleOption.choice}
                </Button>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleStoryData;
