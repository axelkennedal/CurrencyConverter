import React, { Component } from "react";
import {
    View,
    Text,
    TouchableHighlight,
    TextInput,
    StyleSheet
} from "react-native";
import Proptypes from "prop-types";
import colors from "../../config/style";
import Color from "color";

export default class InputWithButton extends Component {
    getContainerStyle() {
        let dynamicContainerStyle = style.container;
        if (this.props.editable === false) {
          dynamicContainerStyle = StyleSheet.flatten([style.container,style.containerDisabled]);
        }
        return dynamicContainerStyle;
    }    


    render() {
        return (
            <View style={this.getContainerStyle()}>
                <TouchableHighlight
                    onPress={this.props.onPress}
                    style={style.buttonContainer}
                    underlayColor={Color(styleVariables.button.backgroundColor).darken(styleVariables.button.backgroundColorModifier)}
                >
                    <Text style={style.buttonText}>
                        {this.props.buttonText}
                    </Text>
                </TouchableHighlight>
                <View style={style.border} />
                <TextInput
                    style={style.input}
                    editable={this.props.editable}
                    underlineColorAndroid="transparent"
                    keyboardType="numeric"
                    onChangeText={this.props.onChangeText}
                    defaultValue={this.props.defaultValue}
                    value={this.props.value}
                />
            </View>
        );
    }
}

InputWithButton.propTypes = {
    onPress: Proptypes.func,
    buttonText: Proptypes.string,
    editable: Proptypes.bool,
    defaultValue: Proptypes.string,
    value: Proptypes.string,
    onChangeText: Proptypes.func
};

InputWithButton.defaultProps = {
    editable: true,
};

const styleVariables = {
    inputHeight: 48,
    borderRadius: 4,
    button: {
        backgroundColor: "white",
        backgroundColorModifier: 0.1,
    }
};

const style = StyleSheet.create({
    container: {
        backgroundColor: "white",
        width: "85%",
        height: styleVariables.inputHeight,
        borderRadius: styleVariables.borderRadius,
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 10,
    },

    containerDisabled: {
        backgroundColor: colors.lightGray,
    },

    buttonContainer: {
        height: styleVariables.inputHeight,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
        borderTopLeftRadius: styleVariables.borderRadius,
        borderBottomLeftRadius: styleVariables.borderRadius,
    },

    buttonText: {
        fontWeight: "600",
        fontSize: 20,
        paddingHorizontal: 16,
        color: colors.primaryBlue,
    },

    input: {
        height: styleVariables.inputHeight,
        flex: 1,
        fontSize: 16,
        paddingHorizontal: 8,
        color: colors.inputText,
    },

    border: {
        height: styleVariables.inputHeight,
        width: StyleSheet.hairlineWidth,
        backgroundColor: colors.border
    },
});