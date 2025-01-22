
"use client";

import { useState } from "react";
import { useShoppingCart } from "use-shopping-cart";

export default function Checkout() {
  const { cartDetails, clearCart } = useShoppingCart();
 
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    postalCode: "",
  });

  const [isFormValid, setIsFormValid] = useState(false);
  const [orderCompleted, setOrderCompleted] = useState(false); // State for order completion message

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (isFormValid) {
      setOrderCompleted(true); 
      clearCart();
    } else {
      alert("Please fill all the fields.");
    }
  };

  
  const validateForm = () => {
    const isValid =
      !!formData.name && !!formData.email && !!formData.phone && !!formData.address;
    setIsFormValid(isValid);
  };

 
  const safeCartDetails = cartDetails || {};

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
     
      {orderCompleted ? (
        <div className="text-center">
          <h2 className="text-3xl font-serif font-semibold text-purple-950 mb-4">Thank You!</h2>
          <p className=" text-green-800 mb-6 text-2xl">Your order is confirmed.</p>
          
          <div className="flex justify-center gap-4">
            <button
              onClick={() => alert("Go to Shipping")} 
              className="px-6 py-3  text-black bg-white border border-pink-900  font-semibold rounded-md"
            >
              Go to Shipping
            </button>
            <button
              onClick={() => window.history.back()} 
              className="px-6 py-3 bg-gray-500 text-white font-semibold rounded-md"
            >
              Back
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
          <h1 className="text-3xl font-semibold text-slate-900 font-serif mb-4">Checkout:</h1>
          <h2 className="text-2xl font-semibold text-slate-800 font-serif mb-2">Billing Detail</h2>
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                onBlur={validateForm}
                required
                className="w-full p-2 border border-gray-300 text-black rounded-md"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                onBlur={validateForm}
                required
                className="w-full p-2 border border-gray-300 text-black rounded-md"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Phone</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                onBlur={validateForm}
                required
                className="w-full p-2 border border-gray-300 text-black rounded-md"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Address</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                onBlur={validateForm}
                required
                className="w-full p-2 border border-gray-300 text-black rounded-md"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">City</label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleInputChange}
                onBlur={validateForm}
                required
                className="w-full p-2 border border-gray-300 text-black rounded-md"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Postal Code</label>
              <input
                type="text"
                name="postalCode"
                value={formData.postalCode}
                onChange={handleInputChange}
                onBlur={validateForm}
                required
                className="w-full p-2 border border-gray-300 text-black rounded-md"
              />
            </div>

            <div className="mt-6  p-4 bg-sky-200 rounded-md">
              <h3 className="text-xl font-semibold  text-slate-900 font-serif">Order Summary</h3>
              <div className="mt-4 ">
                {Object.keys(safeCartDetails).length > 0 ? (
                  Object.keys(safeCartDetails).map((productKey) => {
                    const product = safeCartDetails[productKey];
                    return (
                      <div key={product.id} className="flex justify-between text-sm">
                        <span>{product.name}</span>
                        <span>{`$${product.price}`}</span>
                      </div>
                    );
                  })
                ) : (
                  <p>No items in cart</p>
                )}
              </div>
              <div className="mt-4 flex justify-between font-bold">
                <span>Total:</span>
                <span>
                  {Object.values(safeCartDetails).length > 0
                    ? `$${Object.values(safeCartDetails)
                        .reduce((total, product) => total + product.price, 0)
                        .toFixed(2)}`
                    : "$0.00"}
                </span>
              </div>
            </div>

            <div className="mt-6">
              <button
                type="submit"
                disabled={!isFormValid}
                className={`w-full py-3 bg-slate-800 text-white font-semibold rounded-md ${
                  !isFormValid ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                Complete Order
              </button>
            </div>
          </div>
        </form>
      )}
    </div>
  );
}