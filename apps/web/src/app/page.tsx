
import HeroSection from "@/features/home/components/HeroSection";
import Selections from "@/features/home/components/Selections";
import Testimonials from "@/features/home/components/Testimonials";
import { WhySipHappens } from "@/features/home/components/WhySipHappens";


export default function Page() {
  return <div>
    <HeroSection/>
    <Selections/>
    <WhySipHappens/>
    <Testimonials/>
  </div>;
}
