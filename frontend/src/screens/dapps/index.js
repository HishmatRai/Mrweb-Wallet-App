import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
let Dapps = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Wallet</Text>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "green",
  },
});
export default Dapps;
