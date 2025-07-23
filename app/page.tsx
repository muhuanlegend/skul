import { ModeToggle } from "@/components/mode-toggle";
import ContactUs1 from "@/components/mvpblocks/contact-us-1";
import Feature1 from "@/components/mvpblocks/feature-1";
import GlowingCard from "@/components/mvpblocks/glow-card";
import GradientHero from "@/components/mvpblocks/gradient-hero";
import NotebookHero from "@/components/mvpblocks/notebook";
import PricingSection from "@/components/mvpblocks/pricing-5";
import TestimonialsCarousel from "@/components/mvpblocks/testimonials-carousel";
import WaitlistPage from "@/components/mvpblocks/waitlist";
import React from "react";

const Home = () => {
  return (
    <div>
      <div className="flex justify-center">
        <ModeToggle />
      </div>
      <GradientHero />
      <Feature1 />
      <ContactUs1 />
      <div>
        <h1 className="text-muted-foreground mb-16 justify-center flex  text-3xl">
          Why Schools Love Us
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mx-4">
          <GlowingCard  title="This platform cut our administrative workload by 50% in just a month." description="Jane N., Principal, Greenfield Academy" />
          <GlowingCard  title="Parents love the instant updates—it’s improved communication like never before." description="David K., Director, Bright Minds High School" />
          <GlowingCard  title="Our teachers can now focus on teaching instead of paperwork. Truly a game-changer." description="Sarah M., Teacher, Hope Valley Primary" />
        </div>
      </div>
      {/* <PricingSection /> */}
      <TestimonialsCarousel />
      <WaitlistPage />
    </div>
  );
};

export default Home;
