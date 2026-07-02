"use client"

import { EmailTemplate } from "@/components/email-template";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Metrics from "@/components/Metrics";
import Statement from "@/components/Statement";


export default function Home() {
  return (
    <div className="bg-[#E9ECF3]" >
      <Hero />
      <Features />
      <Statement />
      <Metrics />
      <Footer />
      <EmailTemplate email="chis" />
    </div>
  );
}
