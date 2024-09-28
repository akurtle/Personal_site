import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNav";
import Grid from "@/components/Grid";
import RecentProjects from "@/components/RecentProjects";
import { navItems } from "@/data";
import Experience from "@/components/Experience";
import Footer from "@/components/ui/Footer";
import { TracingBeam } from "@/components/ui/MovingLight";
import Courses from "@/components/Courses";

export default function Home() {
  return (
    <main className="relative bg-black flex 
    justify-center items-center flex-col mx-auto
    sm:px-10 px-5 overflow-hidden">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={
          navItems
        }/>
        <TracingBeam>
          <Hero />
          <Grid/>
          <RecentProjects/>
          <Courses/>
          <Experience />
          <Footer/>
        </TracingBeam>
      </div>
    </main>
  );
}
