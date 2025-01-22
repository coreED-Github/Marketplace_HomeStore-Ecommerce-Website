import AddToBagWithQuantity from "./AddtoBagWithQuantity";


// export default function Quantity() {
//   const product = {
//     name: "Product Name",
//     description: "This is a sample product",
//     price: 100,
//     currency: "USD",
//     image: "/path/to/image.jpg",
//     price_id: "price_12345",
//   };

//   return (
//     <div className="p-4">
//       <AddToBagWithQuantity
//         name={product.name}
//         description={product.description}
//         price={product.price}
//         currency={product.currency}
//         image={product.image}
//         price_id={product.price_id}
//       />
//     </div>
//   );
// }




export default function ProductPage() {
  const product = {
    name: "Product Name",
    description: "This is a sample product",
    price: 100,
    currency: "USD",
    image: "/path/to/image.jpg",
    price_id: "price_12345",
  };

  return (
    <div className="p-4">
      <AddToBagWithQuantity
        name={product.name}
        description={product.description}
        price={product.price}
        currency={product.currency}
        image={product.image}
        price_id={product.price_id}
      />
    </div>
  );
}