
import Brand from "./components/Brand";
import Hero from "./components/Hero";
import Newest from "./components/Newest";





export default function Home() {
  return (
   <div className="mr-10 ml-10">
    <Hero/>

   <Brand/>
    {/* <Newest/> */}
    <Newest/>
   
   </div>
  );
}
