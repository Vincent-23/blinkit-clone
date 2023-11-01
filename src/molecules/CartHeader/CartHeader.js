import React from 'react';
import classNames from 'classnames';
import VerticalContainer from '../../atoms/verticalContainer';
import HorizontalContainer from '../../atoms/horizotalContainer';
import Text from '../../atoms/text';
import styles from './cartHeader.module.scss';

const CartHeader = () => {
  return (
    <VerticalContainer className={classNames(styles.container)}>
        <Text className={classNames(styles.placeOrderText)}>Place Order</Text>
        <VerticalContainer className={classNames(styles.deliveryItems)}>
        <Text className={classNames(styles.deliveryText)}>Delivery in 15 minutes</Text>
        <Text className={classNames(styles.quantity)}>1 item</Text>
        </VerticalContainer>
        
    </VerticalContainer>
  )
}

export default CartHeader