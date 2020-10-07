import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Services from "../components/Services"
import Jobs from "../components/Jobs"
import Projects from "../components/Projects"
import Blogs from "../components/Blogs"
export default ({data}) => {
  const {allStrapiProjects:{nodes:projects},
} = data

  return <Layout>
    <Hero/>
    <Services/>
    <Jobs/>
    <Projects projects={projects} title="featured projects" showLink/>
  </Layout>
}


export const query = graphql`
  {
    allStrapiProjects(filter: {featured: {eq: true}}, sort: {fields: strapiId, order: DESC}) {
      nodes {
        stack {
          id
          title
        }
        title
        url
        github
        id
        description
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    allStrapiBlogs(sort: {fields: date, order: DESC}, limit: 3) {
      nodes {
        slug
        content
        desc
        date(formatString: "MMM Do, YYYY")
        id
        title
        category
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
