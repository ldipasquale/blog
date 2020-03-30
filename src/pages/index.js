import Home from './home'
import { graphql } from 'gatsby'

export default Home

export const pageQuery = graphql`
  query HomeQuery {
    posts: allPrismicBlogPost(limit: 5) {
      nodes {
        id
        tags
        date: first_publication_date(formatString: "DD/MM/YYYY")
        data {
          title {
            text
          }
          image {
            url
          }
        }
      }
    }
  }
`
