import Image from "next/image";
import Navbar from "./components/Nav";
import Hero from "./components/Hero";
import FeaturedProducts from "./components/FeaturedProduct";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main>
        <Hero />
        <FeaturedProducts />
      </main>
      <Footer />
    </div>
  );
}
