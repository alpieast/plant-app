import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
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

const OnboardingStep2Screen: React.FC<Props> = ({ navigation }) => {
  const handleNext = () => {
    navigation.navigate("Paywall");
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.content}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Get plant </Text>
            <View style={styles.brushContainer}>
              <Text style={styles.titleBold}>care guides</Text>
              <Image
                source={require("../../../assets/images/onboarding/brush2.png")}
                style={styles.brushImage}
                resizeMode="contain"
              />
            </View>
          </View>
        </View>

        {/* Central Plant Image */}
        <View style={styles.imageContainer}>
          <Image
            source={require("../../../assets/images/onboarding/onboardingStep2Image.png")}
            style={styles.image}
            resizeMode="contain"
          />
        </View>

        {/* Button and Pagination */}

        <View style={styles.bottomSection}>
          {/* Pagination Dots */}
          <Button
            title="Continue"
            onPress={handleNext}
            size="medium"
            fullWidth
          />
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
  },
  safeArea: {
    flex: 1,
    backgroundColor: "#F5FBFF",
  },
  content: {
    flex: 1,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  header: {
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.lg,
    alignItems: "flex-start",
    paddingHorizontal: theme.spacing.lg,
  },
  title: {
    fontSize: theme.fontSize.xxxl,
    fontWeight: "bold",
    color: theme.colors.text.primary,
    textAlign: "left",
    marginBottom: theme.spacing.sm,
  },
  titleBold: {
    fontSize: theme.fontSize.xxxl,
    fontWeight: "900",
    color: theme.colors.text.main,
    textAlign: "left",
    marginBottom: theme.spacing.sm,
  },
  subtitle: {
    fontSize: theme.fontSize.md,
    color: theme.colors.text.main,
    textAlign: "left",
  },
  imageContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    height: "100%",
    width: "100%",
  },
  bottomSection: {
    paddingBottom: theme.spacing.smm,
    alignItems: "center",
    paddingHorizontal: theme.spacing.lg,
  },
  pagination: {
    flexDirection: "row",
    gap: theme.spacing.sm,
    paddingTop: theme.spacing.sm,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: theme.borderRadius.sm,
    backgroundColor: theme.colors.divider,
  },
  activeDot: {
    backgroundColor: theme.colors.black.primary,
  },
  brushContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  brushImage: {
    height: 13,
    width: 152,
    position: "absolute",
    top: 40,
    left: 0,
    bottom: 0,
  },
});

export default OnboardingStep2Screen;
