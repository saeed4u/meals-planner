import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import MealsAndFavTabContainer from "./MealsAndFavTabContainer";
import FavoriteScreenContainer from "./FilterScreenContainer";
import colors from "../constants/colors";
import { color } from "react-native-reanimated";

const Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: colors.colorWhite,
  },
};

const { Navigator, Screen } = createDrawerNavigator();

const MainDrawerNavigation = (props: any) => {
  return (
    <NavigationContainer theme={Theme}>
      <Navigator
        drawerContentOptions={{
          activeTintColor: colors.colorAccent,
          labelStyle: {
            fontFamily: "open-sans",
          },
        }}
        initialRouteName="Meals"
      >
        <Screen component={MealsAndFavTabContainer} name="Meals" />
        <Screen component={FavoriteScreenContainer} name="Filter" />
      </Navigator>
    </NavigationContainer>
  );
};

export default MainDrawerNavigation;
