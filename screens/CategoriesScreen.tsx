import React from "react";

import { CATEGORIES } from "../data/dummy-data";

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { ICategory } from "../models/category";
import CategoryGridItem from "../components/CategoryGridItem";

const renderGridITem = (data: ICategory, navigate: Function) => {
  return <CategoryGridItem data={data} navigate={navigate} />;
};

const CategoriesScreen = (props: any) => {
  return (
    <FlatList
      data={CATEGORIES}
      renderItem={({ item }) => renderGridITem(item, props.navigation.navigate)}
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
