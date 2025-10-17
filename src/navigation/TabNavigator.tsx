import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import DiagnoseScreen from "../screens/home/DiagnoseScreen";
import HomeScreen from "../screens/home/HomeScreen";
import MyGardenScreen from "../screens/home/MyGardenScreen";
import ProfileScreen from "../screens/home/ProfileScreen";
import { TabParamList } from "../types";

const Tab = createBottomTabNavigator<TabParamList>();

const { width } = Dimensions.get("window");

const TabNavigator: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.tabBar,
        tabBarShowLabel: true,
        tabBarLabelStyle: styles.tabLabel,
        tabBarActiveTintColor: "#2E7D32",
        tabBarInactiveTintColor: "#9E9E9E",
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <View style={styles.tabIcon}>
              <Text style={[styles.iconText, { color }]}>📚</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Diagnose"
        component={DiagnoseScreen}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <View style={styles.tabIcon}>
              <Text style={[styles.iconText, { color }]}>🛡️</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Scan"
        component={HomeScreen} // Using HomeScreen as placeholder for now
        options={{
          tabBarButton: () => (
            <TouchableOpacity
              style={styles.scanButton}
              onPress={() => {
                // Handle scan action
                console.log("Scan pressed");
              }}
            >
              <View style={styles.scanButtonInner}>
                <Text style={styles.scanIcon}>📷</Text>
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
            <View style={styles.tabIcon}>
              <Text style={[styles.iconText, { color }]}>🌱</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <View style={styles.tabIcon}>
              <Text style={[styles.iconText, { color }]}>👤</Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    height: 90,
    paddingBottom: 20,
    paddingTop: 10,
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
    marginTop: 4,
  },
  tabIcon: {
    alignItems: "center",
    justifyContent: "center",
  },
  iconText: {
    fontSize: 20,
  },
  scanButton: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: -20,
  },
  scanButtonInner: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#4CAF50",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  scanIcon: {
    fontSize: 24,
    color: "#FFFFFF",
  },
});

export default TabNavigator;
