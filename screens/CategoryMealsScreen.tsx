import React from "react";

import { View, StyleSheet, FlatList } from "react-native";
import { MEALS } from "../data/dummy-data";
import { IMeal } from "../models/meal";
import MealItem from "../components/MealItem";
import MealList from "../components/MealList";
import renderMealItem from "../constants/utils";

const CategoryMealsScreen = ({ route, navigation }: any) => {
  const { id } = route.params;
  const meals = MEALS.filter((meal) => meal.categoryIds.includes(id));

  return (
    <View style={styles.screen}>
      <MealList
        style={styles.mealList}
        data={meals}
        renderItem={({ item }: any) =>
          renderMealItem(item, navigation.navigate)
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
  },
  mealList: {
    width: "100%",
  },
});

export default CategoryMealsScreen;
