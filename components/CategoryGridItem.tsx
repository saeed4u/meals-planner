import React from "react";
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  Platform,
  TouchableNativeFeedback,
} from "react-native";

const CategoryGridItem = ({ data, navigate }: any) => {
  let TouchableCmp: any = TouchableOpacity;
  if (Platform.OS === "android" && Platform.Version >= 21) {
    TouchableCmp = TouchableNativeFeedback;
  }
  return (
    <View style={styles.gridItem}>
      <TouchableCmp
        style={{ flex: 1 }}
        onPress={() => {
          navigate("CategoryMeals", { title: data.title, id: data.id });
        }}
      >
        <View
          style={{ ...styles.container, ...{ backgroundColor: data.color } }}
        >
          <Text style={styles.title} numberOfLines={2}>
            {data.title}
          </Text>
        </View>
      </TouchableCmp>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    borderRadius: 10,
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    padding: 15,
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 18,
    textAlign: "right",
  },
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
    borderRadius: 10,
    overflow: Platform.OS === "ios" ? "visible" : "hidden",
    elevation: 6,
  },
});

export default CategoryGridItem;
