'use client';

import AllStories from '@/components/AllStories';
import Wrapper from '@/components/Wrapper';
import { useAuthDetails } from '@/context/auth/AuthContext';

import axios from 'axios';
import { Loader } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const ProfilePage = ({ params }) => {
  const { id } = params;

  const { dispatch, isAuthenticated } = useAuthDetails();
  const router = useRouter();

  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/');
    } else {
      const fetchUserData = async () => {
        try {
          const response = await axios.get(`${process.env.BASE_URL}/getUser`, {
            withCredentials: true,
          });

          setUser(response.data.user);

          setLoading(false);
        } catch (error) {
          console.error('Error fetching user data:', error);
        }
      };

      fetchUserData();
    }
  }, [isAuthenticated, router, id]);

  if (loading) {
    return <Loader className="animate-spin" />;
  }

  if (!user) {
    return <p>Loading user data failed. Please try again later.</p>;
  }

  return (
    <Wrapper className="py-4 px-4 md:px-8">
      <div className="flex gap-5 items-center justify-between flex-col sm:flex-row">
        <div className="flex gap-4 items-center">
          <div className="h-[100px] w-[100px] rounded-full overflow-hidden">
            <Image
              src={`https://avatar.iran.liara.run/public/boy?username=Ash`}
              height={100}
              width={100}
              alt="profile"
            />
          </div>
          <div>
            <h2 className="title-3">{user.name}</h2>
            <p>Email: {user.email}</p>
          </div>
        </div>
      </div>
      <AllStories heading="My previous stories" />
    </Wrapper>
  );
};

export default ProfilePage;
