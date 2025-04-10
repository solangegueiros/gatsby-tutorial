import * as React from 'react'
import Layout from '../components/layout'
import { SEO } from "../components/seo"

const PageTitle = "About Me"

const AboutPage = () => {
  return (
    <Layout pageTitle={PageTitle}>
      <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
    </Layout>
  )
}

export const Head = () => (
  <>
    <SEO pageTitle={PageTitle} pageDescription="About me" />
  </>
)

export default AboutPage