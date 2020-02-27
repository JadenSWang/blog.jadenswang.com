import React from "react"

import Header from "./header"

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"
      ></link>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
      <Header />
      <main>{children}</main>
      <footer></footer>
    </React.Fragment>
  )
}

export default Layout
