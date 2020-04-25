import React, { useLayoutEffect } from "react";

import { StyleSheet, Platform } from "react-native";
import MealList from "../components/MealList";

import { MEALS } from "../data/dummy-data";
import renderMealItem from "../constants/utils";
import { Ionicons } from "@expo/vector-icons";
import colors from "../constants/colors";

const FavoritesScreen = ({ navigation }: any) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Ionicons
          name="ios-menu"
          style={{ marginLeft: 15 }}
          size={20}
          onPress={() => navigation.toggleDrawer()}
          color={Platform.OS === "android" ? "white" : colors.colorPrimary}
        />
      ),
    });
  });

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
