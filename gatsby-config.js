/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: ` Gitbook`,
    siteUrl: `https://www.yourdomain.tld`
    description: `Example project for the Gatsby Head API`,
    twitterUsername: `@gatsbyjs`,
    image: `/gatsby-icon.png`, 
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "pages",
        "path": "./src/pages/"
      },
      __key: "pages"
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      }
    },    
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/locales`,
        name: `locale`,
      },
    },
    {
      resolve: `gatsby-plugin-react-i18next`,
      options: {
        localeJsonSourceName: `locale`, // Name from gatsby-source-filesystem
        defaultNS: "translation", // default namespace
        ns: ["translation", "blog", "404"], 
        languages: [`en`, `pt`],
        defaultLanguage: `en`,
        siteUrl: `https://www.yourdomain.tld`, // Already in siteMetadata, just repeat here
        i18nextOptions: {
          interpolation: {
            escapeValue: false, // React already does escaping
          },
        },
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-mdx",
    `gatsby-plugin-sass`, 
  ],
}
