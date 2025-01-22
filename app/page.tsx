
import Hero from "./components/Hero";

import All from "./components/All/page";
import Categories from "./components/Categories";
import Banner from "./components/Banner/page";
import Newest from "./components/Newest/page";
import Brand from "./components/Brand/page";



export default function Home() {
  return (
   <div className="mr-2 ml-2">
    <Hero/>

   
   <Newest/>
   <Categories />
  <All/>
   <Banner/>
  <Brand/>

  
   </div>
  );
}
