import AllStories from '@/components/AllStories';
import HeroSection from '@/components/HeroSection';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AllStories heading="Find stories" />
    </main>
  );
}
