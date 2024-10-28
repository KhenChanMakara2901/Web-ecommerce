import Hero from "@/src/components/Hero/Index";
import Product from "@/src/components/Product/Index";
import ProductGrid from "@/src/components/ProductGrid/Index";
import Testimonial from "@/src/components/Testimonial/Index";
import Category from "@/src/components/Category/Index";
import Sections from "@/src/components/Sections/Index";
import Facts from "@/src/components/Facts/Index";

export default function Home() {
  return (
    <div className="scroll-smooth">
      <Hero />
      <Category />
      <ProductGrid />
      <Sections />
      <Product />
      <Facts />
      <Testimonial />
    </div>
  );
}
