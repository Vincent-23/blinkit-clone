import React from 'react';
import classNames from 'classnames';
import styles from './card.module.scss';

const Card = ({ className="", children, ...rest}) => {
  return (
    <div className={classNames(styles.container, className)} {...rest}>
        {children}
    </div>
  )
}

export default Card