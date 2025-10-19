import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { theme } from "../../theme";

interface SubscriptionOptionProps {
  title: string;
  subtitle: string;
  isSelected: boolean;
  onPress: () => void;
  saveBadge?: string;
}

const SubscriptionOption: React.FC<SubscriptionOptionProps> = ({
  title,
  subtitle,
  isSelected,
  onPress,
  saveBadge,
}) => {
  return (
    <TouchableOpacity
      style={[styles.subscriptionOption, isSelected && styles.selectedOption]}
      onPress={onPress}
    >
      <View style={styles.optionLeft}>
        <View style={[styles.radioButton, isSelected && styles.selectedRadio]}>
          {isSelected && <View style={styles.radioDot} />}
        </View>
        <View style={styles.optionText}>
          <Text style={styles.optionTitle}>{title}</Text>
          <Text style={styles.optionSubtitle}>{subtitle}</Text>
        </View>
      </View>
      {saveBadge && (
        <View style={styles.saveBadge}>
          <Text style={styles.saveText}>{saveBadge}</Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  subscriptionOption: {
    backgroundColor: "rgba(255,255,255,0.1)",
    borderRadius: 14,
    paddingHorizontal: theme.spacing.md,
    marginBottom: theme.spacing.md,
    borderWidth: 2,
    borderColor: "rgba(255,255,255,0.08)",
    position: "relative",
    height: 60,
    justifyContent: "center",
  },
  selectedOption: {
    backgroundColor: "transparent",
    borderColor: theme.colors.primary,
  },
  optionLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  radioButton: {
    width: 24,
    height: 24,
    borderRadius: theme.borderRadius.lg,
    marginRight: theme.spacing.md,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(255,255,255,0.08)",
  },
  selectedRadio: {
    borderColor: theme.colors.primary,
    backgroundColor: theme.colors.primary,
  },
  radioDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: theme.colors.white,
  },
  optionText: {
    flex: 1,
  },
  optionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: theme.colors.white,
    marginBottom: 4,
  },
  optionSubtitle: {
    fontSize: theme.fontSize.xs,
    color: "rgba(255,255,255,0.8)",
  },
  saveBadge: {
    position: "absolute",
    top: 0,
    right: 0,
    backgroundColor: theme.colors.primary,
    borderBottomLeftRadius: theme.borderRadius.xxl,
    borderTopRightRadius: theme.borderRadius.lg,
    paddingHorizontal: theme.spacing.sm,
    paddingVertical: theme.spacing.xs,
  },
  saveText: {
    fontSize: theme.fontSize.xxs,
    fontWeight: "bold",
    color: theme.colors.white,
  },
});

export default SubscriptionOption;
