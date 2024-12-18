import Header from '@/components/Header';
import Banner from '@/components/Banner';
import Services from '@/components/Services';
import Dishes from '@/components/Dishes';
import Testimonials from '@/components/Testimonials';
import Reservations from '@/components/Reservations';

export default function Home() {
  return (
    <main>
      <Header />
      <Banner />
      <Services />
      <Dishes />
      <Testimonials />
      <Reservations />
    </main>
  );
}
