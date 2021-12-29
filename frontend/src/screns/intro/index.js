import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";
import colors from "../../../../colors";
import { LinearGradient } from "expo-linear-gradient";
import IntroSlider01 from "./../../../assets/images/svg/IntroSlider01.svg";
import IntroSlider02 from "./../../../assets/images/svg/IntroSlider02.svg";
import IntroSlider03 from "./../../../assets/images/svg/IntroSlider03.svg";
import IntroSlider04 from "./../../../assets/images/svg/IntroSlider04.svg";
function Intro(props) {
  const slides = [
    {
      key: "s1",
      text: `Private and Secure`,
      title: `Private keys never leaves your device`,
      image: <IntroSlider01 width={240} height={210} fill={"#BCD1F3"} />,
    },
    {
      key: "s2",
      text: `All assets in one place`,
      title: `View and store youe assets seamlessly`,
      image: <IntroSlider02 width={240} height={210} fill={"#BCD1F3"} />,
    },
    {
      key: "s3",
      text: `Trade assets`,
      title: `Private keys never leaves your device`,
      image: <IntroSlider03 width={240} height={210} fill={"#BCD1F3"} />,
    },
    {
      key: "s4",
      text: `Explore decentralized apps`,
      title: `Private keys never leaves your device`,
      image: <IntroSlider04 width={240} height={210} fill={"#BCD1F3"} />,
    },
  ];

  const _renderItem = ({ item }) => {
    return (
      <View style={styles.slide}>
        <View style={styles._header_image}>{item.image}</View>
        <Text style={styles.text}>{item.text}</Text>
        <Text style={styles.title}>{item.title}</Text>
      </View>
    );
  };
  const _renderNextButton = () => {
    return (
      <LinearGradient
        end={[1.0, 0.5]}
        start={[0.0, 0.5]}
        locations={[0.0, 1.0]}
        colors={["#5ADCBA", "#8E8BFF"]}
        style={styles.nextBtn}
      >
        <View>
          <Text style={styles._next_btn_text}>CREATE A NEW WALLET</Text>
        </View>
      </LinearGradient>
    );
  };
  const _renderDoneButton = () => {
    return (
      <LinearGradient
        end={[1.0, 0.5]}
        start={[0.0, 0.5]}
        locations={[0.0, 1.0]}
        colors={["#5ADCBA", "#8E8BFF"]}
        style={styles.buttonCircle}
      >
        <TouchableOpacity
        onPress={() => props.navigation.navigate("NewPassword")}
        >
          <Text style={styles.textDone}>CREATE A NEW WALLET</Text>
        </TouchableOpacity>
      </LinearGradient>
    );
  };
  const _onDone = () => {
    // this.setState({ isNavigation: true });
  };
  const onslideCahnge = (index, lastIndex) => {
    // console.log(index, lastIndex);
  };
  return (
    <SafeAreaView style={styles.container}>
      <AppIntroSlider
        renderItem={_renderItem}
        data={slides}
        onDone={_onDone}
        renderDoneButton={_renderDoneButton}
        renderNextButton={_renderNextButton}
        dotStyle={{ backgroundColor: colors.dotColor, marginTop: -150 }}
        activeDotStyle={{
          backgroundColor: colors.activeDotColor,
          marginTop: -150,
        }}
        onSlideChange={(index, lastIndex) => onslideCahnge(index, lastIndex)}
      />
      <Text style={styles._alrady}>I already have a wallet</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  text: {
    color: colors.white,
    textAlign: "center",
    alignSelf: "center",
    marginTop: 30,
    fontSize: 30,
    fontFamily: "Roboto-Medium",
  },
  title: {
    color: colors.white,
    textAlign: "center",
    alignSelf: "center",
    marginTop: 10,
    fontSize: 19,
    fontFamily: "Roboto-Regular",
  },
  slide: {
    flex: 1,
    backgroundColor: colors.primary,
    height: "100%",
    alignItems: "center",
  },
  buttonCircle: {
    padding: "4%",
    borderRadius: 5,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginRight: "25%",
  },
  nextBtn: {
    padding: "4%",
    borderRadius: 5,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginRight: "25%",
  },
  textDone: {
    color: colors.white,
    textAlign: "center",
    fontSize: 24,
    fontFamily: "Roboto-Regular",
  },

  _header_image: {
    alignItems: "center",
    marginTop: 70,
  },
  _next_btn_text: {
    color: colors.white,
    textAlign: "center",
    fontSize: 24,
    fontFamily: "Roboto-Regular",
  },
  _alrady: {
    color: colors.white,
    fontFamily: "Roboto-Regular",
    fontSize: 19,
    textAlign: "center",
    marginBottom: 40,
  },
});
export default Intro;
