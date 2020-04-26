import React from "react";
import {useSelector} from 'react-redux';
import { View, StyleSheet } from "react-native";
import MealList from "../components/MealList";
import renderMealItem from "../constants/utils";
import {IMeal} from "../models/meal";

const CategoryMealsScreen = ({ route, navigation }: any) => {
  const { id } = route.params;

  const availableMeals = useSelector((state: any) => state.meals.filteredMeals)

  const meals = availableMeals.filter((meal: IMeal) => meal.categoryIds.includes(id));

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
