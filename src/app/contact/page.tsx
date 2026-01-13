import Contact from '@/components/sections/Contact';
import Navbar from '@/components/ui/Navbar';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-black text-white pt-20">
      <Navbar />
      <Contact />
    </main>
  );
}
