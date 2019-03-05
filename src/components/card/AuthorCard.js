import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import { FaGithub, FaFacebook, FaTwitter } from "react-icons/fa"

const Bio = () => {
  const bioQuery = useStaticQuery(
    graphql`
      query {
        avatar: file(absolutePath: { regex: "/profile.jpg/" }) {
          childImageSharp {
            fixed(width: 50, height: 50) {
              ...GatsbyImageSharpFixed
            }
          }
        }
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

  const { author, social } = bioQuery.site.siteMetadata
  return (
    <div>
      <Image
        fixed={bioQuery.avatar.childImageSharp.fixed}
        alt={author}
        style={{
          marginBottom: 0,
          minWidth: 50,
          borderRadius: `100%`,
        }}
        imgStyle={{
          borderRadius: `50%`,
        }}
      />
      <p>
        <strong>{author}</strong> <br /> แค่คนเหาชอบเขียนโค้ด คลั่งไคล้ Dark
        Souls และร้องเพลงเป็นชีวิตจิตใจ
        {` `}
        <br />
        <a href={`https://github.com/${social.github}`}>
          <FaGithub />
        </a>
        {` `}
        <a href={`https://facebook.com/${social.facebook}`}>
          <FaFacebook />
        </a>
        {` `}
        <a href={`https://twitter.com/${social.twitter}`}>
          <FaTwitter />
        </a>
      </p>
    </div>
  )
}

export default Bio
