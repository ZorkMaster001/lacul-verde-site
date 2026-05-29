import type { Metadata } from "next";
import HomePage from "@/components/Home";

export const metadata: Metadata = {
  title: "Lacul Verde Sâncraiu de Mureș | Pescuit Sportiv lângă Târgu Mureș",
  description: "Lacul Verde din Sâncraiu de Mureș, la 3 km de Târgu Mureș. Pescuit sportiv — crap, somn, șalău, știucă. Două lacuri, inclusiv C&R. Rezervă acum sau sună: 0744 523 284.",
  alternates: { canonical: "https://www.laculverde.com" },
};

export default function Home() {
  return (
    <div>
      <HomePage />
    </div>
  );
}
