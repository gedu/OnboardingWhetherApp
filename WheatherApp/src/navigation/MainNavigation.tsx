import React from 'react';

import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';

import { HomeScreen } from '../screens/Home/HomeScreen';

type MainParamList = {
  DetailScreen: undefined;
  HomeScreen: undefined;
};

type MainRouteNames = keyof MainParamList;

type MainNavigationProps<S extends MainRouteNames> = NativeStackScreenProps<
  MainParamList,
  S
>;

type LogeStackRoutesProps = {
  initialScreen?: MainRouteNames;
};

const Stack = createNativeStackNavigator<MainParamList>();

const homeScreenOptions = {
  title: 'Weather',
};

export const MainNavigation = ({
  initialScreen = 'HomeScreen',
}: LogeStackRoutesProps) => (
  <Stack.Navigator initialRouteName={initialScreen}>
    <Stack.Screen
      name="HomeScreen"
      options={homeScreenOptions}
      component={HomeScreen}
    />
  </Stack.Navigator>
);

export type { MainNavigationProps };