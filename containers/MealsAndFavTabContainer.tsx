import React from "react";
import { Platform, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import Meals from "../screens/MealsContainer";
import Favorites from "./FavoritesContainer";
import COLORS from "../constants/colors";
import { Colors } from "react-native-paper";

const iconName = (route: any, focused: boolean) => {
  let iconName;

  if (route.name === "Meals") {
    iconName = "ios-restaurant";
  } else if (route.name === "Favorites") {
    iconName = focused ? "ios-star" : "ios-star-outline";
  }
  return iconName;
};

let Tab: any = createBottomTabNavigator();
let navigatorProps: any = {
  screenOptions: ({ route }: any) => ({
    tabBarIcon: ({ focused, color, size }: any) => {
      const icon = iconName(route, focused);
      return <Ionicons name={icon} size={size} color={color} />;
    },
  }),
  tabBarOptions: {
    activeTintColor: COLORS.colorAccent,
    inactiveTintColor: Colors.grey400,
    labelStyle: {
      fontFamily: "open-sans",
    },
  },
};

if (Platform.OS === "android") {
  Tab = createMaterialBottomTabNavigator();
  navigatorProps = {
    shifting: true,
    activeColor: COLORS.colorWhite,
    inactiveColor: Colors.grey400,
    barStyle: {
      backgroundColor: COLORS.colorPrimary,
    },
    screenOptions: ({ route }: any) => ({
      tabBarIcon: ({ focused, color }: any) => {
        const icon = iconName(route, focused);
        return <Ionicons name={icon} size={20} color={color} />;
      },
    }),
  };
}

const MealsAndFavTabContainer = ({ navigation }: any) => {
  return (
    <Tab.Navigator {...navigatorProps}>
      <Tab.Screen name="Meals" component={Meals} />
      <Tab.Screen name="Favorites" component={Favorites} />
    </Tab.Navigator>
  );
};

export default MealsAndFavTabContainer;
