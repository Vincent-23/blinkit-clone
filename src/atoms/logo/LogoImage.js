import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import styles from './logo.module.scss';

export default function Logo ({ className = "",to = '/', image }) {

    return (
        <Link
        to={to}
        className={classNames(styles.logoContainer, className)}
        >
            <img className={classNames(styles.logoSize, className)} src={ image } alt="" />
        </Link>
    )
}