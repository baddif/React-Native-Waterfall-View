import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
} from 'react-native';
import WaterfallView from '../components/WaterfallView.js'
import styles from '../styles/styles.js';
window.tmpData = [
    {
        img: require('../../image/tmplistimg1.jpg'),
        ratio: 1.2,
    },
    {
        img: require('../../image/tmplistimg2.jpg'),
        ratio: 1.4,
    },
    {
        img: require('../../image/tmplistimg3.jpg'),
        ratio: 1.2,
    },
    {
        img: require('../../image/tmplistimg4.jpg'),
        ratio: 1.2,
    },
    {
        img: require('../../image/tmplistimg5.jpg'),
        ratio: 1,
    },
    {
        img: require('../../image/tmplistimg6.jpg'),
        ratio: 1.3,
    },
    {
        img: require('../../image/tmplistimg1.jpg'),
        ratio: 1.1,
    },
    {
        img: require('../../image/tmplistimg2.jpg'),
        ratio: 0.3,
    },
    {
        img: require('../../image/tmplistimg3.jpg'),
        ratio: 1.3,
    },
    {
        img: require('../../image/tmplistimg4.jpg'),
        ratio: 1.3,
    },
    {
        img: require('../../image/tmplistimg5.jpg'),
        ratio: 0.5,
    },
    {
        img: require('../../image/tmplistimg6.jpg'),
        ratio: 1.2,
    },
];
window.tmpDataCount = 0;

export default class WaterfallDoubleView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            number: this.props.number,
            displayItemList: [],
        };
    }
    _clearItems() {
        this.refs['waterfallView'].clear();
    }
    _addItem() {
        if (window.tmpDataCount < window.tmpData.length - 1) {
            window.tmpDataCount = tmpDataCount + 1;
        } else {
            window.tmpDataCount = 0;
        }
        this.refs['waterfallView'].addItem(window.tmpData[window.tmpDataCount]);
    }
    render() {
        return (
            <View style={{ flex: 1, flexDirection: 'column', backgroundColor: '#F5FCFF' }}>
                <Text>List</Text>
                <TouchableHighlight onPress={this._addItem.bind(this)} style={[styles.button, styles.rowItem]}><Text style={[styles.buttonText]}>Add Item</Text></TouchableHighlight>
                <TouchableHighlight onPress={this._clearItems.bind(this)} style={[styles.button, styles.rowItem]}><Text style={[styles.buttonText]}>Clear Items</Text></TouchableHighlight>
                <WaterfallView ref='waterfallView' number='2' bgColor='#F5FCFF' />
            </View>
        );
    }
};
