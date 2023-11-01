import React from 'react';
import classNames from 'classnames';
import styles from './horizontalContainer.module.scss'

const HorizontalContainer = ({ className = "", children, ...rest }) => {
  return (
    <div className={classNames(styles.horizontalContainer, className)} {...rest}>
        {children}
    </div>
  )
}

export default HorizontalContainer;