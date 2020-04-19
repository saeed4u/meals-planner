import React from "react";
import MealCategoryScreen from "../screens/CategoryMealsScreen";
import CategoriesScreen from "../screens/CategoriesScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import { createStackNavigator } from "@react-navigation/stack";
import screenOptions from "../constants/screenOptions";
const { Screen, Navigator } = createStackNavigator();

const Meals = () => {
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
