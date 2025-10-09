import Hero from "@/components/home/Hero";
import NearbyCondominiums from "@/components/home/NearbyCondominiums";
import ServiceFeatures from "@/components/home/ServiceFeatures";

export default function Home() {
  return (
    <main className="min-h-screen ">
      <Hero />
      <ServiceFeatures />
      <NearbyCondominiums />
    </main>
  );
}
