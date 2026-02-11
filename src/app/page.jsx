import Cta from "@/components/global/Cta";
import Faq from "@/components/home/Faq";
import Hero from "@/components/home/Hero";
import NearbyCondominiums from "@/components/home/NearbyCondominiums";
import PlansSection from "@/components/home/PlansSection";
import ServiceFeatures from "@/components/home/ServiceFeatures";
import SquareSections from "@/components/home/SquareSections";

export default function Home() {
  return (
    <main className="min-h-screen mt-20">
      <Hero />
      <ServiceFeatures />
      <SquareSections />
      <NearbyCondominiums />
      <PlansSection />
      <Faq />
      <Cta />
    </main>
  );
}
