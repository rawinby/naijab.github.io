import React from "react"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import uniq from "lodash/uniq"

const SEO = ({
  title,
  slug,
  featuredImage,
  keywords,
  description,
  lang,
  meta,
}) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            slogan
            description
            keywords
            author
            siteUrl
            key {
              facebookAppId
            }
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

  const metaTitle = `${title || site.siteMetadata.slogan} | ${
    site.siteMetadata.title
  }`
  const metaKeywords =
    keywords.length > 0
      ? uniq(keywords.concat(site.siteMetadata.keywords)).join(`, `)
      : site.siteMetadata.keywords.join(`, `)

  const metaDescription = description || site.siteMetadata.description
  const metaImage = featuredImage
    ? `${site.siteMetadata.siteUrl}${featuredImage.substring(1)}`
    : `${site.siteMetadata.siteUrl}`
  const metaUrl = slug
    ? `${site.siteMetadata.siteUrl}${slug.substring(1)}`
    : `${site.siteMetadata.siteUrl}`

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={metaTitle}
      titleTemplate={`%s`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          name: `keywords`,
          content: metaKeywords,
        },
        {
          property: `fb:app_id`,
          content: site.siteMetadata.key.facebookAppId,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:title`,
          content: metaTitle,
        },
        {
          property: `og:url`,
          content: metaUrl,
        },
        {
          property: `og:image`,
          content: metaImage,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:site`,
          content: `@${site.siteMetadata.social.twitter}`,
        },
        {
          name: `twitter:title`,
          content: metaTitle,
        },
        {
          name: `twitter:image`,
          content: metaImage,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ]}
    />
  )
}

SEO.defaultProps = {
  lang: `th`,
  meta: [],
  keywords: [],
}

export default SEO
