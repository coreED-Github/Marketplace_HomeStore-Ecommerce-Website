# Hackathon 03 - Marketplace Journey (Day 1)

## *Overview*
This repository documents my journey of building an innovative e-commerce marketplace during the Hackathon under the mentorship of *Sir Ali Jawwad* and *Sir Ameen Alam* at the *Governor Sindh Initiative*. My marketplace aims to provide a seamless and reliable platform for users, integrating unique business goals and features.

---

## *Day 1 - Laying the Foundation*
The focus of Day 1 was to establish a solid foundation for my e-commerce platform. I worked on defining the marketplace type, business goals, audience, and key differentiators while preparing a robust data schema for the platform.

---

### *Step 1: Marketplace Type*
*Type Chosen:* General E-Commerce  
The platform will serve as a versatile marketplace for home decor, furniture, and related products, offering both retail and wholesale options. 

#### *Why General E-Commerce?*
- Supports both small businesses and larger vendors.
- Offers a wide range of products across multiple categories.
- Convenient for customers to find everything in one place.

---

### *Step 2: My Business Goals*
1. *Affordable & Stylish Products*:  
   Provide diverse home decor and furniture options at affordable prices for homeowners, designers, and first-time buyers.  

2. *Wholesale for Shops*:  
   Enable shop owners to purchase products in bulk with discounts and customization options.  

3. *Timely Deliveries*:  
   Offer streamlined and affordable delivery services with flexible options.  

4. *Dedicated Brand Pages*:  
   Partner with reputable brands to create dedicated pages showcasing products and detailed brand information.  

5. *Support for Local Artisans*:  
   Empower local artisans by providing a platform to showcase and sell their handmade products globally.  

6. *Reliable Platform*:  
   Build a user-friendly and trustworthy platform ensuring product quality and secure payment options.  

---

### *Step 3: Target Audience*
1. *Homeowners & Renters*: Stylish and affordable home decor solutions.  
2. *Interior Designers*: High-quality products for client needs.  
3. *Shop Owners*: Bulk purchasing with discounts and customization.  
4. *First-Time Buyers*: Practical and affordable solutions for new homes.  
5. *Local Artisans & Small Businesses*: Showcase and sell unique products globally.  
6. *Brand-Conscious Customers*: Curated shopping experience with detailed brand information.  
7. *Budget-Conscious Shoppers*: Quality products at competitive prices.

---

### *Step 4: Products & Services*
1. *Home Decor Products*: Wall art, rugs, lamps, etc.  
2. *Office Decor Products*: Ergonomic chairs, shelves, lighting, etc.  
3. *Furniture*: Sofas, dining tables, outdoor furniture, etc.  
4. *Customizable Options*: Designs, colors, materials, etc.  
5. *Wholesale Products*: Discounted bulk purchases for shops.  
6. *Brand-Specific Products*: Dedicated brand pages showcasing premium products.  

---

### *Step 5: Data Schema*
The marketplace will use a structured data schema for seamless operations. Key entities include:

#### *1. Product*
- ProductID: Unique identifier.  
- Name, Price, Category, Description.  
- Images, Brand (optional).  
- WholesalePrice & WholesaleQuantity (optional).  

#### *2. Order*
- OrderID, CustomerID, ProductID, Quantity.  
- TotalPrice, OrderStatus, PaymentStatus.  
- ShippingAddress, OrderDate.  

#### *3. Customer*
- CustomerID: Unique identifier.  
- Email, ContactInfo.  
- BusinessName (optional).  
- IsWholesaleCustomer.  

#### *4. Shipment*
- ShipmentID, OrderID, TrackingNumber.  
- ShipmentStatus, ShipmentDate, DeliveryDate.  

#### *5. Delivery Zone*
- ZoneID, ZoneName, CoverageArea.  
- AssignedDriver, EstimatedDeliveryTime.

---

