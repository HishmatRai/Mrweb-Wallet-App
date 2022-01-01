import React from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  Text,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import colors from "./../../../../colors";
import {
  Ionicons,
  AntDesign,
  Entypo,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import Button from "./../../components/button";
import { LinearGradient } from "expo-linear-gradient";
import EthIcon from "./../../../assets/images/Eth.svg";
import BTC from "./../../../assets/images/BTC.svg";
let Swap = (props) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles._header_main}>
        <TouchableOpacity
          style={styles._back_btn}
          onPress={() => props.navigation.goBack()}
        >
          <Ionicons name="arrow-back" size={24} color={colors.white} />
        </TouchableOpacity>
        <Text style={styles._heading}>Swap</Text>
        <TouchableOpacity>
          <MaterialCommunityIcons
            name="cog-counterclockwise"
            size={24}
            color={colors.white}
          />
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ marginHorizontal: 20, paddingTop: 50 }}>
          <View>
            <LinearGradient
              end={[1.0, 0.5]}
              start={[0.0, 0.5]}
              locations={[0.0, 1.0]}
              colors={["#5ADCBA", "#8E8BFF"]}
              style={styles.buttonCircle}
            >
              <View style={styles._card_main}>
                <View>
                  <Text style={styles._card_title}>You Send</Text>
                  <Text style={styles._point}>12.67</Text>
                </View>
                <View style={styles._icon_main}>
                  <EthIcon width={38} height={38} fill={colors.blue} />
                  <Text style={styles._eth_title}>ETH</Text>
                  <Entypo name="chevron-down" size={24} color={colors.white} />
                </View>
              </View>
            </LinearGradient>
            <LinearGradient
              end={[1.0, 0.5]}
              start={[0.0, 0.5]}
              locations={[0.0, 1.0]}
              colors={["#5ADCBA", "#8E8BFF"]}
              style={styles.buttonCircle}
            >
              <View style={styles._card_main}>
                <View>
                  <Text style={styles._card_title}>You Get</Text>
                  <Text style={styles._point}>0.16743</Text>
                </View>
                <View style={styles._icon_main}>
                  <BTC width={38} height={38} fill={colors.blue} />
                  <Text style={styles._eth_title}>BTC</Text>
                  <Entypo name="chevron-down" size={24} color={colors.white} />
                </View>
              </View>
            </LinearGradient>
            <View style={styles._donw_btn}>
              <AntDesign name="arrowdown" size={24} color={colors.white} />
            </View>
          </View>
        </View>
        <View style={styles._send_main}>
          <View>
            <Text style={styles._card_title}>You have</Text>
            <Text style={styles._point}>2 ETH</Text>
          </View>
          <TouchableOpacity style={styles._send_btn}>
            <Text style={styles._send_btn_text}>SEND ALL</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles._fees}>Network fee</Text>
        <View style={styles._price_main}>
          <View style={{ flexDirection: "row" }}>
            <Text style={styles._point}>28.16743</Text>
            <Text style={styles._price_ttile}>ETH</Text>
          </View>
          <Text style={styles._usd}>1 USD</Text>
        </View>
        <Text style={styles._message}>
          The minimum amount for exchange is{"\n"}
          o.456000 ETH
        </Text>
        <View style={styles._btn_main}>
          <Button
            ButtonBgColor="#6CBBF2"
            ButtonRadious={50}
            ButtonText="Swap"
            onPress={() => props.navigation.navigate("Transfer")}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  _header_main: {
    marginHorizontal: 20,
    marginTop: 20,
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  _btn_main: {
    marginHorizontal: 20,
    marginTop: 30,
  },
  _heading: {
    color: colors.white,
    fontSize: 23,
    fontFamily: "Roboto-Bold",
  },
  buttonCircle: {
    borderRadius: 5,
    padding: 20,
    marginTop: 10,
  },
  _card_main: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  _card_title: {
    color: colors.white,
    fontSize: 14,
    fontFamily: "Roboto-Medium",
  },
  _point: {
    color: colors.white,
    fontSize: 24,
    fontFamily: "Roboto-Medium",
  },
  _icon_main: {
    flexDirection: "row",
    alignItems: "center",
  },
  _eth_title: {
    color: colors.white,
    fontSize: 18,
    fontFamily: "Roboto-Medium",
    marginHorizontal: 5,
  },
  _donw_btn: {
    width: 48,
    height: 48,
    borderRadius: 48 / 2,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#6C63FF",
    position: "absolute",
    bottom: 0,
    alignSelf: "center",
    top: 70,
  },
  _send_main: {
    marginHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 30,
  },
  _send_btn: {
    borderWidth: 1,
    borderColor: colors.white,
    height: 34,
    width: 108,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  _send_btn_text: {
    color: colors.white,
    fontSize: 18,
    fontFamily: "Roboto-Medium",
  },
  _fees: {
    color: colors.white,
    fontSize: 14,
    fontFamily: "Roboto-Medium",
    marginHorizontal: 20,
    marginTop: 20,
  },
  _price_main: {
    marginHorizontal: 20,
    marginTop: 5,
    width: "40%",
    alignItems: "center",
  },
  _price_ttile: {
    color: colors.gray,
    fontSize: 24,
    fontFamily: "Roboto-Medium",
    marginLeft: 5,
  },
  _usd: {
    color: colors.gray,
    fontSize: 24,
    fontFamily: "Roboto-Medium",
    textAlign: "center",
  },
  _message: {
    color: colors.passwordColor,
    fontSize: 14,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    marginTop: 20,
  },
});
export default Swap;
