import React from "react";

import { IMeal } from "../models/meal";
import MealItem from "../components/MealItem";

const renderMealItem = (
  data: IMeal,
  navigate: Function,
  screen: string = "MealDetail"
) => {
  return (
    <MealItem
      data={data}
      onSelect={() => navigate(screen, { title: data.title, id: data.id })}
    />
  );
};

export default renderMealItem;
