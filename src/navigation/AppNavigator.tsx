import { createStackNavigator } from "@react-navigation/stack";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store";
import { checkOnboardingStatus } from "../store/slices/onboardingSlice";
import { RootStackParamList } from "../types";
import OnboardingStack from "./OnboardingStack";
import TabNavigator from "./TabNavigator";

const Stack = createStackNavigator<RootStackParamList>();

const AppNavigator: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { isCompleted, isLoading } = useSelector(
    (state: RootState) => state.onboarding
  );

  useEffect(() => {
    dispatch(checkOnboardingStatus());
  }, [dispatch]);

  if (isLoading) {
    // You can add a loading screen here
    return null;
  }

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {!isCompleted ? (
        <Stack.Screen name="Home" component={TabNavigator} />
      ) : (
        <Stack.Screen name="Onboarding" component={OnboardingStack} />
      )}
    </Stack.Navigator>
  );
};

export default AppNavigator;
