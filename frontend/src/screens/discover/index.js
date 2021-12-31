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

import Bnb from "./../../../assets/images/discover/Bnb.svg";
import Kava from "./../../../assets/images/discover/Kava.svg";
import Cosmos from "./../../../assets/images/discover/Cosmos.svg";
import Sushi from "./../../../assets/images/discover/Sushi.svg";
import THORChain from "./../../../assets/images/discover/THORChain.svg";
import Aave from "./../../../assets/images/discover/Aave.svg";

let Discover = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles._heading}>Discover</Text>
      <View style={styles._data_main}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles._header_main}>
            <TouchableOpacity>
              <Text style={styles._header_title}>Staking</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles._header_title}>More</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles._card_main}>
            <View style={styles._card_icon_main}>
              <Bnb width={38} height={38} fill={colors.white} />
              <View style={styles._card_title_main}>
                <Text style={styles._card_title}>BNB (BNB)</Text>
                <Text style={styles._card_sub_title}>$23,76.98+4.23%</Text>
              </View>
            </View>
          </TouchableOpacity>
          <View style={styles._line} />
          <TouchableOpacity style={styles._card_main}>
            <View style={styles._card_icon_main}>
              <Kava width={38} height={38} fill={colors.white} />
              <View style={styles._card_title_main}>
                <Text style={styles._card_title}>Kava (KAVA)</Text>
                <Text style={styles._card_sub_title}>$23,76.98+4.23%</Text>
              </View>
            </View>
          </TouchableOpacity>
          <View style={styles._line} />
          <TouchableOpacity style={styles._card_main}>
            <View style={styles._card_icon_main}>
              <Cosmos width={38} height={38} fill={colors.white} />
              <View style={styles._card_title_main}>
                <Text style={styles._card_title}>Cosmos (ATOM)</Text>
                <Text style={styles._card_sub_title}>$23,76.98+4.23%</Text>
              </View>
            </View>
          </TouchableOpacity>
          <View style={styles._line} />
          <View style={styles._header_main}>
            <TouchableOpacity>
              <Text style={styles._header_title}>Defi AMA</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles._header_title}>More</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles._card_main}>
            <View style={styles._card_icon_main}>
              <Sushi width={38} height={38} fill={colors.white} />
              <View style={styles._card_title_main}>
                <Text style={styles._card_title}>Sushi (SUSHI)</Text>
              </View>
            </View>
            <View>
              <Text style={styles._price}>$5.23</Text>
              <Text style={styles._price}>+24.5%</Text>
            </View>
          </TouchableOpacity>
          <View style={styles._line} />
          <TouchableOpacity style={styles._card_main}>
            <View style={styles._card_icon_main}>
              <THORChain width={38} height={38} fill={colors.white} />
              <View style={styles._card_title_main}>
                <Text style={styles._card_title}>THORChain (RUNE)</Text>
              </View>
            </View>
            <View>
              <Text style={styles._price}>$5.23</Text>
              <Text style={styles._price}>+24.5%</Text>
            </View>
          </TouchableOpacity>
          <View style={styles._line} />
          <TouchableOpacity style={styles._card_main}>
            <View style={styles._card_icon_main}>
              <Aave width={38} height={38} fill={colors.white} />
              <View style={styles._card_title_main}>
                <Text style={styles._card_title}>Aave (AAVE)</Text>
              </View>
            </View>
            <View>
              <Text style={styles._price}>$5.23</Text>
              <Text style={styles._price}>+24.5%</Text>
            </View>
          </TouchableOpacity>
          <View style={styles._line} />
          <View style={styles._header_main}>
            <TouchableOpacity>
              <Text style={styles._header_title}>Defi AMA</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles._header_title}>More</Text>
            </TouchableOpacity>
          </View>
          <View style={{ paddingBottom: 20 }} />
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
  _card_main: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 20,
    marginTop: 20,
  },
  _card_icon_main: {
    flexDirection: "row",
    alignItems: "center",
  },
  _card_title: {
    color: colors.black,
    fontSize: 18,
    fontFamily: "Roboto-Regular",
  },
  _card_sub_title: {
    color: colors.gray,
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    marginTop: 3,
  },
  _card_title_main: {
    marginLeft: 10,
  },
  _line: {
    height: 1,
    backgroundColor: colors.gray,
    marginTop: 20,
  },
  _community: {
    marginHorizontal: 20,
    marginTop: 20,
    color: colors.blue,
    fontSize: 14,
    fontFamily: "Roboto-Regular",
  },
  _header_main: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 20,
    marginTop: 20,
  },
  _header_title: {
    color: colors.blue,
    fontSize: 18,
    fontFamily: "Roboto-Regular",
  },
  _price: {
    color: colors.black,
    fontSize: 14,
    fontFamily: "Roboto-Regular",
  },
});
export default Discover;
