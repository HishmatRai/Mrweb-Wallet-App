import React from "react";
import { View, Text, StyleSheet } from "react-native";
import colors from "../../../../colors";
import MrWeb from "./../../../assets/images/walletCard/Mrweb.svg";
import Btc from "./../../../assets/images/walletCard/Btc.svg";
let WalletCard = () => {
  let CardData = [
    {
      icon: <MrWeb width={50} height={50} fill={colors.white} />,
      heading: "Mrweb(AMA)",
      price: "$23,76.98+4.23%",
      title: "AMA",
    },
    {
        icon: <Btc width={50} height={50} fill={colors.white} />,
        heading: "Mrweb(AMA)",
        price: "$23,76.98+4.23%",
        title: "AMA",
      },
  ];
  return (
    <View>
      {CardData.map((v, i) => {
        return (
          <View style={styles._card_main} key={i}>
            <View style={styles._icon_main}>
              {v.icon}
              <View style={styles._card_data_main}>
                <Text style={styles._card_heading}>{v.heading}</Text>
                <Text style={styles._card_price}>{v.price}</Text>
              </View>
            </View>
            <View>
              <Text style={styles._card_title}>{v.title}</Text>
            </View>
          </View>
        );
      })}
    </View>
  );
};
const styles = StyleSheet.create({
  _card_main: {
    marginHorizontal: 20,
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  _icon_main: {
    flexDirection: "row",
    alignItems: "center",
  },
  _card_data_main: {
    marginLeft: 10,
  },
  _card_heading: {
    color: colors.black,
    fontSize: 18,
    fontFamily: "Roboto-Regular",
  },
  _card_price: {
    color: colors.gray,
    fontSize: 11,
    fontFamily: "Roboto-Regular",
  },
  _card_title: {
    color: colors.black,
    fontSize: 18,
    fontFamily: "Roboto-Regular",
  },
});
export default WalletCard;
