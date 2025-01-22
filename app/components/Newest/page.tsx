"use client"

import Link from "next/link";
import { Product } from "use-shopping-cart/core";
import { client } from "@/app/lib/sanity";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import AddToBag from "../AddToBag";
import Rating from "../Reting";
async function fetchProducts() {
  const query = `*[_type == "product"] | order(_createdAt desc) {
        _id,
        price,
        name,
        "slug": slug.current,
        "categoryName": category->name,
        "imageUrl": images[0].asset->url
      }`;

  const data = await client.fetch(query, {}, { cache: "no-store" });
  return data;
}
export default function Newest() {
const [data, setData] = useState<Product[]>([]);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
useEffect(() => {
    async function getData() {

      const products = await fetchProducts();
      console.log(products)
      setData(products);
    }
    getData();
  }, []);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -300,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 300,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="bg-white mt-4">
      <div className="bg-white border  border-gray-200  mr-5 ml-1 h-48 text-start flex justify-between items-center px-1 py-1 text-xl lg:text-xs">
        <div className="w-10 p-1 flex-1 flex mt-2  justify-center text-[#2A254B]  mb-3 font-serif  text-left sm:text-left lg:text-center md:text-center text-1xl sm:text-sm md:text-1xl lg:text-2xl">
          <p className="mt-4 mb-2">A brand built on the love of craftmanship,
            quality and outstanding customer services</p>

        </div>

      </div>




      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">

        <div className="flex justify-between items-center">


          <h2 className="text-2xl font-bold tracking-tight text-slate-900 mt-2 font-serif">
            Explor Our  Latest Offering
          </h2>
          <Link className="text-primary flex items-center ml-8 gap-x-1" href="/components/All">
            See All{" "}
            <span>
              <ArrowRight />
            </span>
          </Link>
        </div>

        <div className="relative mt-6 p-5  border border-gray-300 bg-white ">
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg z-10"
          >
            <ChevronLeft />
          </button>
          <div
            ref={scrollContainerRef}
            className="flex gap-x-6 overflow-x-scroll no-scrollbar"
          >
            {data.map((product) => (
              <div
                key={product._id}
                className="group relative min-w-[300px] flex-shrink-0 "
              >
               
                  <div className="aspect-square w-[300px] h-[250px]  overflow-hidden rounded-md bg-white group-hover:opacity-75">

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
                    <h3 className="text-sm text-gray-blue">
                      <Link href={`/product/${product.slug}`}>
                        {product.name}
                      </Link>
                    </h3>
                    <p className="mt-1 text-sm text-blue-500">
                      {product.categoryName}
                    </p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">
                    ${product.price}
                  </p>
                </div>
                <div className="mb-6 flex items-center gap-3 md:mb-10">

                  <Rating />

                </div>





                <div className="mt-2 mb-5">
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
          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg z-10"
          >
            <ChevronRight />
          </button>
        </div>
      </div>

    </div>
  );
}

