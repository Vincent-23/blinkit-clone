import React from 'react';
import classNames from 'classnames';
import VerticalContainer from '../../atoms/verticalContainer';
import HorizontalContainer from '../../atoms/horizotalContainer';
import Image from '../../atoms/image';
import Text from '../../atoms/text'
import styles from './footerDownloadContent.module.scss'

const FooterDownloadContent = ({ className="" }) => {
  return (
    <VerticalContainer className={classNames(styles.container, className)}>
        <HorizontalContainer className={classNames(styles.item, className)}>
        <Text className={classNames(styles.textContent, className)}>Download App</Text>
        <Image className={classNames(styles.imageItem, className)} image={"https://blinkit.com/d61019073b700ca49d22.png"}/>
        <Image className={classNames(styles.imageItem, className)} image={"https://blinkit.com/8ed033800ea38f24c4f0.png"}/>

        </HorizontalContainer>
    </VerticalContainer>
  )
}

export default FooterDownloadContent