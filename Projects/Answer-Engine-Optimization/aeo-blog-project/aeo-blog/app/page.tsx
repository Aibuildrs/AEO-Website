// page.tsx
import React from "react";

import HeroSection from "../sections/hero-section";
import AEOShift from "../sections/aeo-shift";
import WhatIsAEO from "../sections/what-is-aeo";
import ProofItWorks from "../sections/proof-it-works";
import BetaProgram from "../sections/beta-program";
import Blog from "../sections/blog";
import WeeklyUpdates from "../sections/weekly-updates";
import TwoChoices from "../sections/two-choices";

export default async function HomePage() {
  return (
    <>
      {/* 👇 Each section gets a unique id */}
      <section id="home">
        <HeroSection />
      </section>

      <main className="px-6 md:px-16 lg:px-24 xl:px-32" id="aeo-shift">
        <AEOShift />
      </main>

      <section id="what-is-aeo">
        <WhatIsAEO />
      </section>

      <main className="px-6 md:px-16 lg:px-24 xl:px-32" id="proof-it-works">
        <ProofItWorks />
      </main>

      <section id="beta-program">
        <BetaProgram />
      </section>

      <main className="px-6 md:px-16 lg:px-24 xl:px-32" id="blog">
        <Blog />
      </main>

      <section id="weekly-updates">
        <WeeklyUpdates />
      </section>

      <main className="px-6 md:px-16 lg:px-24 xl:px-32" id="two-choices">
        <TwoChoices />
      </main>
    </>
  );
}
