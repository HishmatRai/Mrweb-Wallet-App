import React from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  TextInput,
} from "react-native";
import colors from "./../../../../colors";
import { Ionicons, FontAwesome5, Entypo, Feather } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import Button from "./../../components/button";
let Profile = (props) => {
  const [fullName, setFullName] = React.useState("");
  const [cardId, setCardId] = React.useState("");
  const [mobileNumber, setMobileNumber] = React.useState("");
  const [image, setImage] = React.useState(null);
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        style={styles._back_btn}
        onPress={() => props.navigation.goBack()}
      >
        <Ionicons name="arrow-back" size={24} color={colors.white} />
      </TouchableOpacity>
      <ScrollView showsVerticalScrollIndicator={false}>
        {image === null ? (
          <View style={styles._profile}>
            <FontAwesome5 name="user-tie" size={80} color={colors.gray} />
          </View>
        ) : (
          <Image source={{ uri: image }} style={styles._profile} />
        )}
        <TouchableOpacity style={styles._camera_btn} onPress={pickImage}>
          <Entypo name="camera" size={24} color={colors.white} />
        </TouchableOpacity>
        <View style={styles._input_main}>
          <TextInput
            placeholder="Full Name"
            value={fullName}
            onChangeText={(fullName) => setFullName(fullName)}
            style={styles._input}
            underlineColor={colors.gray}
            placeholderTextColor={colors.gray}
          />
        </View>
        <View style={styles._id_main}>
          <View style={styles._input_main2}>
            <TextInput
              placeholder="Card id"
              value={cardId}
              onChangeText={(cardId) => setCardId(cardId)}
              style={styles._input2}
              underlineColor={colors.gray}
              placeholderTextColor={colors.gray}
              keyboardType="numeric"
            />
          </View>
          <TouchableOpacity style={styles._input_main3} onPress={pickImage}>
            <Feather name="upload" size={24} color={colors.white} />
            <Text style={styles._upload}>Upload</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles._input_main}>
          <Text style={styles._country}>Select Country</Text>
          <Entypo name="chevron-down" size={24} color={colors.gray} />
          {/* <CountryPicker /> */}
        </TouchableOpacity>
        <View style={styles._input_main}>
          <TextInput
            placeholder="Mobile No"
            value={mobileNumber}
            onChangeText={(mobileNumber) => setMobileNumber(mobileNumber)}
            style={styles._input}
            underlineColor={colors.gray}
            placeholderTextColor={colors.gray}
            keyboardType="numeric"
          />
        </View>
        <View style={styles._btn_main}>
          <Button
            ButtonBgColor="#6CBBF2"
            ButtonRadious={50}
            ButtonText="Request Your Card"
            onPress={() => props.navigation.navigate("TabNavigation")}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  _back_btn: {
    marginHorizontal: 20,
    marginTop: 20,
    marginBottom: 10,
  },
  _profile: {
    width: 130,
    height: 130,
    borderRadius: 130 / 2,
    backgroundColor: colors.white,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
  },
  _camera_btn: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    backgroundColor: "#AFA6BC",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    marginTop: -25,
    marginLeft: 70,
  },
  _input_main: {
    backgroundColor: colors.white,
    height: 51,
    borderRadius: 5,
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    justifyContent: "space-between",
    marginHorizontal: 20,
  },
  _input_main2: {
    backgroundColor: colors.white,
    height: 51,
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    justifyContent: "space-between",
    width: "45%",
  },
  _input_main3: {
    borderColor: colors.white,
    borderWidth: 1,
    height: 51,
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 25,
    justifyContent: "space-between",
    width: "45%",
  },
  _input: {
    width: "100%",
    fontSize: 20,
    color: colors.gray,
    fontFamily: "Roboto-Regular",
  },
  _input2: {
    width: "100%",
    fontSize: 20,
    color: colors.gray,
    fontFamily: "Roboto-Regular",
  },
  _id_main: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 20,
    marginHorizontal: 20,
  },
  _upload: {
    fontSize: 20,
    color: colors.white,
    fontFamily: "Roboto-Regular",
  },
  _btn_main: {
    marginHorizontal: 20,
    marginTop: 30,
  },
  _country: {
    fontSize: 20,
    color: colors.gray,
    fontFamily: "Roboto-Regular",
  },
});
export default Profile;
