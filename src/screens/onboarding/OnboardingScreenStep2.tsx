import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "../../components/Button";
import { theme } from "../../theme";
import { OnboardingStackParamList } from "../../types";

type OnboardingStep2ScreenNavigationProp = StackNavigationProp<
  OnboardingStackParamList,
  "OnboardingStep2"
>;

interface Props {
  navigation: OnboardingStep2ScreenNavigationProp;
}

const { width, height } = Dimensions.get("window");

const OnboardingStep2Screen: React.FC<Props> = ({ navigation }) => {
  const handleNext = () => {
    navigation.navigate("Paywall");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        {/* Background gradient */}
        <View style={styles.gradientBackground} />

        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>Get plant care guides</Text>
        </View>

        {/* Phone Mockup */}
        <View style={styles.phoneContainer}>
          <View style={styles.phoneFrame}>
            {/* Phone Status Bar */}
            <View style={styles.phoneStatusBar}>
              <Text style={styles.phoneTime}>9:41</Text>
              <View style={styles.phoneStatusIcons}>
                <Text style={styles.statusIcon}>📶</Text>
                <Text style={styles.statusIcon}>📶</Text>
                <Text style={styles.statusIcon}>🔋</Text>
              </View>
            </View>

            {/* Plant Details Screen */}
            <View style={styles.plantDetailsScreen}>
              {/* Plant Image */}
              <View style={styles.plantImageContainer}>
                <Text style={styles.plantEmoji}>🌿</Text>
              </View>

              {/* Plant Info */}
              <View style={styles.plantInfo}>
                <Text style={styles.categoryText}>Flowering Plants</Text>
                <Text style={styles.plantName}>Red Moth Orchids</Text>

                {/* Care Indicators */}
                <View style={styles.careIndicators}>
                  <View style={styles.careItem}>
                    <Text style={styles.careIcon}>❤️</Text>
                    <Text style={styles.careText}>Medium</Text>
                  </View>
                  <View style={styles.careItem}>
                    <Text style={styles.careIcon}>☀️</Text>
                    <Text style={styles.careText}>Full Sun</Text>
                  </View>
                  <View style={styles.careItem}>
                    <Text style={styles.careIcon}>💧</Text>
                    <Text style={styles.careText}>3-5 days</Text>
                  </View>
                </View>

                {/* Plant Overview */}
                <View style={styles.overviewSection}>
                  <Text style={styles.overviewTitle}>Plant Overview</Text>
                  <Text style={styles.overviewText}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    do eiusmod tempor incididunt ut labore.
                  </Text>
                </View>

                {/* Plant Attributes */}
                <View style={styles.attributesSection}>
                  <View style={styles.attributeItem}>
                    <Text style={styles.attributeIcon}>🍃</Text>
                    <Text style={styles.attributeLabel}>Plant Type</Text>
                    <Text style={styles.attributeValue}>Perennial</Text>
                  </View>
                  <View style={styles.attributeItem}>
                    <Text style={styles.attributeIcon}>📏</Text>
                    <Text style={styles.attributeLabel}>Mature Size</Text>
                    <Text style={styles.attributeValue}>15"</Text>
                  </View>
                  <View style={styles.attributeItem}>
                    <Text style={styles.attributeIcon}>☀️</Text>
                    <Text style={styles.attributeLabel}>Sun Exposure</Text>
                    <Text style={styles.attributeValue}>Full Sun</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>

          {/* Floating Cards */}
          <View style={styles.floatingCards}>
            <View style={[styles.floatingCard, styles.card1]}>
              <Text style={styles.cardEmoji}>🌱</Text>
            </View>
            <View style={[styles.floatingCard, styles.card2]}>
              <Text style={styles.cardEmoji}>🌿</Text>
            </View>
            <View style={[styles.floatingCard, styles.card3]}>
              <Text style={styles.cardEmoji}>🌵</Text>
            </View>
          </View>

          {/* Floating Icons */}
          <View style={styles.floatingIcons}>
            <View style={[styles.floatingIcon, styles.iconPurple]}>
              <Text style={styles.iconText}>💧</Text>
            </View>
            <View style={[styles.floatingIcon, styles.iconOrange]}>
              <Text style={styles.iconText}>☀️</Text>
            </View>
          </View>
        </View>

        {/* Button and Pagination */}
        <View style={styles.bottomSection}>
          <Button
            title="Continue"
            onPress={handleNext}
            size="medium"
            style={styles.button}
          />

          {/* Pagination Dots */}
          <View style={styles.pagination}>
            <View style={styles.dot} />
            <View style={[styles.dot, styles.activeDot]} />
            <View style={styles.dot} />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  content: {
    flex: 1,
    paddingHorizontal: theme.spacing.lg,
  },
  gradientBackground: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: height * 0.3,
    backgroundColor: "#E8F5E8",
    opacity: 0.3,
  },
  header: {
    alignItems: "center",
    paddingTop: theme.spacing.lg,
    paddingBottom: theme.spacing.lg,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#424242",
    textAlign: "center",
  },
  phoneContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  phoneFrame: {
    width: width * 0.65,
    height: width * 0.65 * 1.8,
    backgroundColor: "#000000",
    borderRadius: 25,
    padding: 6,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.3,
    shadowRadius: 12,
    elevation: 8,
    transform: [{ rotate: "5deg" }],
  },
  phoneStatusBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 12,
    paddingVertical: 6,
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 19,
    borderTopRightRadius: 19,
  },
  phoneTime: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#000000",
  },
  phoneStatusIcons: {
    flexDirection: "row",
    gap: 3,
  },
  statusIcon: {
    fontSize: 10,
  },
  plantDetailsScreen: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    borderRadius: 19,
    padding: 12,
  },
  plantImageContainer: {
    height: 120,
    backgroundColor: "#F5F5F5",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 12,
  },
  plantEmoji: {
    fontSize: 60,
  },
  plantInfo: {
    flex: 1,
  },
  categoryText: {
    fontSize: 12,
    color: "#9E9E9E",
    marginBottom: 4,
  },
  plantName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#424242",
    marginBottom: 12,
  },
  careIndicators: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  careItem: {
    alignItems: "center",
    flex: 1,
  },
  careIcon: {
    fontSize: 16,
    marginBottom: 4,
  },
  careText: {
    fontSize: 10,
    color: "#424242",
    textAlign: "center",
  },
  overviewSection: {
    marginBottom: 16,
  },
  overviewTitle: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#424242",
    marginBottom: 6,
  },
  overviewText: {
    fontSize: 10,
    color: "#9E9E9E",
    lineHeight: 14,
  },
  attributesSection: {
    flex: 1,
  },
  attributeItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  attributeIcon: {
    fontSize: 12,
    marginRight: 8,
  },
  attributeLabel: {
    fontSize: 10,
    color: "#9E9E9E",
    flex: 1,
  },
  attributeValue: {
    fontSize: 10,
    color: "#424242",
    fontWeight: "500",
  },
  floatingCards: {
    position: "absolute",
    top: 20,
    right: -30,
    width: 60,
    height: 120,
  },
  floatingCard: {
    position: "absolute",
    width: 40,
    height: 50,
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  card1: {
    top: 0,
    transform: [{ rotate: "-10deg" }],
  },
  card2: {
    top: 25,
    transform: [{ rotate: "5deg" }],
  },
  card3: {
    top: 50,
    transform: [{ rotate: "-5deg" }],
  },
  cardEmoji: {
    fontSize: 20,
  },
  floatingIcons: {
    position: "absolute",
    top: 0,
    right: 0,
    left: 0,
    height: 100,
  },
  floatingIcon: {
    position: "absolute",
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  iconPurple: {
    backgroundColor: "#9C27B0",
    top: 20,
    right: 60,
  },
  iconOrange: {
    backgroundColor: "#FF9800",
    top: 40,
    right: 20,
  },
  iconText: {
    fontSize: 16,
    color: "#FFFFFF",
  },
  bottomSection: {
    paddingVertical: theme.spacing.xl,
    alignItems: "center",
  },
  button: {
    width: "100%",
    marginBottom: theme.spacing.lg,
  },
  pagination: {
    flexDirection: "row",
    gap: 8,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#E0E0E0",
  },
  activeDot: {
    backgroundColor: "#000000",
  },
});

export default OnboardingStep2Screen;
