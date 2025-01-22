"use client";
import Link from "next/link";
import { Product } from "use-shopping-cart/core";
import { client } from "../../lib/sanity";
import Image from "next/image";
import { useEffect, useState } from "react";
import AddToBag from "../AddToBag";  
import Rating from "../Reting";

async function fetchProducts() {
  const query = `*[_type == "product"] | order(_createdAt desc) {
        _id,
        price,
        name,
        "slug": slug.current,
        "categoryName": category->name,
        "imageUrl": images[0].asset->url,
        "price_id": priceId  // Assuming price_id is part of the product
      }`;

  const data = await client.fetch(query, {}, { cache: "no-store" });
  return data;
}

export default function All() {
  const [data, setData] = useState<Product[]>([]);

  useEffect(() => {
    async function getData() {
      const products = await fetchProducts();
      setData(products);
    }
    getData();
  }, []);

  return (
    <div className="bg-white">
      <div className="bg-white border border-gray-100 mr-5 ml-1 h-64 text-start flex justify-between items-center px-1 py-1 text-xl lg:text-xs">
        <div className="w-20  flex-1 flex mt-2 justify-center text-[#2A254B] mb-3 font-serif text-left sm:text-left lg:text-center md:text-center text-2xl sm:text-0.5xl md:text-1xl lg:text-2xl">
          <p className="mt-4 mb-2 ">
          Shop our exclusive collection of furniture and home décor to add elegance, functionality, and charm to your dream space.
          </p>
        </div>
      </div>

      <div className="bg-white mr-2 ml-2 w-[98%] text-white flex justify-between h-16 items-center px-1 py-1 text-xl lg:text-xs">
        <div className="flex items-center gap-5 ml-10">
          <select
            className="bg-white text-gray-900 border w-20 h-8 rounded text-xs mr-2"
            aria-label="Category"
          >
            <option>Category</option>
            <option>Furniture</option>
            <option>Home Decor</option>
            <option>Electronic</option>
            <option>Luxuries</option>
            <option>Classic</option>
            <option>Modern</option>
          </select>

          <select
            className="bg-white text-gray-900 border w-20 h-8 rounded text-xs mr-2"
            aria-label="Price"
          >
            <option>Price</option>
            <option>10k to 20k</option>
            <option>20k to 50k</option>
            <option>50k to 10k</option>
            <option>10k to 01M</option>
            <option>01M to 20M</option>
          </select>
        </div>
      </div>

      <div className="mx-auto max-w-2xl px-4 py-10 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-slate-800 font-serif">
          Elevate Your Living with Premium Furniture & Décor
        </h2>

        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-6 gap-y-10">
          {data.map((product) => (
            <div key={product._id} className="group relative">
             
                <div className="aspect-square w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75">
                 <Image
                    src={product.imageUrl}
                    alt="Product image"
                    className="w-full h-full object-cover object-center"
                   height={500}
                   width={500}
                  />
                </div>

                <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-blue-700">
                    <Link href={`/product/${product.slug}`}>{product.name}</Link>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    {product.categoryName}
                  </p>
                </div>
                <p className="text-sm font-medium text-gray-900">
                  ${product.price}
                </p>
              </div>
<Rating/>
              
              <div className="mt-2 ">
                <AddToBag
                  name={product.name}
                  description={product.categoryName}
                  price={product.price}
                  currency="USD" 
                  image={product.imageUrl}
                  price_id={product.price_id} 
                />
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}