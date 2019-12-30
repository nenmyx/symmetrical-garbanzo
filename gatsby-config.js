module.exports = {
  siteMetadata: {
    title: `nenmyx`,
    siteUrl: `https://nenmyx.dev`,
    description: `Olivia Nenmyx's personal website.`,
    blurb: `trying my best`
  },

  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts/`,
        ignore: [`**/_*`],
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_TRACKING_ID,
        head: true,
        anonymize: true,
        respectDNT: true,
        cookieDomain: "nenmyx.dev"
      },
    },
    `gatsby-plugin-emotion`,
    `gatsby-transformer-remark`,
  ],
}
