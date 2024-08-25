'use client';

import StoryPart from '@/components/StoryPart';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import Wrapper from '@/components/Wrapper';
import { useAuthDetails } from '@/context/auth/AuthContext';
import axios from 'axios';
import { produce } from 'immer';
import { Loader } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const CreateStoryPage = () => {
  const [story, setStory] = useState({
    id: uuidv4(),
    title: '',
    imgUrl: '',
    options: [
      {
        id: uuidv4(),
        choice: null,
        storypart: ``,
        options: null,
      },
    ],
  });

  const { dispatch, isAuthenticated } = useAuthDetails();

  const router = useRouter();

  const { toast } = useToast();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/');
    } else {
      setLoading(false);
    }
  }, [isAuthenticated, router]);

  if (loading) {
    return <Loader className="animate-spin" />;
  }

  const handleTitleChange = (e) => {
    setStory((prevStory) => {
      return produce(prevStory, (draft) => {
        draft.title = e.target.value;
      });
    });
  };

  const handleImageChange = (e) => {
    setStory((prevStory) => {
      return produce(prevStory, (draft) => {
        draft.imgUrl = e.target.value;
      });
    });
  };

  const validateStory = (story) => {
    if (!story.title.trim() || !story.imgUrl.trim()) {
      return false;
    }

    const validateOptions = (options) => {
      return options.every((option) => {
        if (option.options) {
          return validateOptions(option.options);
        }

        if (option.choice === null) return true;

        if (!option.choice.trim() || !option.storypart.trim()) {
          return false;
        }

        return true;
      });
    };

    return validateOptions(story.options);
  };

  const handleSave = async () => {
    if (!validateStory(story)) {
      toast({
        variant: 'destructive',
        title: 'Plese enter value into every field',
        duration: 2000,
      });
      return;
    }

    try {
      await axios.post(`${process.env.BASE_URL}/story`, story, {
        headers: {
          'Content-Type': 'application/json',
        },

        withCredentials: true,
      });

      toast({
        variant: 'success',
        title: 'Story Successfully Saved',
        duration: 2000,
      });

      router.push('/profile');
    } catch (error) {
      console.error('Error saving story:', error);
    }
  };

  const handleStoryPartChange = (storypart, actionType, e) => {
    if (actionType === 'add') {
      const updatedStory = produce(story, (draft) => {
        const findAndAdd = (obj) => {
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

            return;
          } else {
            obj?.options?.map((option) => findAndAdd(option));
          }
        };

        findAndAdd(draft.options[0]);
      });

      setStory(updatedStory);
    }

    if (actionType === 'remove') {
      const updatedStory = produce(story, (draft) => {
        const findAndDelete = (obj) => {
          if (!obj?.options) return;

          const idx = obj?.options?.findIndex(
            (option) => option?.id === storypart.id
          );

          if (idx !== -1) {
            obj.options.splice(idx, 1);

            return;
          } else {
            obj?.options?.map((option) => findAndDelete(option));
          }
        };

        findAndDelete(draft.options[0]);
      });

      setStory(updatedStory);
    }

    if (actionType === 'edit') {
      const updatedStory = produce(story, (draft) => {
        const findAndUpdate = (obj) => {
          if (!obj) return;

          if (obj?.id === storypart.id) {
            if (e.target.type === 'text') obj.choice = e.target.value;
            if (e.target.type === 'textarea') obj.storypart = e.target.value;

            return;
          } else {
            obj?.options?.map((option) => findAndUpdate(option));
          }
        };

        findAndUpdate(draft.options[0]);
      });

      setStory(updatedStory);
    }
  };

  return (
    <div>
      <Wrapper className="py-4 px-4 md:px-8">
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
          <div className="flex flex-col w-[300px]">
            <h6 className="small-2 !text-gray-600">Image Url</h6>
            <input
              type="text"
              id="title"
              name="title"
              value={`${story.imgUrl}`}
              onChange={(e) => handleImageChange(e)}
              placeholder="Enter your story image"
              className="px-2 py-1 outline-none border border-blue-600"
            />
          </div>
          <div className="flex flex-col">
            {story.options.length > 0 && (
              <StoryPart
                options={story.options}
                handleStoryPartChange={handleStoryPartChange}
              />
            )}
          </div>
          <div>
            <Button className="rounded-none" onClick={handleSave}>
              Create Story
            </Button>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default CreateStoryPage;
