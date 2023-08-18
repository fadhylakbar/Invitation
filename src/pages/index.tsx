import Benefit from "@/components/benefits";
import Intro from "@/components/intro";
import Price from "@/components/price";
import SectionDivider from "@/components/section-divider";


export default function Home() {
  return <main className="flex flex-col items-center px-4">
    <Intro/>
    <SectionDivider/>
    <Benefit/>
    <Price/>
  </main>;
}
