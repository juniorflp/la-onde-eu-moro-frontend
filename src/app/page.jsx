import Hero from "@/components/home/Hero";
import NearbyCondominiums from "@/components/home/NearbyCondominiums";
import ServiceFeatures from "@/components/home/ServiceFeatures";
import SquareSections from "@/components/home/SquareSections";

export default function Home() {
  return (
    <main className="min-h-screen ">
      <Hero />
      <ServiceFeatures />
      <NearbyCondominiums />
      <SquareSections />
    </main>
  );
}
