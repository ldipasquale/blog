import React from 'react'
import { graphql } from 'gatsby'
import moment from 'moment'
import 'moment/locale/es'

import { Layout } from 'components'

import styles from './styles.less'

moment.locale('es')

export default ({ data: { post } }) => {
  const { data, tags } = post

  const [author] = tags

  const originalDate = moment(post.date, 'DD/MM/YYYY')

  const date = {
    year: originalDate.format('YYYY'),
    month: originalDate.format('MMMM'),
    day: originalDate.format('DD'),
  }

  return (
    <Layout
      title={data.title.text}
      details={(
        <div className={styles.details}>
          {`manuscrito por `}
          <span className={styles.author}>{author}</span>
          {` el ${date.day} de ${date.month} del ${date.year}`}
        </div>
      )}
      imageUrl={data.image.url}
    >
      <div
        className={styles.content}
        dangerouslySetInnerHTML={{ __html: data.content.html }}
      />
    </Layout>
  )
}

export const pageQuery = graphql`
  query PostBySlug($id: String!) {
    post: prismicBlogPost(id: { eq: $id }) {
      id
      tags
      date: first_publication_date(formatString: "DD/MM/YYYY")
      data {
        title {
          text
        }
        content {
          html
        }
        image {
          url
        }
      }
    }
  }
`
