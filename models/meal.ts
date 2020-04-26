export interface IMeal {
    id: string
    categoryIds: Array<string>
    title: string
    affordability: string
    complexity: string
    imageUrl: string
    duration: number
    ingredients: Array<string>
    steps: Array<string>
    isGluttenFree: boolean
    isVegan: boolean
    isVegetarian: boolean
    isLactoseFree: boolean
    isFavorite?: boolean
}
