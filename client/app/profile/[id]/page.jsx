import AllStories from '@/components/AllStories';
import Wrapper from '@/components/Wrapper';
import userData from '@/public/data/userData';
import { MoveUpRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const ProfilePage = ({ params }) => {
  const { id } = params;

  const [user] = userData.filter((user) => user.id == id);

  

  return (
    <Wrapper>
      <div className="flex gap-4 items-center justify-between">
        <div className="flex gap-4 items-center">
          <div className="h-[100px] w-[100px] rounded-full overflow-hidden">
            <Image
              src={`${user.picture}`}
              height={100}
              width={100}
              alt="profile"
            />
          </div>
          <div>
            <h2 className="title-3">{user.name}</h2>
            <p>Total Story Created: {user.stories.length}</p>
          </div>
        </div>
        <div>
          <h2 className="title-1 !text-[20px] flex items-center border-4 border-blue-600 px-4 hover:underline hover:decoration-blue-600 hover:decoration-4">
            <span className="text-blue-600 leading-none py-4">
              <Link href="/profile/1/create">Create Story</Link>
            </span>
            <MoveUpRight className="text-blue-600" size={25} />
          </h2>
        </div>
      </div>
      <AllStories search={false} heading="My previous stories" />
    </Wrapper>
  );
};

export default ProfilePage;
