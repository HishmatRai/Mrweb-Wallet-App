import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import colors from "./../../../../colors";
import { Feather } from "@expo/vector-icons";
import ToggleSwitch from "toggle-switch-react-native";

import WallersIcon from "./../../../assets/images/settings/Wallets.svg";
import DardMode from "./../../../assets/images/settings/DardMode.svg";
import Security from "./../../../assets/images/settings/Security.svg";
import PushNotifications from "./../../../assets/images/settings/PushNotifications.svg";
import Preferences from "./../../../assets/images/settings/Preferences.svg";
import PriceAlerts from "./../../../assets/images/settings/PriceAlerts.svg";
import WalletConnect from "./../../../assets/images/settings/walletConnect.svg";
import HelpCenter from "./../../../assets/images/settings/HelpCenter.svg";
import Twitter from "./../../../assets/images/settings/Twitter.svg";
import Facebook from "./../../../assets/images/settings/Facebook.svg";

let Settings = () => {
  const [toggle, setToggle] = React.useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles._heading}>Settings</Text>
      <View style={styles._data_main}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <TouchableOpacity style={styles._card_main}>
            <View style={styles._card_icon_main}>
              <WallersIcon width={31} height={31} fill={colors.white} />
              <View style={styles._card_title_main}>
                <Text style={styles._card_title}>Wallets</Text>
                <Text style={styles._card_sub_title}>Multi-coin wallet 2</Text>
              </View>
            </View>
            <Feather name="chevron-right" size={24} color={colors.gray} />
          </TouchableOpacity>
          <View style={styles._line} />
          <TouchableOpacity style={styles._card_main}>
            <View style={styles._card_icon_main}>
              <DardMode width={31} height={31} fill={colors.white} />
              <View style={styles._card_title_main}>
                <Text style={styles._card_title}>Dark Mode</Text>
              </View>
            </View>
            <ToggleSwitch
              isOn={toggle}
              onColor="#85848B"
              offColor="#85848B"
              labelStyle={{
                color: "black",
                fontWeight: "900",
                backgroundColor: "#4788ED",
              }}
              style={
                {
                  // borderWidth: 2,
                  // borderColor: "black",
                  // borderRadius: 30,
                }
              }
              thumbOffStyle={{
                backgroundColor: "#C4C4C4",
              }}
              thumbOnStyle={{
                backgroundColor: colors.primary,
              }}
              size="medium"
              onToggle={(isOn) => setToggle(!toggle)}
            />
          </TouchableOpacity>
          <View style={styles._line} />
          <TouchableOpacity style={styles._card_main}>
            <View style={styles._card_icon_main}>
              <Security width={31} height={31} fill={colors.white} />
              <View style={styles._card_title_main}>
                <Text style={styles._card_title}>Security</Text>
              </View>
            </View>
            <Feather name="chevron-right" size={24} color={colors.gray} />
          </TouchableOpacity>
          <TouchableOpacity style={styles._card_main}>
            <View style={styles._card_icon_main}>
              <PushNotifications width={31} height={31} fill={colors.white} />
              <View style={styles._card_title_main}>
                <Text style={styles._card_title}>Push Notifications</Text>
              </View>
            </View>
            <Feather name="chevron-right" size={24} color={colors.gray} />
          </TouchableOpacity>
          <TouchableOpacity style={styles._card_main}>
            <View style={styles._card_icon_main}>
              <Preferences width={31} height={31} fill={colors.white} />
              <View style={styles._card_title_main}>
                <Text style={styles._card_title}>Preferences</Text>
              </View>
            </View>
            <Feather name="chevron-right" size={24} color={colors.gray} />
          </TouchableOpacity>
          <View style={styles._line} />
          <TouchableOpacity style={styles._card_main}>
            <View style={styles._card_icon_main}>
              <PriceAlerts width={31} height={31} fill={colors.white} />
              <View style={styles._card_title_main}>
                <Text style={styles._card_title}>Price Alerts</Text>
              </View>
            </View>
            <Feather name="chevron-right" size={24} color={colors.gray} />
          </TouchableOpacity>
          <TouchableOpacity style={styles._card_main}>
            <View style={styles._card_icon_main}>
              <WalletConnect width={31} height={31} fill={colors.white} />
              <View style={styles._card_title_main}>
                <Text style={styles._card_title}>Wallet Connect</Text>
              </View>
            </View>
            <Feather name="chevron-right" size={24} color={colors.gray} />
          </TouchableOpacity>
          <View style={styles._line} />
          <Text style={styles._community}>Join Community</Text>
          <TouchableOpacity style={styles._card_main}>
            <View style={styles._card_icon_main}>
              <HelpCenter width={31} height={31} fill={colors.white} />
              <View style={styles._card_title_main}>
                <Text style={styles._card_title}>Help Center</Text>
              </View>
            </View>
            <Feather name="chevron-right" size={24} color={colors.gray} />
          </TouchableOpacity>
          <TouchableOpacity style={styles._card_main}>
            <View style={styles._card_icon_main}>
              <Twitter width={31} height={31} fill={colors.white} />
              <View style={styles._card_title_main}>
                <Text style={styles._card_title}>Twitter</Text>
              </View>
            </View>
            <Feather name="chevron-right" size={24} color={colors.gray} />
          </TouchableOpacity>
          <TouchableOpacity style={styles._card_main}>
            <View style={styles._card_icon_main}>
              <Facebook width={31} height={31} fill={colors.white} />
              <View style={styles._card_title_main}>
                <Text style={styles._card_title}>Facebook</Text>
              </View>
            </View>
            <Feather name="chevron-right" size={24} color={colors.gray} />
          </TouchableOpacity>

          <View style={{ paddingBottom: 20 }} />
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
  _heading: {
    color: colors.white,
    marginHorizontal: 20,
    marginTop: 20,
    fontSize: 28,
    fontFamily: "Roboto-Medium",
  },
  _data_main: {
    flex: 1,
    backgroundColor: colors.white,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: 20,
    paddingTop: 10,
  },
  _card_main: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 20,
    marginTop: 20,
  },
  _card_icon_main: {
    flexDirection: "row",
    alignItems: "center",
  },
  _card_title: {
    color: colors.black,
    fontSize: 16,
    fontFamily: "Roboto-Regular",
  },
  _card_sub_title: {
    color: colors.gray,
    fontSize: 9,
    fontFamily: "Roboto-Regular",
  },
  _card_title_main: {
    marginLeft: 10,
  },
  _line: {
    height: 1,
    backgroundColor: colors.gray,
    marginTop: 20,
  },
  _community:{
    marginHorizontal:20,
    marginTop:20,
    color:colors.blue,
    fontSize:14,
    fontFamily: "Roboto-Regular",
  }
});
export default Settings;
