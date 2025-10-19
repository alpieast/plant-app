import { theme } from "@/src/theme";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
interface PremiumBannerProps {}

const PremiumBanner: React.FC<PremiumBannerProps> = () => {
  const handlePress = () => {
    console.log("Premium banner pressed");
  };

  const CustomEnvelopeIcon: React.FC = () => (
    <View style={styles.envelopeIconContainer}>
      <Image
        source={require("../../../assets/images/icons/mail.png")}
        style={styles.mailIcon}
      />
      <View style={styles.notificationBadge}>
        <Text style={styles.notificationBadgeText}>1</Text>
      </View>
    </View>
  );

  return (
    <TouchableOpacity
      style={styles.premiumBanner}
      onPress={handlePress}
      activeOpacity={0.8}
    >
      <View style={styles.bannerLeftContainer}>
        <CustomEnvelopeIcon />

        <View style={styles.bannerTextContainer}>
          <Text style={styles.bannerTitle}>FREE Premium Available</Text>
          <Text style={styles.bannerSubtitle}>
            Tap to upgrade your account!
          </Text>
        </View>
      </View>
      <Text style={styles.arrowIcon}>›</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  premiumBanner: {
    backgroundColor: theme.colors.black.secondary,
    margin: theme.spacing.lg,
    borderRadius: theme.borderRadius.md,
    paddingVertical: theme.spacing.mdm,
    paddingHorizontal: theme.spacing.md,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 64,
  },
  bannerLeftContainer: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },

  mailIcon: {
    width: 52,
    height: 44,
    marginRight: 12,
  },

  envelopeIconContainer: {
    position: "relative",
    marginRight: 12,
    width: 52,
    height: 44,
  },
  envelopeBody: {
    backgroundColor: theme.colors.gold.primary,
    width: 52,
    height: 44,
    borderRadius: 6,
    borderTopWidth: 10,
    overflow: "hidden",
  },
  notificationBadge: {
    position: "absolute",
    top: -5,
    right: 0,
    backgroundColor: theme.colors.red.primary,
    borderRadius: 10,
    width: 20,
    height: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  notificationBadgeText: {
    fontSize: theme.fontSize.xs,
    fontWeight: "medium",
    color: theme.colors.white,
    lineHeight: theme.fontSize.lg,
  },

  bannerTextContainer: {
    flex: 1,
  },

  bannerTitle: {
    fontSize: theme.fontSize.md,
    fontWeight: "bold",
    color: theme.colors.gold.primary,
  },
  bannerSubtitle: {
    fontSize: theme.fontSize.sm,
    color: theme.colors.gold.primary,
    marginTop: 2,
    fontWeight: "medium",
  },

  arrowIcon: {
    fontSize: theme.fontSize.xxl,
    color: theme.colors.gold.primary,
    lineHeight: theme.fontSize.xxl,
    fontWeight: "medium",
  },
});

export default PremiumBanner;
