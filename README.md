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
## *Documentaion Link*

https://github.com/coreED-Github/Marketplace_HomeStore-Ecommerce-Website/blob/main/MarketPlace%20Day%201%20Task.pdf



