import Image from "next/image";
import { Inter } from "next/font/google";

import { MainScreen } from "@/components/MainScreen";
import Sidebar from "@/components/Sidebar";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [SlideisOpen, setSlideisOpen] = useState(true);
 
  return (
   <div className="w-[100%] flex flex-row">
   <Sidebar SlideisOpen={SlideisOpen} setSlideisOpen={setSlideisOpen}/>
   <MainScreen SlideisOpen={SlideisOpen}/>

   </div>
  );
}
