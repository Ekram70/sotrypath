import AllStories from '@/components/AllStories';
import HeroSection from '@/components/HeroSection';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AllStories search={true} heading="Find stories" />
    </main>
  );
}
