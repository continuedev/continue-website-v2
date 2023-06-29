export const metadata = {
  title: "Continue",
  description: "Continue",
};

import Hero from "@/components/hero";
import Features from "@/components/features";
import Newsletter from "@/components/newsletter";
import Zigzag from "@/components/zigzag";

export default function Home() {
  return (
    <>
      <Hero />
      <Zigzag />
      <Newsletter />
    </>
  );
}
