// src/pages/Home.jsx
import Hero from "../components/hero";
import Services from "../components/service";
import About from "../components/about";
import FAQ from "../components/FAQ";
import Contact from "../components/contact";
import OurClients from "../components/client";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <OurClients/>
      <FAQ />
      <Contact />
    </>
  );
}
