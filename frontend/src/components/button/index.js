import React from "react";
import {
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import colors from "./../../../../colors";
let Button = (props) => {
  return (
    <TouchableOpacity
      style={[
        styles.btn_main,
        {
          backgroundColor: props.ButtonBgColor,
          borderRadius: props.ButtonRadious,
        },
      ]}
      onPress={props.onPress}
    >
      <Text style={styles._btn_text}>{props.ButtonText}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  btn_main: {
    height: 61,
    alignItems: "center",
    justifyContent: "center",
    width:"100%"
  },
  _btn_text: {
    color: colors.white,
    fontSize: 24,
    fontFamily: "Roboto-Medium",
  },
});
export default Button;
