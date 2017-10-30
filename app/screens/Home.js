import React, { Component } from "react";
import { StatusBar, KeyboardAvoidingView } from "react-native";
import Proptypes from "prop-types";

import Container from "../components/Container/Container";
import Logo from "../components/Logo/Logo";
import InputWithButton from "../components/TextInput/InputWithButton";
import ClearButton from "../components/Buttons/ClearButton";
import LastConverted from "../components/Text/LastConverted";
import Header from "../components/Header/Header";

const DEFAULT_FROM_CURRENCY = "SEK";
const DEFAULT_TO_CURRENCY = "USD";
const DEFAULT_FROM_AMOUNT = "100";
const DEFAULT_TO_AMOUNT = "69";
const CONVERSION_RATE = 0.69;
const CONVERSION_DATE = new Date();

export default class Home extends Component {
  render() {
    return (
      <Container>
        <StatusBar translucent={false} />
        <Header
          onPress={this.handleOptionsPressed}
        />
        <KeyboardAvoidingView behavior="padding">
        <Logo />
        <InputWithButton 
          buttonText={DEFAULT_FROM_CURRENCY}
          onPress={this.handlePressFromCurrency}
          defaultValue={DEFAULT_FROM_AMOUNT}
          onChangeText={this.handleTextChange}
          />
        <InputWithButton 
          buttonText={DEFAULT_TO_CURRENCY}
          onPress={this.handlePressToCurrency}
          editable={false}
          value={DEFAULT_TO_AMOUNT}
          />
        </KeyboardAvoidingView>  
        <LastConverted
          fromCurrency={DEFAULT_FROM_CURRENCY}
          toCurrency={DEFAULT_TO_CURRENCY}
          date={CONVERSION_DATE}
          conversionRate={CONVERSION_RATE}
        />
        <ClearButton
          text="Swap Currencies"  
          onPress={this.handleSwapCurrency}
          />
      </Container>
    );
  }

  /**
   * Good to know: using the arrow syntax means you don't need to bind to 'this',
   * it's handled automatically. (You need to bind if for the 'navigation' prop to work)
   */
  handlePressFromCurrency = () => {
    console.log("pressed from-currency");
    this.props.navigation.navigate("CurrencyList", { title: "Convert From" });
  }

  handlePressToCurrency = () => {
    console.log("pressed to-currency");
    this.props.navigation.navigate("CurrencyList", { title: "Convert To" });
  }

  handleTextChange(newText) {
    console.log("change text", newText);
  }

  handleSwapCurrency() {
    console.log("pressed swap currency");
  }

  handleOptionsPressed = () => {
    console.log("pressed options");
    this.props.navigation.navigate("Options");
  }
}

Home.propTypes = {
  navigation: Proptypes.object
}