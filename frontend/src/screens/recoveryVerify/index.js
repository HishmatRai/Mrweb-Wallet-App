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
let RecoveryVerify = (props) => {
  let List = [
    { title: "escape" },
    { title: "person" },
    { title: "culture" },
    { title: "raise" },
    { title: "quarter" },
    { title: "truth" },
    { title: "bus" },
    { title: "jazz" },
    { title: "cricket" },
    { title: "scorpion" },
  ];
  let ListSelected = [{ title: "1 vacuum" }, { title: "2 paddle" }];
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles._data_main}>
        <View>
          <Text style={styles._heading}>Verify recovery phrase</Text>
          <Text style={styles._sub_heading}>
            In the next step you will see 14 words{"\n"}
            that allows you to recover a wallet
          </Text>
          <View style={styles._selected_main}>
            {ListSelected.map((v, i) => {
              return (
                <TouchableOpacity key={i} style={styles._list_selected}>
                  <Text style={styles._list_selected_title}>{v.title}</Text>
                </TouchableOpacity>
              );
            })}
          </View>
          <View style={styles._list_main}>
            {List.map((v, i) => {
              return (
                <TouchableOpacity key={i} style={styles._list}>
                  <Text style={styles._list_title}>{v.title}</Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
        <View>
          <View style={styles._btn_main}>
            <Button
              ButtonBgColor={colors.continueButtonBg}
              ButtonRadious={10}
              ButtonText="Done"
              onPress={() => props.navigation.navigate("TabNavigation")}
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
    flexDirection: "column",
    justifyContent: "space-between",
    paddingVertical: 30,
  },
  _heading: {
    color: colors.white,
    fontFamily: "Roboto-Medium",
    fontSize: 28,
    textAlign: "center",
    paddingHorizontal: 20,
  },
  _sub_heading: {
    color: colors.white,
    fontFamily: "Roboto-Medium",
    fontSize: 17,
    textAlign: "center",
    paddingHorizontal: 20,
  },
  _btn_main: {
    marginTop: 30,
    paddingHorizontal: 20,
  },
  _list_main: {
    flexDirection: "row",
    marginTop: 20,
    alignSelf: "center",
    justifyContent: "center",
    flexWrap: "wrap",
    paddingHorizontal: 20,
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
  _selected_main: {
    backgroundColor: colors.dotColor,
    flexDirection: "row",
    marginTop: 30,
    alignSelf: "center",
    justifyContent: "flex-start",
    flexWrap: "wrap",
    paddingHorizontal: 20,
    width: "100%",
    height: 137,
  },
  _list_selected: {
    backgroundColor: colors.white,
    paddingHorizontal: 10,
    borderRadius: 5,
    paddingVertical: 3,
    marginRight: 5,
    marginTop: 10,
  },
  _list_selected_title: {
    color: colors.gray,
    fontFamily: "Roboto-Medium",
    fontSize: 17,
  },
});
export default RecoveryVerify;
