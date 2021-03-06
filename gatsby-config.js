module.exports = {
  siteMetadata: {
    title: `naijab.com`,
    author: `Nattapon Pondongnok`,
    email: `nainatjab999@gmail.com`,
    slogan: `just a lonely man likes coding.`,
    description: `just a lonely man likes coding.`,
    keywords: [
      "linux",
      "javascript",
      "kotlin",
      "react",
      "angular",
      "vue",
      "laravel",
      "php",
      "website dev",
      "android",
      "ios",
      "flutter",
      "android dev",
      "mobile dev",
      "ทำเว็บไซต์",
      "ทำแอพ",
      "พัฒนาเว็บไซต์",
      "เขียนเว็บ",
      "เขียนแอพ",
      "หัดทำเว็บไซต์",
      "เริ่มต้นทำเว็บไซต์",
      "ทำแอพง่ายๆ",
      "naijab.com",
      "nattapon pondongnok",
    ],
    siteUrl: `https://naijab.com/`,
    key: {
      facebookAppId: `155791385048238`,
    },
    social: {
      email: `nainatjab999@gmail.com`,
      github: `naijab`,
      facebook: `naijabcom`,
      twitter: `_naijab`,
    },
    lastUpdate: `${Date.now()}`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `just a lonely man likes coding.`,
        short_name: `naijab.com`,
        start_url: `/`,
        background_color: `#323232`,
        theme_color: `#f44336`,
        display: `minimal-ui`,
        icon: `content/assets/logo-icon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-105769431-1`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1080,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: "language-",
              inlineCodeMarker: null,
              aliases: {},
              showLineNumbers: true,
              noInlineHighlight: false,
            },
          },
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        useMozJpeg: true,
        stripMetadata: true,
        defaultQuality: 95,
      },
    },
    `gatsby-plugin-polyfill-io`,
    `gatsby-plugin-remove-console`,
    `gatsby-plugin-feed`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Pridi`,
            subsets: [`latin`, `thai`],
            variants: [`400`, `700`],
          },
        ],
      },
    },
  ],
}
