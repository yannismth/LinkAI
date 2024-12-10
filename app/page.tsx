"use client";

import AOS from "aos";
import { useEffect } from "react";

import Header from "@/components/Header";
import { Hero } from "@/components/Hero";
import Features from "@/components/Features";
import Pricing from "@/components/Pricings";
import { Stats } from "@/components/Stats";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import "aos/dist/aos.css";
export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 500 });
  }, []);

  return (
    <>
      <Header />
      <Hero />
      <Features />
      <Pricing />
      <Stats />
      <FAQ />
      <Footer />
    </>
  );
}
