import React from "react"

import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Code4PR from "../images/code-4-pr.svg"
import Header from "./header"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <main className="pt-8 max-w-4xl mx-auto">
        <div className="w-11/12 mx-auto">{children}</div>
      </main>
      <footer className="bg-gray-700 py-3 px-4 mt-12 text-center">
        <p className="text-white text-sm font-light">
          El código de este proyecto es totalmente público y puedes verlo en{" "}
          <a
            className="font-bold hover:underline"
            href="https://github.com/Code4PuertoRico/tu-voto-puerto-rico"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          .
          <br />
          Tu Voto es una colaboración entre Tu Voto No Se Deja, Proyecto 85 y
          Para Votar.
        </p>
        <img
          className="w-8 mx-auto mt-3"
          src={Code4PR}
          alt="Logo de Code for Puerto Rico"
        />
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
