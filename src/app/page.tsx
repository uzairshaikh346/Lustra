import Image from "next/image";
import Banner from "./components/Banner";
import ProductInfo from "./components/ProductInfo";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";

export default function Home() {
  return (
   <div>
    <Banner/>
    <ProductInfo/>
    <About/>
    <Contact/>
   </div>
  );
}
