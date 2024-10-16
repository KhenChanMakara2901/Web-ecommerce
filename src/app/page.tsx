import Hero from "@/components/Hero/Index";
import Product from "@/components/Product/Index";
import Category from "@/components/Category/Index";
import ProductGrid from "@/components/ProductGrid/Index";
import Testimonial from "@/components/Testimonial/Index";
export default function Home() {
  return (
    <div className="scroll-smooth">
      <Hero />
      <Category />
      <ProductGrid />
      <Product />
      <Testimonial />
    </div>
  );
}
