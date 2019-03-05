import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

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
          }
        }
      }
    `
  )

  const metaTitle = `${title || site.siteMetadata.slogan} | ${
    site.siteMetadata.title
  }`
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
          name: `twitter:creator`,
          content: site.siteMetadata.author,
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
      ]
        .concat(
          keywords.length > 0
            ? {
                name: `keywords`,
                content: keywords.concat(site.siteMetadata.keywords).join(`, `),
              }
            : site.siteMetadata.keywords.join(`, `)
        )
        .concat(meta)}
    />
  )
}

SEO.defaultProps = {
  lang: `th`,
  meta: [],
  keywords: [],
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.array,
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired,
}

export default SEO
