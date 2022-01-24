import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the <a 
         href="https://www.gatsbyjs.com/docs/tutorial/" target="_blank" rel="noreferrer">
        Gatsby Tutorial
        </a>
        .
      </p>
      <StaticImage
        alt="Tigrinho na neve no Olimpic Park em Salt Lake City."
        src="../images/SaltLakeCity-OlimpicPark-DSC00284.jpg"
      />
      <br/>
      <br/>
      <StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="https://pbs.twimg.com/media/E1oMV3QVgAIr1NT?format=jpg&name=large"
      />      
    </Layout>
  )
}

export default IndexPage

