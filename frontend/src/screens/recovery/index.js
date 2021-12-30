import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import colors from "./../../../../colors";
import Button from "./../../components/button";
let Recovery = (props) => {
  let List = [
    { title: "1 vacuum" },
    { title: "2 paddle" },
    { title: "3 task" },
    { title: "4 symble" },
    { title: "5 brave" },
    { title: "6 parrot" },
    { title: "7 admit" },
    { title: "8 tent" },
    { title: "9 camp" },
    { title: "10 garage" },
    { title: "11 rich" },
    { title: "12 second" },
  ];
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles._data_main}>
        <View>
          <Text style={styles._heading}>Your recovery phrase</Text>
          <Text style={styles._sub_heading}>
            In the next step you will see 14 words{"\n"}
            that allows you to recover a wallet
          </Text>
          <View style={styles._list_main}>
            {List.map((v, i) => {
              return (
                <TouchableOpacity key={i} style={styles._list}>
                  <Text style={styles._list_title}>{v.title}</Text>
                </TouchableOpacity>
              );
            })}
          </View>
          <TouchableOpacity style={styles._copy_btn}>
            <Text style={styles._copy_btn_text}>Copy</Text>
          </TouchableOpacity>
        </View>
        <View>
          <View style={styles._btn_main}>
            <Button
              ButtonBgColor={colors.continueButtonBg}
              ButtonRadious={10}
              ButtonText="Continue"
              onPress={() =>props.navigation.navigate("RecoveryVerify")}
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
  _btn_main: {
    marginTop: 30,
  },
  _list_main: {
    flexDirection: "row",
    marginTop: 20,
    alignSelf: "center",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  _list: {
    borderColor: colors.white,
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 5,
    paddingVertical: 3,
    marginTop: 15,
    marginRight: 5,
  },
  _list_title: {
    color: colors.white,
    fontFamily: "Roboto-Medium",
    fontSize: 17,
  },
  _copy_btn: {
    alignSelf: "center",
    marginTop: 50,
  },
  _copy_btn_text: {
    color: colors.white,
    fontFamily: "Roboto-Medium",
    fontSize: 20,
  },
});
export default Recovery;
