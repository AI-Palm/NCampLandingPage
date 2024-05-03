import Image from "next/image";
import { Button } from "@/components/ui/button";
import Section3 from "@/components/ui/Section3";
import Slider from "@/components/ui/Slider";
import Header from "@/components/Header/page";
import Footer from "@/components/Footer/page";

export default function Home() {
  return (
    <div>
      <Header />
      <Footer />

      NCAMP
      <Button>Click me</Button>
      <Section3></Section3>
    </div>
  );
}
