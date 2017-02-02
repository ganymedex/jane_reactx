import React, { Component, PropTypes } from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import styles from './MainPage.css';
import MainLayout from '../components/Layout/MainLayout';
import FromComponent from '../components/FromSend'

function MainPage() {
  return (
    <MainLayout location={location}>
      <div className={styles.normal}>
       <FromComponent/>
      </div>
    </MainLayout>
  );
}

MainPage.propTypes = {
};


export default connect()(MainPage);
