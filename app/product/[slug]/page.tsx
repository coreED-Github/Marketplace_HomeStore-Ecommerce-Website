import AddToBag from "@/app/components/AddToBag";
import ImageGallery from "@/app/components/ImageGallery";
import Quantity from "@/app/components/Quantity";
import RatingComponent from "@/app/components/RatingComponent";
import { ArrowRight  , ArrowLeft} from "lucide-react";
import { fullProduct } from "@/app/interface";
import { client } from "@/app/lib/sanity";
import { Button } from "@/components/ui/button";
import { Truck } from "lucide-react";
import Link from "next/link";

async function getData(slug: string) {
  const query = `*[_type == "product" && slug.current == "${slug}"][0] {
        _id,
        images,
        price,
        name,
        description,
        "slug": slug.current,
        "categoryName": category->name,
        price_id
      }`;

  const data = await client.fetch(query, {}, { cache: "no-store" });
  return data;
}

export const dynamic = "force-dynamic";

export default async function ProductPage({
  params,
}: {
  params: { slug: string };
}) {
  const data: fullProduct = await getData(params.slug);

  return (
    <div className=" px-3 py-3 sm:px-6 lg:px-6">
      <div className="mx-auto max-w-screen-lg">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-1 lg:grid-cols-2 sm:grid-cols-1 items-start">
        
          <div >
          <ImageGallery images={data.images} />
          </div>
          

          <div className=" border border-gray-300 p-5 mr-4 bg-white flex flex-col justify justify items-start ">
            <div className="mb-2 ">
              <span className="block text-sm text-gray-500 mb-1">
                {data.categoryName}
              </span>
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
                {data.name}
              </h1>
            </div>

           
            <div className="mb-2 mt-3 flex items-center gap-2">
              <RatingComponent />
              
            </div>

            {/* Price Section */}
            <div className="mb-6">
              <div className="flex items-end gap-3">
                <span className="text-2xl sm:text-3xl font-bold text-gray-800">
                  ${data.price}
                </span>
                <span className="text-sm text-red-500 line-through">
                  ${data.price + 30}
                </span>
              </div>
              <p className="text-sm text-gray-500 mt-1">
                Incl. VAT plus shipping
              </p>
            </div>

           
            <div className="mb-2">
              <Quantity />
            </div>

           
            <div className="mb-2 flex items-center gap-2 text-gray-500">
              <Truck className="w-5 h-5" />
              <span>2-4 Day Shipping</span>
            </div>

           
            <div className="flex flex-wrap gap-4">
              <AddToBag
                currency="USD"
                description={data.description}
                image={data.images[0]}
                name={data.name}
                price={data.price}
                key={data._id}
                price_id={data.price_id}
              />
              <Link href="/Checkout">
                <Button className="bg-white text-black border border-gray-800 px-4 py-2 rounded-md">
                  Check Out
                </Button>
              </Link>
            </div>

            {/* Description */}
            <p className="mt-8 text-sm text-gray-600 leading-relaxed">
              {data.description}
            </p>
          </div>
         

        </div>
      </div>
    </div>
  );
}