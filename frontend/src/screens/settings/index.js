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
let Settings = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles._heading}>Settings</Text>
      <View style={styles._data_main}>
        <ScrollView>
          <TouchableOpacity>
            <View>
              <Text>Wallets</Text>
              <Text>Multi-coin wallet 2</Text>
            </View>
          </TouchableOpacity>
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
});
export default Settings;
