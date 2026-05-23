import type { Metadata } from "next";
import CapturiPage from "@/components/Capturi/Capturi";

export const metadata: Metadata = {
  title: "Capturi | Lacul Verde Sâncrai de Mureș",
  description: "Galerie foto cu cele mai spectaculoase capturi de la Lacul Verde Sâncrai de Mureș. Crap 9 kg, somn 23 kg și altele realizate de pescarii noștri.",
  alternates: { canonical: "https://www.laculverde.com/capturi" },
};

export default function Capturi() {
  return <CapturiPage />;
}
