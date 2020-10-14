import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ParaVotar from "../images/paravotar.svg"
import Proyecto85 from "../images/proyecto-85.png"
import QuienMeRepresenta from "../images/quien-me-representa.png"
import TuVotoNoSeDeja from "../images/tu-voto-no-se-deja.png"
import VotoConConciencia from "../images/voto-con-conciencia.png"
import Equidad2020 from "../images/equidad-2020.png"
import EsMiTurno from "../images/es-mi-turno.png"
import LaClara from "../images/la-clara.png"
import PoliticaAccesible from "../images/politica-accesible.png"
import LaRutaDeLasMujeres from "../images/la-ruta-de-las-mujeres.png"
import PracticaTuVoto from "../images/practica-tu-voto.png"

const PROJECTS = [
  {
    id: "proyecto-85",
    logo: Proyecto85,
    name: "Proyecto 85",
    description:
      "Proyecto 85 es una organización que promueve la representación equitativa de las mujeres en los puestos públicos electivos de Puerto Rico. Conoce quiénes son las candidatas oficiales visitando el repositorio #VotaXEllas.",
    url: "https://www.proyecto85.org",
  },
  {
    id: "tu-voto-no-se-deja",
    logo: TuVotoNoSeDeja,
    name: "Tu Voto No Se Deja",
    description:
      "Tu Voto No Se Deja surge a raíz del deseo de la ACLU de Puerto Rico de empoderar al pueblo por medio de la educación electoral; nuestro enfoque es proveer información para que quien decida llevar a cabo su derecho al voto, lo haga con conocimiento.",
    url: "https://www.instagram.com/tuvotonosedeja",
  },
  {
    id: "pata-votar",
    logo: ParaVotar,
    name: "Para Votar",
    description:
      "Para Votar es una iniciativa de Code 4 Puerto Rico. Este proyecto busca informar al ciudadano sobre los procesos de inscripción y votación en Puerto Rico. También, le provee al ciudadano la alternativa de practicar su voto.",
    url: "https://www.paravotar.org",
  },
  {
    id: "quien-me-representa",
    logo: QuienMeRepresenta,
    name: "¿Quién me representa?",
    description:
      "Quién Me Representa PR te permite navegar el universo de candidatos y candidatas que aspiran a representarte, según tu lugar de residencia. Conóceles. Infórmate antes de votar.",
    url: "https://www.quienmerepresentapr.com",
  },
  {
    id: "voto-con-conciencia",
    logo: VotoConConciencia,
    name: "Voto con conciencia",
    description:
      "Voto con conciencia es un esfuerzo liderado por la Asociación de Psicología de PR. El objectivo de este proyecto es estimular la participación electoral basada en el análisis de propuestas con evidencia para atender los problemas del país.",
    url: "https://www.facebook.com/votoconconciencia",
  },
  {
    id: "es-mi-turno",
    logo: EsMiTurno,
    name: "Es Mi Turno",
    description:
      "#EsMiTurno es una iniciativa de Mentes Puertorriqueñas en Acción que exige respuestas puntuales a candidatos y candidatas a diversos cargos en temas que afectan particularmente a los jóvenes.",
    url: "https://www.facebook.com/MentesPuertorriquenasenAccion",
  },
  {
    id: "politica-accesible",
    logo: PoliticaAccesible,
    name: "Política Accesible",
    description:
      "Política Accesible un medio digital en Instagram creado con el fin de educar e informar a lxs jóvenes sobre el tema de política de manera accesible, sencilla, 'en arroz y habichuelas'. Buscamos que lxs jóvenes se involucren en todo proceso político, como las elecciones, de manera consciente e informada.",
    url: "https://instagram.com/politicaccesible?igshid=1d0s0nhltyhpv",
  },
  {
    id: "la-ruta-de-las-mujeres",
    logo: LaRutaDeLasMujeres,
    name: "La Ruta de las Mujeres",
    description:
      "La Ruta de las Mujeres de Proyecto Matria es un proyecto de apoderamiento político dirigido a educar y brindar herramientas a todas las mujeres para que puedan insertarse en procesos políticos y así ejercer un voto más informado a favor de la equidad. ¡Camina con nosotras!",
    url: "www.facebook.com/RutaMujeres",
  },
  {
    id: "equidad-2020",
    logo: Equidad2020,
    name: "Equidad 2020",
    description:
      "Equidad 2020 busca apoderamiento político de votantes LGBTTIQA+ mediante talleres virtuales y presenciales, investigación y desarrollo de propuestas para los candidatos y candidatas, así como de la evaluación de sus plataformas, entre otras iniciativas.",
    url: "https://www.facebook.com/Porlaequidad.pr",
  },
  {
    id: "la-clara",
    logo: LaClara,
    name: "La Clara",
    description:
      "La Clara es un espacio en el que la creatividad y la labor social y política se encuentran para contextualizar las situaciones, los problemas, las trabas y la maraña que acapara a Puerto Rico. Este laboratorio de acción política y social es un espacio en el que les jóvenes puertorriqueñes pueden adentrarse en temas que pueden parecer áridos y complejos, e imaginar y construir soluciones desde la diversidad y la inclusión.",
    url: "https://www.instagram.com/somoslaclara/",
  },
  {
    id: "practica-tu-voto",
    logo: PracticaTuVoto,
    name: "Practica Tu Voto",
    description:
      "PracticaTuVoto.com es un sitio de web construido por el Grupo PTV con el propósito de ayudar al elector puertorriqueño a emitir un voto asertivo en las elecciones generales de Puerto Rico. El visitante puede, luego de proveer información sobre su lugar de votación, examinar y marcar versiones similares a las tres papeletas que le serán entregadas el día 3 de noviembre de 2020, el día de las elecciones.",
    url: "https://www.practicatuvoto.com/",
  },
]

