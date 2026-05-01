import { Nav } from "@/components/ui/Nav";
import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import RecentProjects from "@/components/RecentProjects";
import Courses from "@/components/Courses";
import Experience from "@/components/Experience";
import Footer from "@/components/ui/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main style={{ paddingTop: "64px" }}>
        <Hero />
        <Grid />
        <RecentProjects />
        <Courses />
        <Experience />
        <Footer />
      </main>
    </>
  );
}
