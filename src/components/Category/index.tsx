import Image from "next/image";

interface Category {
  id: number;
  name: string;
  image: string;
}

const categories: Category[] = [
  { id: 1, name: "Electronics", image: "/images/electronics.jpg" },
  { id: 2, name: "Clothing", image: "/images/clothing.jpg" },
  { id: 3, name: "Home & Living", image: "/images/home-living.jpg" },
  { id: 4, name: "Books", image: "/images/books.jpg" },
];

const CategoryProduct = () => {
  return (
    <div className="px-4 py-8 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-6">Shop by Category</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {categories.map((category) => (
          <div
            key={category.id}
            className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow"
          >
            <Image
              src={category.image}
              alt={category.name}
              className="object-cover w-full h-48 group-hover:scale-110 transition-transform duration-500"
              width={300}
              height={200}
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <h3 className="text-white text-lg font-semibold">
                {category.name}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryProduct;
