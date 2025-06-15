import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Qualification from "@/components/sections/Qualification";
import Skills from "@/components/sections/Skills";
import Services from "@/components/sections/Services";
// import Portfolio from "@/components/sections/Portfolio";
import Testimonial from "@/components/sections/testimonial";
import BlogNew from "@/components/sections/BlogNew";

export default function Home() {
  return (
    <main className="pt-20">
      <section id="home">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="qualification">
        <Qualification />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="services">
        <Services />
      </section>
      {/* <section id="portfolio">
        <Portfolio />
      </section> */}
      <section id="testimonial">
        <Testimonial />
      </section>
      <BlogNew />
    </main>
  );
} 