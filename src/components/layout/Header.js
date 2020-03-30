import React from 'react'
import { Parallax } from 'react-parallax';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Link } from 'gatsby'

import Constants from 'constants'

import { Arrow } from 'components'

import styles from './styles.less'

const parallaxBlur = { min: -5, max: 10 }

const Header = ({ title, details, imageUrl, hasGoBack }) => (
  <Parallax
    bgImage={imageUrl}
    bgImageAlt={title}
    blur={parallaxBlur}
    strength={300}
    className={styles.header}
    contentClassName={styles.headerContent}
  >
    {hasGoBack && (
      <Link to="/">
        <div className={styles.backButton}>
          {Constants.TITLE}

          <Arrow
            to="left"
            size={240}
            className={styles.arrow}
          />
        </div>
      </Link>
    )}

    <div className={styles.bottomContent}>
      {details && (
        <div className={styles.details}>{details}</div>
      )}

      <div className={styles.title}>{title}</div>

      <AnchorLink href='#content'>
        <Arrow to="bottom" />
      </AnchorLink>
    </div>
  </Parallax>
)

export default Header
