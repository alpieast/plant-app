import { LeafIcon, ScanIcon, SpeedMeterIcon } from "@/src/components/icons";
import { FeatureCard } from "@/src/components/onboarding/FeatureCard";
import SubscriptionOption from "@/src/components/onboarding/SubscriptionOption";
import { StackNavigationProp } from "@react-navigation/stack";
import React, { useState } from "react";
import {
  Dimensions,
  ImageBackground,
  ScrollView,
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

const features = [
  {
    icon: <ScanIcon size={theme.fontSize.md} fill={theme.colors.white} />,
    title: "Unlimited",
    subtitle: "Plant Identify",
  },
  {
    icon: <SpeedMeterIcon size={theme.fontSize.md} fill={theme.colors.white} />,
    title: "Faster",
    subtitle: "Process",
  },
  {
    icon: <LeafIcon size={theme.fontSize.md} fill={theme.colors.white} />,
    title: "Detailed",
    subtitle: "Plant care",
  },
];

const { height } = Dimensions.get("window");

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
    <SafeAreaView style={styles.container} edges={["left", "right", "bottom"]}>
      <ImageBackground
        source={require("../../../assets/images/backgrounds/paywallBackground.png")}
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        {/* Close Button */}
        <TouchableOpacity style={styles.closeButton} onPress={handleClose}>
          <View style={styles.closeButtonInner}>
            <Text style={styles.closeIcon}>✕</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.header}>
          <View style={styles.titleContainer}>
            <Text style={styles.titleBold}>PlantApp </Text>
            <Text style={styles.title}>Premium</Text>
          </View>

          <Text style={styles.subtitle}>Access All Features</Text>
        </View>
      </ImageBackground>

      <ScrollView style={styles.content}>
        {/* Feature Cards */}
        <ScrollView
          horizontal
          style={styles.featureCards}
          showsHorizontalScrollIndicator={false}
        >
          {features.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </ScrollView>

        {/* Subscription Options */}
        <View style={styles.subscriptionSection}>
          <SubscriptionOption
            title="1 Month"
            subtitle="$2.99/month, auto renewable"
            isSelected={selectedPlan === "monthly"}
            onPress={() => setSelectedPlan("monthly")}
          />

          <SubscriptionOption
            title="1 Year"
            subtitle="First 3 days free, then $529,99/year"
            isSelected={selectedPlan === "yearly"}
            onPress={() => setSelectedPlan("yearly")}
            saveBadge="Save 50%"
          />
        </View>

        {/* Subscribe Button */}
        <View style={styles.buttonSection}>
          <Button
            title="Try free for 3 days"
            onPress={handleSubscribe}
            size="medium"
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
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.green.paywall,
  },
  backgroundImage: {
    height: height * 0.45,
    width: "100%",
    justifyContent: "flex-end",
    alignItems: "flex-start",
  },
  header: {
    alignItems: "flex-start",
    paddingHorizontal: theme.spacing.lg,
    paddingBottom: theme.spacing.lg,
  },
  closeButton: {
    position: "absolute",
    top: 50,
    right: 20,
    zIndex: 10,
  },
  closeButtonInner: {
    width: 32,
    height: 32,
    borderRadius: theme.borderRadius.xl,
    backgroundColor: "rgba(255,255,255,0.2)",
    justifyContent: "center",
    alignItems: "center",
  },
  closeIcon: {
    fontSize: theme.fontSize.md,
    color: theme.colors.white,
    fontWeight: "bold",
  },
  content: {
    flex: 1,
    backgroundColor: theme.colors.green.paywall,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  title: {
    fontSize: theme.fontSize.xxl,
    fontWeight: "medium",
    color: theme.colors.white,
    textAlign: "center",
    marginBottom: theme.spacing.sm,
  },
  titleBold: {
    fontSize: theme.fontSize.xxl,
    fontWeight: "bold",
    color: theme.colors.white,
    textAlign: "center",
    marginBottom: theme.spacing.sm,
  },
  subtitle: {
    fontSize: theme.fontSize.md,
    color: "rgba(255,255,255,0.8)",
    textAlign: "center",
    fontWeight: "light",
  },
  featureCards: {
    paddingBottom: theme.spacing.lg,
    paddingLeft: theme.spacing.lg,
  },
  subscriptionSection: {
    paddingHorizontal: theme.spacing.lg,
  },
  buttonSection: {
    paddingHorizontal: theme.spacing.lg,
  },
  subscribeButton: {
    width: "100%",
    marginBottom: theme.spacing.md,
  },
  disclaimerText: {
    fontSize: theme.fontSize.xxs,
    color: "rgba(255,255,255,0.5)",
    textAlign: "center",
  },
  footer: {
    alignItems: "center",
    paddingVertical: theme.spacing.md,
  },
  footerText: {
    fontSize: theme.fontSize.xs,
    color: "rgba(255,255,255,0.7)",
    textAlign: "center",
  },
});

export default PaywallScreen;
