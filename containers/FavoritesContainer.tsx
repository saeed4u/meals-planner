import React from "react";
import FavoritesScreen from "../screens/FavoriteScreen";
import { createStackNavigator } from "@react-navigation/stack";
import  screenOptions  from "../constants/screenOptions";

const { Screen, Navigator } = createStackNavigator();

const Favorites = () => {
  return (
    <Navigator screenOptions={screenOptions}>
      <Screen
        name="Favorites"
        options={{ title: "Favorite Meals" }}
        component={FavoritesScreen}
      />
    </Navigator>
  );
};

export default Favorites;
