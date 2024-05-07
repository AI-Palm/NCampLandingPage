import Image from "next/image";
import { Button } from "@/components/ui/button"
import Header from "@/components/Header/page";
import Footer from "@/components/Footer/page";
import Section2 from "@/components/Section2/page";
import Section5 from "@/components/Section5/page";
import Section12 from "@/components/Section12/page";



export default function Home() {
  return (
    <div>
      <Header />
      <Section2 />
      <Section5 />
      <Section12 />
      <Footer />

    </div>
  );
}
