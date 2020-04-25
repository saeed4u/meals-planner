import React, { useLayoutEffect, useState } from "react";

import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import { MEALS } from "../data/dummy-data";
import { Ionicons } from "@expo/vector-icons";
import COLORS from "../constants/colors";
import DefaultText from "../components/DefaultText";

const ListItem = (props: any) => {
  return (
    <View style={styles.listItem}>
      <DefaultText>{props.children}</DefaultText>
    </View>
  );
};

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
    <ScrollView>
      <Image source={{ uri: meal?.imageUrl }} style={styles.image} />
      <View style={styles.details}>
        <DefaultText>{meal?.duration}m</DefaultText>
        <DefaultText>{meal?.complexity.toUpperCase()}</DefaultText>
        <DefaultText>{meal?.affordability.toUpperCase()}</DefaultText>
      </View>
      <Text style={styles.title}>Ingredients</Text>
      {meal?.ingredients.map((ingredient) => (
        <ListItem key={ingredient}>{ingredient}</ListItem>
      ))}

      <Text style={styles.title}>Steps</Text>
      {meal?.steps.map((step) => (
        <ListItem key={step}>{step}</ListItem>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 200,
  },
  details: {
    flexDirection: "row",
    padding: 15,
    justifyContent: "space-around",
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 22,
    textAlign: "center",
  },
  listItem: {
    marginVertical: 10,
    marginHorizontal: 20,
    borderColor: "#ccc",
    borderWidth: 1,
    padding: 10,
  },
});

export default MealDetailScreen;