function Project({ logo, name, description, url }) {
  return (
    <div className="bg-gray-100 shadow rounded">
      <div className="px-4 py-6 text-center h-full flex flex-col">
        <div className="mb-4">
          <div className="relative" style={{ paddingBottom: "50%" }}>
            <img
              className="absolute w-full h-full object-contain"
              src={logo}
              alt=""
            />
          </div>
          <h3 className="text-lg mt-4">{name}</h3>
          <p className="mt-2 text-sm font-light text-gray-700">{description}</p>
        </div>
        <a
          className="block bg-gray-700 py-2 px-4 text-white mt-auto"
          href={url}
          target="_blank"
          rel="noreferrer"
        >
          Conoce más
        </a>
      </div>
    </div>
  )
}

const IndexPage = () => (
  <Layout>
    <SEO title="Recursos electorales" description="Recursos electorales" />
    <div className="text-center mx-auto md:w-2/3">
      <h2 className="text-3xl font-bold">Sobre Nosotrxs</h2>
      <div className="w-1/3 mx-auto mt-2">
        <hr className="text-gray-700 border-t-2" />
      </div>
      <p className="font-light mt-4 text-gray-700">
        Un conjunto de organizaciones, iniciativas y proyectos no partidistas
        nos unimos para facilitar el acceso a la información de cara a las
        elecciones generales de Puerto Rico pautadas para el{" "}
        <br className="hidden md:inline-block" /> martes, 3 de noviembre de
        2020.
      </p>
      <p className="font-light mt-3 text-gray-700">
        A continuación encontrarás recursos electorales tales como el
        funcionamiento de las papeletas y practicar el voto con papeletas
        modelos; podrás conocer quiénes son lxs candidatxs oficiales, así como
        evaluar sus posturas y propuestas para diversas comunidades; conocerás
        sobre representación equitativa en nuestro gobierno; y podrás
        insertarte en campañas de índole electoral para que vayas a la urnas
        listx para emitir un voto informado y consciente.
      </p>
    </div>
    <div className="grid grid-cols-1 gap-4 mt-10 md:grid-cols-3">
      {PROJECTS.map(project => {
        return (
          <Project
            key={project.id}
            logo={project.logo}
            name={project.name}
            description={project.description}
            url={project.url}
          />
        )
      })}
    </div>
  </Layout>
)

export default IndexPage
