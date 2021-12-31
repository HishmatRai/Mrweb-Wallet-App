import React from "react";
import { View, StyleSheet, SafeAreaView } from "react-native";
import colors from "./../../../../colors";
import Card from "./../../../assets/images/Card.svg";
import Button from "./../../components/button";
let BuyBitcoin = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles._data_main}>
        <View />
        <Card width={"100%"} height={276} fill={colors.white} />
        <View style={styles._btn_main}>
          <Button
            ButtonBgColor="#6CBBF2"
            ButtonRadious={50}
            ButtonText="BUY BITCOIN"
            // onPress={() => props.navigation.navigate("RecoveryVerify")}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  _data_main: {
    flex: 1,
    marginHorizontal: 20,
    marginVertical: 30,
    flexDirection: "column",
    justifyContent: "space-between",
  },
});
export default BuyBitcoin;
