"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useShoppingCart } from "use-shopping-cart";

export interface ProductCart {
  name: string;
  description: string;
  price: number;
  currency: string;
  image: any;
  price_id: string;
}

export default function AddToBagWithQuantity({
  currency,
  description,
  image,
  name,
  price,
  price_id,
}: ProductCart) {
  const { addItem, handleCartClick } = useShoppingCart();
  const [quantity, setQuantity] = useState(1);

  const product = {
    name: name,
    description: description,
    price: price,
    currency: currency,
    // image: urlFor(image).url(),
    price_id: price_id,
  };

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addItem(product);
    }
    handleCartClick();
  };

  return (
    <div className="flex items-center space-x-4">
      {/* Subtract Button */}
      <Button
        className="bg-gray-200 text-black px-3"
        onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
      >
        
        -
      </Button>

      {/* Quantity Display */}
      <span className="text-lg font-semibold">{quantity}</span>

     
      <Button
        className="bg-gray-200 text-black px-3"
        onClick={() => setQuantity((prev) => prev + 1)}
      >
        +
      </Button>

  
    </div>
  );
}