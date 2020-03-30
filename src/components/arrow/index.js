import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import styles from './styles.less'

const Directions = {
  LEFT: 'left',
  RIGHT: 'right',
  TOP: 'top',
  BOTTOM: 'bottom',
}

const Arrow = ({ to, size, className }) => (
  <div
    className={cx({
      [styles.container]: true,
      [className]: className !== null,
    })}
    style={{
      ...[Directions.LEFT, Directions.RIGHT].includes(to) && {
        width: `${size}px`,
      },
      ...[Directions.TOP, Directions.BOTTOM].includes(to) && {
        height: `${size}px`,
      },
    }}
  >
    <div
      className={cx({
        [styles.head]: true,
        [styles.leftHead]: to === Directions.LEFT,
        [styles.rightHead]: to === Directions.RIGHT,
        [styles.topHead]: to === Directions.TOP,
        [styles.bottomHead]: to === Directions.BOTTOM,
      })}
    />
  </div>
)

Arrow.propTypes = {
  to: PropTypes.oneOf([Directions.LEFT, Directions.RIGHT, Directions.TOP, Directions.BOTTOM]).isRequired,
  size: PropTypes.number,
  className: PropTypes.string,
}

Arrow.defaultProps = {
  size: 132,
  className: null,
}

export default Arrow
