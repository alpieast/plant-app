import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
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

const WelcomeScreen: React.FC<Props> = ({ navigation }) => {
  const handleNext = () => {
    navigation.navigate("OnboardingStep1");
  };

  return (
    <ImageBackground
      source={require("../../../assets/images/backgrounds/welcomeBackground.png")}
      style={styles.container}
      resizeMode="cover"
    >
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.content}>
          {/* Header */}
          <View style={styles.header}>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>Welcome to </Text>
              <Text style={styles.titleBold}>PlantApp</Text>
            </View>
            <Text style={styles.subtitle}>
              Identify more than 3000+ plants and 88% accuracy.
            </Text>
          </View>

          {/* Central Plant Image */}
          <View style={styles.plantContainer}>
            <Image
              source={require("../../../assets/images/welcomeImage.png")}
              style={styles.plantImage}
              resizeMode="contain"
            />
          </View>

          {/* Button */}
          <Button title="Get Started" onPress={handleNext} size="medium" />

          <View style={styles.termsContainer}>
            <Text style={styles.termsText}>
              By tapping next, you are agreeing to PlantID{" "}
            </Text>
            <View style={styles.termsLinkContainer}>
              <TouchableOpacity onPress={() => {}}>
                <Text style={styles.termsLink}>Terms of Use</Text>
              </TouchableOpacity>
              <Text style={styles.termsText}> & </Text>
              <TouchableOpacity onPress={() => {}}>
                <Text style={styles.termsLink}>Privacy Policy</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
    backgroundColor: "transparent",
  },
  content: {
    flex: 1,
    paddingHorizontal: theme.spacing.lg,
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
  },
  title: {
    fontSize: theme.fontSize.xxxl,
    fontWeight: "medium",
    color: theme.colors.text.primary,
    textAlign: "left",
    marginBottom: theme.spacing.sm,
  },
  titleBold: {
    fontSize: theme.fontSize.xxxl,
    fontWeight: "bold",
    color: "#212121",
    textAlign: "left",
    marginBottom: theme.spacing.sm,
    lineHeight: 38,
  },
  subtitle: {
    fontSize: theme.fontSize.md,
    color: theme.colors.text.main,
    textAlign: "left",
    lineHeight: 22,
  },
  plantContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  plantImage: {
    height: "100%",
  },
  buttonContainer: {
    alignItems: "center",
  },
  button: {
    width: "100%",
    marginBottom: theme.spacing.lg,
    backgroundColor: "#28AF6E",
    borderRadius: 12,
    paddingVertical: 16,
  },
  termsContainer: {
    paddingVertical: theme.spacing.md,
    alignItems: "center",
    justifyContent: "center",
  },
  termsLinkContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  termsText: {
    fontSize: theme.fontSize.xs,
    color: theme.colors.text.hint,
    textAlign: "center",
  },
  termsLink: {
    fontSize: theme.fontSize.xs,
    color: theme.colors.text.hint,
    textDecorationLine: "underline",
  },
});

export default WelcomeScreen;
