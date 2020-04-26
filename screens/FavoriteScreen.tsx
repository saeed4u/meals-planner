import React, {useLayoutEffect} from "react";
import {useSelector} from "react-redux";
import {Platform, StyleSheet, View} from "react-native";
import MealList from "../components/MealList";
import renderMealItem from "../constants/utils";
import {Ionicons} from "@expo/vector-icons";
import colors from "../constants/colors";
import DefaultText from "../components/DefaultText";

const FavoritesScreen = ({navigation}: any) => {
    useLayoutEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                <Ionicons
                    name="ios-menu"
                    style={{marginLeft: 15}}
                    size={20}
                    onPress={() => navigation.toggleDrawer()}
                    color={Platform.OS === "android" ? "white" : colors.colorPrimary}
                />
            ),
        });
    });

    const favMeals = useSelector((state: any) => state.meals.favoriteMeals);

    if (!favMeals.length) {
        return (
            <View style={styles.empty}>
                <DefaultText>
                  No favorite meals found. Start adding some!
                </DefaultText>
            </View>
        )
    }

    return (
        <MealList
            data={favMeals}
            renderItem={({item}: any) =>
                renderMealItem(item, navigation.navigate, "FavoriteMealDetails")
            }
        />
    );
};

const styles = StyleSheet.create({
    empty: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});

export default FavoritesScreen;
