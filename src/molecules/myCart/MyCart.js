import React from 'react';
import classNames from 'classnames';
import Button from '../../atoms/button/Button';
import HorizontalContainer from '../../atoms/horizotalContainer';
import Text from '../../atoms/text';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useNavigate } from 'react-router-dom';
import styles from './myCart.module.scss';

const MyCart = ({ className="", }) => {
  const navigate = useNavigate();
  
  const handleNavigate = () => {
    navigate('/cart')
  }

  return (
    <Button className={classNames(styles.btnContainer, className)}>
        <HorizontalContainer className={classNames(styles.itemContainer, className)}>
            <AddShoppingCartIcon className={classNames(styles.shopIcon, className)}/>
            <Text className={classNames(styles.cartText)} onClick={() => handleNavigate()}> My Cart</Text>
        </HorizontalContainer>
    </Button>
  )
}

export default MyCart