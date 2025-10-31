import React from "react";

import HeroSection from "../sections/hero";
import TheProblem from "../sections/the-problem";
import CallCenterSetters from "../sections/call-center-setters";
import CallCenterAcademy from "../sections/call-center-academy";
import CallCenterDialer from "../sections/call-center-dialer"
import CallCenterOperator from "../sections/call-center-operator";
import OctotaskerProtect from "../sections/octotasker-protect"

export default async function HomePage() {
  return (
    <>
      <section id="home">
        <HeroSection />
      </section>

      <main className="px-6 md:px-16 lg:px-24 xl:px-32" id="the-problem">
        <TheProblem />
      </main>

      <section id="call-center-setters">
        <CallCenterSetters />
      </section>
      <section id="call-center-academy">
        <CallCenterAcademy />
      </section>
      <section id="call-center-dialer">
        <CallCenterDialer />
      </section>
      <section id="call-center-operator">
        <CallCenterOperator />
      </section>
      <section id="octotasker-protect">
        <OctotaskerProtect />
      </section>
    </>
  );
}
