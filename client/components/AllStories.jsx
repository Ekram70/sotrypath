'use client';

import { Input } from '@/components/ui/input';
import convertDate from '@/lib/convertDate';
import axios from 'axios';
import { Loader, Search } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Wrapper from './Wrapper';
import { Button } from './ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from './ui/card';

const AllStories = ({ search, heading }) => {
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStories = async () => {
      try {
        const response = await axios.get(
          `${process.env.BASE_URL}/getAllStories`
        );
        setStories(response.data);
      } catch (err) {
        setError('Failed to fetch stories.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchStories();
  }, []);

  if (loading) return <Loader className="animate-spin" />;
  if (error) return <p>{error}</p>;

  return (
    <div className="px-4 md:px-8 lg:px-16">
      <Wrapper>
        <div>
          <div>
            <h2 className="title-3 !font-bold uppercase text-center mb-8">
              {heading}
            </h2>
          </div>
          {search && (
            <div className="flex justify-center mb-12">
              <Input
                type="text"
                placeholder="Search Stories"
                className="rounded-none bg-transparent border-4 border-blue-600 outline-none focus-visible:ring-0 w-full max-w-[500px]"
              />
              <Link href="#">
                <Search className="border-4 border-l-0 border-blue-600 inline-block h-[40px] w-[40px] p-1 text-blue-600" />
              </Link>
            </div>
          )}
          <div className="flex justify-center items-center flex-wrap gap-6">
            {stories.map((story) => {
              return (
                <Card
                  key={story.id}
                  className="md:max-w-[280px] max-w-[500px]  hover:shadow-md p-0 rounded-none"
                >
                  <CardHeader className="p-0">
                    <div className="h-[250px] md:h-[150px] overflow-hidden">
                      <Image
                        src={`${story.imgUrl}`}
                        width={580}
                        height={150}
                        alt="the forest"
                      />
                    </div>
                    <div className="px-4 py-2">
                      <CardTitle className="text-[22px] mb-1">
                        {story.title.substring(0, 20) + '...'}
                      </CardTitle>
                      <CardDescription className="small-2 !font-normal !text-gray-600">
                        {story.author} | {convertDate(story.createdAt)}
                      </CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent className="p-4">
                    <p>
                      {story.options[0].storypart.substring(0, 180) + '...'}
                    </p>
                  </CardContent>
                  <CardFooter className="px-4">
                    <Button
                      className="inline-block rounded-none text-base text-white border border-blue-600 hover:bg-white hover:text-blue-600"
                      asChild
                    >
                      <Link href={`/stories/${story._id}`}> Read More</Link>
                    </Button>
                  </CardFooter>
                </Card>
              );
            })}
          </div>
          <div className="text-center">
            <Button
              variant="secondary"
              className="mt-20 text-center rounded-none text-base px-9 h-[52px] text-blue-600 border border-transparent hover:border-blue-600"
              asChild
            >
              <Link href="/">Load More</Link>
            </Button>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default AllStories;
