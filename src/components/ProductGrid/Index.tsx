import Image from "next/image";
import Link from "next/link";
import GridOne from "@/src/Assets/ProductGrid/GridOne.png";
import GridTwo from "@/src/Assets/ProductGrid/GridTwo.png";
import GridThree from "@/src/Assets/ProductGrid/GridThree.png";
import GridFour from "@/src/Assets/ProductGrid/GridFour.png";

const Index = () => {
  return (
    <div className="bg-white dark:bg-dark">
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="relative flex items-center justify-center bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
            <div className="text-center">
              <Image
                src={GridOne}
                alt="Womens Style"
                width={500}
                height={300}
                quality={100}
                className="rounded-md"
              />
              <div className="absolute top-4 left-4 bg-blue-500 text-white px-2 py-1 rounded">
                New Arrivals
              </div>
              <div className="absolute bottom-4 left-4">
                <h2 className="text-3xl font-bold text-gray-950 dark:text-white">
                  Womens Style
                </h2>
                <p className="text-lg text-gray-950 dark:text-white">
                  Up to 70% Off
                </p>
                <Link
                  href="/"
                  className="bg-black text-white px-4 py-2 mt-2 inline-block rounded hover:bg-gray-800 transition duration-300"
                >
                  Shop Now
                </Link>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="relative flex items-center justify-center bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
              <Image
                src={GridTwo}
                alt="Handbag"
                width={200}
                height={200}
                quality={100}
                className="rounded-md"
              />
              <div className="absolute top-4 left-4 bg-blue-500 text-white px-2 py-1 rounded">
                20% Off
              </div>
              <div className="absolute bottom-4 left-4">
                <h3 className="text-xl font-semibold text-gray-950 dark:text-white">
                  Handbag
                </h3>
                <Link
                  className="text-blue-500 hover:underline"
                  href="/shop-now"
                >
                  Shop Now
                </Link>
              </div>
            </div>
            <div className="relative flex items-center justify-center bg-gray-100 dark:bg-gray-800 dark:bg-gray-800p-4 rounded-lg">
              <Image
                src={GridFour}
                alt="Watch"
                width={200}
                height={200}
                quality={100}
                className="rounded-md"
              />
              <div className="absolute top-4 left-4 bg-blue-500 text-white px-2 py-1 rounded">
                45% Off
              </div>
              <div className="absolute bottom-4 left-4">
                <h3 className="text-xl font-semibold text-gray-950 dark:text-white">
                  Watch
                </h3>
                <Link
                  className="text-blue-500 hover:underline"
                  href="/shop-now"
                >
                  Shop Now
                </Link>
              </div>
            </div>
            <div className="relative flex items-center justify-center bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
              <Image
                src={GridThree}
                alt="Backpack"
                width={200}
                height={200}
                quality={100}
                className="rounded-md"
              />
              <div className="absolute top-4 left-4 bg-gray-500 text-white px-2 py-1 rounded">
                Min. 40%-80% Off
              </div>
              <div className="absolute bottom-4 left-4 text-gray-950 dark:text-white">
                <h3 className="text-xl font-semibold">Backpack</h3>
                <Link
                  className="text-blue-500 hover:underline"
                  href="/shop-now"
                >
                  Shop Now
                </Link>
              </div>
            </div>
            <div className="relative flex items-center justify-center bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
              <Image
                src={GridThree}
                alt="Backpack"
                width={200}
                height={200}
                quality={100}
                className="rounded-md"
              />
              <div className="absolute top-4 left-4 bg-gray-500 text-white px-2 py-1 rounded">
                Min. 40%-80% Off
              </div>
              <div className="absolute bottom-4 left-4">
                <h3 className="text-xl font-semibold text-gray-950 dark:text-white">
                  Backpack
                </h3>
                <Link
                  className="text-blue-500 hover:underline"
                  href="/shop-now"
                >
                  Shop Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
