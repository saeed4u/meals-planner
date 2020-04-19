import React from "react";

import { View, StyleSheet, FlatList } from "react-native";
import { MEALS } from "../data/dummy-data";
import { IMeal } from "../models/meal";
import MealItem from "../components/MealItem";

const renderMealItem = (data: IMeal, navigate: Function) => {
  return (
    <MealItem
      data={data}
      onSelect={() =>
        navigate("MealDetail", { title: data.title, id: data.id })
      }
    />
  );
};

const CategoryMealsScreen = ({ route, navigation }: any) => {
  const { id } = route.params;
  const meals = MEALS.filter((meal) => meal.categoryIds.includes(id));

  return (
    <View style={styles.screen}>
      <FlatList
        style={styles.mealList}
        data={meals}
        renderItem={({ item }) => renderMealItem(item, navigation.navigate)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 15,
    paddingRight: 15,
    marginBottom: 15,
  },
  mealList: {
    width: "100%",
  },
});

export default CategoryMealsScreen;
