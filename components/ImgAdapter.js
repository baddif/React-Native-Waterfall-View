import React, { Component } from 'react';
import {
    Image,
} from 'react-native';
export default ImgAdapter = React.createClass({
    getInitialState: function () {
        return {
            width: 0,
            height: 0,
        };
    },
    componentDidMount: function () {
        let width = this.props.width;
        let height = width / this.props.ratio;
        this.setState({ width, height });
    },
    render: function () {
        return (
            <Image
                style={{
                    width: this.state.width,
                    height: this.state.height,
                    backgroundColor: 'transparent',
                    marginRight: 10,
                }}
                source={this.props.source} />
        );
    },
});