import React from 'react'
import { graphql } from 'gatsby'

import { Layout, Post } from 'components'

import styles from './styles.module.less'

const renderPost = size => ({ id, tags, date, data: { image, title } }) => (
  <Post
    key={id}
    id={id}
    imageUrl={image.url}
    title={title.text}
    author={tags[0]}
    created={date}
    className={styles.post}
    size={size}
  />
)

const renderNormalPost = renderPost()
const renderSmallPost = renderPost('small')

export default ({ data }) => {
  const posts = data.posts.nodes

  const firstRowPosts = posts.slice(0, 2)
  const secondRowPosts = posts.slice(2, 5)

  return (
    <Layout
      imageUrl="https://i.imgur.com/Ib57K2i.jpg"
    >
      <div className={styles.posts}>
        <div className={styles.row}>
          {firstRowPosts.map(renderNormalPost)}
        </div>

        <div className={styles.row}>
          {secondRowPosts.map(renderSmallPost)}
        </div>
      </div>
    </Layout>
  )
}

export const homePageQuery = graphql`
  query IndexQuery {
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
