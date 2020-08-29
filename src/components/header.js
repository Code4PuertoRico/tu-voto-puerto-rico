import React from "react"

import PropTypes from "prop-types"

const Header = () => (
  <header className="shadow-lg border border-gray-700 border-t-0 border-b-4 border-r-0 border-l-0 px-4">
    <div className="flex justify-between mx-auto max-w-4xl py-2">
      <h1 className="text-2xl font-bold">Tu Voto</h1>
      <a
        href="mailto:paravotar@code4puertorico.org"
        className="bg-gray-700 py-2 px-4 text-white"
      >
        Contáctanos
      </a>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
