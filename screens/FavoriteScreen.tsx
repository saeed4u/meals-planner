import React from "react";

import { StyleSheet } from "react-native";
import MealList from "../components/MealList";

import { MEALS } from "../data/dummy-data";
import renderMealItem from "../constants/utils";

const FavoritesScreen = ({ navigation }: any) => {
  const favMeals = MEALS.filter((meal) => meal.id === "m1" || meal.id === "m3");
  return (
    <MealList
      data={favMeals}
      renderItem={({ item }: any) =>
        renderMealItem(item, navigation.navigate, "FavoriteMealDetails")
      }
    />
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default FavoritesScreen;
