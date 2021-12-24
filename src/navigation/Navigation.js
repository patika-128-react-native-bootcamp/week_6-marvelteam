import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Routes from './Routes';
import Comics from '../pages/Comics';
import Favorites from '../pages/Favorites';
import Characters from '../pages/Characters';
import Detail from '../pages/Detail';
import colors from '../styles/colors';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const ComicsStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: colors.primaryTextColor,
        headerStyle: {
          backgroundColor: colors.primary,
        },
      }}>
      <Stack.Screen name={Routes.COMICS_PAGE} component={Comics} />
      <Stack.Screen name={Routes.DETAIL_PAGE} component={Detail} />
    </Stack.Navigator>
  );
};

export default function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarInactiveTintColor: colors.primaryTextColor,
          tabBarActiveTintColor: colors.primary,
          headerTintColor: colors.primaryTextColor,
          tabBarStyle: {
            backgroundColor: colors.primaryExtraLight
          },
          headerStyle: {
            backgroundColor: colors.primary,
          },
        }}>
        <Tab.Screen
          name={Routes.COMICS_STACK}
          component={ComicsStack}
          options={{
            headerShown: false,
            tabBarIcon: ({color}) => (
              <Icon name="book-open-page-variant" size={20} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name={Routes.CHARACTERS_PAGE}
          component={Characters}
          options={{
            tabBarIcon: ({color}) => (
              <Icon name="spider" size={20} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name={Routes.FAVORITES_PAGE}
          component={Favorites}
          options={{
            tabBarIcon: ({color}) => (
              <Icon name="heart-multiple" size={20} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
