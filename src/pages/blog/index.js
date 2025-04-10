import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/layout'
import { SEO } from "../../components/seo"

const PageTitle = "My Blog Posts"

//allFile(filter: {sourceInstanceName: {eq: "blog"}}) {
export const query = graphql`
    query {
      allMdx(sort: { frontmatter: { date: DESC }}) {
        nodes {
          frontmatter {
            date(formatString: "MMMM D, YYYY")
            title
            slug
          }
          id
          excerpt
        }
      }
    }
  `

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle={PageTitle}>
      {
        data.allMdx.nodes.map((node) => (
          <article key={node.id}>
            <h2>
              <Link to={`/blog/${node.frontmatter.slug}`}>
                {node.frontmatter.title}
              </Link>
            </h2>
            <p>Posted: {node.frontmatter.date}</p>
            <p>{node.excerpt}</p>
          </article>
        ))
      }
    </Layout>
  )
}

//export const Head = ({ data }) => <SEO pageTitle={data.site.siteMetadata.title} />
export const Head = () => <SEO pageTitle={PageTitle} />


export default BlogPage