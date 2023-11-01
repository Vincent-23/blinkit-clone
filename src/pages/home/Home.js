import React from 'react';
import { Outlet } from 'react-router-dom';
import classNames from 'classnames';
import VerticalContainer from '../../atoms/verticalContainer';
import HorizontalContainer from '../../atoms/horizotalContainer';
import CardItem from '../../molecules/cardItem';
import Header from '../../organisms/header';
import styles from './home.module.scss';
import Footer from '../../organisms/footer';

const Home = () => {
  return (
    <VerticalContainer>
            <Header />
            <Outlet />
            <Footer />
    </VerticalContainer>
  )
}

export default Home