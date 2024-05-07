import Section3 from "@/components/ui/Section3";
import Slider from "@/components/ui/Slider";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Section4 from "@/components/ui/Section4";
import Section2 from "@/components/Section2/Section2";
import Section5 from "@/components/Section5/Section5";
import Section12 from "@/components/Section12/Section12";
import Section8 from "@/components/Section8/Section8";
import Section9 from "@/components/Section9/Section9";
import Section10 from "@/components/Section10/Section10";

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
      <Section12 />
      <Slider />
      <Footer />
    </div>
  );
}
