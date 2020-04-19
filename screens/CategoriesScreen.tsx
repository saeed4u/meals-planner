import React from "react";

import { CATEGORIES } from "../data/dummy-data";

import { StyleSheet } from "react-native";
import { ICategory } from "../models/category";
import CategoryGridItem from "../components/CategoryGridItem";
import MealList from "../components/MealList";

const renderGridITem = (data: ICategory, navigate: Function) => {
  return <CategoryGridItem data={data} navigate={navigate} />;
};

const CategoriesScreen = (props: any) => {
  return (
    <MealList
      data={CATEGORIES}
      renderItem={({ item }: any) =>
        renderGridITem(item, props.navigation.navigate)
      }
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
