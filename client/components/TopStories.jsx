import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import cardData from '@/public/data/cardData';
import Image from 'next/image';
import Wrapper from './Wrapper';
import { Button } from './ui/button';

const TopStories = () => {
  const updatedData = cardData.map((card) => {
    return {
      ...card,
      title:
        card.title.length > 20
          ? card.title.substring(0, 20) + '...'
          : card.title,
      description:
        card.description.length > 180
          ? card.description.substring(0, 180) + '...'
          : card.description,
    };
  });

  return (
    <Wrapper className="py-9">
      <h2 className="title-3 !font-bold uppercase text-center mb-8">
        Top Stories
      </h2>
      <div className="flex gap-4">
        {updatedData.map((card) => {
          return (
            <Card
              key={card.id}
              className="max-w-[300px] hover:shadow-md p-0 rounded-none"
            >
              <CardHeader className="p-0">
                <div className="w-[300px] h-[150px] overflow-hidden">
                  <Image
                    src={`${card.imgUrl}`}
                    width={300}
                    height={300}
                    alt="the forest"
                  />
                </div>
                <div className="px-4 py-2">
                  <CardTitle className="text-[22px] mb-1">
                    {card.title}
                  </CardTitle>
                  <CardDescription className="small-2 !font-normal !text-gray-600">
                    {card.author} | {card.date}
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent className="p-4">
                <p>{card.description}</p>
              </CardContent>
              <CardFooter className="px-4">
                <Button className="inline-block rounded-none text-base text-white border border-blue-600 hover:bg-white hover:text-blue-600">
                  Read More
                </Button>
              </CardFooter>
            </Card>
          );
        })}
      </div>
      <Button
        variant="secondary"
        className="mt-20 mx-auto block text-center rounded-none text-base px-9 h-[52px] text-blue-600 border border-transparent hover:border-blue-600"
      >
        See All Stories
      </Button>
    </Wrapper>
  );
};

export default TopStories;