### *Day 1 Documentation*
For a detailed breakdown of Day 1 tasks, including diagrams, goals, and schema design, refer to the [PDF Documentation](#).

---

### *What’s Next?*
Day 2 will focus on creating dynamic frontend components using *Next.js* and implementing the backend schema in *Sanity CMS*.

---

## *Technologies Used*
- *Frontend*: Next.js, TailwindCSS  
- *CMS*: Sanity CMS  
- *Database*: Structured schemas for data entities  
- *Deployment*: GitHub for version control  

---

## *Contributions*
Feel free to explore the repository and suggest improvements. Let’s make this marketplace a success together!  

*Contact:*  
- *Name*: Saira  
- *Email*: [sairanasir853@gmail.com]  
## *Documentation Link Day 01*

https://github.com/coreED-Github/Marketplace_HomeStore-Ecommerce-Website/blob/main/MarketPlace%20Day%201%20Task.pdf




# Day 02: Planning the Technical Foundation

## Overview

On Day 02, I transitioned from business planning to technical preparation for the *HomeStyle Market* e-commerce marketplace. This day was dedicated to creating a high-level technical plan, including system architecture, workflows, and API requirements. These elements will guide the development process and ensure that the technical solution aligns with the business objectives.

---

## Recap of Day 01: Business Focus

### E-Commerce Project Overview:
- *Marketplace Name*: HomeStyle Market (Furniture/Home Decor)
- Focused on understanding the business requirements to ensure the marketplace caters to a wide range of customers.

### Business Goals:
1. Affordable & stylish products (different styles, unique designs, affordable prices).
2. Wholesale pricing for shop owners (for large quantities).
3. Timely delivery with affordable and flexible options.
4. Dedicated brand pages with high-quality brands.
5. Support for local artisans (small businesses, global customer reach).
6. Reliable platform with secure payments and detailed product descriptions.
7. Enhanced customer support (help center).

### Target Audience:
- Homeowners
- Renters
- Shop owners
- First-time buyers
- Small businesses
- Artisans
- Brand-conscious customers
- Budget-conscious shoppers

### Data Schema Draft:
- *Product*: Product ID, Name, Price, Stock Quantity, Category, Description, Image URLs, Brand, Wholesale Price (optional), Wholesale Quantity (optional)
- *Order*: Order ID, Customer ID (Reference to [Customer]), Product ID (Reference to [Product]), Quantity, Total Price, Order Status, Payment Status, Shipping Address, Order Date
- *Customer*: Customer ID, Name, Email, Contact Info, Business Name (optional), Wholesale Customer (optional)
- *Shipment*: Shipment ID, Order ID (Reference to [Order]), Tracking Number, Shipment Status, Shipment Date, Delivery Date (optional)
- *Delivery Zone*: Zone ID, Zone Name, Coverage Area, Assigned Driver, Estimated Delivery Time, Zone Details

---

## Day 02 Activities: Transitioning to Technical Planning

### 1. Define Technical Requirements

*Frontend Development Approach:*
- *Framework*: Next.js (for server-side rendering and static site generation)
    - Dynamic routes for pages (product details).
    - Data fetching via getStaticProps and getServerSideProps.
- *Styling*: TailwindCSS (responsive and modern UI design).
    - Layouts using Flexbox and Grid utilities.
    - Ensuring responsiveness with breakpoints.
- *Interactive Components*: React hooks (useState, useEffect), React Icons, Headless UI for accessible components (e.g., dropdowns, modals).

*Backend Development Approach:*
- *Database*: Sanity CMS (headless CMS for managing product, order, and customer data).
    - Schemas for products, categories, customers, and orders.
- *Shipment and Order Tracking*: EasyPost or Shippo API for real-time shipment tracking.
- *Payment Gateway*: Stripe API for secure online payments.

### Step-by-Step Workflow:
1. *Frontend Development*: Create pages like Home, Product Listing, Product Details, Cart, Checkout using Next.js and TailwindCSS.
2. *Backend Setup with Sanity CMS*: Create schemas for products, orders, and customers, and fetch data using GROQ queries.
3. *API Integrations*: Integrate EasyPost API for shipment tracking and Stripe API for payment processing.
4. *Testing and Deployment*: Test responsiveness and functionality across devices, then deploy using Vercel.

### 2. Design System Architecture

The system architecture outlines how data flows through the e-commerce system:

- *Frontend (Next.js)*: Displays dynamic data from Sanity CMS and third-party APIs.
- *Sanity CMS*: Stores content data (products, orders, customer info).
- *Product Data API*: Retrieves product details from Sanity CMS.
- *Payment Gateway (Stripe)*: Handles payment processing and updates order status in Sanity CMS.
- *Shipment Tracking API (EasyPost or Shippo)*: Fetches real-time shipment status.

### 3. Plan API Requirements

- */products* (GET): Fetch all available products from Sanity CMS.
- */orders* (POST): Create a new order in Sanity CMS.
- */shipment* (GET): Track the status of an order via third-party shipment API.
- */delivery-zone* (GET): Fetch delivery zone details (if needed for calculating delivery time).

---

## Conclusion

By focusing on the technical preparation for the marketplace, I’ve laid the foundation for a scalable, efficient solution. This will ensure that the marketplace is robust, user-friendly, and ready for seamless integrations and operations.

---

## Next Steps

- Begin implementing the frontend and backend integration.
- Start with the core product data integration from Sanity CMS and ensure the basic functionality is in place.

## *Documentation Link Day 02*

https://github.com/coreED-Github/Marketplace_HomeStore-Ecommerce-Website/blob/main/Documentation%2002.pdf


---

# Hackathon Day 03 - API Integration and Data Migration

## Overview
On Day 3 of the hackathon, I focused on integrating APIs and transferring data into Sanity CMS to build the backend for a functional marketplace. This task helped me understand how to work with headless CMSs, integrate third-party APIs, and migrate data into a structured schema for a real-world eCommerce application.

## Key Learning Outcomes
1. *API Integration:* Successfully connected APIs to my Next.js project and validated API responses.
2. *Data Migration:* Migrated data from an external API into Sanity CMS, ensuring it matched the CMS schema.
3. *Frontend Implementation:* Built dynamic product pages and a responsive product list page.
4. *Sanity Studio Management:* Successfully used Sanity Studio to manage product and category data.

## Steps Taken

### 1. API Integration
- *API Used:* [Hackathon API](https://hackathon-apis.vercel.app/api/products) to fetch product data.
- *Data Fields:* The API provided product details such as title, price, slug, description, and category.

### 2. Sanity CMS Schemas Configuration
- Created and referenced the following schemas:
  - *Category Schema:* category.ts
  - *Product Schema:* product.ts
  
  These schemas were designed to match the structure of the data provided by the API and allow seamless migration into Sanity CMS.

### 3. Data Migration
- *Migration Script:* Created a script to fetch data from the API and transfer it into Sanity CMS.
  - Mapped API fields (e.g., title, price, slug, description) to Sanity CMS fields.
  - Established category references to ensure correct relationships between products and categories.

- *Result:* Data was successfully migrated into Sanity CMS and appeared in the Sanity Studio interface.

### 4. Frontend Implementation
- *Fetching Data:* Used Sanity's GROQ queries to fetch data directly from Sanity CMS and populate the frontend.
- *Dynamic Product Pages:* Created a dynamic [slug].tsx page to display detailed product information based on the slug.
  
#### Product List Page
- Displayed all products fetched from Sanity CMS with:
  - Product image, title, price, and "View Details" button.

#### Dynamic Product Pages
- Each product detail page was dynamically generated based on the product's slug, showing:
  - Title, description, price, and product image.

### 5. Sanity Studio View After Migration
- *Fields in Sanity Studio:* 
  - Title, Slug, Price, Description, Category Reference, Image.
- *Search & Edit:* Products can be searched and edited directly within Sanity Studio.

### 6. Browser Results After Migration
- *Product List Page:* 
  - Fast-loading page displaying product data responsively.
- *Dynamic Product Detail Pages:*
  - Clicking "View Details" navigates to the product’s detailed page with all relevant information.

## Conclusion
Day 3 was a crucial step in building my marketplace backend. I successfully integrated an external API, migrated data into Sanity CMS, and built a responsive frontend to display product information. This experience has enhanced my ability to manage data, integrate APIs, and implement dynamic pages in Next.js.

## Next Steps
- Further test the migration process with additional data.
- Implement additional features such as shopping cart and user authentication.
- Continue refining the frontend to ensure a seamless user experience.

## Technologies Used
- *Next.js*
- *Sanity CMS*
- *TailwindCSS*
- *GROQ*

## *Documentation Link Day 03*

https://github.com/coreED-Github/Marketplace_HomeStore-Ecommerce-Website/blob/main/Documentation%20Day%2003%20Task.pdf


---

# Day 4 - Dynamic Frontend Components for Marketplace

On Day 4, I focused on designing and developing dynamic frontend components for my marketplace. I worked on creating modular and reusable components to display data fetched from Sanity CMS and APIs. This day helped me learn real-world practices for building scalable and responsive web applications, ensuring my components could be easily maintained and adapted for future needs. I gained hands-on experience in structuring components to handle marketplace data effectively, improving both functionality and user experience.

## Key Components Built

### Product Listing Component Documentation

The Newest component fetches and displays a list of products stored in Sanity CMS. It provides users with a scrollable horizontal carousel view of the latest products and includes features like product details, images, and an "Add to Bag" button for interaction. The component is responsive and styled using TailwindCSS.

#### Features:
1. *Dynamic Data Fetching:*
   - Fetches product data using Sanity's GROQ query.
   - Displays the most recent products sorted by creation date.
2. *Horizontal Scrolling:*
   - Users can scroll through the product list using left/right arrow buttons or by swiping.
3. *Interactive UI:*
   - Displays product image, name, category, price, and rating.
   - Includes an "Add to Bag" button for quick actions.
4. *Responsive Design:*
   - Optimized for various screen sizes using TailwindCSS classes.
5. *Dynamic Routing:*
   - Clicking on a product navigates to its detailed page using a dynamic route (/product/[slug]).

#### Code Structure:
- *Data Fetching:*
  - fetchProducts(): Fetches products from Sanity CMS using the GROQ query.

### Product Detail Page

The Product Detail Page allows users to view detailed information about a selected product. This page includes product images, pricing, category, ratings, description, quantity adjustment, reviews, and options to add the product to the cart or proceed directly to checkout. The page is dynamic and fetches product data based on the product slug.

#### Features and Functionalities:
1. *Dynamic Data Fetching:*
   - getData(): Retrieves product data from Sanity CMS using GROQ queries.
   - Data includes product images, name, price, description, category name, slug, and price ID.
2. *Image Gallery:*
   - ImageGallery: Displays a carousel of product images.
3. *Product Details:*
   - Displays category name, product name, ratings, price, and a strikethrough for discounted prices.
4. *Pricing Section:*
   - Displays the current price and mentions that the price is inclusive of VAT.
5. *Quantity Adjustment:*
   - Allows users to adjust product quantity before adding it to the cart.
6. *Add to Bag and Checkout:*
   - Users can add the product to their shopping bag or proceed to checkout.

### Shopping Cart Functionality

The Shopping Cart Modal provides the following functionalities:
1. *Add to Cart:* Users can quickly add products to the cart from the product listing.
2. *View Cart:* The cart displays selected products, quantities, prices, and total cost.
3. *Remove Items:* Users can remove products from the cart.
4. *Total Calculation:* Displays the subtotal cost of all products in the cart.
5. *Checkout Option:* Users can proceed to the checkout page.
6. *Continue Shopping:* Users can close the modal to return to shopping.

#### Code Features:
- *Components and Dependencies:*
  - use-shopping-cart: Handles cart state and related functions.
  - next/link: For navigation to the checkout page.
  - next/image: Optimized image rendering.
  - Button, Sheet, SheetContent, SheetHeader, SheetTitle: For displaying a modal-style cart.

### Contact Us Page

This page allows users to send inquiries, questions, or feedback. It integrates a form to collect user input and uses the EmailJS service to send messages.

#### Features:
1. *User Input Form:* 
   - Collects name, email, phone (optional), and message.
   - Includes input validation for required fields (name, email, and message).
2. *Email Sending:* 
   - Uses EmailJS to send form data to a predefined email address.
   - Includes alerts for success and failure states.
3. *Contact Information Display:*
   - Displays phone numbers, email addresses, and social media links.

### Responsive Navbar

This navbar component is designed for a dynamic e-commerce website and is optimized for different screen sizes. It includes navigation links, a shopping cart button, and a collapsible mobile menu.

#### Key Features:
1. *Responsive Design:*
   - Horizontal navbar for large devices, collapsible menu for mobile devices.
2. *Dynamic Active Link Highlight:* 
   - Highlights the currently active page.
3. *Shopping Cart Integration:*
   - Includes a button to trigger the shopping cart modal.
4. *Collapsible Menu:*
   - For mobile screens, a collapsible sidebar menu is implemented.

### Project Summary: Functional Product Listing and Dynamic Features in E-Commerce Platform

I successfully implemented key features for a functional e-commerce platform using Next.js and Sanity CMS. The following tasks were completed:
1. *Product Listing Page:* 
   - Developed a fully functional product listing page that dynamically fetches and displays product data from Sanity CMS.
2. *Dynamic Product Detail Pages:*
   - Implemented individual product detail pages using dynamic routing.
3. *Advanced Category Filters:*
   - Built category filters to refine product views dynamically.
4. *Pagination and Related Products:*
   - Added pagination and "Related Products" sections for better user experience.
5. *Responsive and Styled Components:*
   - Ensured all components are fully responsive and styled with TailwindCSS.
6. *Modular and Reusable Components:*
   - Created reusable components for scalability and future development.

This implementation demonstrates my ability to design and develop dynamic, scalable, and responsive components for an e-commerce marketplace.

## *Documentation Link Day 04*

https://github.com/coreED-Github/Marketplace_HomeStore-Ecommerce-Website/blob/main/Documentation%20day%204.pdf

---


# Day 5 - Testing, Error Handling, and Backend Integration Refinement

On Day 5, I focused on preparing my marketplace for real-world deployment. I ensured that all components were thoroughly tested, optimized for performance, and ready to handle customer-facing traffic. My emphasis was on testing backend integrations, implementing error handling, and refining the overall user experience.

## Core Features Testing

### 1. Product Listing
*Objective*: Verify that products are displayed correctly on the marketplace.

*Steps*:
1. Navigate to the homepage or product listing page.
2. Ensure all products, including their names, images, prices, and discount prices, are displayed as expected.
3. Check that product information is pulled correctly from the database or CMS.

*Expected Results*: All products should be listed with correct details such as images, names, prices, and any applicable discounts.

### 2. Filters and Categories
*Objective*: Ensure that the filter and Categories functionality works as expected.

*Steps*:
1. Use available filters (e.g., categories, price range, tags) to narrow down the product list.
2. Perform a search by typing relevant keywords (e.g., product name or category).
3. Check if the search and filters return the correct results.

*Expected Results*: The product list should adjust according to the selected filters or search terms. Results should be accurate and reflect the selected criteria.

### 3. Cart Operations
*Objective*: Ensure that cart operations (add, update, remove) work correctly.

*Steps*:
1. Add one or more products to the cart.
2. Update product quantities in the cart.
3. Remove products from the cart.
4. Verify the cart reflects the correct product details and quantities.
5. Confirm that the cart updates the total price when items are added, removed, or updated.

*Expected Results*: The cart should reflect accurate products, quantities, and total prices after each operation. Changes made to the cart should persist during the session.

### 4. Dynamic Routing
*Objective*: Verify that dynamic product detail pages load correctly based on product slugs.

*Steps*:
1. Click on a product from the product listing page.
2. Ensure that the product detail page loads with the correct information (name, description, price, image, etc.).
3. Check the URL to ensure it follows the correct dynamic slug pattern.

*Expected Results*: Each product detail page should load correctly and display the appropriate product details. The URL should reflect the product’s unique slug.

---

## Product Details API Test

*Test Summary*:  
This document outlines the results of testing the Product Details API using Postman. The API was tested for response status, response time, and schema validation.

### Test Results 01:

1. *Test 1: Response Status Code*  
   - *Status*: Passed  
   - *Description*: The API returned a 200 OK status code, indicating that the request was successfully processed and the server responded correctly.  
   - *Expected Result*: Status code should be 200.  
   - *Actual Result*: Status code was 200.

2. *Test 2: Response Time*  
   - *Status*: Failed  
   - *Description*: The response time exceeded the expected threshold of 200ms. The actual response time was 550ms, which is above the defined limit for performance.  
   - *Expected Result*: Response time should be below 200ms.  
   - *Actual Result*: Response time was 550ms.  
   - *Failure Reason*: The API's response time does not meet the required performance standards. Optimization may be required.

3. *Test 3: Response Body Schema Validation*  
   - *Status*: Passed  
   - *Description*: The response body contains all the expected schema fields and types, matching the defined structure for product details.  
   - *Expected Result*: Response body should contain the defined schema fields with appropriate data types.  
   - *Actual Result*: Schema validation was successful, and the response body includes all expected fields with correct data types.

*Conclusion*:  
The Product Details API performs well in terms of returning the correct status and schema, but the response time does not meet the expected performance criteria. Optimization may be required to reduce response times to below 200ms.

---

## Error Handling in ShoppingCartModal Component

### 1. Error Handling with Try-Catch
In the handleCheckoutClick function, a try-catch block is used to handle any errors that may occur during the checkout process. This ensures the application doesn't crash and provides feedback to the user if something goes wrong.

*Code Example*:

```ts
async function handleCheckoutClick(event: any) {
  event.preventDefault();
  try {
    const result = await redirectToCheckout();
    if (result?.error) {
      console.log("result"); // Log error for debugging
    }
  } catch (error) {
    console.log(error); // Catch and log any errors during checkout
  }
}

## *Documentation Link Day 05*

https://github.com/coreED-Github/Marketplace_HomeStore-Ecommerce-Website/blob/main/Documentation%20Day%205.pdf
