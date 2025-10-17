import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import OnboardingStep1Screen from "../screens/onboarding/OnboardingScreenStep1";
import OnboardingStep2Screen from "../screens/onboarding/OnboardingScreenStep2";
import PaywallScreen from "../screens/onboarding/PaywallScreen";
import WelcomeScreen from "../screens/onboarding/WelcomeScreen";
import { OnboardingStackParamList } from "../types";

const Stack = createStackNavigator<OnboardingStackParamList>();

const OnboardingStack: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="OnboardingStep1" component={OnboardingStep1Screen} />
      <Stack.Screen name="OnboardingStep2" component={OnboardingStep2Screen} />
      <Stack.Screen name="Paywall" component={PaywallScreen} />
    </Stack.Navigator>
  );
};

export default OnboardingStack;
