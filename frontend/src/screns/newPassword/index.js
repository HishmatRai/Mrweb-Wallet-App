import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import ReactNativePinView from "react-native-pin-view";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import colors from "../../../../colors";
function NewPassword(props) {
  const pinView = useRef(null);
  const [showRemoveButton, setShowRemoveButton] = useState(false);
  const [enteredPin, setEnteredPin] = useState("");
  const [showCompletedButton, setShowCompletedButton] = useState(false);
  useEffect(() => {
    if (enteredPin.length > 0) {
      setShowRemoveButton(true);
    } else {
      setShowRemoveButton(false);
    }
    if (enteredPin.length === 4) {
      setShowCompletedButton(true);
      //   props.navigation.navigate("CreatePinConfirm");
    } else {
      setShowCompletedButton(false);
    }
  }, [enteredPin]);
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles._title}>Enter a new password</Text>
      <View style={styles._input_main}>
        <ReactNativePinView
          inputSize={18}
          ref={pinView}
          pinLength={6}
          buttonSize={60}
          onValueChange={(value) => setEnteredPin(value)}
          buttonAreaStyle={{
            marginTop: 50,
          }}
          inputAreaStyle={{
            marginBottom: 24,
          }}
          inputViewEmptyStyle={{
            borderWidth: 1,
            borderColor: colors.passwordColor,
            backgroundColor: colors.primary,
          }}
          inputViewFilledStyle={{
            backgroundColor: colors.passwordColor,
          }}
          buttonViewStyle={{
            borderWidth: 1,
            borderColor: colors.white,
            width: 50,
            height: 50,
          }}
          buttonTextStyle={{
            color: colors.white,
          }}
          onButtonPress={(key) => {
            if (key === "custom_left") {
              pinView.current.clear();
            }
            if (key === "custom_right") {
              alert("Entered Pin: " + enteredPin);
            }
            if (key === "three") {
              alert("You can't use 3");
            }
          }}
          customLeftButton={
            showRemoveButton ? (
              <MaterialCommunityIcons
                name="backspace-outline"
                size={20}
                color={colors.white}
              />
            ) : undefined
          }
          customRightButton={
            showCompletedButton ? (
              <Entypo name="lock" size={20} color={colors.white} />
            ) : undefined
          }
        />
      </View>
      <Text style={styles._message}>
        Passcode adds an extra layer of security when using the app
      </Text>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  _title: {
    color: colors.white,
    fontSize: 24,
    marginHorizontal: 20,
    textAlign: "center",
    fontFamily: "Roboto-Regular",
    marginTop: 60,
  },
  _input_main: {
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "flex-end",
    paddingBottom: 10,
    marginTop: 100,
  },
  _message: {
    color: colors.white,
    fontSize: 16,
    marginHorizontal: 20,
    textAlign: "center",
    fontFamily: "Roboto-Regular",
    marginTop: 20,
  },
});
export default NewPassword;
