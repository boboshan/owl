module.exports = {
  siteMetadata: {
    title: `owl.monster`,
    description: `Focus on digital sound.`,
    author: `@boboshan`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/content`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        defaultLayouts: {
          pages: require.resolve("./src/components/layout.js"),
          content: require.resolve("./src/templates/post.js"),
        },
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
            },
          },
          `gatsby-remark-responsive-iframe`,
          {
            resolve: '@raae/gatsby-remark-oembed',
            options: {
              usePrefix: false,
              providers: {
                  exclude: ['Reddit']
              }
            }
          },
        ],
        remarkPlugins: [
          require(`remark-slug`),
          require(`remark-capitalize`),
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`,
      },
    },
    `gatsby-plugin-theme-ui`,
    `gatsby-theme-style-guide`,
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: `orangered`,
        showSpinner: true,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
