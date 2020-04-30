export const TOGGLE_FAVORITE = "TOGGLE_FAVORITE";
export const SET_FILTERS = "SET_FILTERS";

export const toggleFavorite = (mealId: number)=> {
    return {
        type: TOGGLE_FAVORITE,
        mealId
    }
}

export const setFilters = (filters: any) => {
    return {
        type: SET_FILTERS,
        filters
    }
}
