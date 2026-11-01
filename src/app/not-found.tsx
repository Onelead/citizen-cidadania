import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: { absolute: "Página não encontrada" },
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <main className="container section not-found">
      <h1>Página não encontrada</h1>
      <p className="lead">O endereço acessado não existe ou foi alterado.</p>
      <Link className="link" href="/">
        Voltar para o início
      </Link>
    </main>
  );
}
