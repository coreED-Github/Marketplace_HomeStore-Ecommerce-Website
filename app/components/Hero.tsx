import Image from "next/image";
import { client , urlFor } from "../lib/sanity";
import Link from "next/link";

async function getData() {
  const query = "*[_type == 'heroImage'][0]";

  const data = await client.fetch(query , {} , {cache: 'no-store'});

  return data;
}

export default async function Hero() {
  const data = await getData();
  return (
    <section className="sm:pb-6 lg:max-w-7xl lg:px-8 mx-auto max-w-2xl px-4 ">
      <div className="mb-8 flex flex-wrap justify-between md:mb-16 ">
        <div className="mb-6 flex w-full flex-col justify-center sm:mb-12 lg:mb-0 lg:w-1/3 lg:pb-18 lg:pt-2">
          <h1 className="md:mb-8 md:text-6xl font-serif mb-4 text-4xl font-bold text-orange-950 sm:text-5xl ">
          Stylish Living Starts Here!
</h1>
          <p className="xl:text-lg max-w-md leading-relaxed text-gray-600 ">
          Create the perfect ambiance with our exclusive collection of furniture and home décor.
           Quality craftsmanship and unique designs at unbeatable prices.
          </p>
        </div>

        <div className="w-full mb-10 flex md:mb-16 lg:w-2/3">
          <div className="relative shadow-lg md:left-16  md:top-16 lg:ml-0 left-12 top-12 z-10 -ml-3  overflow-hidden rounded-lg bg-gray-100 ">
            <Image
              src={urlFor(data.image1).url()}
              alt="Hero Image"
              className="h-full w-full object-cover object-center"
              priority
              width={500}
              height={500}
            />
          </div>
          



          <div className="overflow-hidden rounded-lg bg-gray-100 shadow-lg">
            <Image
              src={urlFor(data.image2).url()}
              alt="Hero Image"
              className="h-full w-full object-cover object-center"
              width={500}
              height={500}
              priority
            />
          </div>
         
        </div>
      </div>

      <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
        <div className="flex h-12 w-64 divide-x overflow-hidden rounded-lg border">
          <Link
            href="/Furniture"
            className="flex w-1/3 items-center justify-center text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-200"
          >
            Furnitur
          </Link>
          <Link
            href="/Home Decor"
            className="flex w-1/2 items-center justify-center text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-200"
          >
            HomeDecor
          </Link>
          <Link
            href="/Furniture"
            className="flex w-1/3 items-center justify-center text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-200"
          >
            Luxuries
          </Link>
        </div>
      </div>
    </section>
  );
}   