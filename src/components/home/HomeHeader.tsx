import React from "react";
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { theme } from "../../theme";

const HomeHeader: React.FC = () => {
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good Morning! ☀️";
    if (hour < 18) return "Good Afternoon! ⛅";
    return "Good Evening! 🌙";
  };

  return (
    <View style={styles.header}>
      {/* Greeting */}
      <View style={styles.greetingContainer}>
        <Text style={styles.greetingText}>Hi, plant lover!</Text>
        <View style={styles.greetingRow}>
          <Text style={styles.greetingMain}>{getGreeting()}</Text>
        </View>
      </View>

      {/* Search Bar */}
      <ImageBackground
        source={require("../../../assets/images/backgrounds/headerBackground.png")}
        resizeMode="cover"
      >
        <View style={styles.searchBar}>
          <Image
            source={require("../../../assets/images/icons/search-outline.png")}
            style={styles.searchIcon}
          />
          <TextInput
            style={styles.searchInput}
            placeholder="Search for plants"
            placeholderTextColor={theme.colors.text.placeholder}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: theme.colors.grey.light,
  },
  greetingContainer: {
    paddingHorizontal: theme.spacing.lg,
    paddingVertical: theme.spacing.sm,
  },
  greetingText: {
    fontSize: theme.fontSize.md,
    color: theme.colors.text.main,
    marginBottom: theme.spacing.sm,
  },
  greetingRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  greetingMain: {
    fontFamily: "Rubik-Bold",
    fontSize: theme.fontSize.xxl,
    color: theme.colors.text.main,
    fontWeight: "bold",
  },

  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.88)",
    borderRadius: theme.borderRadius.lg,
    marginHorizontal: theme.spacing.lg,
    marginVertical: theme.spacing.smm,
    paddingHorizontal: theme.spacing.md,
    height: 44,
  },
  searchIcon: {
    fontSize: theme.fontSize.lg,
    marginRight: theme.spacing.sm,
    color: theme.colors.text.placeholder,
  },
  searchInput: {
    flex: 1,
    fontSize: theme.fontSize.md,
  },
});

export default HomeHeader;
