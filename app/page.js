import Section3 from "@/components/ui/Section3";
import Slider from "@/components/ui/Slider";
import Header from "@/components/Header/page";
import Footer from "@/components/Footer/page";
import Section4 from "@/components/ui/Section4";
import Section2 from "@/components/Section2/page";
import Section5 from "@/components/Section5/page";
import Section12 from "@/components/Section12/page";
import Section8 from "@/components/Section8/Section8";
import Section9 from "@/components/Section9/Section9";
import Section10 from "@/components/Section10/Section10";
import Section11 from "@/components/Section11/Section11";

export default function Home() {
  return (
    <div>
      <Header />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section8 />
      <Section9 />
      <Section10 />
      <Section11 />
      <Section12 />
      <Slider />
      <Footer />
    </div>
  );
}
