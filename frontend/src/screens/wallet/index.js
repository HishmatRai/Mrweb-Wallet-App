import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Modal,
  TouchableOpacity,
} from "react-native";
import colors from "./../../../../colors";
import PopupImage from "./../../../assets/images/PopupImage.svg";
import { Ionicons } from "@expo/vector-icons";

import NotificationsIcon from "./../../../assets/images/Notificaion.svg";
import MenuIcon from "./../../../assets/images/Menu.svg";
import SendIcon from "./../../../assets/images/SendIcon.svg";
import ReceiveIcon from "./../../../assets/images/Receive.svg";
import BuyIcon from "./../../../assets/images/Buy.svg";
import SwapIcon from "./../../../assets/images/Swap.svg";

import WalletCard from "./../../components/walletCard";
let Wallet = (props) => {
  const [modalVisible, setModalVisible] = React.useState(true);
  setTimeout(() => {
    setModalVisible(false);
  }, 5000);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles._header_main}>
        <TouchableOpacity>
          <NotificationsIcon width={26} height={26} fill={colors.primary} />
        </TouchableOpacity>
        <Text style={styles._price}>$3.07</Text>
        <TouchableOpacity>
          <MenuIcon width={26} height={26} fill={colors.primary} />
        </TouchableOpacity>
      </View>
      <Text style={styles._header_title}>Multi-Coin Wallet 2</Text>

      <View style={styles._header_btn_main}>
        <View style={styles.__btn_main}>
          <TouchableOpacity style={styles._send_btn}>
            <SendIcon width={33} height={31} fill={colors.primary} />
          </TouchableOpacity>
          <Text style={styles._send_btn_text}>Send</Text>
        </View>
        <View style={styles.__btn_main}>
          <TouchableOpacity style={styles._send_btn}>
            <ReceiveIcon width={33} height={31} fill={colors.primary} />
          </TouchableOpacity>
          <Text style={styles._send_btn_text}>Receive</Text>
        </View>
        <View style={styles.__btn_main}>
          <TouchableOpacity style={styles._send_btn}>
            <BuyIcon width={33} height={31} fill={colors.primary} />
          </TouchableOpacity>
          <Text style={styles._send_btn_text}>Buy</Text>
        </View>
        <View style={styles.__btn_main}>
          <TouchableOpacity style={styles._send_btn}>
            <SwapIcon width={33} height={31} fill={colors.primary} />
          </TouchableOpacity>
          <Text style={styles._send_btn_text}>Swap</Text>
        </View>
      </View>
      <View style={styles._data_main}>
        <View style={styles._data_heading_main}>
          <View style={styles._active_tab_main}>
            <Text style={styles._active_tab_title}>A MA</Text>
          </View>
          <View style={styles._tab_main}>
            <Text style={styles._tab_title}>NFTs</Text>
          </View>
        </View>
        <WalletCard />
      </View>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <PopupImage width={193} height={193} fill={colors.primary} />
            <Text style={styles.modalText}>Congratulations</Text>
            <Text style={styles._message}>
              Create Wallet we have Seccessfully!
            </Text>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: colors.white,
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    color: colors.passwordColor,
    fontSize: 27,
    fontFamily: "Roboto-Bold",
    marginTop: 20,
  },
  _message: {
    color: colors.black,
    fontSize: 16,
    fontFamily: "Roboto-Regular",
    marginTop: 28,
  },
  _price: {
    color: colors.white,
    fontSize: 27,
    fontFamily: "Roboto-Medium",
  },
  _header_main: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 20,
    paddingHorizontal: 20,
  },
  _header_title: {
    color: colors.white,
    fontSize: 17,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    marginTop: 30,
  },
  _send_btn: {
    backgroundColor: "#8E8BFF6E",
    width: 52,
    height: 52,
    borderRadius: 52 / 2,
    alignItems: "center",
    justifyContent: "center",
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
  _header_btn_main: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    justifyContent: "space-around",
    marginTop: 20,
  },
  _data_main: {
    backgroundColor: colors.white,
    flex: 1,
    marginTop: 30,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingTop: 10,
  },
  _data_heading_main: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  _active_tab_main: {
    borderBottomWidth: 1,
    borderBottomColor: colors.primary,
    width: "30%",
    alignItems: "center",
    paddingBottom: 10,
  },
  _active_tab_title: {
    color: colors.black,
    fontSize: 18,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
  },
  _tab_main: {
    borderBottomWidth: 1,
    borderBottomColor: colors.white,
    width: "30%",
    alignItems: "center",
    paddingBottom: 10,
  },
  _tab_title: {
    color: colors.black,
    fontSize: 18,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
  },
});
export default Wallet;
