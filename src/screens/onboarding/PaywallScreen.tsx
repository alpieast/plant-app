import { StackNavigationProp } from "@react-navigation/stack";
import React, { useState } from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch } from "react-redux";
import Button from "../../components/Button";
import { AppDispatch } from "../../store";
import { completeOnboarding } from "../../store/slices/onboardingSlice";
import { theme } from "../../theme";
import { OnboardingStackParamList } from "../../types";

type PaywallScreenNavigationProp = StackNavigationProp<
  OnboardingStackParamList,
  "Paywall"
>;

interface Props {
  navigation: PaywallScreenNavigationProp;
}

const { width, height } = Dimensions.get("window");

const PaywallScreen: React.FC<Props> = ({ navigation }) => {
  const dispatch = useDispatch<AppDispatch>();
  const [selectedPlan, setSelectedPlan] = useState<"monthly" | "yearly">(
    "yearly"
  );

  const handleClose = () => {
    dispatch(completeOnboarding());
  };

  const handleSubscribe = () => {
    // Handle subscription logic here
    dispatch(completeOnboarding());
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        {/* Background */}
        <View style={styles.backgroundImage}>
          <View style={styles.scanFrame}>
            <Text style={styles.plantEmoji}>🌿</Text>
          </View>
        </View>

        {/* Close Button */}
        <TouchableOpacity style={styles.closeButton} onPress={handleClose}>
          <Text style={styles.closeIcon}>✕</Text>
        </TouchableOpacity>

        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>PlantApp Premium</Text>
          <Text style={styles.subtitle}>Access All Features</Text>
        </View>

        {/* Feature Cards */}
        <View style={styles.featureCards}>
          <View style={styles.featureCard}>
            <View style={styles.featureIcon}>
              <Text style={styles.iconText}>📷</Text>
            </View>
            <Text style={styles.featureTitle}>Unlimited</Text>
            <Text style={styles.featureSubtitle}>Plant Identify</Text>
          </View>

          <View style={styles.featureCard}>
            <View style={styles.featureIcon}>
              <Text style={styles.iconText}>⚡</Text>
            </View>
            <Text style={styles.featureTitle}>Faster</Text>
            <Text style={styles.featureSubtitle}>Process</Text>
          </View>

          <View style={styles.featureCard}>
            <View style={styles.featureIcon}>
              <Text style={styles.iconText}>📊</Text>
            </View>
            <Text style={styles.featureTitle}>Detailed</Text>
            <Text style={styles.featureSubtitle}>Reports</Text>
          </View>
        </View>

        {/* Subscription Options */}
        <View style={styles.subscriptionSection}>
          <TouchableOpacity
            style={[
              styles.subscriptionOption,
              selectedPlan === "monthly" && styles.selectedOption,
            ]}
            onPress={() => setSelectedPlan("monthly")}
          >
            <View style={styles.optionLeft}>
              <View
                style={[
                  styles.radioButton,
                  selectedPlan === "monthly" && styles.selectedRadio,
                ]}
              >
                {selectedPlan === "monthly" && <View style={styles.radioDot} />}
              </View>
              <View style={styles.optionText}>
                <Text style={styles.optionTitle}>1 Month</Text>
                <Text style={styles.optionSubtitle}>
                  $2.99/month, auto renewable
                </Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.subscriptionOption,
              selectedPlan === "yearly" && styles.selectedOption,
            ]}
            onPress={() => setSelectedPlan("yearly")}
          >
            <View style={styles.optionLeft}>
              <View
                style={[
                  styles.radioButton,
                  selectedPlan === "yearly" && styles.selectedRadio,
                ]}
              >
                {selectedPlan === "yearly" && <View style={styles.radioDot} />}
              </View>
              <View style={styles.optionText}>
                <Text style={styles.optionTitle}>1 Year</Text>
                <Text style={styles.optionSubtitle}>
                  First 3 days free, then $529,99/year
                </Text>
              </View>
            </View>
            <View style={styles.saveBadge}>
              <Text style={styles.saveText}>Save 50%</Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* Subscribe Button */}
        <View style={styles.buttonSection}>
          <Button
            title="Try free for 3 days"
            onPress={handleSubscribe}
            size="large"
            style={styles.subscribeButton}
          />

          <Text style={styles.disclaimerText}>
            After the 3-day free trial period you'll be charged ₺274.99 per year
            unless you cancel before the trial expires. Yearly Subscription is
            Auto-Renewable.
          </Text>
        </View>

        {/* Footer Links */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>Terms • Privacy • Restore</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1B5E20",
  },
  content: {
    flex: 1,
    paddingHorizontal: theme.spacing.lg,
  },
  backgroundImage: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: height * 0.4,
    backgroundColor: "#2E7D32",
    justifyContent: "center",
    alignItems: "center",
  },
  scanFrame: {
    width: 200,
    height: 200,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "rgba(255,255,255,0.3)",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(255,255,255,0.1)",
  },
  plantEmoji: {
    fontSize: 80,
  },
  closeButton: {
    position: "absolute",
    top: 50,
    right: 20,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "rgba(0,0,0,0.3)",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 10,
  },
  closeIcon: {
    fontSize: 20,
    color: "#FFFFFF",
    fontWeight: "bold",
  },
  header: {
    alignItems: "center",
    paddingTop: height * 0.25,
    paddingBottom: theme.spacing.xl,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#FFFFFF",
    textAlign: "center",
    marginBottom: theme.spacing.sm,
  },
  subtitle: {
    fontSize: 16,
    color: "#FFFFFF",
    textAlign: "center",
  },
  featureCards: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: theme.spacing.xl,
    paddingHorizontal: theme.spacing.sm,
  },
  featureCard: {
    backgroundColor: "rgba(255,255,255,0.1)",
    borderRadius: 16,
    padding: theme.spacing.md,
    alignItems: "center",
    flex: 1,
    marginHorizontal: 4,
  },
  featureIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "rgba(255,255,255,0.2)",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: theme.spacing.sm,
  },
  iconText: {
    fontSize: 24,
  },
  featureTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FFFFFF",
    textAlign: "center",
    marginBottom: 4,
  },
  featureSubtitle: {
    fontSize: 12,
    color: "rgba(255,255,255,0.8)",
    textAlign: "center",
  },
  subscriptionSection: {
    marginBottom: theme.spacing.xl,
  },
  subscriptionOption: {
    backgroundColor: "rgba(255,255,255,0.1)",
    borderRadius: 16,
    padding: theme.spacing.lg,
    marginBottom: theme.spacing.md,
    borderWidth: 2,
    borderColor: "transparent",
  },
  selectedOption: {
    borderColor: "#4CAF50",
    backgroundColor: "rgba(76,175,80,0.1)",
  },
  optionLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  radioButton: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: "rgba(255,255,255,0.5)",
    marginRight: theme.spacing.md,
    justifyContent: "center",
    alignItems: "center",
  },
  selectedRadio: {
    borderColor: "#4CAF50",
  },
  radioDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: "#4CAF50",
  },
  optionText: {
    flex: 1,
  },
  optionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 4,
  },
  optionSubtitle: {
    fontSize: 14,
    color: "rgba(255,255,255,0.8)",
  },
  saveBadge: {
    position: "absolute",
    top: 12,
    right: 12,
    backgroundColor: "#4CAF50",
    borderRadius: 12,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  saveText: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  buttonSection: {
    marginBottom: theme.spacing.xl,
  },
  subscribeButton: {
    width: "100%",
    marginBottom: theme.spacing.lg,
  },
  disclaimerText: {
    fontSize: 12,
    color: "rgba(255,255,255,0.7)",
    textAlign: "center",
    lineHeight: 16,
  },
  footer: {
    alignItems: "center",
    paddingBottom: theme.spacing.lg,
  },
  footerText: {
    fontSize: 14,
    color: "rgba(255,255,255,0.8)",
    textAlign: "center",
  },
});

export default PaywallScreen;
