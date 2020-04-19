import React, { useLayoutEffect, useState } from "react";

import { View, Text, StyleSheet, Button } from "react-native";
import { MEALS } from "../data/dummy-data";
import { Ionicons } from "@expo/vector-icons";
import COLORS from "../constants/colors";

const MealDetailScreen = ({ route, navigation }: any) => {
  const mealId = route.params.id;
  const meal = MEALS.find(({ id }) => id === mealId);

  const [favorite, setFavorite] = useState(false);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Ionicons
          name="ios-star"
          style={{ marginRight: 10 }}
          size={20}
          onPress={() => setFavorite(!favorite)}
          color={favorite ? COLORS.colorAccent : "white"}
        />
      ),
    });
  });
  return (
    <View style={styles.screen}>
      <Text>{meal?.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default MealDetailScreen;
