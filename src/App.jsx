import Preloader from "@/components/Preloader";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FlowerAssembly from "@/components/FlowerAssembly";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import Interlude from "@/components/Interlude";
import Carte from "@/components/Carte";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function App() {
  return (
    <main className="grain">
      <Preloader />
      <Navbar />
      <Hero />
      <FlowerAssembly />
      <Marquee />
      <About />
      <Services />
      <Interlude />
      <Gallery />
      <Marquee dark />
      <Carte />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
