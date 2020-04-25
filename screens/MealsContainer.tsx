import React, { useLayoutEffect } from "react";
import MealCategoryScreen from "./CategoryMealsScreen";
import CategoriesScreen from "./CategoriesScreen";
import MealDetailScreen from "./MealDetailScreen";
import { createStackNavigator } from "@react-navigation/stack";
import screenOptions from "../constants/screenOptions";
const { Screen, Navigator } = createStackNavigator();

const Meals = ({ navigation }: any) => {
  return (
    <Navigator initialRouteName="Categories" screenOptions={screenOptions}>
      <Screen
        options={{ title: "Meal Categories" }}
        name="Categories"
        component={CategoriesScreen}
      />
      <Screen
        options={({ route }) => ({ title: route.params.title })}
        name="CategoryMeals"
        component={MealCategoryScreen}
      />
      <Screen
        name="MealDetail"
        options={({ route }) => ({ title: route.params.title })}
        component={MealDetailScreen}
      />
    </Navigator>
  );
};

export default Meals;
