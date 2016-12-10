import React, { Component } from 'react';
import {
    View,
} from 'react-native';
import styles from '../styles/styles.js';
import ImgAdapter from './ImgAdapter.js';
export default class WaterfallItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    getHeight() {
        return this.props.width / this.props.source.ratio;
    }
    getImageShown(source, width) {
        return <ImgAdapter source={source.img} ratio={source.ratio} width={width} />;
    }
    render() {
        return (
            <View style={styles.DuelListItemContent}>
                {this.getImageShown(this.props.source, this.props.width)}
            </View>
        );
    }
};