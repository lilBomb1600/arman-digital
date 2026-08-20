import { Hero } from "@/components/sections/Hero";
import { Stats } from "@/components/sections/Stats";
import { Ticker } from "@/components/sections/Ticker";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { Work } from "@/components/sections/Work";
import { VideoWork } from "@/components/sections/VideoWork";
import { Process } from "@/components/sections/Process";
import { WhoWeServe } from "@/components/sections/WhoWeServe";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Ticker />
      <About />
      <Services />
      <Work />
      <VideoWork />
      <Process />
      <WhoWeServe />
      <Contact />
    </>
  );
}
