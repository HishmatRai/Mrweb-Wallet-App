import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from "react-native";
import colors from "./../../../../colors";
import { Ionicons } from "@expo/vector-icons";

import Wazirx from "./../../../assets/images/dapps/Wazirx.svg";
import MCDEX from "./../../../assets/images/dapps/MCDEX.svg";
import Rfinable from "./../../../assets/images/dapps/Rfinable.svg";
import Venus from "./../../../assets/images/dapps/Venus.svg";
import Beefy from "./../../../assets/images/dapps/Beefy.svg";
import PancakeSwap from "./../../../assets/images/dapps/PancakeSwap.svg";

let Dapps = () => {
  const [search, setSearch] = React.useState("");

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles._input_main}>
        <Ionicons name="search" size={24} color={colors.gray} />
        <TextInput
          placeholder="Search"
          value={search}
          onChangeText={(search) => setSearch(search)}
          style={styles._input}
          underlineColor={colors.gray}
          placeholderTextColor={colors.gray}
        />
      </View>
      <View style={styles._data_main}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles._header_main}>
            <TouchableOpacity>
              <Text style={styles._header_title}>New Dapps</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles._header_title_active}>See All</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles._card_main}>
            <View style={styles._card_icon_main}>
              <Wazirx width={38} height={44} fill={colors.white} />
              <View style={styles._card_title_main}>
                <Text style={styles._card_title}>WazirX NFT</Text>
                <Text style={styles._card_sub_title}>
                  $Create & Collect Timeless NFTs. NFT Marketplace Made Simpler
                </Text>
              </View>
            </View>
          </TouchableOpacity>
          <View style={styles._line} />
          <TouchableOpacity style={styles._card_main}>
            <View style={styles._card_icon_main}>
              <MCDEX width={38} height={44} fill={colors.white} />
              <View style={styles._card_title_main}>
                <Text style={styles._card_title}>MCDEX</Text>
                <Text style={styles._card_sub_title}>
                  $Create & Collect Timeless NFTs. NFT Marketplace Made Simpler
                </Text>
              </View>
            </View>
          </TouchableOpacity>
          <View style={styles._line} />
          <TouchableOpacity style={styles._card_main}>
            <View style={styles._card_icon_main}>
              <Rfinable width={38} height={44} fill={colors.white} />
              <View style={styles._card_title_main}>
                <Text style={styles._card_title}>Rfinable</Text>
                <Text style={styles._card_sub_title}>
                  $Create & Collect Timeless NFTs. NFT Marketplace Made Simpler
                </Text>
              </View>
            </View>
          </TouchableOpacity>
          <View style={styles._line} />
          <View style={styles._header_main}>
            <TouchableOpacity>
              <Text style={styles._header_title}>DeFi</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles._header_title_active}>See All</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles._card_main}>
            <View style={styles._card_icon_main}>
              <Venus width={38} height={44} fill={colors.white} />
              <View style={styles._card_title_main}>
                <Text style={styles._card_title}>Venus</Text>
                <Text style={styles._card_sub_title}>
                  $Create & Collect Timeless NFTs. NFT Marketplace Made Simpler
                </Text>
              </View>
            </View>
          </TouchableOpacity>
          <View style={styles._line} />
          <TouchableOpacity style={styles._card_main}>
            <View style={styles._card_icon_main}>
              <Beefy width={38} height={44} fill={colors.white} />
              <View style={styles._card_title_main}>
                <Text style={styles._card_title}>Beefy Finance</Text>
                <Text style={styles._card_sub_title}>
                  $Create & Collect Timeless NFTs. NFT Marketplace Made Simpler
                </Text>
              </View>
            </View>
          </TouchableOpacity>
          <View style={styles._line} />
          <TouchableOpacity style={styles._card_main}>
            <View style={styles._card_icon_main}>
              <PancakeSwap width={38} height={44} fill={colors.white} />
              <View style={styles._card_title_main}>
                <Text style={styles._card_title}>PancakeSwap</Text>
                <Text style={styles._card_sub_title}>
                  $Create & Collect Timeless NFTs. NFT Marketplace Made Simpler
                </Text>
              </View>
            </View>
          </TouchableOpacity>
          <View style={styles._line} />
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
    marginLeft: 15,
    width: "70%",
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
    color: colors.black,
    fontSize: 18,
    fontFamily: "Roboto-Regular",
  },
  _header_title_active: {
    color: colors.blue,
    fontSize: 18,
    fontFamily: "Roboto-Regular",
  },
  _price: {
    color: colors.black,
    fontSize: 14,
    fontFamily: "Roboto-Regular",
  },
  _input_main: {
    backgroundColor: colors.white,
    height: 51,
    borderRadius: 15,
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    justifyContent: "space-between",
    marginHorizontal: 10,
  },
  _input: {
    width: "90%",
    fontSize: 26,
    color: colors.gray,
    fontFamily: "Roboto-Regular",
  },
});
export default Dapps;
