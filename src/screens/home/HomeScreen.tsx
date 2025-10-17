import React from "react";
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { theme } from "../../theme";

const { width, height } = Dimensions.get("window");

const HomeScreen: React.FC = () => {
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good Morning!";
    if (hour < 18) return "Good Afternoon!";
    return "Good Evening!";
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        {/* Header Section */}
        <View style={styles.header}>
          {/* Decorative Leaves */}
          <View style={styles.decorativeLeafLeft}>
            <Text style={styles.leafEmoji}>🍃</Text>
          </View>
          <View style={styles.decorativeLeafRight}>
            <Text style={styles.leafEmoji}>🍃</Text>
          </View>

          {/* Greeting */}
          <View style={styles.greetingContainer}>
            <Text style={styles.greetingText}>Hi, plant lover!</Text>
            <View style={styles.greetingRow}>
              <Text style={styles.greetingMain}>{getGreeting()}</Text>
              <View style={styles.weatherIcons}>
                <Text style={styles.weatherIcon}>☀️</Text>
                <Text style={styles.weatherIcon}>☁️</Text>
              </View>
            </View>
          </View>

          {/* Search Bar */}
          <View style={styles.searchContainer}>
            <View style={styles.searchBar}>
              <Text style={styles.searchIcon}>🔍</Text>
              <TextInput
                style={styles.searchInput}
                placeholder="Search for plants"
                placeholderTextColor="#9E9E9E"
              />
            </View>
          </View>
        </View>

        {/* Premium Banner */}
        <TouchableOpacity style={styles.premiumBanner}>
          <View style={styles.bannerLeft}>
            <View style={styles.envelopeIcon}>
              <Text style={styles.envelopeEmoji}>✉️</Text>
              <View style={styles.notificationBadge}>
                <Text style={styles.badgeText}>1</Text>
              </View>
            </View>
            <View style={styles.bannerText}>
              <Text style={styles.bannerTitle}>FREE Premium Available</Text>
              <Text style={styles.bannerSubtitle}>
                Tap to upgrade your account!
              </Text>
            </View>
          </View>
          <Text style={styles.arrowIcon}>→</Text>
        </TouchableOpacity>

        {/* Get Started Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Get Started</Text>
          <View style={styles.getStartedCards}>
            <TouchableOpacity style={styles.getStartedCard}>
              <View style={styles.cardImageContainer}>
                <View style={styles.cardBackground}>
                  <Text style={styles.cardPlantEmoji}>🌿</Text>
                  <View style={styles.scanOverlay}>
                    <View style={styles.scanFrame}>
                      <View style={styles.scanCorner} />
                      <View
                        style={[styles.scanCorner, styles.scanCornerTopRight]}
                      />
                      <View
                        style={[styles.scanCorner, styles.scanCornerBottomLeft]}
                      />
                      <View
                        style={[
                          styles.scanCorner,
                          styles.scanCornerBottomRight,
                        ]}
                      />
                    </View>
                  </View>
                </View>
              </View>
              <Text style={styles.cardText}>
                How to identify plants easily with PlantApp?
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.getStartedCard}>
              <View style={styles.cardImageContainer}>
                <View style={styles.cardBackground}>
                  <Text style={styles.cardPlantEmoji}>🌱</Text>
                </View>
              </View>
              <Text style={styles.cardText}>
                Species and are the different types of plants
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Categories Section */}
        <View style={styles.section}>
          <View style={styles.categoriesGrid}>
            <TouchableOpacity style={styles.categoryCard}>
              <View style={styles.categoryImage}>
                <Text style={styles.categoryEmoji}>🌿</Text>
              </View>
              <Text style={styles.categoryTitle}>Edible Plants</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.categoryCard}>
              <View style={styles.categoryImage}>
                <Text style={styles.categoryEmoji}>🌿</Text>
              </View>
              <Text style={styles.categoryTitle}>Ferns</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.categoryCard}>
              <View style={styles.categoryImage}>
                <Text style={styles.categoryEmoji}>🌵</Text>
              </View>
              <Text style={styles.categoryTitle}>Cacti and Succulents</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.categoryCard}>
              <View style={styles.categoryImage}>
                <Text style={styles.categoryEmoji}>🌴</Text>
              </View>
              <Text style={styles.categoryTitle}>Palms</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Bottom Spacing for Tab Bar */}
        <View style={styles.bottomSpacing} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  scrollView: {
    flex: 1,
  },
  header: {
    paddingHorizontal: theme.spacing.lg,
    paddingTop: theme.spacing.md,
    position: "relative",
  },
  decorativeLeafLeft: {
    position: "absolute",
    top: 20,
    left: 10,
    zIndex: 1,
  },
  decorativeLeafRight: {
    position: "absolute",
    top: 20,
    right: 10,
    zIndex: 1,
  },
  leafEmoji: {
    fontSize: 30,
    opacity: 0.3,
  },
  greetingContainer: {
    paddingTop: theme.spacing.lg,
    paddingBottom: theme.spacing.md,
  },
  greetingText: {
    fontSize: 16,
    color: "#424242",
    marginBottom: 4,
  },
  greetingRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  greetingMain: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#212121",
  },
  weatherIcons: {
    flexDirection: "row",
    gap: 4,
  },
  weatherIcon: {
    fontSize: 16,
  },
  searchContainer: {
    marginBottom: theme.spacing.lg,
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F5F5F5",
    borderRadius: 25,
    paddingHorizontal: theme.spacing.lg,
    paddingVertical: theme.spacing.md,
    height: 50,
  },
  searchIcon: {
    fontSize: 18,
    marginRight: theme.spacing.sm,
    color: "#9E9E9E",
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: "#212121",
  },
  premiumBanner: {
    backgroundColor: "#3E2723",
    marginHorizontal: theme.spacing.lg,
    borderRadius: 16,
    padding: theme.spacing.lg,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: theme.spacing.xl,
  },
  bannerLeft: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  envelopeIcon: {
    position: "relative",
    marginRight: theme.spacing.md,
  },
  envelopeEmoji: {
    fontSize: 24,
    color: "#FFD700",
  },
  notificationBadge: {
    position: "absolute",
    top: -5,
    right: -5,
    backgroundColor: "#F44336",
    borderRadius: 10,
    width: 20,
    height: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  badgeText: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  bannerText: {
    flex: 1,
  },
  bannerTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FFD700",
    marginBottom: 2,
  },
  bannerSubtitle: {
    fontSize: 14,
    color: "#FFFFFF",
  },
  arrowIcon: {
    fontSize: 20,
    color: "#FFD700",
    fontWeight: "bold",
  },
  section: {
    paddingHorizontal: theme.spacing.lg,
    marginBottom: theme.spacing.xl,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#212121",
    marginBottom: theme.spacing.lg,
  },
  getStartedCards: {
    flexDirection: "row",
    gap: theme.spacing.md,
  },
  getStartedCard: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  cardImageContainer: {
    height: 120,
    position: "relative",
  },
  cardBackground: {
    flex: 1,
    backgroundColor: "#E8F5E8",
    justifyContent: "center",
    alignItems: "center",
  },
  cardPlantEmoji: {
    fontSize: 60,
  },
  scanOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  scanFrame: {
    width: 80,
    height: 80,
    position: "relative",
  },
  scanCorner: {
    position: "absolute",
    width: 20,
    height: 20,
    borderLeftWidth: 3,
    borderTopWidth: 3,
    borderColor: "rgba(255,255,255,0.8)",
    top: 0,
    left: 0,
  },
  scanCornerTopRight: {
    borderLeftWidth: 0,
    borderRightWidth: 3,
    top: 0,
    right: 0,
    left: "auto",
  },
  scanCornerBottomLeft: {
    borderTopWidth: 0,
    borderBottomWidth: 3,
    top: "auto",
    bottom: 0,
  },
  scanCornerBottomRight: {
    borderLeftWidth: 0,
    borderTopWidth: 0,
    borderRightWidth: 3,
    borderBottomWidth: 3,
    top: "auto",
    right: 0,
    left: "auto",
    bottom: 0,
  },
  cardText: {
    fontSize: 14,
    fontWeight: "500",
    color: "#424242",
    padding: theme.spacing.md,
    lineHeight: 20,
  },
  categoriesGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: theme.spacing.md,
  },
  categoryCard: {
    width: (width - theme.spacing.lg * 2 - theme.spacing.md) / 2,
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: theme.spacing.md,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  categoryImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#E8F5E8",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: theme.spacing.sm,
  },
  categoryEmoji: {
    fontSize: 30,
  },
  categoryTitle: {
    fontSize: 14,
    fontWeight: "600",
    color: "#424242",
    textAlign: "center",
  },
  bottomSpacing: {
    height: 100,
  },
});

export default HomeScreen;
