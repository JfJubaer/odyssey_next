import FeaturedProducts from "@/components/FeaturedProduct";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Nav";

export default function Home() {
  return (
    <div>
      <main>
        <Hero />
        <FeaturedProducts />
      </main>
    </div>
  );
}
