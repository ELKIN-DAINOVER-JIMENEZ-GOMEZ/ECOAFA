export interface Contrato {
  id: number;
  title: string;
  year: number;
  type: string;
  shortDescription: string;
  fullDescription: string;
  tag: string;
  color: string;
  categoria: "ambiental" | "forestal" | "agropecuario" | "territorial";
  entidad?: string;
  municipio?: string;
  imagen: string;
}

// Imágenes de Unsplash coherentes con cada categoría/tema
const IMGS = {
  reforestacion: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=600&q=80",
  bosque: "https://images.unsplash.com/photo-1425913397330-cf8af2ff40a1?w=600&q=80",
  bosquePino: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&q=80",
  plantacion: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=600&q=80",
  silvopastoril: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=600&q=80",
  arbolesNativos: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=600&q=80",
  cercasVivas: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=600&q=80",
  inventarioForestal: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=600&q=80",
  humedal: "https://images.unsplash.com/photo-1582560475093-ba66accbc095?w=600&q=80",
  cuenca: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&q=80",
  paramo: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80",
  rio: "https://images.unsplash.com/photo-1470770903676-69b98201ea1c?w=600&q=80",
  impactoAmbiental: "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=600&q=80",
  residuosSolidos: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=600&q=80",
  pozoPetroleo: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80",
  observatorio: "https://images.unsplash.com/photo-1532094349884-543559059b89?w=600&q=80",
  gestionAmbiental: "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?w=600&q=80",
  compensacion: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&q=80",
  ganaderia: "https://images.unsplash.com/photo-1516467508483-a7212febe31a?w=600&q=80",
  agricultura: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=600&q=80",
  asistenciaTecnica: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=600&q=80",
  territorial: "https://images.unsplash.com/photo-1519011985664-040dd7d27db7?w=600&q=80",
  turismo: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=600&q=80",
  diagnostico: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&q=80",
};

