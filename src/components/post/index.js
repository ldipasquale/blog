import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import { Link } from 'gatsby'

import styles from './styles.less'

const Sizes = {
  SMALL: 'small',
  NORMAL: 'normal',
}

const Post = ({ id, imageUrl, title, author, created, size, className }) => (
  <Link
    to={`/post/${id}`}
    className={cx({
      [styles.container]: true,
      [styles.smallContainer]: size === Sizes.SMALL,
      [className]: className !== null,
    })}
  >
    <img src={imageUrl} alt={title} className={styles.image} />

    <div className={styles.details}>
      {`manuscrito por `}
      <span className={styles.author}>{author}</span>
      {` el ${created}`}
    </div>

    <div className={styles.title}>{title}</div>
  </Link>
)

Post.propTypes = {
  size: PropTypes.oneOf([Sizes.SMALL, Sizes.NORMAL]),
  className: PropTypes.string,
}

Post.defaultProps = {
  size: Sizes.NORMAL,
  className: null,
}

export default Post
