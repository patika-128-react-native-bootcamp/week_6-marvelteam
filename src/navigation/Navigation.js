import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Routes from "./Routes";
import Comics from "../pages/Comics/Comics";
import Favorites from "../pages/Favorites/Favorites";
import Characters from "../pages/Characters/Characters";

const Tab = createBottomTabNavigator();

export default function Navigation() {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name={Routes.COMICS_PAGE} component={Comics} />
                <Tab.Screen name={Routes.CHARACTERS_PAGE} component={Characters} />
                <Tab.Screen name={Routes.FAVORITES_PAGE} component={Favorites} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}