import React, { useLayoutEffect, useState } from "react";

import { View, Text, StyleSheet, Switch, Platform } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import colors from "../constants/colors";
import {useDispatch} from "react-redux";
import {setFilters} from "../store/actions/meals";

const FilterSwitch = ({ value, onValueChange, title }: any) => {
  return (
    <View style={styles.filterContainer}>
      <Text>{title}</Text>
      <Switch
        value={value}
        trackColor={{ true: colors.colorPrimary, false: "" }}
        thumbColor={Platform.OS === "android" ? colors.colorPrimary : ""}
        onValueChange={(newValue) => onValueChange(newValue)}
      />
    </View>
  );
};

const FiltersScreen = ({ navigation }: any) => {
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
      headerRight: () => (
        <Ionicons
          name="ios-save"
          style={{ marginRight: 15 }}
          size={20}
          onPress={() => saveFilters()}
          color={Platform.OS === "android" ? "white" : colors.colorPrimary}
        />
      ),
    });
  });

  const dispatch = useDispatch();

  const [isGluttenFree, setIsGluttenFree] = useState(false);
  const [isLactoseFree, setIsLactoseFree] = useState(false);
  const [isVegan, setIsVegan] = useState(false);
  const [isVegetarian, setIsVegetarian] = useState(false);

  const saveFilters = () => {
    const appliedFilters = {
      isGluttenFree,
      isLactoseFree,
      isVegan,
      isVegetarian,
    };
    dispatch(setFilters(appliedFilters));
  };

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Available Filters / Restrictions</Text>
      <FilterSwitch
        title="Glutten-free"
        value={isGluttenFree}
        onValueChange={setIsGluttenFree}
      />
      <FilterSwitch
        title="Lactose-free"
        value={isLactoseFree}
        onValueChange={setIsLactoseFree}
      />
      <FilterSwitch title="Vegan" value={isVegan} onValueChange={setIsVegan} />
      <FilterSwitch
        title="Vegetarian"
        value={isVegetarian}
        onValueChange={setIsVegetarian}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
  },
  title: {
    margin: 20,
    fontFamily: "open-sans-bold",
    fontSize: 22,
    textAlign: "center",
  },
  filterContainer: {
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 10,
  },
});

export default FiltersScreen;
