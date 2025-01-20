export default {
    name: 'product',
    type: 'document',
    title: 'Product',
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Name of Product',
      },
      {
        name: 'images',
        type: 'array',
        title: 'Product Images',
        of: [{type: 'image'}],
      },
      {
        name: 'description',
        type: 'text',
        title: 'Description of product',
      },
      {
        name: 'slug',
        type: 'slug',
        title: 'Product Slug',
        options: {
          source: 'name',
        },
      },
      {
        name: 'price',
        title: 'Price',
        type: 'number',
      },
/////
// {
//     name: 'productID',
//     title: 'Product ID',
//     type: 'string',
//   },
  
 
//   {
//     name: 'image',
//     title: 'Product Image',
//     type: 'image',
//   },
// //   {
// //     name: 'price',
// //     title: 'Price',
// //     type: 'number',
// //   },
//   {
//     name: 'stockQuantity',
//     title: 'Stock Quantity',
//     type: 'number',
//   },
// //   {
// //     name: 'category',
// //     title: 'Category',
// //     type: 'reference',
// //     to: [{ type: 'category' }],
// //   },
//   {
//     name: 'tags',
//     title: 'Tags',
//     type: 'array',
//     of: [{ type: 'string' }],
//   },
// //   {
// //     name: 'description',
// //     title: 'Description',
// //     type: 'text',
// //     description: 'Detailed description of the product',
// //   },
//   {
//     name: 'features',
//     title: 'Features',
//     type: 'array',
//     of: [{ type: 'string' }],
//     description: 'List of key features of the product',
//   },
//   {
//     name: 'dimensions',
//     title: 'Dimensions',
//     type: 'object',
//     fields: [
//       { name: 'height', title: 'Height', type: 'string' },
//       { name: 'width', title: 'Width', type: 'string' },
//       { name: 'depth', title: 'Depth', type: 'string' },
//     ],
//     description: 'Dimensions of the product',
//   },

//   {
//     name: 'wholesalePrice',
//     title: 'Wholesale Price',
//     type: 'number',

//     description: 'Discounted price for wholesale purchases',
//   },
//   {
//     name: 'minOrderQuantity',
//     title: 'Minimum Order Quantity',
//     type: 'number',
//     description: 'Minimum quantity required for wholesale price',
//   },
//   {
//     name: 'bulkDiscount',
//     title: 'Bulk Discount (%)',
//     type: 'number',

//     description: 'Percentage discount for bulk purchases',
//   },

//   {
//     name: 'customizable',
//     title: 'Customizable',
//     type: 'boolean',
//     description: 'Is this product customizable?',
//   },
//   {
//     name: 'customizationOptions',
//     title: 'Customization Options',
//     type: 'array',
//     of: [{ type: 'string' }],
//     hidden: ({ document }: any) => !document?.customizable,
//     description: 'Available options for customization',
//   },














    //   {
    //     name: 'price_id',
    //     title: 'Stripe Price ID',
    //     type: 'string',
    //   },
      {
        name: 'category',
        title: 'Product Category',
        type: 'reference',
        to: [
          {
            type: 'category',
          },
        ],
      },
    ],
  }