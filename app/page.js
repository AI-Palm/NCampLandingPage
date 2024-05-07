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
import Section6 from "@/components/ui/Section6";
import Section7 from "@/components/ui/Section7";

export default function Home() {
  return (
    <div>
      <Header />
      <Mentors />
      <RecruitmentProcess />
      <Reviews />
      <Footer />
      <Section3></Section3>
      <Section4 />
      <Section6></Section6>
      <Section7 />
    </div>
  );
}
