
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import { Product } from "../interface";
import AddToBag from "../components/AddToBag";

import Rating from "../components/Reting";

async function getData(cateogry: string) {
  const query =`*[_type == "product" && category->name == "${cateogry}"] {
        _id,
          "imageUrl": images[0].asset->url,
          price,
          name,
          "slug": slug.current,
          "categoryName": category->name
      }`;

  const data = await client.fetch(query, {}, { cache: "no-store" });

  return data;
}

export const dynamic = "force-dynamic";

export default async function CategoryPage({
  params,
}: {
  params: { category: string };
}) {
  const data: Product[] = await getData(params.category);

  return (
    <div className="bg-white mr-3 ml-3">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 font-serif">
            Our Products for {params.category}
          </h2>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-5 xl:gap-x-8">
          {data.map((product) => (
            <div key={product._id} className="group relative">
             
                <div className="aspect-square w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-80">
                <Link href={`/product/${product.slug}`}>
                  <Image
                    src={product.imageUrl}
                    alt="Product image"
                    className="w-full h-full object-cover object-center lg:h-full lg:w-full"
                    width={300}
                    height={300}
                  />
                  </Link>
                </div>
             
              <div className="mt-4 flex justify-between items-center">
                <div>
                  <h3 className="text-sm text-blue-700">
                    <Link href={`/product/${product.slug}`}>
                      {product.name}
                    </Link>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    {product.categoryName}
                  </p>
                  <div className="mb-6 flex items-center gap-3 md:mb-10">
             
             <Rating />
                          
                         </div>

                </div>

                <p className="text-sm font-medium text-gray-900">
                  ${product.price}
                </p>
               
              </div>
             
              <div className="mt-2">
                <AddToBag
                  name={product.name}
                  description={`A wonderful ${product.name} from ${product.categoryName}`}
                  price={product.price}
                  currency="USD"
                  image={product.imageUrl}
                  price_id={product._id}
                />
              </div>
            



            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

