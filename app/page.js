import Image from "next/image";
import { Button } from "@/components/ui/button";
import Section3 from "@/components/ui/Section3";
import Slider from "@/components/ui/Slider";
import Header from "@/components/Header/page";
import Footer from "@/components/Footer/page";
import Section4 from "@/components/ui/Section4";

export default function Home() {
  return (
    <div>
      <Header />
      <Footer />
      <Section3></Section3>
      <Slider/>
      <Section4/>
    </div>
  );
}
