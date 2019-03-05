import React from "react"

const Footer = () => {
  return (
    <footer>
      <p>
        © {new Date().getFullYear()} <a href="https://naijab.com">naijab.com</a>{" "}
        , Built with
        <a href="https://www.gatsbyjs.org"> Gatsby</a>
      </p>
    </footer>
  )
}

export default Footer
