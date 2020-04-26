import React, {useState} from "react";
import * as Font from "expo-font";
import {AppLoading} from "expo";
import {combineReducers, createStore} from 'redux'
import MealsReducer from './store/reducers/meals';
import MainDrawerNavigation from "./containers/MainDrawerNavigation";
import {Provider} from "react-redux";

const fetchFonts = () => {
    return Font.loadAsync({
        "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
        "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
    });
};

const rootReducer = combineReducers({
    meals: MealsReducer
})

const store = createStore(rootReducer)

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
        <Provider store={store}>
            <MainDrawerNavigation/>
        </Provider>
    )
};

export default App;
