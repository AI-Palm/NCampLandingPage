import Image from "next/image";
import { Button } from "@/components/ui/button"
import Header from "@/components/Header/page";
import Footer from "@/components/Footer/page";
import Mentors from "./mentors/Mentors";
import RecruitmentProcess from "./recruitmentProcess/RecruitmentProcess";
import Reviews from "./reviews/Reviews";

export default function Home() {
  return (
    <div>
      <Header />
      <Mentors />
      <RecruitmentProcess />
      <Reviews />
      <Footer />
    </div>
  );
}
