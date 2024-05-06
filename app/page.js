import Image from "next/image";
import { Button } from "@/components/ui/button"
import Header from "@/components/Header/page";
import Footer from "@/components/Footer/page";
import Mentors from "./mentors/Mentors";

export default function Home() {
  return (
    <div>
      <Header />
      <Mentors />
      <Footer />
    </div>
  );
}
