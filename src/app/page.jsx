"use client";
import Hero from "@/components/home/Hero";
import ServiceFeatures from "@/components/home/ServiceFeatures";
import { useAuth } from "@/context/AuthProvider";

export default function Home() {
  const { isAuthenticated } = useAuth();
  return (
    <main className="min-h-screen ">
      <Hero />
      <ServiceFeatures />
    </main>
  );
}
