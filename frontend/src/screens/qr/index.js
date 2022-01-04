import React from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  Text,
  TouchableOpacity,
  Share
} from "react-native";
import colors from "./../../../../colors";
import { Ionicons, Feather } from "@expo/vector-icons";
import QRCode from "react-native-qrcode-generator";
import Logo from "./../../../assets/images/Logo.svg";
import BuyIcon from "./../../../assets/images/Buy.svg";
let QrCodeS = (props) => {
    const onShare = async () => {
        try {
          const result = await Share.share({
            message:
              'React Native | A framework for building native apps using React',
          });
          if (result.action === Share.sharedAction) {
            if (result.activityType) {
              // shared with activity type of result.activityType
            } else {
              // shared
            }
          } else if (result.action === Share.dismissedAction) {
            // dismissed
          }
        } catch (error) {
          alert(error.message);
        }
      };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles._header_main}>
        <TouchableOpacity
          style={styles._back_btn}
          onPress={() => props.navigation.goBack()}
        >
          <Ionicons name="arrow-back" size={24} color={colors.white} />
        </TouchableOpacity>
        <Text style={styles._heading}>Receive AMA</Text>
        <TouchableOpacity  onPress={() => props.navigation.navigate("TabNavigation")}>
          <Text style={styles._done}>Done</Text>
        </TouchableOpacity>
      </View>
      <View style={styles._qr_main}>
        <Logo width={171} height={30} fill={colors.white} />
        <View style={{ marginTop: 20 }}>
          <QRCode
            value="https://github.com/HishmatRai"
            size={200}
            bgColor="black"
            fgColor="white"
          />
        </View>
        {/* <QrScaner /> */}
      </View>
      <Text style={styles._message}>
        It is a long established fact that a reader will be{"\n"}
        distracted by the readable content of a page when
      </Text>
      <View style={styles._btns_main}>
        <View style={styles._copy_main}>
          <TouchableOpacity style={styles._copy_btn}>
            <Ionicons name="ios-copy" size={34} color={colors.white} />
          </TouchableOpacity>
          <Text style={styles._copy_btn_text}>Cpoy</Text>
        </View>
        <View style={styles._copy_main}>
          <TouchableOpacity style={styles._copy_btn}>
            <BuyIcon width={34} height={34} fill={colors.white} />
          </TouchableOpacity>
          <Text style={styles._copy_btn_text}>Set Amount</Text>
        </View>
        <View style={styles._copy_main}>
          <TouchableOpacity style={styles._copy_btn} onPress={onShare}>
            <Feather name="upload" size={34} color={colors.white} />
          </TouchableOpacity>
          <Text style={styles._copy_btn_text}>Share</Text>
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
  _done: {
    color: "#5ADCB9",
    fontSize: 18,
    fontFamily: "Roboto-Medium",
  },
  _qr_main: {
    width: "80%",
    height: 300,
    backgroundColor: colors.white,
    alignSelf: "center",
    borderRadius: 20,
    marginTop: 40,
    alignItems: "center",
    padding: 10,
  },
  _message: {
    color: colors.white,
    fontSize: 14,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    marginTop: 20,
  },
  _copy_main: {
    // width: 61,
    alignItems: "center",
  },
  _copy_btn: {
    width: 61,
    height: 61,
    borderRadius: 61 / 2,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#0C6BFF",
  },
  _copy_btn_text: {
    color: colors.white,
    fontSize: 18,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
  },
  _btns_main: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    paddingHorizontal: 20,
    marginTop: 20,
  },
});
export default QrCodeS;
