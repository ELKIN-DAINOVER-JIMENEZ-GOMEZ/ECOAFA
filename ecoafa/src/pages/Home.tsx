// src/pages/Home.tsx
// Landing Page — ECOAFA S.A.S
// Compone todas las secciones en orden con sus IDs para scroll suave desde el Navbar.

import HeroSlider from "../components/sections/HeroSlider";
import NosotrosPreview from "../components/sections/NostrosPreview";
import ServiciosGrid from "../components/sections/ServiciosGrid";
import ExperienciaCards from "../components/sections/ExperienciaCards";
import ClientesAccordion from "../components/sections/ClientesAccordion";
import GaleriaProyectos from "../components/sections/GaleriaProyectos";

export default function Home() {
  return (
    <>
      <HeroSlider />
      <NosotrosPreview />
      <ServiciosGrid />
      <ExperienciaCards />
      <GaleriaProyectos />
      <ClientesAccordion />
    </>
  );
}