export const contratos: Contrato[] = [
  // ══════════════════════════════════════════
  // FORESTAL
  // ══════════════════════════════════════════
  {
    id: 1,
    title: "Contrato de Obra Pública N° 001 de 2010",
    year: 2010,
    type: "Obra Pública",
    shortDescription:
      "Reforestación en zonas de recarga hídrica mediante establecimiento y aislamiento de bosque protector-productor en el Municipio de Quipama.",
    fullDescription:
      "Reforestación en las zonas de recarga hídrica de ríos y quebradas mediante el establecimiento y aislamiento de bosque protector-productor en veredas Humbo, Cromal, Tananay, La Vega, Nacabal, Itoco Sur, Itoco Norte, Agua fría, Note, Sorquesito, Parque, Guacay, Sorque Grande, Hachital, Granadilla, Barro Blanco, Balcón, Vereda centro del Municipio de Quipama.",
    tag: "Reforestación",
    color: "#5a9e2f",
    categoria: "forestal",
    municipio: "Quipama, Boyacá",
    imagen: IMGS.reforestacion,
  },
  {
    id: 2,
    title: "Contrato de Reforestación No. 193 de 2009",
    year: 2009,
    type: "Reforestación",
    shortDescription:
      "Reforestación y mantenimiento de 31 hectáreas en predios de Santa María de las Lagunas, micro cuencas del Río Siecha Aves del Municipio de Guasca.",
    fullDescription:
      "Reforestación y mantenimiento de 31 hectáreas en los predios de Santa María de las Lagunas, Porvenir, Diamante, Finca San Pedro y las Juntas, ubicadas en las veredas la Concepción y la Trinidad, las micro cuencas del Río Siecha Aves del Municipio de Guasca, cercamiento del área reforestada y sensibilización.",
    tag: "31 ha",
    color: "#5a9e2f",
    categoria: "forestal",
    municipio: "Guasca, Cundinamarca",
    imagen: IMGS.bosque,
  },
  {
    id: 3,
    title: "Contrato de Obra No. 168 de 2009",
    year: 2009,
    type: "Obra",
    shortDescription:
      "Establecimiento de unidades productivas de semiestabulación y parcelas silvopastoril en el Municipio de Gachalá, Cundinamarca.",
    fullDescription:
      "Adelantar el establecimiento de unidades productivas de semiestabulación y parcelas silvopastoril en el Municipio de Gachalá, Cundinamarca.",
    tag: "Silvopastoril",
    color: "#5a9e2f",
    categoria: "forestal",
    municipio: "Gachalá, Cundinamarca",
    imagen: IMGS.silvopastoril,
  },
  {
    id: 4,
    title: "Contrato No. 020 de 2011",
    year: 2011,
    type: "Obra",
    shortDescription:
      "Reforestación protectora de 62ha, mantenimiento de 197ha y aislamiento de 22ha en el Municipio de Nobsa, Boyacá.",
    fullDescription:
      "Reforestación protectora de 62ha y mantenimiento de 197ha y aislamiento de 22ha en el Municipio de Nobsa Departamento Boyacá.",
    tag: "281 ha",
    color: "#5a9e2f",
    categoria: "forestal",
    municipio: "Nobsa, Boyacá",
    imagen: IMGS.plantacion,
  },
  {
    id: 5,
    title: "Contrato No. 082 de 2009",
    year: 2009,
    type: "Obra",
    shortDescription:
      "Establecimiento, mantenimiento y aislamiento de plantaciones forestales en las veredas Salinas y Boitiva del Municipio de Sesquilé, Cundinamarca.",
    fullDescription:
      "Realizar el establecimiento, mantenimiento y aislamiento de plantaciones forestales en las veredas Salinas y Boitiva sector la playa del Municipio de Sesquilé - Cundinamarca.",
    tag: "Plantación",
    color: "#5a9e2f",
    categoria: "forestal",
    municipio: "Sesquilé, Cundinamarca",
    imagen: IMGS.arbolesNativos,
  },
  {
    id: 6,
    title: "Contrato de Obra No. 121 de 2011",
    year: 2011,
    type: "Obra",
    shortDescription:
      "Recuperación de áreas degradadas mediante reforestación protectora-productora en veredas del Municipio de Fúquene, Cundinamarca.",
    fullDescription:
      "Recuperación de áreas degradadas mediante reforestación Protectora, productora en las veredas Chinzaque, Taravita, Nemoga y Centro de Municipio de Fúquene Cundinamarca.",
    tag: "Recuperación",
    color: "#5a9e2f",
    categoria: "forestal",
    municipio: "Fúquene, Cundinamarca",
    imagen: IMGS.bosquePino,
  },
  {
    id: 7,
    title: "Contrato de Obra N° 022 de 2010",
    year: 2010,
    type: "Obra Pública",
    shortDescription:
      "Establecimiento y aislamiento de 15.5 ha (21.700 árboles) de plantaciones forestales protectoras en microcuencas del Municipio de Ubalá.",
    fullDescription:
      "Contratar por el sistema de precios unitarios fijos sin fórmula de ajuste, el Establecimiento y aislamiento de (15.5) hectáreas (21.700 árboles) de plantaciones forestales protectoras productoras en las microcuencas de los ríos Zaguea, Trompetas, Chivor, Río Negro y Quebrada el Gusano, así como la construcción de 2.526,5 metros lineales de cerca en alambre de púas, en el municipio de Ubalá.",
    tag: "21.700 árboles",
    color: "#5a9e2f",
    categoria: "forestal",
    municipio: "Ubalá, Cundinamarca",
    entidad: "CORPOGUAVIO",
    imagen: IMGS.inventarioForestal,
  },
  {
    id: 8,
    title: "Contrato de Obra No. 035 de 2010",
    year: 2010,
    type: "Obra",
    shortDescription:
      "48 acciones prioritarias de restauración ambiental en botaderos a cielo abierto de las inspecciones del Municipio de Ubalá.",
    fullDescription:
      "Contratar la implementación de acciones 48 prioritarias de restauración ambiental en áreas identificadas como botaderos a cielo abierto de las inspecciones de San Pedro de Jagua, Laguna azul, Santa Rosa y la granja municipal, ubicadas en el municipio de Ubalá.",
    tag: "Restauración",
    color: "#5a9e2f",
    categoria: "forestal",
    municipio: "Ubalá, Cundinamarca",
    imagen: IMGS.reforestacion,
  },
  {
    id: 9,
    title: "Contrato de Obra No. 11 de 2010",
    year: 2010,
    type: "Obra",
    shortDescription:
      "Establecimiento, mantenimiento y aislamiento de plantaciones forestales en Carmen de Carupa, Cundinamarca, en un área de 25.85ha.",
    fullDescription:
      "Establecimiento, mantenimiento y aislamiento de plantaciones forestales, en el municipio de Carmen de Carupa - Cundinamarca, en un área de 25.85ha.",
    tag: "25.85 ha",
    color: "#5a9e2f",
    categoria: "forestal",
    municipio: "Carmen de Carupa, Cundinamarca",
    imagen: IMGS.plantacion,
  },
  {
    id: 10,
    title: "Contrato de Obra Pública No. 001 de 2010 — San Pablo de Borbur",
    year: 2010,
    type: "Obra Pública",
    shortDescription:
      "Reforestación de zonas aledañas a cuencas y nacederos en el ecosistema estratégico del Municipio de San Pablo de Borbur.",
    fullDescription:
      "Contratar la ejecución de obras de reforestación de zonas aledañas a cuencas, microcuencas y nacederos en el ecosistema estratégico, para el abastecimiento de la Población y procesos productivos (cuenca el Chorreron, Cuenca San Martin, Quebrada Buriburi) del Municipio de San Pablo de Borbur.",
    tag: "Cuencas",
    color: "#5a9e2f",
    categoria: "forestal",
    municipio: "San Pablo de Borbur, Boyacá",
    imagen: IMGS.cuenca,
  },
  {
    id: 11,
    title: "Contrato de Obra N° 200-12-08515",
    year: 2012,
    type: "Obra",
    shortDescription:
      "Dos mantenimientos a plantaciones forestales en municipios de la jurisdicción de CORPOGUAVIO en el marco del fondo de compensación ambiental.",
    fullDescription:
      "Desarrollar dos mantenimientos a las plantaciones forestales establecidas en los municipios de la jurisdicción de la Corporación Autónoma Regional de Guavio - CORPOGUAVIO en el marco del proyecto aprobado por el fondo de compensación Ambiental.",
    tag: "Mantenimiento",
    color: "#5a9e2f",
    categoria: "forestal",
    municipio: "Jurisdicción CORPOGUAVIO",
    entidad: "CORPOGUAVIO",
    imagen: IMGS.bosque,
  },
  {
    id: 12,
    title: "Contrato de Consultoría de 2008",
    year: 2008,
    type: "Consultoría",
    shortDescription:
      "Formulación de planes estratégicos de administración y manejo de siete áreas de Reserva Forestal Protectora jurisdicción de CORPOGUAVIO.",
    fullDescription:
      "Formulación de los planes estratégicos de administración y manejo de siete áreas de Reserva Forestal Protectora jurisdicción de CORPOGUAVIO, como actividades específicas realizó el monitoreo de flora y fauna, caracterización de vegetación, análisis y monitoreo de calidad de aguas, componente de capacitación, y la participación en actividades de diagnóstico y formulación del plan.",
    tag: "Reserva Forestal",
    color: "#5a9e2f",
    categoria: "forestal",
    municipio: "Jurisdicción CORPOGUAVIO",
    entidad: "CORPOGUAVIO",
    imagen: IMGS.inventarioForestal,
  },
  {
    id: 13,
    title: "Contrato de Obra No. 004 de 2015",
    year: 2015,
    type: "Obra",
    shortDescription:
      "Establecimiento de 500 plántulas y 4.8 ha de protección hídrica del río Sáname en predio San Felipe, Municipio de Fosca.",
    fullDescription:
      "Restablecimiento de 500 Plántulas y primer mantenimiento de 4.8 hectáreas de la zona de protección hídrica del rio Sáname en predio San Felipe, como parte del convenio 035-2013, entre el municipio de Fosca y la Unidad Administrativa especial Bosques de Cundinamarca.",
    tag: "Protección Hídrica",
    color: "#5a9e2f",
    categoria: "forestal",
    municipio: "Fosca, Cundinamarca",
    imagen: IMGS.rio,
  },
  {
    id: 14,
    title: "TER 2014-01",
    year: 2014,
    type: "Estudio Forestal",
    shortDescription:
      "Elaboración del Estudio Forestal y Trámite del Permiso de aprovechamiento forestal para el predio el Rosal, Medellín, Antioquia.",
    fullDescription:
      "Elaboración del Estudio Forestal y Trámite de Obtención del Permiso de aprovechamiento forestal, para el predio el Rosal, ubicado en Medellín, Antioquia.",
    tag: "Permiso Forestal",
    color: "#5a9e2f",
    categoria: "forestal",
    municipio: "Medellín, Antioquia",
    imagen: IMGS.inventarioForestal,
  },
  {
    id: 15,
    title: "UA-OPS 2014-15",
    year: 2014,
    type: "Inventario",
    shortDescription:
      "Elaboración del inventario forestal y fichas forestales para la obtención del permiso de aprovechamiento forestal.",
    fullDescription:
      "Elaboración del inventario Forestal y fichas forestales y toda documentación necesaria para la obtención del permiso de aprovechamiento forestal.",
    tag: "Aprovechamiento",
    color: "#5a9e2f",
    categoria: "forestal",
    imagen: IMGS.bosquePino,
  },
  {
    id: 16,
    title: "Contrato de Consultoría 0445 de 2015",
    year: 2015,
    type: "Consultoría",
    shortDescription:
      "Interventoría de contratos del certificado de incentivo forestal (CIF) elaborados por el Ministerio de Agricultura y Desarrollo Rural - MADR.",
    fullDescription:
      "Realizar la interventoría de los contratos del certificado de incentivo forestal - CIF elaborados por el Ministerio de Agricultura y Desarrollo Rural -MADR, que requieran verificación en campo.",
    tag: "Interventoría CIF",
    color: "#5a9e2f",
    categoria: "forestal",
    entidad: "Minagricultura",
    imagen: IMGS.arbolesNativos,
  },
  {
    id: 17,
    title: "Orden de Servicios No. 094-2016",
    year: 2016,
    type: "Orden de Servicios",
    shortDescription:
      "Inventario forestal y documentos para la obtención del permiso de aprovechamiento forestal y levantamiento de vedas en zonas ZODME'S.",
    fullDescription:
      "Realizar las actividades de inventario forestal y elaboración de los documentos pertinentes de acuerdo a la normatividad ambiental vigente aplicable para la presentación y obtención del permiso de aprovechamiento forestal y levantamiento de vedas en las zonas de disposición de materiales sobrantes de excavación ZODME'S.",
    tag: "Inventario Forestal",
    color: "#5a9e2f",
    categoria: "forestal",
    imagen: IMGS.inventarioForestal,
  },
  {
    id: 18,
    title: "Contrato de Prestación de Servicios UA-OPS 2011-002",
    year: 2011,
    type: "Prestación de Servicios",
    shortDescription:
      "Inventario forestal para lotes de Ecopetrol, Ocensa y reserva forestal con acompañamiento a visitas de la Autoridad Ambiental. Marco JOB interno No 594.",
    fullDescription:
      "Desarrollo del inventario forestal para los lotes de Ecopetrol, Ocensa y de reserva forestal, así como el acompañamiento a las visitas de la Autoridad Ambiental. En el marco JOB interno No 594.",
    tag: "Ecopetrol",
    color: "#5a9e2f",
    categoria: "forestal",
    entidad: "Ecopetrol / Ocensa",
    imagen: IMGS.inventarioForestal,
  },
  {
    id: 19,
    title: "Contrato de Obra No. 007 de 2013",
    year: 2013,
    type: "Obra",
    shortDescription:
      "Reforestación en predios para establecer y aislar coberturas protectoras en el Municipio de Chocontá, Cundinamarca.",
    fullDescription:
      "Aunar Recursos Técnicos, económicos y administrativos entre la Organización Ecológica y Agropecuaria ECOAGRO y el Municipio de Chocontá en la reforestación en predios para establecer y Aislar y mantener Coberturas Protectoras en el Municipio de Chocontá.",
    tag: "Coberturas",
    color: "#5a9e2f",
    categoria: "forestal",
    municipio: "Chocontá, Cundinamarca",
    imagen: IMGS.cercasVivas,
  },
  {
    id: 20,
    title: "Contrato No. 027 - 2014",
    year: 2014,
    type: "Obra",
    shortDescription:
      "Plantación con especies nativas en predios de importancia hídrica para el Municipio de Bojacá, incluyendo suministro, mano de obra y educación ambiental.",
    fullDescription:
      "Realizar una Plantación con especies Nativas en predios de importancia Hídrica para el Municipio de Bojaca incluyendo suministro de plantas, mano de obra para la plantación, los insumos, la realización de mantenimiento y gestión - educación ambiental.",
    tag: "Especies Nativas",
    color: "#5a9e2f",
    categoria: "forestal",
    municipio: "Bojacá, Cundinamarca",
    imagen: IMGS.plantacion,
  },
  {
    id: 21,
    title: "EPC-PS-4452017",
    year: 2017,
    type: "Prestación de Servicios",
    shortDescription:
      "Reforestación, aislamiento y capacitación para implementar el programa de uso eficiente y ahorro del agua (PUEAA) en municipios de Cundinamarca.",
    fullDescription:
      "Prestación de servicios para realizar la reforestación, aislamiento y capacitación, para apoyar la implementación del programa de uso eficiente y ahorro del agua - PUEAA en los municipios de Chipaque, Une y Cáqueza del departamento de Cundinamarca.",
    tag: "PUEAA",
    color: "#5a9e2f",
    categoria: "forestal",
    municipio: "Chipaque, Une y Cáqueza",
    entidad: "EPC",
    imagen: IMGS.rio,
  },

  // ══════════════════════════════════════════
  // AMBIENTAL
  // ══════════════════════════════════════════
  {
    id: 22,
    title: "Contrato N° 0468 de 2010",
    year: 2010,
    type: "Interventoría",
    shortDescription:
      "Interventoría técnica, administrativa y financiera al proyecto de procesos integrales para uso y manejo sostenible en cuencas de 15 municipios de Caquetá.",
    fullDescription:
      "Interventoría técnica, administrativa y financiera a la ejecución del proyecto: 'Implementación de procesos integrales para el uso y manejo sostenible en cuencas y microcuencas de 15 municipios de Caquetá'.",
    tag: "Interventoría",
    color: "#00AEEF",
    categoria: "ambiental",
    municipio: "15 municipios de Caquetá",
    imagen: IMGS.cuenca,
  },
  {
    id: 23,
    title: "Contrato de Consultoría N° CORPORINOQUIA 100-14-4-11-516",
    year: 2011,
    type: "Consultoría",
    shortDescription:
      "Caracterización y propuesta de manejo de aceites lubricantes residuales en municipios del Casanare en el marco del Convenio 031 de 2010.",
    fullDescription:
      "Caracterización, análisis y propuesta de manejo y acciones correctivas de los aceites lubricantes residuales generados por la actividad socioeconómica en los municipios de Villanueva, Monterrey, Yopal, Aguazul, y Paz de Ariporo del departamento del Casanare en el marco del Convenio 031 de 2010 suscrito entre la Gobernación del Casanare y la Corporación Autónoma Regional de la Orinoquía - CORPORINOQUIA.",
    tag: "Residuos",
    color: "#00AEEF",
    categoria: "ambiental",
    municipio: "Casanare",
    entidad: "CORPORINOQUIA",
    imagen: IMGS.gestionAmbiental,
  },
  {
    id: 24,
    title: "Contrato de Consultoría N° 100-14-4-11-117",
    year: 2011,
    type: "Consultoría",
    shortDescription:
      "Formulación participativa del plan de manejo ambiental del cordón de páramos El Atravesado, San José y las Burras, Municipio de Quetame, Cundinamarca.",
    fullDescription:
      "Realizar la formulación participativa del plan de manejo ambiental del cordón de páramos El Atravesado, San José y las Burras, localizados en el municipio de Quetame, departamento de Cundinamarca jurisdicción de Corporinoquia de acuerdo con las directrices establecidas por la resolución 839 de 2003, proferida por el MAVDT.",
    tag: "Páramos",
    color: "#00AEEF",
    categoria: "ambiental",
    municipio: "Quetame, Cundinamarca",
    entidad: "CORPORINOQUIA",
    imagen: IMGS.paramo,
  },
  {
    id: 25,
    title: "Orden de Servicios No. 801 del 18 de enero de 2012",
    year: 2012,
    type: "Orden de Servicios",
    shortDescription:
      "Estudio del impacto ambiental para la modificación de la licencia ambiental del Bloque Tamarin.",
    fullDescription:
      "Realizar el estudio del impacto ambiental para la modificación de la licencia ambiental del Bloque Tamarin.",
    tag: "Licencia Ambiental",
    color: "#00AEEF",
    categoria: "ambiental",
    imagen: IMGS.impactoAmbiental,
  },
  {
    id: 26,
    title: "Orden de Servicio No. 805 de 2012",
    year: 2012,
    type: "Orden de Servicios",
    shortDescription:
      "Plan de Manejo Ambiental para la reubicación de la Planta de Gas del Campo Rancho Hermoso, Departamento del Casanare.",
    fullDescription:
      "Realización del Plan de Manejo Ambiental para la reubicación de la Planta de Gas del Campo Rancho Hermoso, Departamento del Casanare.",
    tag: "Plan de Manejo",
    color: "#00AEEF",
    categoria: "ambiental",
    municipio: "Casanare",
    imagen: IMGS.pozoPetroleo,
  },
  {
    id: 27,
    title: "Contrato de Consultoría No. 200-12-3-569 de 2009",
    year: 2009,
    type: "Consultoría",
    shortDescription:
      "Planes de Manejo Ambiental y monitoreo del complejo de humedales Laguna Verde en Ubalá y complejos en Junín, Jurisdicción CORPOGUAVIO.",
    fullDescription:
      "Formulación participativa de los Planes de Manejo Ambiental y el diseño de los planes de monitoreo del complejo de humedales Laguna Verde en el municipio de Ubalá y los complejos de humedales al Corbata y Tembladares en Junín, Jurisdicción de CORPOGUAVIO.",
    tag: "Humedales",
    color: "#00AEEF",
    categoria: "ambiental",
    municipio: "Ubalá y Junín, Cundinamarca",
    entidad: "CORPOGUAVIO",
    imagen: IMGS.humedal,
  },
  {
    id: 28,
    title: "Contrato de Consultoría No. 200-12-18-478",
    year: 2009,
    type: "Consultoría",
    shortDescription:
      "Plan de Manejo Ambiental del complejo de humedales de la cuenca alta de la quebrada las Pavas en la vereda Muchindote, Municipio de Gachetá.",
    fullDescription:
      "Formulación del Plan de Manejo Ambiental del complejo de humedales de la cuenca alta de la quebrada las Pavas en la vereda Muchindote, en el municipio de Gachetá, Jurisdicción de CORPOGUAVIO.",
    tag: "Humedales",
    color: "#00AEEF",
    categoria: "ambiental",
    municipio: "Gachetá, Cundinamarca",
    entidad: "CORPOGUAVIO",
    imagen: IMGS.humedal,
  },
  {
    id: 29,
    title: "Contrato de Consultoría No. 338 de 2009",
    year: 2009,
    type: "Consultoría",
    shortDescription:
      "Diagnóstico Ambiental de la industria manufacturera y agroindustria en el marco del plan ambiental de reforestación y el SIGAM, Municipio de Tocancipá.",
    fullDescription:
      "Elaboración del Diagnóstico Ambiental de la industria manufacturera y agroindustria en el marco del plan ambiental de reforestación y el SIGAM, en el Municipio de Tocancipá.",
    tag: "Diagnóstico",
    color: "#00AEEF",
    categoria: "ambiental",
    municipio: "Tocancipá, Cundinamarca",
    imagen: IMGS.diagnostico,
  },
  {
    id: 30,
    title: "Orden de Servicios No. 9936",
    year: 2010,
    type: "Orden de Servicios",
    shortDescription:
      "Inventario Forestal al 100% de 14.400 m² en la vía de acceso hacia el Proyecto CAPELLA J52, Departamento del Caquetá.",
    fullDescription:
      "Elaboración del inventario Forestal al 100% de aproximadamente 14,400 m^2, en un trazado de la vía de acceso hacia el Proyecto CAPELLA J52 en el Departamento del Caquetá.",
    tag: "CAPELLA J52",
    color: "#00AEEF",
    categoria: "ambiental",
    municipio: "Caquetá",
    imagen: IMGS.impactoAmbiental,
  },
  {
    id: 31,
    title: "Orden de Servicios N° 9658 de 2013",
    year: 2013,
    type: "Orden de Servicios",
    shortDescription:
      "Actualización del PMA de la Plataforma Multipozo Capella J 52 del campo Capella, Departamento de Caquetá.",
    fullDescription:
      "Actualización del Plan de manejo ambiental (PMA) de la Plataforma Multipozo Capella J 52- del campo Capella, ubicado en el departamento de Caquetá.",
    tag: "PMA",
    color: "#00AEEF",
    categoria: "ambiental",
    municipio: "Caquetá",
    imagen: IMGS.pozoPetroleo,
  },
  {
    id: 32,
    title: "Contrato de prestación de servicios N° 0082 de 2011",
    year: 2011,
    type: "Prestación de Servicios",
    shortDescription:
      "Interventoría técnica, administrativa y financiera del proyecto de sistemas agroecológicos sostenibles en comunidades indígenas del Caquetá.",
    fullDescription:
      "Interventoría técnica, administrativa, y financiera del proyecto de inversión: 'Implementación de sistemas agroecológicos sostenibles y repoblamiento forestal en áreas degradadas en comunidades indígenas en el departamento de Caquetá'.",
    tag: "Interventoría",
    color: "#00AEEF",
    categoria: "ambiental",
    municipio: "Caquetá",
    imagen: IMGS.gestionAmbiental,
  },
  {
    id: 33,
    title: "Orden de Servicio N. 58 de 2012",
    year: 2012,
    type: "Orden de Servicios",
    shortDescription:
      "Plan de Manejo Ambiental del Pozo estratigráfico Portofino A.",
    fullDescription:
      "Realizar el Plan de Manejo Ambiental del Pozo estratigráfico Portofino A.",
    tag: "Pozo Estratigráfico",
    color: "#00AEEF",
    categoria: "ambiental",
    imagen: IMGS.pozoPetroleo,
  },
  {
    id: 34,
    title: "Orden de Servicios No. 064 del 12 de agosto de 2011",
    year: 2011,
    type: "Orden de Servicios",
    shortDescription:
      "Sostenimiento de la recuperación ambiental de Recio 1 y 2 — 1200 árboles y zona de pastos, más replante de árboles perdidos durante 10 meses.",
    fullDescription:
      "Sostenimiento de la recuperación ambiental de Recio 1 y 2 comprendida por 1200 árboles y zona de pastos, además de replantar los árboles perdidos durante 10 meses, MANO DE OBRA, INSUMOS, COSTOS INDIRECTOS.",
    tag: "Recuperación",
    color: "#00AEEF",
    categoria: "ambiental",
    imagen: IMGS.compensacion,
  },
  {
    id: 35,
    title: "Orden de Servicios no. 1044 del 30 de marzo de 2012",
    year: 2012,
    type: "Orden de Servicios",
    shortDescription:
      "Actualización del plan de manejo ambiental de la plataforma Ancho Hermoso 9 (RH 9) cumpliendo los HTER 310 del Ministerio de Medio Ambiente.",
    fullDescription:
      "Actualización del plan de manejo ambiental de la plataforma ancho Hermoso 9 (RH 9) cumpliendo los HTER 310 expedidos por el ministerio de medio ambiente y desarrollo sostenible (Personal, Cartografía y gastos de Campo).",
    tag: "PMA",
    color: "#00AEEF",
    categoria: "ambiental",
    imagen: IMGS.impactoAmbiental,
  },
  {
    id: 36,
    title: "Orden de Servicios N° 2090690006",
    year: 2011,
    type: "Orden de Servicios",
    shortDescription:
      "Desarrollo del programa de gestión ambiental del Departamento Administrativo de Seguridad DAS.",
    fullDescription:
      "Desarrollo del programa de gestión ambiental del Departamento Administrativo de Seguridad DAS.",
    tag: "Gestión Ambiental",
    color: "#00AEEF",
    categoria: "ambiental",
    entidad: "DAS",
    imagen: IMGS.gestionAmbiental,
  },
  {
    id: 37,
    title: "Orden de Servicios N° 2090690012",
    year: 2012,
    type: "Orden de Servicios",
    shortDescription:
      "Actividades de Higiene y Seguridad Industrial para el manejo del Plan Ambiental del Departamento Administrativo de Seguridad DAS.",
    fullDescription:
      "Desarrollo de actividades de Higiene y Seguridad Industrial Encaminada al manejo del Plan Ambiental En el Departamento Administrativo de Seguridad DAS.",
    tag: "Seguridad Industrial",
    color: "#00AEEF",
    categoria: "ambiental",
    entidad: "DAS",
    imagen: IMGS.gestionAmbiental,
  },
  {
    id: 38,
    title: "Orden de Servicios N° 1385 de 2012",
    year: 2012,
    type: "Orden de Servicios",
    shortDescription:
      "Sostenimiento de la recuperación ambiental de Recio 1 y 2 — 1200 árboles y zona de pastos durante 7 meses.",
    fullDescription:
      "Sostenimiento de la recuperación ambiental de recio 1 y 2 comprendida por 1200 árboles y zona de pastos, además de replantar los árboles perdidos durante 07 meses, mano de obra, insumos, costos indirectos.",
    tag: "Recuperación",
    color: "#00AEEF",
    categoria: "ambiental",
    imagen: IMGS.compensacion,
  },
  {
    id: 39,
    title: "Contrato de Compensación ambiental",
    year: 2013,
    type: "Compensación",
    shortDescription:
      "Compensación ambiental por reforestación derivada de licencia ambiental de perforación — 42.21 ha en Paratebueno, Puerto López y Cabuyaro.",
    fullDescription:
      "Ejecutar la compensación ambiental relacionada con reforestaciones por intervención de cobertura y cambio de uso del suelo, derivados de la licencia ambiental de los proyectos de perforación, ejecutará el aislamiento, establecimiento y mantenimiento por tres años de 42,21 ha en los municipios de Paratebueno (Cundinamarca), Puerto López y Cabuyaro (Meta).",
    tag: "42.21 ha",
    color: "#00AEEF",
    categoria: "ambiental",
    municipio: "Paratebueno, Puerto López, Cabuyaro",
    imagen: IMGS.compensacion,
  },
  {
    id: 40,
    title: "Servicio de Rehabilitación Ambiental 4400006195",
    year: 2017,
    type: "Rehabilitación",
    shortDescription:
      "Compensación ambiental por reforestaciones derivadas de licencia de proyectos de perforación — 42.21 ha en Cundinamarca y Meta.",
    fullDescription:
      "Ejecutar la compensación ambiental relacionada con reforestaciones por intervención de cobertura y cambio de uso del suelo, derivados de la licencia ambiental de los proyectos de perforación, por lo cual, ejecutará el aislamiento, establecimiento y mantenimiento por tres años de 42,21 ha en los municipios de Paratebueno (Cundinamarca), Puerto López y Cabuyaro (Meta).",
    tag: "Rehabilitación",
    color: "#00AEEF",
    categoria: "ambiental",
    municipio: "Paratebueno, Puerto López, Cabuyaro",
    imagen: IMGS.compensacion,
  },
  {
    id: 41,
    title: "Contrato de Obra No. 01180 Diciembre 2013",
    year: 2013,
    type: "Obra",
    shortDescription:
      "Conectividad de ecosistemas estratégicos mediante establecimiento de cercas vivas densas en el Distrito de Manejo Integrado Cuchilla de San Antonio-Laguna el Coco.",
    fullDescription:
      "Generar conectividad de Ecosistemas estratégicos a través del establecimiento de cercas vivas densas dentro del distrito, de Manejo integrado Cuchilla de San Antonio-Laguna el Coco.",
    tag: "Conectividad",
    color: "#00AEEF",
    categoria: "ambiental",
    imagen: IMGS.cercasVivas,
  },
  {
    id: 42,
    title: "Contrato No. 0000358 de 2015",
    year: 2015,
    type: "Consultoría",
    shortDescription:
      "Diseño de un observatorio ambiental para el Departamento del Atlántico como estrategia de información para políticas y acciones ambientales.",
    fullDescription:
      "Adelantar los estudios de diseño de un observatorio ambiental para el departamento del Atlántico como estrategia principal para generar sistemas de información confiables e interactivos, que apoyen una toma de decisiones más oportuna y acertada en el campo de las políticas y acciones ambientales en el departamento del Atlántico.",
    tag: "Observatorio",
    color: "#00AEEF",
    categoria: "ambiental",
    municipio: "Atlántico",
    entidad: "CRA",
    imagen: IMGS.observatorio,
  },
  {
    id: 43,
    title: "Contrato de Prestación de Servicios No. 150 de 2015",
    year: 2015,
    type: "Prestación de Servicios",
    shortDescription:
      "Elaboración del Plan de Saneamiento y Manejo de Vertimientos (PSMV) de Inspecciones de Laguna Azúl Santa Roa y La Playa, Municipio de Ubalá.",
    fullDescription:
      "Prestación de servicios para la elaboración de los documentos del Plan de Saneamiento y Manejo de Vertimientos - PSMV de las Inspecciones de Laguna Azúl Santa Roa y la Playa del Municipio de Ubalá Cundinamarca, Acorde con la Resolución 1433 de 2004 y demás normas vigentes.",
    tag: "PSMV",
    color: "#00AEEF",
    categoria: "ambiental",
    municipio: "Ubalá, Cundinamarca",
    imagen: IMGS.gestionAmbiental,
  },
  {
    id: 44,
    title: "Contrato de Prestación de Servicios No. 136 de 2015",
    year: 2015,
    type: "Prestación de Servicios",
    shortDescription:
      "Actualización del PGIRS del municipio de Ubalá, zonas A y B, acorde con el decreto 2981 de 2013 y la resolución 0754 de 2014.",
    fullDescription:
      "Prestación de servicios profesionales para realizar la actualización del plan de gestión integral de residuos sólidos (PGIRS) acorde con el decreto 2981 de 2013 y la resolución 0754 de 2014, en el municipio de Ubalá, zonas A y B.",
    tag: "PGIRS",
    color: "#00AEEF",
    categoria: "ambiental",
    municipio: "Ubalá, Cundinamarca",
    imagen: IMGS.residuosSolidos,
  },
  {
    id: 45,
    title: "Contrato de Consultoría No. 0199 de 2015",
    year: 2015,
    type: "Consultoría",
    shortDescription:
      "Actualización del PGIRS del Municipio de La Vega acorde con el decreto 2981 de 2003 y la resolución 0754 de 2014.",
    fullDescription:
      "Apoyo para la actualización del plan de gestión Integral de residuos sólidos-PGIRS del Municipio de la Vega acorde con el decreto 2981 de 2003 y la resolución 0754 de 2014.",
    tag: "PGIRS",
    color: "#00AEEF",
    categoria: "ambiental",
    municipio: "La Vega, Cundinamarca",
    imagen: IMGS.residuosSolidos,
  },
  {
    id: 46,
    title: "Orden de Compra N° 4321",
    year: 2013,
    type: "Orden de Compra",
    shortDescription:
      "Plan de gestión ambiental para ADECCO COLOMBIA S.A.",
    fullDescription:
      "Plan de gestión ambiental ADECCO COLOMBIA S.A.",
    tag: "Gestión Ambiental",
    color: "#00AEEF",
    categoria: "ambiental",
    entidad: "ADECCO COLOMBIA S.A.",
    imagen: IMGS.gestionAmbiental,
  },
  {
    id: 47,
    title: "Contrato de Obra Civil No. 0062014",
    year: 2014,
    type: "Obra Civil",
    shortDescription:
      "Fortalecimiento del manejo de Residuos Sólidos como estrategia de Cierre y Clausura de Botaderos a Cielo Abierto en la Inspección de Santa Rosa, Municipio de Ubalá.",
    fullDescription:
      "Ejecución de Actividades relacionadas, con el fortalecimiento del proceso de manejo de Residuos Sólidos, como estrategia dentro de las Acciones de Cierre y Clausura de Botaderos a Cielo Abierto, en la Inspección de Santa Rosa en el Municipio de Ubalá.",
    tag: "Residuos",
    color: "#00AEEF",
    categoria: "ambiental",
    municipio: "Ubalá, Cundinamarca",
    imagen: IMGS.residuosSolidos,
  },
  {
    id: 48,
    title: "Contrato de Consultoría No. 2048-2014",
    year: 2014,
    type: "Consultoría",
    shortDescription:
      "Interventoría técnica, administrativa, financiera y ambiental para estudios de caracterización de Humedales y biodiversidad en Casanare.",
    fullDescription:
      "Interventoría Técnica, Administrativa, financiera, contable legal y ambiental, al contrato de consultoría cuyo objeto es, Realizar los estudios de caracterización de Humedales, riqueza de biodiversidad de ecosistemas de piedemonte y montaña, identificación de incentivos socioeconómicos para la conservación y servicios ecosistemicos asociados a adaptación de cambio climático en el departamento de Casanare.",
    tag: "Humedales",
    color: "#00AEEF",
    categoria: "ambiental",
    municipio: "Casanare",
    imagen: IMGS.humedal,
  },
  {
    id: 49,
    title: "Contrato de Prestación de Servicios No. 011",
    year: 2014,
    type: "Prestación de Servicios",
    shortDescription:
      "Implementación de la compensación por cambio de uso de suelo para el campo Opón, Municipio de Cimitarra, Santander.",
    fullDescription:
      "Realizar y prestar el servicio de desarrollo e implementación de la compensación por cambio de uso de suelo, para el campo Opón, ubicado en el municipio de Cimitarra departamento del Santander.",
    tag: "Compensación",
    color: "#00AEEF",
    categoria: "ambiental",
    municipio: "Cimitarra, Santander",
    imagen: IMGS.compensacion,
  },

  // ══════════════════════════════════════════
  // AGROPECUARIO
  // ══════════════════════════════════════════
  {
    id: 50,
    title: "Contrato de Obra Pública No. 009 de 2011",
    year: 2011,
    type: "Obra Pública",
    shortDescription:
      "Implementación de modelos silvopastoriles y agroforestales para recuperación y estabilización de suelos en Carmen de Carupa, Cundinamarca.",
    fullDescription:
      "Implementación de modelos silvopastoriles y Agroforestales para la recuperación y estabilización de suelos dentro del componente productivo en la zona de ladera del municipio de Carmen de Carupa del departamento de Cundinamarca.",
    tag: "Silvopastoril",
    color: "#b45309",
    categoria: "agropecuario",
    municipio: "Carmen de Carupa, Cundinamarca",
    imagen: IMGS.silvopastoril,
  },
  {
    id: 51,
    title: "Selección Abreviada No. SDE 002 de 2009",
    year: 2009,
    type: "Obra",
    shortDescription:
      "Implementación de 32 modelos de restauración y recuperación del componente productivo en la zona rural del municipio de Cucunuba.",
    fullDescription:
      "Implementación de 32 modelos de restauración y recuperación del componente productivo en la zona rural del municipio de Cucunuba.",
    tag: "Modelos Productivos",
    color: "#b45309",
    categoria: "agropecuario",
    municipio: "Cucunuba, Cundinamarca",
    imagen: IMGS.agricultura,
  },
  {
    id: 52,
    title: "Contrato de Suministro No. 261-2014",
    year: 2014,
    type: "Suministro",
    shortDescription:
      "Suministro de Ganado Bovino, aves de corral e insumos pecuarios para proyectos productivos en atención a víctimas del conflicto, Municipio de Gachalá.",
    fullDescription:
      "Suministros de Ganado Bovino, aves de corral y equipos e insumos pecuarios para el desarrollo de proyectos productivos en atención de la población víctima del conflicto armado en el Municipio de Gachalá, Cundinamarca.",
    tag: "Ganadería",
    color: "#b45309",
    categoria: "agropecuario",
    municipio: "Gachalá, Cundinamarca",
    imagen: IMGS.ganaderia,
  },
  {
    id: 53,
    title: "Proyecto 5132",
    year: 2008,
    type: "Proyecto",
    shortDescription:
      "Asistencia técnica pecuaria, rural y ambiental de la localidad de Ciudad Bolívar articulada a la gestión de proyectos integrales y diversificación productiva.",
    fullDescription:
      "Dirección y Coordinación Administrativa y Financiera de la interventoría al convenio interadministrativo y de cooperación técnica científica, suscrito entre el DAMA - CORPOICA y el FONDO DE DESARROLLO LOCAL CIUDAD BOLIVAR, mediante el cual ejecuta el proyecto 5132: asistencia técnica pecuaria, rural y ambiental de la localidad de Ciudad Bolívar, articulada a la gestión de proyectos temáticos integrales, fomento para diversificación productiva y organización comunitaria.",
    tag: "Asistencia Técnica",
    color: "#b45309",
    categoria: "agropecuario",
    municipio: "Ciudad Bolívar, Bogotá",
    entidad: "DAMA - CORPOICA",
    imagen: IMGS.asistenciaTecnica,
  },

  // ══════════════════════════════════════════
  // TERRITORIAL
  // ══════════════════════════════════════════
  {
    id: 54,
    title: "Contrato de Consultoría No. 001 de 2007",
    year: 2007,
    type: "Consultoría",
    shortDescription:
      "Elaboración de estudios técnicos, levantamientos topográficos, avalúos comerciales, gastos de documentación, escrituración y vallas.",
    fullDescription:
      "Elaboración de estudios técnicos, levantamientos topográficos, avalúos Comerciales, Gastos de Documentación, Escrituración y vallas.",
    tag: "Estudios Técnicos",
    color: "#6d28d9",
    categoria: "territorial",
    imagen: IMGS.territorial,
  },
  {
    id: 55,
    title: "Contrato Prestación de Servicios N° 110 de 2010",
    year: 2010,
    type: "Prestación de Servicios",
    shortDescription:
      "Red de sociedad civil para articular acciones de gestión y manejo sostenible de zonas de reserva y áreas rurales de la localidad de Suba, Bogotá.",
    fullDescription:
      "Conformar con los actores involucrados en las anteriores fases de los procesos de ruralidad de áreas protegidas y nuevos actores, una red de la sociedad civil que lidere y articule acciones conducentes al favorecimiento en procesos de gestión para el manejo sostenible de las zonas de reserva y áreas rurales de la localidad de Suba.",
    tag: "Gestión Territorial",
    color: "#6d28d9",
    categoria: "territorial",
    municipio: "Suba, Bogotá",
    imagen: IMGS.territorial,
  },
  {
    id: 56,
    title: "Contrato de Servicios de Consultoría N°8538",
    year: 2010,
    type: "Consultoría",
    shortDescription:
      "Plan estratégico para fortalecer la red de comercialización regional del reciclaje en 22 municipios del Suroeste antioqueño, jurisdicción de CORANTIOQUIA.",
    fullDescription:
      "Servicios de consultoría para formular y ejecutar un plan estratégico para fortalecer la red de comercialización regional del Reciclaje de residuos inorgánicos, en 22 municipios del Suroeste antioqueño, jurisdicción de CORANTIOQUIA, analizando los ejes temáticos: técnico-operativo, financiero-comercial, socio-cultural y de seguimiento-evaluación.",
    tag: "Reciclaje",
    color: "#6d28d9",
    categoria: "territorial",
    municipio: "22 municipios Suroeste Antioqueño",
    entidad: "CORANTIOQUIA",
    imagen: IMGS.diagnostico,
  },
  {
    id: 57,
    title: "Contrato Consultoría de 2C",
    year: 2010,
    type: "Consultoría",
    shortDescription:
      "Inventario de puntos de agua y cuantificación de la demanda hidráulica subterránea en la zona plana de los valles de Ubaté y Chiquinquirá.",
    fullDescription:
      "Realizar el inventario de puntos de agua (pozos, aljibes, manantiales) y cuantificación de la demanda hidráulica subterránea en la zona plana de los valles de Ubaté y Chiquinquirá.",
    tag: "Aguas Subterráneas",
    color: "#6d28d9",
    categoria: "territorial",
    municipio: "Ubaté y Chiquinquirá",
    entidad: "2C Ingenieros S.A.",
    imagen: IMGS.cuenca,
  },
  {
    id: 58,
    title: "Contrato de Consultoría No. 269-2014",
    year: 2014,
    type: "Consultoría",
    shortDescription:
      "Elaboración de estudios y diseños del PSMV de las Inspecciones de Rionegro, Montecristo y los Alpes del Municipio de Gachalá, Cundinamarca.",
    fullDescription:
      "Consultoría para la elaboración de estudios, diseños de los documentos del Plan de Saneamiento y Manejo de Vertimientos-PSMV de las Inspecciones de Rionegro, Montecristo y los Alpes del Municipio de Gachalá, Cundinamarca.",
    tag: "PSMV",
    color: "#6d28d9",
    categoria: "territorial",
    municipio: "Gachalá, Cundinamarca",
    imagen: IMGS.diagnostico,
  },
  {
    id: 59,
    title: "Contrato de Consultoría No. 200-12-4-292 de 2015",
    year: 2015,
    type: "Consultoría",
    shortDescription:
      "Diseño e implementación de la 'RUTA DEL AGUA' en municipios de la provincia del Guavio para el desarrollo del turismo sostenible.",
    fullDescription:
      "Realizar el diseño e implementación del producto turístico la 'RUTA DEL AGUA' en los municipios de Guasca, Junín, Gachetá, Ubalá y Gachalá, con el fin de orientar la riqueza natural y cultural de la provincia del Guavio hacia el desarrollo de un turismo sostenible, con visión regional en una perspectiva de mitigación orientada hacia el cambio climático.",
    tag: "Turismo Sostenible",
    color: "#6d28d9",
    categoria: "territorial",
    municipio: "Provincia del Guavio",
    entidad: "CORPOGUAVIO",
    imagen: IMGS.turismo,
  },
];