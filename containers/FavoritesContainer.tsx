import React from "react";
import FavoritesScreen from "../screens/FavoriteScreen";
import MealDetailsScreen from "../screens/MealDetailScreen";
import { createStackNavigator } from "@react-navigation/stack";
import screenOptions from "../constants/screenOptions";

const { Screen, Navigator } = createStackNavigator();

const Favorites = () => {
  return (
    <Navigator screenOptions={screenOptions}>
      <Screen
        name="Favorites"
        options={{ title: "Favorite Meals" }}
        component={FavoritesScreen}
      />
      <Screen
        name="FavoriteMealDetails"
        options={{ title: "Favorite Meal Detail" }}
        component={MealDetailsScreen}
      />
    </Navigator>
  );
};

export default Favorites;
