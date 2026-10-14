import { domAnimation, LazyMotion, MotionConfig } from "motion/react";
import { Footer } from "./components/layout/Footer";
import { Navbar } from "./components/layout/Navbar";
import { siteCopy } from "./data/site";
import { About } from "./sections/About";
import { Certifications } from "./sections/Certifications";
import { Contact } from "./sections/Contact";
import { Education } from "./sections/Education";
import { Experience } from "./sections/Experience";
import { Hero } from "./sections/Hero";
import { Skills } from "./sections/Skills";
import { TrustedBy } from "./sections/TrustedBy";

export function App() {
  return (
    <LazyMotion features={domAnimation} strict>
      <MotionConfig reducedMotion="user">
        <a
          href="#main"
          className="sr-only z-[60] rounded-control bg-accent-700 px-4 py-2 text-sm font-medium text-white focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
        >
          {siteCopy.skipLink}
        </a>
        <Navbar />
        <main id="main" tabIndex={-1} className="outline-none">
          <Hero />
          <About />
          <Skills />
          <Experience />
          <TrustedBy />
          <Education />
          <Certifications />
          <Contact />
        </main>
        <Footer />
      </MotionConfig>
    </LazyMotion>
  );
}
