import * as React from 'react'
import { graphql } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import { useTranslation } from 'gatsby-plugin-react-i18next'
import Layout from '../components/layout'
import { SEO } from "../components/seo"   //Import a "Named export"


const PageTitle = "Home"
// console.log("PageTitle: ", PageTitle);

const IndexPage = () => {
  const { t } = useTranslation()
  const PageLocalized = t('homePage.title')

  return (
    <Layout pageTitle={PageLocalized}>
      <p>{t('homePage.welcomeMessage')}</p>
      <StaticImage
        alt="Clifford, a reddish-brown pitbull, dozing in a bean bag chair"
        src="../images/clifford.jpeg"
      />
    </Layout>
  )
}

export default IndexPage


export const Head = () => (
  <SEO pageTitle={PageTitle} />
)


// This is mandatory for every page using useTranslation() or anything from gatsby-plugin-react-i18next.
export const query = graphql`
  query($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;