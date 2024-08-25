'use client';

import SingleStoryData from '@/components/SingleStoryData';
import Wrapper from '@/components/Wrapper';
import axios from 'axios';
import { Loader } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const SingleStoryPage = ({ params }) => {
  const { id } = params;
  const [story, setStory] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStory = async () => {
      try {
        const response = await axios.get(
          `${process.env.BASE_URL}/stories/${id}`
        );
        setStory(response.data);
      } catch (err) {
        setError('Failed to fetch story.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchStory();
  }, [id]);

  if (loading) return (
    <div className="p-4 flex justify-center">
      <Loader size={64} className="animate-spin" />
    </div>
  );
  if (error) return <p>{error}</p>;
  if (!story) return <p>No story found.</p>;

  return (
    <Wrapper className="px-4 md:px-8">
      <h2 className="md:title-1 !text-slate-800 underline decoration-blue-600 text-center mb-12 text-5xl">
        {story.title}
      </h2>
      <div className="flex flex-col lg:flex-row">
        <div className="flex items-center justify-center mb-8 md:mb-0 break-all">
          <Image
            src={`${story.imgUrl}`}
            width={500}
            height={500}
            alt="the forest"
            className="md:min-w-[400px] h-full object-cover"
          />
        </div>
        <p className="text-xl md:ml-8">{story.options[0].storypart}</p>
      </div>
      <SingleStoryData data={story.options[0].options} />
    </Wrapper>
  );
};

export default SingleStoryPage;
