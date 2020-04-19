import React from "react";
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  Platform,
  TouchableNativeFeedback,
  ImageBackground,
} from "react-native";

const MealItem = ({ data, onSelect }: any) => {
  let TouchableCmp: any = TouchableOpacity;
  if (Platform.OS === "android" && Platform.Version >= 21) {
    TouchableCmp = TouchableNativeFeedback;
  }
  return (
    <View style={styles.mealItem}>
      <TouchableCmp onPress={onSelect}>
        <View>
          <View style={{ ...styles.row, ...styles.mealHeader }}>
            <ImageBackground
              style={styles.imageBg}
              source={{ uri: data.imageUrl }}
            >
              <View style={styles.titleContainer}>
                <Text style={styles.title} numberOfLines={2}>
                  {data.title}
                </Text>
              </View>
            </ImageBackground>
          </View>
          <View style={{ ...styles.row, ...styles.mealDetails }}>
            <Text>{data.duration}m</Text>
            <Text>{data.complexity.toUpperCase()}</Text>
            <Text>{data.affordability.toUpperCase()}</Text>
          </View>
        </View>
      </TouchableCmp>
    </View>
  );
};

const styles = StyleSheet.create({
  mealItem: {
    height: 200,
    backgroundColor: "#e6e6e6",
    borderRadius: 10,
    overflow: "hidden",
    marginTop: 15,
    marginLeft: 15,
    marginRight: 15,
  },
  row: {
    flexDirection: "row",
  },
  mealHeader: {
    height: "85%",
  },
  mealDetails: {
    paddingHorizontal: 10,
    justifyContent: "space-between",
    alignItems: "center",
    height: "15%",
  },
  imageBg: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-end",
  },
  titleContainer: {
    backgroundColor: "rgba(0,0,0,.5)",
    paddingVertical: 5,
    paddingHorizontal: 12,
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 20,
    color: "white",
    textAlign: "center",
  },
});

export default MealItem;
