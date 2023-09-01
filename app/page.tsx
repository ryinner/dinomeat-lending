import TheDelivery from '@/components/TheDelivery';
import TheHero from '@/components/TheHero';
import TheProductsList from '@/components/TheProductsList';

export default function Home() {
  return (
    <>
      <TheHero />
      <TheProductsList />
      <TheDelivery />
    </>
  );
}
