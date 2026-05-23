import type { Metadata } from "next";
import PretPage from "@/components/Pret";

export const metadata: Metadata = {
  title: "Prețuri Pescuit | Lacul Verde Sâncrai de Mureș",
  description: "Tarifele pentru o zi sau sejur de pescuit la Lacul Verde din Sâncrai de Mureș. Preț per zi, noapte și abonamente disponibile.",
  alternates: { canonical: "https://www.laculverde.com/pret" },
};

export default function Pret() {
  return <PretPage />;
}
