import { useEffect } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { ClientsSection } from "./components/ClientsSection";
import { AboutSection } from "./components/AboutSection";
import { ServicesSection } from "./components/ServicesSection";
import { ResultsSection } from "./components/ResultsSection";
import { PortfolioSection } from "./components/PortfolioSection";
import { PortfolioWebSection } from "./components/PortfolioWebSection";
import { TestimonialsSection } from "./components/TestimonialsSection";
import { CTASection } from "./components/CTASection";
import { Footer } from "./components/Footer";

export default function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle("visible", entry.isIntersecting);
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const cursor = document.querySelector<HTMLElement>(".cursor");
    const follower = document.querySelector<HTMLElement>(".cursor-follower");
    if (!cursor || !follower) return;

    let followerX = 0;
    let followerY = 0;
    let mouseX = 0;
    let mouseY = 0;

    const handleMove = (event: MouseEvent) => {
      mouseX = event.clientX;
      mouseY = event.clientY;
    };

    window.addEventListener("mousemove", handleMove);

    let animationFrame = 0;
    const tick = () => {
      followerX += (mouseX - followerX) * 0.12;
      followerY += (mouseY - followerY) * 0.12;
      cursor.style.left = `${mouseX}px`;
      cursor.style.top = `${mouseY}px`;
      follower.style.left = `${followerX}px`;
      follower.style.top = `${followerY}px`;
      animationFrame = requestAnimationFrame(tick);
    };

    animationFrame = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <div className="bg-black min-h-screen text-white selection:bg-[#78B803] selection:text-black">
      <div className="cursor" />
      <div className="cursor-follower" />
      <Header />
      <main>
        <Hero />
        <ClientsSection />
        <AboutSection />
        <ServicesSection />
        <ResultsSection />
        <PortfolioSection />
        <PortfolioWebSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
