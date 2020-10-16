import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Blogs from "../components/Blogs"
import SEO from "../components/SEO"
  
const Blog = ({data:{allStrapiBlogs:{nodes:blogs},
},
}) => {
  return (
    <Layout>
      <SEO title="Blog" description="this is the blog page"/>
      <section className="blog-page">
        <Blogs blogs={blogs} title="blog"/>
      </section>
    </Layout>
  )
}


export const query = graphql`
  {
    allStrapiBlogs(sort: {fields: date, order: DESC}, limit: 3) {
      nodes {
        slug
        desc
        date(formatString: "MMMM Do, YYYY")
        id
        title
        category
        image {
          childImageSharp {
            fluid {
              src
            }
          }
        }
      }
    }
  }
`

export default Blog
