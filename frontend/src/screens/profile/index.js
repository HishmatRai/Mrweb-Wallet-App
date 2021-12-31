import React from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import colors from "./../../../../colors";
import { Ionicons, FontAwesome5, Entypo } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";

let Profile = (props) => {
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
});
export default Profile;
