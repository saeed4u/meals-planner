import React, { useState } from "react";
import * as Font from "expo-font";
import { AppLoading } from "expo";

import MealsAndFavTabContainer from "./containers/MealsAndFavTabContainer";

const fetchFonts = () => {
  return Font.loadAsync({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });
};

const App = () => {
  const [fontLoaded, setFontLoaded] = useState(false);
  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
      />
    );
  }
  return (
      <MealsAndFavTabContainer />
  );
};

export default App;
