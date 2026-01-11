import React from "react";
import MainLayout from "../../../layouts/MainLayout";
import Hero from "./Hero";
import Features from "./Features";
import HowItWorks from "./HowItWorks";
import UseCases from "./UseCases";
import TechStack from "./TechStack";
import CTA from "./CTA";

function Home() {
  return (
    <MainLayout>
      <Hero />
      <Features />
      <HowItWorks />
      <UseCases />
      <TechStack />
      <CTA />
    </MainLayout>
  );
}

export default Home;