import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { Dimensions, StyleSheet, TouchableOpacity, View } from "react-native";

import { useSafeAreaInsets } from "react-native-safe-area-context";
import {
  DiagnoseIcon,
  HomeIcon,
  MyGardenIcon,
  ProfileIcon,
  ScanIcon,
} from "../components/icons";
import DiagnoseScreen from "../screens/home/DiagnoseScreen";
import HomeScreen from "../screens/home/HomeScreen";
import MyGardenScreen from "../screens/home/MyGardenScreen";
import ProfileScreen from "../screens/home/ProfileScreen";
import { TabParamList } from "../types";

const Tab = createBottomTabNavigator<TabParamList>();

const { width } = Dimensions.get("window");

const TabNavigator: React.FC = () => {
  const insets = useSafeAreaInsets();

  // Calculate dynamic tab bar height based on device
  const tabBarHeight = 60 + insets.bottom; // Base height + safe area bottom

  const dynamicTabBarStyle = {
    ...styles.tabBar,
    height: tabBarHeight,
    paddingBottom: insets.bottom + 8, // Safe area + small padding
    paddingTop: 8,
  };

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: dynamicTabBarStyle,
        tabBarShowLabel: true,
        tabBarLabelStyle: styles.tabLabel,
        tabBarActiveTintColor: "#28AF6E",
        tabBarInactiveTintColor: "#9E9E9E",
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => <HomeIcon size={25} fill={color} />,
        }}
      />
      <Tab.Screen
        name="Diagnose"
        component={DiagnoseScreen}
        options={{
          tabBarIcon: ({ color }) => <DiagnoseIcon size={25} fill={color} />,
        }}
      />
      <Tab.Screen
        name="Scan"
        component={HomeScreen} // Using HomeScreen as placeholder for now
        options={{
          tabBarButton: () => (
            <TouchableOpacity
              style={[styles.scanButton]}
              onPress={() => {
                // Handle scan action
                console.log("Scan pressed");
              }}
            >
              <View style={styles.scanButtonInner}>
                <ScanIcon size={24} fill="#FFFFFF" />
              </View>
            </TouchableOpacity>
          ),
        }}
      />
      <Tab.Screen
        name="MyGarden"
        component={MyGardenScreen}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <MyGardenIcon size={25} fill={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <ProfileIcon size={25} fill={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  tabBar: {
    backgroundColor: "#FFFFFF",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: -2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 8,
  },
  tabLabel: {
    fontSize: 12,
    fontWeight: "500",
  },
  scanButton: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    bottom: 8,
    left: 0,
    right: 0,
  },
  scanButtonInner: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: "#28AF6E",
    alignItems: "center",
    justifyContent: "center",
    elevation: 8,
    borderWidth: 4,
    borderColor: "#2CCC80",
  },
});

export default TabNavigator;
