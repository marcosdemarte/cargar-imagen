import Link from "next/link";
import { CargarImagen } from "../src";
import type { Idioma } from "../src";

/**
 * Página de prueba local (npm run dev). No forma parte del paquete que se
 * instala en otros proyectos: "files" de package.json solo incluye src,
 * images, scripts y README.
 */
export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ lang?: string }>;
}) {
  const { lang } = await searchParams;
  const lenguaje: Idioma = lang === "en" ? "en" : "es";

  return (
    <main className="prueba">
      <h2 className="prueba__titulo">cargador de imagenes</h2>
      <div className="proyecto__imagen">
        <CargarImagen src="/powerbit1.jpg" alt={"alt imagen"} className={``} />
      </div>
    </main>
  );
}
