import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "../../components/Button";
import { theme } from "../../theme";
import { OnboardingStackParamList } from "../../types";

type WelcomeScreenNavigationProp = StackNavigationProp<
  OnboardingStackParamList,
  "Welcome"
>;

interface Props {
  navigation: WelcomeScreenNavigationProp;
}

const { width, height } = Dimensions.get("window");

const WelcomeScreen: React.FC<Props> = ({ navigation }) => {
  const handleNext = () => {
    navigation.navigate("OnboardingStep1");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        {/* Background gradient */}
        <View style={styles.gradientBackground} />

        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>Welcome to PlantApp</Text>
          <Text style={styles.subtitle}>
            Identify more than 3000+ plants and 88% accuracy.
          </Text>
        </View>

        {/* Central Plant Image */}
        <View style={styles.plantContainer}>
          <View style={styles.plantImage}>
            <Text style={styles.plantEmoji}>🌿</Text>
          </View>

          {/* Feature Icons */}
          <View style={styles.featureIcons}>
            <View style={[styles.iconContainer, styles.iconPurple]}>
              <Text style={styles.iconText}>💧</Text>
            </View>
            <View style={[styles.iconContainer, styles.iconOrange]}>
              <Text style={styles.iconText}>☀️</Text>
            </View>
            <View style={[styles.iconContainer, styles.iconBlue]}>
              <Text style={styles.iconText}>💧</Text>
            </View>
          </View>

          {/* Reflection effect */}
          <View style={styles.reflection} />
        </View>

        {/* Button */}
        <View style={styles.buttonContainer}>
          <Button
            title="Get Started"
            onPress={handleNext}
            size="large"
            style={styles.button}
          />

          {/* Terms text */}
          <Text style={styles.termsText}>
            By tapping next, you are agreeing to PlantID
          </Text>
          <Text style={styles.termsLink}>Terms of Use & Privacy Policy.</Text>
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
    height: height * 0.4,
    backgroundColor: "#E3F2FD",
    opacity: 0.3,
  },
  header: {
    alignItems: "center",
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.lg,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#2E7D32",
    textAlign: "center",
    marginBottom: theme.spacing.sm,
  },
  subtitle: {
    fontSize: 16,
    color: "#424242",
    textAlign: "center",
    lineHeight: 22,
  },
  plantContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  plantImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: "#E8F5E8",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  plantEmoji: {
    fontSize: 80,
  },
  featureIcons: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },
  iconContainer: {
    position: "absolute",
    width: 50,
    height: 50,
    borderRadius: 25,
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
    top: 60,
    left: 40,
  },
  iconOrange: {
    backgroundColor: "#FF9800",
    top: 40,
    right: 50,
  },
  iconBlue: {
    backgroundColor: "#2196F3",
    bottom: 80,
    right: 30,
  },
  iconText: {
    fontSize: 20,
    color: "#FFFFFF",
  },
  reflection: {
    position: "absolute",
    bottom: -20,
    width: 180,
    height: 20,
    backgroundColor: "rgba(0,0,0,0.1)",
    borderRadius: 90,
    opacity: 0.3,
  },
  buttonContainer: {
    paddingVertical: theme.spacing.xl,
    alignItems: "center",
  },
  button: {
    width: "100%",
    marginBottom: theme.spacing.lg,
  },
  termsText: {
    fontSize: 12,
    color: "#9E9E9E",
    textAlign: "center",
    marginBottom: theme.spacing.xs,
  },
  termsLink: {
    fontSize: 12,
    color: "#424242",
    textAlign: "center",
    textDecorationLine: "underline",
  },
});

export default WelcomeScreen;
