import { theme } from "@/src/theme";
import { StyleSheet, Text, View } from "react-native";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
}

export const FeatureCard = ({ icon, title, subtitle }: FeatureCardProps) => {
  return (
    <View style={styles.featureCard}>
      <View style={styles.icon}>{icon}</View>

      <View>
        <Text style={styles.featureTitle}>{title}</Text>
        <Text style={styles.featureSubtitle}>{subtitle}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  featureCard: {
    backgroundColor: "rgba(255,255,255,0.08)",
    borderRadius: theme.borderRadius.lg,
    padding: theme.spacing.md,
    alignItems: "flex-start",
    justifyContent: "space-between",
    flex: 1,
    marginHorizontal: theme.spacing.xs,
    height: 130,
    width: 156,
  },
  icon: {
    width: 36,
    height: 36,
    borderRadius: theme.borderRadius.md,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.24)",
  },
  featureTitle: {
    fontSize: theme.fontSize.xl,
    fontWeight: "bold",
    color: "#FFFFFF",
    textAlign: "left",
    marginBottom: theme.spacing.xs,
  },
  featureSubtitle: {
    fontSize: theme.fontSize.xs,
    color: "rgba(255,255,255,0.7)",
    textAlign: "left",
  },
});
