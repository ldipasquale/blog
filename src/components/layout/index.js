import React from 'react'
import PropTypes from 'prop-types'

import Constants from 'constants'

import SEO from './SEO'
import Header from './Header'

import styles from './styles.module.less'

const Layout = ({ title, details, imageUrl, children }) => (
  <div className={styles.container}>
    <SEO
      title={title}
    />

    <Header
      title={title}
      details={details}
      imageUrl={imageUrl}
      hasGoBack={title !== Constants.TITLE}
    />

    <div className={styles.body} id="content">
      {children}
    </div>
  </div>
)

Layout.propTypes = {
  title: PropTypes.string,
}

Layout.defaultProps = {
  title: Constants.TITLE,
}

export default Layout
