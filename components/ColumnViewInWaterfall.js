import React, { Component } from 'react';
import {
  View,
} from 'react-native';
import WaterfallItem from './WaterfallItem.js';
import styles from '../styles/styles.js';
export default ColumnView = React.createClass({
  getInitialState: function () {
    return {
      totalHeight: 0,
      dataSource: [],
    };
  },
  getHeight: function () {
    let totalHeight = 0;
    for (let i = 0; i < this.state.dataSource.length; ++i) {
      totalHeight += this.refs['wfItem_' + i].getHeight();
    }
    return totalHeight;
  },
  addItem: function (item) {
    this.state.dataSource.push(item);
    this.setState({});
  },
  clearData: function () {
    this.state.dataSource.splice(0, this.state.dataSource.length);
    this.setState({});
  },
  _showItems: function () {
    let items = [];
    for (let i = 0; i < this.state.dataSource.length; ++i) {
      items.push(<WaterfallItem source={this.state.dataSource[i]} width={this.props.width} ref={'wfItem_' + i} />);
    }
    return items;
  },
  render: function () {
    return (
      <View
        ref='thisView'
        style={{ flexDirection: 'column', backgroundColor: this.props.bgColor, width: this.props.width }}>
        {this._showItems()}
      </View>
    );
  },

}); 