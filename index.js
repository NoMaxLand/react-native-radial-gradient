import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {processColor,requireNativeComponent, ViewPropTypes,Animated} from 'react-native';

export default class RadialGradient extends Component {
    static propTypes = {
        center: PropTypes.arrayOf(PropTypes.number),
        colors: PropTypes.arrayOf(PropTypes.string),
        stops: PropTypes.arrayOf(PropTypes.number),
        radius: PropTypes.number,
        ...ViewPropTypes,
    };

    render() {
        const {
            children,
            colors,
            stops,
            center,
            radius,
            style,
            ...otherProps
        } = this.props;


        return (
            <Animated.View ref={(component) => { this.gradientRef = component; }} {...otherProps} style={style}>
                <NativeRadialGradient
                    style={{position: 'absolute', top: 0, left: 0, bottom: 0, right: 0}}
                    colors={(colors)?colors.map(processColor):null}
                    center={center}
                    radius={radius}
                    stops={stops}
                />
                { children }
            </Animated.View>
        );
    }
}


const NativeRadialGradient = requireNativeComponent('SRSRadialGradient', null);
