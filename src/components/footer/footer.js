import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { Button } from "reactstrap"
import { FaGithub, FaTwitter, FaFacebook } from "react-icons/fa"
const Footer = () => {
  const bioQuery = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            author
            social {
              github
              facebook
              twitter
            }
          }
        }
      }
    `
  )
  const { social } = bioQuery.site.siteMetadata
  return (
    <footer>
      <p>
        follow naijab at:
        <div className="p-1">
          <a href={`https://github.com/${social.github}`}>
            <Button outline>
              <FaGithub /> github
            </Button>
          </a>
          {"  "}
          <a href={`https://twitter.com/${social.twitter}`}>
            <Button color="info" outline>
              <FaTwitter /> twitter
            </Button>
          </a>
          {"  "}
          <a href={`https://facebook.com/${social.facebook}`}>
            <Button color="primary" outline>
              <FaFacebook /> facebook
            </Button>
          </a>
        </div>
      </p>
      <p className="copyright">
        © {new Date().getFullYear()} <a href="https://naijab.com">naijab.com</a>{" "}
        by <a href="mailto:nainatjab999@gmail.com">Nattapon Pondongnok</a>
        <br /> Built with <a href="https://reactjs.org/">React</a> and{" "}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </p>
    </footer>
  )
}

export default Footer
