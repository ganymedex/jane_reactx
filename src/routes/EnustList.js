import React, { Component, PropTypes } from 'react';
// 引入 connect 工具函数
import { connect } from 'dva';
import styles from './EnustList.css';
import MainLayout from '../components/Layout/MainLayout';

function EnystList({ location, dispatch, entust }) {
  const {
    loading, list, total, current,
    currentItem, modalVisible, modalType
    } = entust;
  return (
    <MainLayout location={location}>
      <div className={styles.normal}>
       11111
      </div>
    </MainLayout>
  );
}

EnystList.propTypes = {
  entust: PropTypes.object,
};

// 指定订阅数据，这里关联了 entust
function mapStateToProps({ entust }) {
  return {entust};
}

export default connect(mapStateToProps)(EnystList);
