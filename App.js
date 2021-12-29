import React from "react";
import Navigation from "./frontend/src/navigation";
import AppLoading from "expo-app-loading";
import { SafeAreaView, StatusBar, StyleSheet } from "react-native";
import colors from "./colors";
import { useFonts } from "expo-font";
let App = (props) => {
  let [fontsLoaded] = useFonts({
    "Roboto-Bold": require("./frontend/assets/fonts/Roboto-Bold.ttf"),
    "Roboto-Regular": require("./frontend/assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Medium": require("./frontend/assets/fonts/Roboto-Medium.ttf"),
  });
  if (!fontsLoaded) {
    return (
      <SafeAreaView style={styles.container}>
        <AppLoading />
        <StatusBar
          barStyle="light-content"
          hidden={false}
          backgroundColor={colors.primary}
          translucent={false}
        />
      </SafeAreaView>
    );
  } else {
    return (
      <SafeAreaView style={styles.container}>
        <Navigation />
        <StatusBar
          barStyle="light-content"
          hidden={false}
          backgroundColor={colors.primary}
          translucent={false}
        />
      </SafeAreaView>
    );
  }
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
});

export default App;
