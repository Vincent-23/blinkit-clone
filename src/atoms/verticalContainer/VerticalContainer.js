import React from "react";
import classNames from "classnames";
import styles from './verticalContainer.module.scss'

export default function VerticalContainer({ className = "", childern, ...rest }) {
    return (
        <div className={classNames(styles.verticalContainer, className)} {...rest}>
            {rest.children}
        </div>
    )
}