import * as React from 'react'
import Layout from '../components/layout'
import { SEO } from "../components/seo"   //Import a "Named export"
import { StaticImage } from 'gatsby-plugin-image'

const PageTitle = "Home Page"
// console.log("PageTitle: ", PageTitle);

const IndexPage = () => {
  return (
    <Layout pageTitle={PageTitle}>
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage
        alt="Clifford, a reddish-brown pitbull, dozing in a bean bag chair"
        src="../images/clifford.jpeg"
      />
    </Layout>
  )
}

export const Head = () => (
  <SEO pageTitle={PageTitle} />
)

export default IndexPage