import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import FilterScreen from "../screens/FiltersScreen";
import screenOptions from "../constants/screenOptions";

const { Screen, Navigator } = createStackNavigator();

const FilterScreenContainer = (props: any) => {
  return (
    <Navigator initialRouteName="FilterScreen" screenOptions={screenOptions}>
      <Screen component={FilterScreen} name="FilterScreen" />
    </Navigator>
  );
};

export default FilterScreenContainer;
