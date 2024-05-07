import Image from "next/image";
import { Button } from "@/components/ui/button";
import Section3 from "@/components/ui/Section3";
import Slider from "@/components/ui/Slider";
import Header from "@/components/Header/page";
import Footer from "@/components/Footer/page";
import Section4 from "@/components/ui/Section4";
import Mentors from "./mentors/Mentors";
import RecruitmentProcess from "./recruitmentProcess/RecruitmentProcess";
import Reviews from "./reviews/Reviews";
import Section2 from "@/components/Section2/page";
import Section5 from "@/components/Section5/page";
import Section12 from "@/components/Section12/page";



export default function Home() {
  return (
    <div>
      <Header />
      <Section2 />
      <Section3></Section3>
      <Section4/>
      <Section5 />
      <Mentors />
      <RecruitmentProcess />
      <Reviews />
      <Section12 />
      
      <Slider/>
      
      <Footer />
      
    </div>
  );
}
