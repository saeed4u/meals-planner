import React, { useLayoutEffect } from "react";

import { CATEGORIES } from "../data/dummy-data";

import { StyleSheet, Platform } from "react-native";
import { ICategory } from "../models/category";
import CategoryGridItem from "../components/CategoryGridItem";
import MealList from "../components/MealList";
import { Ionicons } from "@expo/vector-icons";
import colors from "../constants/colors";

const renderGridITem = (data: ICategory, navigate: Function) => {
  return <CategoryGridItem data={data} navigate={navigate} />;
};

const CategoriesScreen = ({ navigation }: any) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Ionicons
          name="ios-menu"
          style={{ marginLeft: 15 }}
          size={20}
          onPress={() => navigation.toggleDrawer()}
          color={Platform.OS === 'android'?"white": colors.colorPrimary}
        />
      ),
    });
  });
  return (
    <MealList
      data={CATEGORIES}
      renderItem={({ item }: any) => renderGridITem(item, navigation.navigate)}
      numColumns={2}
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

export default CategoriesScreen;
