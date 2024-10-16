import Hero from "@/components/Hero/Index";
import Category from "@/components/Category/Index";
import Product from "@/components/Product/Index";
import ProductGrid from "@/components/ProductGrid/Index";
import Testimonial from "@/components/Testimonial/Index";
export default function Home() {
  return (
    <>
      <Hero />
      <Category />
      <ProductGrid />
      <Product />
      <Testimonial />
    </>
  );
}
