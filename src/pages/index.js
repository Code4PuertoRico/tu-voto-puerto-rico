import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ParaVotar from "../images/paravotar.svg"
import Proyecto85 from "../images/proyecto-85.png"
import QuienMeRepresenta from "../images/quien-me-representa.png"
import TuVotoNoSeDeja from "../images/tu-voto-no-se-deja.png"
import VotoConConciencia from "../images/voto-con-conciencia.png"

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
        A continuación encontrarás información sobre el proceso de inscripción
        para votar; el funcionamiento de las papeletas, así como practicar el
        voto con papeletas modelos; podrás conocer quiénes son lxs candidatxs
        oficiales, así como evaluar sus posturas; y conocer sobre representación
        equitativa.
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
