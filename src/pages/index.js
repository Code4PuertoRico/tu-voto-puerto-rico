import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ParaVotar from "../images/paravotar.svg"
import Proyecto85 from "../images/proyecto-85.jpg"
import QuienMeRepresenta from "../images/quien-me-representa.png"
import TuVotoNoSeDeja from "../images/tu-voto-no-se-deja.jpg"

const PROJECTS = [
  {
    id: "quien-me-representa",
    logo: QuienMeRepresenta,
    name: "¿Quién me representa?",
    description:
      "¿Quién me representa? es un proyecto hecho por Espacios Abiertos. Su proposito es presentarle a los ciudadanos sus representantes a nivel federal, estatal y municipal según su lugar de residencia.",
    url: "https://www.quienmerepresentapr.com",
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
    id: "proyecto-85",
    logo: Proyecto85,
    name: "Proyecto 85",
    description:
      "Proyecto 85 es una organización cuya encomienda es fomentar la participación política de mujeres como funcionarias públicas electas en Puerto Rico para lograr una representación equitativa en nuestro gobierno.",
    url: "https://www.proyecto85.org",
  },
  {
    id: "tu-voto-no-se-deja",
    logo: TuVotoNoSeDeja,
    name: "Tu Voto No Se Deja",
    description:
      "Tu Voto No Se Deja surge a raíz del deseo de la ACLU de Puerto Rico de empoderar al pueblo por medio de la educación electoral; nuestro enfoque es proveer información para que quien decida llevar a cabo su derecho al voto, lo haga con conocimiento.",
    url: "https://www.facebook.com/tuvotonosedeja",
  },
]

function Project({ logo, name, description, url }) {
  return (
    <div className="bg-gray-100 shadow rounded">
      <div className="px-4 py-6 text-center">
        <div className="relative" style={{ paddingBottom: "50%" }}>
          <img
            className="absolute w-full h-full object-contain"
            src={logo}
            alt=""
          />
        </div>
        <h3 className="text-lg mt-4">{name}</h3>
        <p className="mt-2 text-sm font-light">{description}</p>
        <a
          className="block bg-gray-700 py-2 px-4 mt-4 text-white"
          href={url}
          target="_blank"
          rel="noreferrer"
        >
          Conocer más
        </a>
      </div>
    </div>
  )
}

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="text-center mx-auto md:w-2/3">
      <h2 className="text-3xl font-bold">Sobre Nosotros</h2>
      <div className="w-1/3 mx-auto mt-2">
        <hr class="text-gray-700 border-t-2" />
      </div>
      <p class="font-light mt-4">
        Tu Voto te ayuda a encontrar recursos para que puedas orientarte antes
        de votar en las próximas elecciones el 2 de noviembre de 2020.
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
