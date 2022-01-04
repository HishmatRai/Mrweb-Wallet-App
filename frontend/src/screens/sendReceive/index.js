import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import colors from "./../../../../colors";
import SendIcon from "./../../../assets/images/SendIcon.svg";
import ReceiveIcon from "./../../../assets/images/Receive.svg";
let SendReceive = (props) => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Image
          source={require("./../../../assets/images/logo3.png")}
          style={styles._logo}
        />
        <Text style={styles._price}>0 AMA</Text>
      </View>
      <View style={styles._header_main}>
        <View style={styles.__btn_main}>
          <TouchableOpacity
            style={styles._send_btn}
            onPress={() => props.navigation.navigate("Send")}
          >
            <SendIcon width={33} height={31} fill={colors.primary} />
          </TouchableOpacity>
          <Text style={styles._send_btn_text}>Send</Text>
        </View>
        <View style={styles.__btn_main}>
          <TouchableOpacity
            style={styles._send_btn}
            onPress={() => props.navigation.navigate("QrCode")}
          >
            <ReceiveIcon width={33} height={31} fill={colors.primary} />
          </TouchableOpacity>
          <Text style={styles._send_btn_text}>Receive</Text>
        </View>
      </View>
      <View style={styles._line} />
      <View style={styles._show}>
        <Image
          source={require("./../../../assets/images/money-transfer.png")}
          style={styles.transfer}
        />
        <Text style={styles.Transactions}>Transactions will apear here</Text>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  _send_btn: {
    backgroundColor: "#6CBBF2",
    width: 52,
    height: 52,
    borderRadius: 52 / 2,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 10,
  },
  _send_btn_text: {
    color: colors.white,
    fontSize: 17,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
  },
  __btn_main: {
    alignItems: "center",
  },
  _header_main: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  _logo: {
    width: 80,
    height: 80,
    borderRadius: 80 / 2,
    alignSelf: "center",
    marginTop: 30,
  },
  _price: {
    color: colors.white,
    fontSize: 25,
    fontFamily: "Roboto-Bold",
    textAlign: "center",
    marginTop: 5,
  },
  _line: {
    backgroundColor: colors.gray,
    height: 1,
    width: "100%",
    marginVertical: 20,
  },
  _show: {
    flex: 1,
  },
  transfer: {
    width: 150,
    height: 150,
    alignSelf: "center",
  },
  Transactions: {
    color: colors.white,
    fontSize: 18,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    marginTop: 10,
  },
});
export default SendReceive;
