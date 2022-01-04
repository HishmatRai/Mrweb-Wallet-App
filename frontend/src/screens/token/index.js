import React from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  Text,
  TouchableOpacity,
} from "react-native";
import colors from "./../../../../colors";
import { Ionicons, MaterialCommunityIcons,Entypo } from "@expo/vector-icons";
import Button from "./../../components/button";
let Token = (props) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles._header_main}>
        <TouchableOpacity
          style={styles._back_btn}
          onPress={() => props.navigation.goBack()}
        >
          <Ionicons name="arrow-back" size={24} color={colors.white} />
        </TouchableOpacity>
        <Text style={styles._heading}>Add Custom Token</Text>
        <TouchableOpacity onPress={() => props.navigation.navigate("TabNavigation")}>
          <Text style={styles._done}>Save</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles._card_main}>
        <Text style={styles._card_heading}>Network</Text>
        <View style={styles._paste_main}>
          <Text style={styles._paste}>Ethereum</Text>
          <Entypo name="chevron-right" size={24}   color={colors.blue} />
        </View>
      </TouchableOpacity>
      <View style={styles._card_main}>
        <Text style={styles._card_heading}>Contract Address</Text>
        <View style={styles._paste_main}>
          <Text style={styles._paste}>Paste</Text>
          <MaterialCommunityIcons
            name="credit-card-scan-outline"
            size={14}
            color={colors.blue}
          />
        </View>
      </View>
      <View style={styles._card_main}>
        <Text style={styles._card_heading}>Name</Text>
      </View>
      <View style={styles._card_main}>
        <Text style={styles._card_heading}>Symbol</Text>
      </View>
      <View style={styles._card_main}>
        <Text style={styles._card_heading}>Decimals</Text>
      </View>
      <View style={styles._btn_main}>
        <Button
          ButtonBgColor="#6CBBF2"
          ButtonRadious={50}
          ButtonText="Save"
          onPress={() => props.navigation.navigate("TabNavigation")}
        />
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
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 30,
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
  _card_main: {
    backgroundColor: colors.white,
    marginHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 54,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginTop: 10,
  },
  _card_heading: {
    color: colors.gray,
    fontSize: 15,
    fontFamily: "Roboto-Regular",
  },
  _paste_main: {
    flexDirection: "row",
    alignItems: "center",
  },
  _paste: {
    color: colors.blue,
    fontSize: 15,
    fontFamily: "Roboto-Regular",
    marginRight: 10,
  },
  _paste2: {
    color: colors.blue,
    fontSize: 15,
    fontFamily: "Roboto-Regular",
  },
  _btn_main: {
    marginTop: 150,
    marginHorizontal: 20,
  },
});
export default Token;
