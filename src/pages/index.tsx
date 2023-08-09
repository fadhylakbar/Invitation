import Benefit from "@/components/benefits";
import Intro from "@/components/intro";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return <main className="flex flex-col items-center px-4">
    <Intro/>
    <Benefit/>
  </main>;
}
