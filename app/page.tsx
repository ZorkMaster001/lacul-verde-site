import type { Metadata } from "next";
import HomePage from "@/components/Home";

export const metadata: Metadata = {
  title: "Lacul Verde Sâncrai de Mureș | Pescuit Sportiv",
  description: "Lacul Verde din Sâncrai de Mureș — pescuit sportiv dedicat pescarilor pasionați. Crap, somn, amur, șalău și știucă în condiții de top.",
  alternates: { canonical: "https://www.laculverde.com" },
};

export default function Home() {
  return (
    <div>
      <HomePage />
    </div>
  );
}
