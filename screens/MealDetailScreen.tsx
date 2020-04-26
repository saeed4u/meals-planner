import React, {useLayoutEffect, useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import {Platform} from "react-native";
import {Image, ScrollView, StyleSheet, Text, View} from "react-native";
import {Ionicons} from "@expo/vector-icons";
import COLORS from "../constants/colors";
import DefaultText from "../components/DefaultText";
import {IMeal} from "../models/meal";
import {toggleFavorite} from "../store/actions/meals";

const ListItem = (props: any) => {
    return (
        <View style={styles.listItem}>
            <DefaultText>{props.children}</DefaultText>
        </View>
    );
};

const MealDetailScreen = ({route, navigation}: any) => {
    const mealId = route.params.id;
    const meal: IMeal = useSelector((state: any) => state.meals.meals).find(({id}: IMeal) => id === mealId);
    const [favorite, setFavorite] = useState(!!meal.isFavorite);
    const dispatch = useDispatch();
    const onSetFavoriteClicked = () => {
        dispatch(toggleFavorite(mealId));
        setFavorite(!favorite);
    };
    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <Ionicons
                    name={favorite? "ios-star": "ios-star-outline"}
                    style={{marginRight: 10}}
                    size={20}
                    onPress={() => onSetFavoriteClicked()}
                    color={Platform.OS === 'ios' ? COLORS.colorPrimary : "white"}
                />
            ),
        });
    });
    return (
        <View>
            <Image source={{uri: meal?.imageUrl}} style={styles.image}/>
            <View style={styles.details}>
                <DefaultText>{meal?.duration}m</DefaultText>
                <DefaultText>{meal?.complexity.toUpperCase()}</DefaultText>
                <DefaultText>{meal?.affordability.toUpperCase()}</DefaultText>
            </View>
            <ScrollView>
                <Text style={styles.title}>Ingredients</Text>
                {meal?.ingredients.map((ingredient) => (
                    <ListItem key={ingredient}>{ingredient}</ListItem>
                ))}

                <Text style={styles.title}>Steps</Text>
                {meal?.steps.map((step) => (
                    <ListItem key={step}>{step}</ListItem>
                ))}
            </ScrollView>
        </View>
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
