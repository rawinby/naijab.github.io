import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

const AuthorCard = () => {
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
              email
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
    <div className="author-container">
      <Image
        fixed={bioQuery.avatar.childImageSharp.fixed}
        alt={author}
        className="author-image"
      />
      <p>
        <strong>{author}</strong>
        <br />
        <span>
          แค่คนเหงาชอบเขียนโค้ด คลั่งไคล้ Dark Souls และร้องเพลงเป็นชีวิตจิตใจ{" "}
        </span>
        <br />
        follow me: {` `}
        <a href={`https://twitter.com/${social.twitter}`}>twitter</a>{" "}
        <a href={`https://facebook.com/${social.facebook}`}>facebook</a>{" "}
        <a href={`https://github.com/${social.github}`}>github</a>{" "}
        <a href={`mailto:${social.email}`}>e-mail</a> <br />
        <span>#coding #linux #darksouls #art #tech</span>
      </p>
    </div>
  )
}

export default AuthorCard
