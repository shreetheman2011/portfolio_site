import About from '@/components/sections/About';
import Navbar from '@/components/ui/Navbar';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-white pt-20">
      <Navbar />
      <About />
    </main>
  );
}
