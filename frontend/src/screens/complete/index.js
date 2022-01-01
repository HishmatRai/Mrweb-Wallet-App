import React from "react";
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import colors from "./../../../../colors";
import Button from "./../../components/button";
let Complete = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles._data_main}>
        <ScrollView>
          <Text style={styles._heading}>Complete</Text>
          <View style={styles._icon_main}>
            <Ionicons
              name="ios-checkmark-circle-outline"
              size={122}
              color={colors.primary}
            />
          </View>
          <Text style={styles._rec_price}>You received 0.04348 renBTC</Text>
          <View style={styles._btn_main}>
            <Button
              ButtonBgColor="#6CBBF2"
              ButtonRadious={50}
              ButtonText="Back to home"
              // onPress={() => props.navigation.navigate("RecoveryVerify")}
            />
          </View>
          <View style={styles._btc_t_main}>
            <Text style={styles._btc_t_title}>Bitcoin transction</Text>
            <Text style={styles._btc_t_title}>Bitcoin transction</Text>
          </View>
          <View style={styles._line} />
          <View style={styles._fees_main}>
            <Text style={styles._fees_title}>RenVM Fee</Text>
            <Text style={styles._fees_title}>8.00040000 BTC ($2.98)</Text>
          </View>
          <View style={styles._fees_main}>
            <Text style={styles._fees_title}>Bitcoin Miner Fee</Text>
            <Text style={styles._fees_title}>8.00040000 BTC ($2.98)</Text>
          </View>
          <View style={styles._fees_main}>
            <Text style={styles._fees_title}>Esti. FTM Fee</Text>
            <Text style={styles._fees_title}>0 FTM ($2.98)</Text>
          </View>
          <View style={styles._fees_main}>
            <Text style={styles._fees_title}>Recipient Address</Text>
            <Text style={styles._fees_title}>8.00040000 BTC ($2.98</Text>
          </View>
        </ScrollView>
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
    backgroundColor: colors.white,
    marginVertical: 40,
    borderRadius: 30,
    paddingVertical: 20,
  },
  _heading: {
    color: colors.black,
    fontSize: 20,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
  },
  _icon_main: {
    alignSelf: "center",
  },
  _rec_price: {
    color: colors.black,
    fontSize: 18,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
  },
  _btn_main: {
    marginTop: 20,
    marginHorizontal: 20,
  },
  _btc_t_main: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 20,
    marginHorizontal: 20,
  },
  _btc_t_title: {
    color: colors.black,
    fontSize: 15,
    fontFamily: "Roboto-Regular",
  },
  _line: {
    height: 1,
    backgroundColor: colors.gray,
    flex: 1,
    marginTop: 30,
    marginBottom: 10,
  },
  _fees_main: {
    marginHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 10,
  },
  _fees_title: {
    color: colors.black,
    fontSize: 13,
    fontFamily: "Roboto-Regular",
  },
});
export default Complete;
