import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import colors from "../../../colors";

import WalletActiveIcon from "./../../assets/images/tabIcon/WalletActive.svg";
import WalletIcon from "./../../assets/images/tabIcon/Wallet.svg";
import DiscoverIcon from "./../../assets/images/tabIcon/Discover.svg";
import DiscoverActiveIcon from "./../../assets/images/tabIcon/DiscoverActive.svg";
import DappsIcon from "./../../assets/images/tabIcon/Dapps.svg";
import DappsActiveIcon from "./../../assets/images/tabIcon/DappsActive.svg";
import SettingsIcon from "./../../assets/images/tabIcon/Settings.svg";
import SettingsActiveIcon from "./../../assets/images/tabIcon/SettingsActive.svg";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

import Intro from "../screens/intro";
import NewPassword from "../screens/newPassword";
import RecoveryConfirm from "../screens/recoveryConfirm";
import Recovery from "./../screens/recovery";
import RecoveryVerify from "./../screens/recoveryVerify";
import Wallet from "../screens/wallet";
import Discover from "../screens/discover";
import Dapps from "../screens/dapps";
import Settings from "../screens/settings";
import BuyBitcoin from "../screens/buyBitcoin";
import Profile from "../screens/profile";
import Swap from "../screens/Swap";
import Transfer from "../screens/Transfer";
import Complete from "../screens/complete";
import QrCode from "../screens/qr";
import Send from "../screens/send";

function TabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        showLabel: false,

        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Wallet") {
            iconName = focused ? (
              <WalletActiveIcon width={33} height={33} fill={colors.primary} />
            ) : (
              <WalletIcon width={33} height={33} fill={colors.primary} />
            );
          } else if (route.name === "Discover") {
            iconName = focused ? (
              <DiscoverActiveIcon
                width={33}
                height={33}
                fill={colors.primary}
              />
            ) : (
              <DiscoverIcon width={33} height={33} fill={colors.primary} />
            );
          } else if (route.name === "Dapps") {
            iconName = focused ? (
              <DappsActiveIcon width={33} height={33} fill={colors.primary} />
            ) : (
              <DappsIcon width={33} height={33} fill={colors.primary} />
            );
          } else if (route.name === "Settings") {
            iconName = focused ? (
              <SettingsActiveIcon
                width={33}
                height={33}
                fill={colors.primary}
              />
            ) : (
              <SettingsIcon width={33} height={33} fill={colors.primary} />
            );
          }

          return iconName;
        },
        tabBarActiveTintColor: colors.passwordColor,
        tabBarInactiveTintColor: colors.gray,
        tabBarStyle: {
          backgroundColor: colors.primary,
          height: 78,
          paddingBottom: 10,
        },
        tabBarShowLabel: true,
      })}
    >
      <Tab.Screen name="Wallet" component={Wallet} />
      <Tab.Screen name="Discover" component={Discover} />
      <Tab.Screen name="Dapps" component={Dapps} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
}

function Navigaion() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Intro"
          component={Intro}
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name="NewPassword"
          component={NewPassword}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="RecoveryConfirm"
          component={RecoveryConfirm}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Recovery"
          component={Recovery}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="RecoveryVerify"
          component={RecoveryVerify}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="TabNavigation"
          component={TabNavigation}
          options={{ headerShown: false }}
        />
          <Stack.Screen
          name="BuyBitcoin"
          component={BuyBitcoin}
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name="Profile"
          component={Profile}
          options={{ headerShown: false }}
        />
          <Stack.Screen
          name="Swap"
          component={Swap}
          options={{ headerShown: false }}
        />
          <Stack.Screen
          name="Transfer"
          component={Transfer}
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name="Complete"
          component={Complete}
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name="QrCode"
          component={QrCode}
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name="Send"
          component={Send}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigaion;
