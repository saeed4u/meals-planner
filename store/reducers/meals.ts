import {MEALS} from "../../data/dummy-data";
import {TOGGLE_FAVORITE} from "../actions/meals";
import {IMeal} from "../../models/meal";

const initialState = {
    meals: MEALS,
    filteredMeals: MEALS,
    favoriteMeals: []
}

const mealsReducer = (state: any = initialState, {type, mealId}: any) => {

    switch (type) {
        case TOGGLE_FAVORITE:
            const meal = state.meals.find(({id}: IMeal) => id === mealId);
            const isFav = !!state.favoriteMeals.find(({id}: IMeal) => id === mealId);
            console.log("Is fav",isFav)
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
                favoriteMeals: [...state.favoriteMeals.filter(({id}: IMeal) => id !== mealId)]

            };
        default:
            return state;
    }
};

export default mealsReducer;
