import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { theme } from "../../theme";

const PremiumBanner: React.FC = () => {
  const handlePress = () => {
    // Handle premium banner press
    console.log("Premium banner pressed");
  };

  return (
    <TouchableOpacity style={styles.premiumBanner} onPress={handlePress}>
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
  );
};

const styles = StyleSheet.create({
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
});

export default PremiumBanner;
