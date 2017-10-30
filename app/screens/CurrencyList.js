import React, { Component } from "react";
import { FlatList } from "react-native";
import Proptypes from "prop-types";

import ListItem from "../components/List/ListItem";
import Separator from "../components/List/Separator";

import currencies from "../data/currencies";
const CURRENT_CURRENCY = "CAD";

export default class CurrencyList extends Component {
    render() {
        return (
            <FlatList
                data={currencies}
                renderItem={({ item }) =>
                    <ListItem
                        text={item}
                        selected={item === CURRENT_CURRENCY}
                        onPress={this.handlePress}
                    />
                }
                keyExtractor={item => item}
                ItemSeparatorComponent={Separator}
            />
        );
    }

    handlePress = () => {
        this.props.navigation.goBack(null);
    }
}

CurrencyList.propTypes = {
    navigation: Proptypes.object
}