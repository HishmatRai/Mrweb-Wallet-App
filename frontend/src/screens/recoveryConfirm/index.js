import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import colors from "./../../../../colors";
import RecoveryConfirmIcon from "./../../../assets/images/svg/RecoveryConfirm.svg";
import Button from "./../../components/button";
import { MaterialCommunityIcons } from "@expo/vector-icons";
let RecoveryConfirm = (props) => {
  let [check, setCheck] = React.useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles._data_main}>
        <View>
          <Text style={styles._heading}>Back up your wallet now!</Text>
          <Text style={styles._sub_heading}>
            In the next step you will see 14 words {"\n"}that allows you to
            recover a wallet
          </Text>
        </View>
        <View style={{ alignSelf: "center" }}>
          <RecoveryConfirmIcon width={202} height={191} fill={"#BCD1F3"} />
        </View>
        <View>
          <View style={styles._check_main}>
            {!check ? (
              <TouchableOpacity
                style={styles._uncheck}
                onPress={() => setCheck(!check)}
              >
                <MaterialCommunityIcons
                  name="check-bold"
                  size={24}
                  color={colors.white}
                />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={styles._check}
                onPress={() => setCheck(!check)}
              >
                <MaterialCommunityIcons
                  name="check-bold"
                  size={24}
                  color={colors.white}
                />
              </TouchableOpacity>
            )}
            <Text style={styles._message}>
              I understand that if I lose my recover words, I will not be able
              to acces my wallet
            </Text>
          </View>
          <View style={styles._btn_main}>
            <Button
              ButtonBgColor={colors.continueButtonBg}
              ButtonRadious={10}
              ButtonText="Continue"
              onPress={() => props.navigation.navigate("Recovery")}
            />
          </View>
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
    paddingHorizontal: 20,
    flexDirection: "column",
    justifyContent: "space-between",
    paddingVertical: 30,
  },
  _heading: {
    color: colors.white,
    fontFamily: "Roboto-Medium",
    fontSize: 28,
    textAlign: "center",
  },
  _sub_heading: {
    color: colors.white,
    fontFamily: "Roboto-Medium",
    fontSize: 17,
    textAlign: "center",
  },
  _uncheck: {
    width: 24,
    height: 24,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.white,
  },
  _check: {
    width: 24,
    height: 24,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#6960F1",
  },
  _check_main: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  _message: {
    color: colors.white,
    fontFamily: "Roboto-Medium",
    fontSize: 17,
    width: "90%",
    marginLeft: 5,
  },
  _btn_main: {
    marginTop: 30,
  },
});
export default RecoveryConfirm;
