export const TOGGLE_FAVORITE = "TOGGLE_FAVORITE";

export const toggleFavorite = (mealId: number)=> {
    return {
        type: TOGGLE_FAVORITE,
        mealId
    }
}
