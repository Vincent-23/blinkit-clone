import React from 'react';
import classNames from 'classnames';
import styles from './text.module.scss'

const Text = ({ 
    fontSize="",
    justifyContent="",
    fontWeight="", 
    className = "", 
    children, 
    ...rest
}) => {

    // const Styles = {
    //     "font-size": fontSize,
    //     "justify-content": justifyContent,
    //     "font-weight": fontWeight,
    // }
  return (
    <div className={classNames(styles.textContainer, className)} {...rest}>
        {children}
    </div>
  )
}

export default Text;