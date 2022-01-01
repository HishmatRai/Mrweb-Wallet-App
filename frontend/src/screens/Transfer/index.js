import React, { useRef } from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  Text,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Image,
} from "react-native";
import colors from "./../../../../colors";
import { Ionicons, Feather } from "@expo/vector-icons";
import Button from "./../../components/button";
import RBSheet from "react-native-raw-bottom-sheet";
let Transfer = (props) => {
  let [selectPrice, setSelectPrice] = React.useState(2);
  let [selectCard, setSelectCard] = React.useState();
  const [mobileNumber, setMobileNumber] = React.useState("");
  const refRBSheet = useRef();
  let Price = [
    {
      price: "50",
    },
    {
      price: "100",
    },
    {
      price: "250",
    },
    {
      price: "400",
    },
    {
      price: "700",
    },
    {
      price: "1000",
    },
  ];
  let Receivers = [
    {
      profile: require("./../../../assets/images/prfile1.png"),
      name: "Julia",
    },
    {
      profile: require("./../../../assets/images/prfile1.png"),
      name: "Andrew",
    },

    {
      profile: require("./../../../assets/images/prfile1.png"),
      name: "Susan",
    },
    {
      profile: require("./../../../assets/images/prfile1.png"),
      name: "James",
    },
    {
      profile: require("./../../../assets/images/prfile1.png"),
      name: "Bella",
    },
  ];

  let CardDat = [
    {
      profile: require("./../../../assets/images/prfile1.png"),
      name: "Andrew Simorangkir",
      userName: "@andrewsimo",
    },
    {
      profile: require("./../../../assets/images/prfile1.png"),
      name: "Andy Lovebird",
      userName: "@andylovebird",
    },
    {
      profile: require("./../../../assets/images/prfile1.png"),
      name: "Bimo Mahesa",
      userName: "@bimomahes",
    },
    {
      profile: require("./../../../assets/images/prfile1.png"),
      name: "Bella Johansen",
      userName: "@andrewsimo",
    },
  ];

  let SelectedData = (dataIndex) => {
    setSelectCard(dataIndex);
    setTimeout(() => {
      refRBSheet.current.close();
    }, 2000);
    props.navigation.navigate("Complete");
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles._header_main}>
        <TouchableOpacity
          style={styles._back_btn}
          onPress={() => props.navigation.goBack()}
        >
          <Ionicons name="arrow-back" size={24} color={colors.white} />
        </TouchableOpacity>
        <Text style={styles._heading}>Transfer</Text>
        <View />
      </View>
      <View style={styles._header_price_main}>
        <View>
          <Text style={styles._header_price}>256.321 EURO </Text>
          <Text style={styles._header_title}>Total Balance available</Text>
        </View>
        <TouchableOpacity>
          <Text style={styles._change}>Change</Text>
        </TouchableOpacity>
      </View>
      <View style={styles._data_main}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles._price}>250.000 EURO</Text>
          <Text style={styles._amount}>Transfer Amount</Text>
          <View style={styles._price_main}>
            {Price.map((v, i) => {
              return (
                <TouchableOpacity
                  key={i}
                  style={
                    selectPrice === i
                      ? styles._active_price_box
                      : styles._price_box
                  }
                  onPress={() => setSelectPrice(i)}
                >
                  <Text
                    style={
                      selectPrice === i
                        ? styles._active_price_box_text
                        : styles._price_box_text
                    }
                  >
                    {v.price}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
          <View style={styles._input_main}>
            <TextInput
              placeholder="Enter the manual amount"
              value={mobileNumber}
              onChangeText={(mobileNumber) => setMobileNumber(mobileNumber)}
              style={styles._input}
              underlineColor={colors.gray}
              placeholderTextColor={colors.gray}
              keyboardType="numeric"
            />
          </View>
          <View style={styles._recent_main}>
            <Text style={styles._recent}>Recent Receivers</Text>
            <TouchableOpacity>
              <Text style={styles._more}>More</Text>
            </TouchableOpacity>
          </View>

          <View style={styles._profile_list}>
            {Receivers.map((v, i) => {
              return (
                <View style={styles._profile_main} key={i}>
                  <Image source={v.profile} style={styles._image} />
                  <Text style={styles._name}>{v.name}</Text>
                </View>
              );
            })}
          </View>
          <View style={styles._btn_main}>
            <Button
              ButtonBgColor="#6CBBF2"
              ButtonRadious={50}
              ButtonText="Send"
              onPress={() => refRBSheet.current.open()}
            />
          </View>
          <View style={{ paddingBottom: 20 }} />
        </ScrollView>
      </View>
      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={false}
        dragFromTopOnly={true}
        height={400}
        customStyles={{
          wrapper: {
            backgroundColor: "rgba(0,0,0,.5)",
          },
          draggableIcon: {
            backgroundColor: colors.gray,
          },
          container: {
            backgroundColor: colors.white,
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
          },
        }}
      >
        <View style={styles._bs_main}>
          <View style={styles._bs_header}>
            <Text style={styles._bs_header_heading}>Select Receiver</Text>
            <TouchableOpacity>
              <Text style={styles._new}>+New</Text>
            </TouchableOpacity>
          </View>
          <View style={styles._input_main}>
            <TextInput
              placeholder="Type name here"
              value={mobileNumber}
              onChangeText={(mobileNumber) => setMobileNumber(mobileNumber)}
              style={styles._input2}
              underlineColor={colors.gray}
              placeholderTextColor={colors.gray}
            />
            <Feather name="search" size={24} color={colors.gray} />
          </View>
          <View style={styles._contact_main}>
            <Text style={styles._showing_contact}>Showing 54 Contacts</Text>
            <TouchableOpacity>
              <Text style={styles._select_all}>Select All</Text>
            </TouchableOpacity>
          </View>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View>
              {CardDat.map((v, i) => {
                return (
                  <TouchableOpacity
                    style={styles._card_main}
                    key={i}
                    onPress={(item) => SelectedData(i)}
                  >
                    <View style={styles._card_image_main}>
                      <Image source={v.profile} style={styles._card_image} />
                      <View>
                        <Text style={styles._card_users_name}>{v.name}</Text>
                        <Text style={styles._card_user_name}>{v.userName}</Text>
                      </View>
                    </View>
                    {selectCard === i ? (
                      <Ionicons
                        name="md-checkmark-circle-sharp"
                        size={24}
                        color={colors.primary}
                      />
                    ) : null}
                  </TouchableOpacity>
                );
              })}
            </View>
          </ScrollView>
        </View>
      </RBSheet>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  _header_main: {
    marginHorizontal: 20,
    marginTop: 20,
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  _btn_main: {
    marginTop: 30,
  },
  _heading: {
    color: colors.white,
    fontSize: 23,
    fontFamily: "Roboto-Bold",
  },
  _header_price_main: {
    marginHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 10,
  },
  _header_price: {
    color: colors.white,
    fontSize: 27,
    fontFamily: "Roboto-Bold",
  },
  _header_title: {
    color: colors.white,
    fontSize: 16,
    fontFamily: "Roboto-Medium",
  },
  _change: {
    color: colors.white,
    fontSize: 14,
    fontFamily: "Roboto-Regular",
  },
  _data_main: {
    flex: 1,
    backgroundColor: colors.white,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    marginTop: 30,
    paddingTop: 20,
  },
  _price: {
    color: "#415BA9",
    fontSize: 30,
    fontFamily: "Roboto-Bold",
    marginTop: 5,
    textAlign: "center",
  },
  _amount: {
    color: colors.gray,
    fontSize: 14,
    fontFamily: "Roboto-Regular",
    marginTop: 5,
    textAlign: "center",
  },
  _price_main: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
  _price_box: {
    width: "30%",
    backgroundColor: "#EFEFEF",
    alignItems: "center",
    justifyContent: "center",
    height: 42,
    borderRadius: 5,
    marginTop: 15,
  },
  _price_box_text: {
    color: colors.gray,
    fontSize: 18,
    fontFamily: "Roboto-Bold",
  },
  _active_price_box: {
    width: "30%",
    backgroundColor: "#6CBBF2",
    alignItems: "center",
    justifyContent: "center",
    height: 42,
    borderRadius: 5,
    marginTop: 15,
  },
  _active_price_box_text: {
    color: colors.white,
    fontSize: 18,
    fontFamily: "Roboto-Bold",
  },
  _input_main: {
    backgroundColor: "#EFEFEF",
    height: 51,
    borderRadius: 5,
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    justifyContent: "space-between",
  },
  _input: {
    width: "100%",
    fontSize: 20,
    color: colors.gray,
    fontFamily: "Roboto-Regular",
  },
  _input: {
    width: "90%",
    fontSize: 20,
    color: colors.gray,
    fontFamily: "Roboto-Regular",
  },
  _recent_main: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 30,
  },
  _recent: {
    color: colors.black,
    fontSize: 18,
    fontFamily: "Roboto-Medium",
  },
  _more: {
    color: colors.blue,
    fontSize: 16,
    fontFamily: "Roboto-Medium",
  },
  _profile_main: {
    width: 60,
    marginTop: 20,
  },
  _name: {
    color: colors.black,
    fontSize: 12,
    fontFamily: "Roboto-Regular",
    marginTop: 10,
  },
  _image: {
    width: 60,
    height: 60,
    borderRadius: 10,
  },
  _profile_list: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
  _bs_main: {
    marginHorizontal: 20,
  },
  _bs_header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  _bs_header_heading: {
    color: colors.black,
    fontSize: 20,
    fontFamily: "Roboto-Medium",
  },
  _new: {
    color: colors.primary,
    fontSize: 16,
    fontFamily: "Roboto-Medium",
  },
  _contact_main: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 15,
  },
  _showing_contact: {
    color: colors.gray,
    fontSize: 14,
    fontFamily: "Roboto-Medium",
  },
  _select_all: {
    color: colors.primary,
    fontSize: 14,
    fontFamily: "Roboto-Medium",
  },
  _card_main: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 15,
    marginTop: 5,
  },
  _card_image_main: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  _card_image: {
    width: 60,
    height: 60,
    borderRadius: 10,
    marginRight: 10,
  },
  _card_users_name: {
    color: colors.black,
    fontSize: 18,
    fontFamily: "Roboto-Regular",
  },
  _card_user_name: {
    color: colors.gray,
    fontSize: 16,
    fontFamily: "Roboto-Regular",
    marginTop: 7,
  },
});
export default Transfer;
