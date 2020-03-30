const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const pages = await graphql(`
    {
      allPrismicBlogPost {
        edges {
          node {
            id
          }
        }
      }
    }
  `)

  const Post = path.resolve('src/templates/post.js')

  pages.data.allPrismicBlogPost.edges.forEach(edge => {
    createPage({
      path: `/post/${edge.node.id}`,
      component: Post,
      context: {
        id: edge.node.id,
      },
    })
  })
}
