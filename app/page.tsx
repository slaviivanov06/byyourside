import Navbar from "@/components/framer/Navbar";
import HeroSection from "@/components/framer/HeroSection";
import BentoPortfolioSection from "@/components/framer/BentoPortfolioSection";
import ProcessSection from "@/components/framer/ProcessSection";
import AboutSection from "@/components/framer/AboutSection";
import FooterSection from "@/components/framer/FooterSection";

export default function Home() {
  return (
    <main>
      <Navbar />
      <section id="hero"><HeroSection /></section>
      <section id="projects"><BentoPortfolioSection /></section>
      <section id="process"><ProcessSection /></section>
<AboutSection />
      <section id="pricing"><FooterSection /></section>
    </main>
  );
}
