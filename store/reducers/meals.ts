import {MEALS} from "../../data/dummy-data";
import {SET_FILTERS, TOGGLE_FAVORITE} from "../actions/meals";
import {IMeal} from "../../models/meal";

const initialState = {
    meals: MEALS,
    filteredMeals: MEALS,
    favoriteMeals: []
}

const handleSetFavorite = (state: any, mealId: string) => {
    const meal = state.meals.find(({id}: IMeal) => id === mealId);
    const isFav = !!state.favoriteMeals.find(({id}: IMeal) => id === mealId);
    if (!isFav) {
        meal.isFavorite = true;
        return {
            ...state,
            favoriteMeals: [
                ...state.favoriteMeals,
                meal
            ]
        }
    }
    return {
        ...state,
        favoriteMeals: state.favoriteMeals.filter(({id}: IMeal) => id !== mealId)
    };
};

const handleSetFilters = (state: any, filters: any) => {
    const filteredMeals =  state.meals.filter((meal: IMeal) => {
        if (filters.isGluttenFree && !meal.isGluttenFree) {
            return false;
        }
        if (filters.isLactoseFree && !meal.isLactoseFree) {
            return false;
        }
        if (filters.isVegetarian && !meal.isVegetarian) {
            return false;
        }
        return !(filters.isVegan && !meal.isVegan);
    })
    return {
        ...state,
        filteredMeals
    }
}
const mealsReducer = (state: any = initialState, {type, mealId, filters}: any) => {

    switch (type) {
        case TOGGLE_FAVORITE:
            return handleSetFavorite(state, mealId);
        case SET_FILTERS:
            return handleSetFilters(state,filters)
        default:
            return state;
    }
};

export default mealsReducer;
