'use client';
import { produce } from 'immer';
import React, { useState } from 'react';

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
    <React.Fragment>
      {storypart.textArr.map((singleStoryPart, idx) => (
        <div key={idx} className="mt-8 text-xl">
          <p>{singleStoryPart}</p>
        </div>
      ))}

      <div className="clear-both flex flex-col items-center">
        {storypart.data && (
          <h4 className="title-3 my-8">Choose your story branch</h4>
        )}
        <div className="space-y-2 px-8">
          <div className="flex gap-4 justify-center flex-wrap space-x-2">
            {storypart.data &&
              storypart.data.map((singleOption) => (
                <div
                  key={singleOption.id}
                  className="border-[2px] text-base text-blue-600  hover:text-white hover:bg-blue-600 border-blue-600 py-2 px-3 font-bold"
                  onClick={() => addStoryPart(singleOption.id)}
                >
                  <p>{singleOption.choice}</p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default SingleStoryData;
