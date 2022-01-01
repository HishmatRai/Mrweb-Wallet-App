import React from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  Text,
  TouchableOpacity,
} from "react-native";
import colors from "./../../../../colors";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import Button from "./../../components/button";
let Send = (props) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles._header_main}>
        <TouchableOpacity
          style={styles._back_btn}
          onPress={() => props.navigation.goBack()}
        >
          <Ionicons name="arrow-back" size={24} color={colors.white} />
        </TouchableOpacity>
        <Text style={styles._heading}>Send AMA (TRC30)</Text>
        <TouchableOpacity>
          <Text style={styles._done}>Next</Text>
        </TouchableOpacity>
      </View>
      <View style={styles._card_main}>
        <Text style={styles._card_heading}>Recipient Address</Text>
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
        <Text style={styles._card_heading}>AMA</Text>
        <View style={styles._paste_main}>
          <Text style={styles._paste}>Max</Text>
          <Text style={styles._paste2}>AMA</Text>
        </View>
      </View>
      <View style={styles._btn_main}>
        <Button
          ButtonBgColor="#6CBBF2"
          ButtonRadious={50}
          ButtonText="Next"
          // onPress={() => props.navigation.navigate("RecoveryVerify")}
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
export default Send;
