import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "../../components/Button";
import { theme } from "../../theme";
import { OnboardingStackParamList } from "../../types";

type Onboarding1ScreenNavigationProp = StackNavigationProp<
  OnboardingStackParamList,
  "OnboardingStep1"
>;

interface Props {
  navigation: Onboarding1ScreenNavigationProp;
}

const { width, height } = Dimensions.get("window");

const OnboardingStep1Screen: React.FC<Props> = ({ navigation }) => {
  const handleNext = () => {
    navigation.navigate("OnboardingStep2");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>
            Take a photo to <Text style={styles.highlight}>identify</Text> the
            plant!
          </Text>
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

            {/* Camera Interface */}
            <View style={styles.cameraInterface}>
              {/* Background */}
              <View style={styles.cameraBackground}>
                <Text style={styles.plantEmoji}>🌿</Text>
              </View>

              {/* Camera Controls */}
              <View style={styles.cameraControls}>
                {/* Top Controls */}
                <View style={styles.topControls}>
                  <View style={styles.flashButton}>
                    <Text style={styles.controlIcon}>⚡</Text>
                  </View>
                  <View style={styles.closeButton}>
                    <Text style={styles.controlIcon}>✕</Text>
                  </View>
                </View>

                {/* Scan Frame */}
                <View style={styles.scanFrame}>
                  <View style={styles.scanCorner} />
                  <View
                    style={[styles.scanCorner, styles.scanCornerTopRight]}
                  />
                  <View
                    style={[styles.scanCorner, styles.scanCornerBottomLeft]}
                  />
                  <View
                    style={[styles.scanCorner, styles.scanCornerBottomRight]}
                  />
                </View>

                {/* Bottom Controls */}
                <View style={styles.bottomControls}>
                  <View style={styles.galleryButton}>
                    <Text style={styles.controlIcon}>🖼️</Text>
                  </View>
                  <View style={styles.shutterButton}>
                    <View style={styles.shutterInner} />
                  </View>
                  <View style={styles.infoButton}>
                    <Text style={styles.controlIcon}>ℹ️</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>

          {/* Plant Leaves Breaking Out */}
          <View style={styles.breakingLeaves}>
            <Text style={styles.leafEmoji}>🍃</Text>
            <Text style={styles.leafEmoji2}>🍃</Text>
            <Text style={styles.leafEmoji3}>🍃</Text>
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
            <View style={[styles.dot, styles.activeDot]} />
            <View style={styles.dot} />
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
  header: {
    alignItems: "center",
    paddingTop: theme.spacing.lg,
    paddingBottom: theme.spacing.xl,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#2E7D32",
    textAlign: "center",
  },
  highlight: {
    textDecorationLine: "underline",
    textDecorationColor: "#424242",
  },
  phoneContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  phoneFrame: {
    width: width * 0.7,
    height: width * 0.7 * 1.8,
    backgroundColor: "#000000",
    borderRadius: 30,
    padding: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.3,
    shadowRadius: 12,
    elevation: 8,
  },
  phoneStatusBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 22,
    borderTopRightRadius: 22,
  },
  phoneTime: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000000",
  },
  phoneStatusIcons: {
    flexDirection: "row",
    gap: 4,
  },
  statusIcon: {
    fontSize: 12,
  },
  cameraInterface: {
    flex: 1,
    backgroundColor: "#E3F2FD",
    borderRadius: 22,
    position: "relative",
    overflow: "hidden",
  },
  cameraBackground: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#E3F2FD",
  },
  plantEmoji: {
    fontSize: 120,
  },
  cameraControls: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  topControls: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  flashButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#FFD700",
    justifyContent: "center",
    alignItems: "center",
  },
  closeButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "rgba(0,0,0,0.3)",
    justifyContent: "center",
    alignItems: "center",
  },
  scanFrame: {
    position: "absolute",
    top: "50%",
    left: "50%",
    width: 200,
    height: 200,
    marginTop: -100,
    marginLeft: -100,
  },
  scanCorner: {
    position: "absolute",
    width: 20,
    height: 20,
    borderLeftWidth: 3,
    borderTopWidth: 3,
    borderColor: "#FFFFFF",
    top: 0,
    left: 0,
  },
  scanCornerTopRight: {
    borderLeftWidth: 0,
    borderRightWidth: 3,
    top: 0,
    right: 0,
    left: "auto",
  },
  scanCornerBottomLeft: {
    borderTopWidth: 0,
    borderBottomWidth: 3,
    top: "auto",
    bottom: 0,
  },
  scanCornerBottomRight: {
    borderLeftWidth: 0,
    borderTopWidth: 0,
    borderRightWidth: 3,
    borderBottomWidth: 3,
    top: "auto",
    right: 0,
    left: "auto",
    bottom: 0,
  },
  bottomControls: {
    position: "absolute",
    bottom: 20,
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  galleryButton: {
    width: 50,
    height: 50,
    borderRadius: 8,
    backgroundColor: "rgba(0,0,0,0.3)",
    justifyContent: "center",
    alignItems: "center",
  },
  shutterButton: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 3,
    borderColor: "#E0E0E0",
  },
  shutterInner: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#FFFFFF",
    borderWidth: 2,
    borderColor: "#E0E0E0",
  },
  infoButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "rgba(0,0,0,0.3)",
    justifyContent: "center",
    alignItems: "center",
  },
  controlIcon: {
    fontSize: 16,
    color: "#FFFFFF",
  },
  breakingLeaves: {
    position: "absolute",
    top: -20,
    left: 0,
    right: 0,
    height: 40,
  },
  leafEmoji: {
    position: "absolute",
    fontSize: 30,
    top: 0,
    left: "20%",
  },
  leafEmoji2: {
    position: "absolute",
    fontSize: 25,
    top: 5,
    left: "50%",
  },
  leafEmoji3: {
    position: "absolute",
    fontSize: 28,
    top: 2,
    right: "20%",
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

export default OnboardingStep1Screen;
