import Navbar from "@/components/ui/Navbar";
import Hero from "@/components/sections/Hero";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <a href="https://www.teacheron.com/tutor/cSzB?r=cSzB" target="_blank" style="display: inline-block;"><img src="https://www.teacheron.com/resources/assets/img/badges/viewMyProfile.png" style="width: 160px !important; height: 68px !important"></a>
    </main>
  );
}
