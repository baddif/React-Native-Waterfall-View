import React, { Component } from 'react';
import {
    View,
    ScrollView,
} from 'react-native';
import ColumnView from './ColumnViewInWaterfall.js';

export default class WaterfallDoubleView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            number: parseInt(this.props.number),
            displayItemList: [],
        };
    }
    _getViews() {
        let width = (require('Dimensions').get('window').width - 2 * this.state.number + 2) / this.state.number;
        let viewsInside = [];
        for (var i = 0; i < this.state.number; i++) {
            viewsInside.push(<ColumnView width={width} bgColor={this.props.bgColor} ref={'viewsInside_' + i} key={'viewsInside_' + i} />);
            if (i < this.state.number - 1) {
                viewsInside.push(<View style={{ width: 2, backgroundColor: this.props.bgColor }} key={'seprator_' + i}></View>);
            }
        }
        return viewsInside;
    }
    _getShortestView() {
        let order = 0;
        let minHeight = this.refs['viewsInside_' + 0].getHeight();
        for (let i = 0; i < this.state.number; i++) {
            let tmpHeight = this.refs['viewsInside_' + i].getHeight();
            if (minHeight > tmpHeight) {
                minHeight = tmpHeight;
                order = i;
            }
        }
        return this.refs['viewsInside_' + order];
    }
    clear() {
        for (let i = 0; i < this.state.number; i++) {
            this.refs['viewsInside_' + i].clearData();
        }
    }
    addItem(item) {
        this.state.displayItemList.push(item);
        this._getShortestView().addItem(window.tmpData[window.tmpDataCount]);
    }
    render() {
        return (
            <ScrollView>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    {this._getViews()}
                </View>
            </ScrollView>
        );
    }
};
