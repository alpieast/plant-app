import React from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { theme } from "../../theme";

const { width } = Dimensions.get("window");

const GetStartedSection: React.FC = () => {
  const handleCardPress = (cardType: "identify" | "species") => {
    console.log(`${cardType} card pressed`);
  };

  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Get Started</Text>
      <View style={styles.getStartedCards}>
        <TouchableOpacity
          style={styles.getStartedCard}
          onPress={() => handleCardPress("identify")}
        >
          <View style={styles.cardImageContainer}>
            <View style={styles.cardBackground}>
              <Text style={styles.cardPlantEmoji}>🌿</Text>
              <View style={styles.scanOverlay}>
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
              </View>
            </View>
          </View>
          <Text style={styles.cardText}>
            How to identify plants easily with PlantApp?
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.getStartedCard}
          onPress={() => handleCardPress("species")}
        >
          <View style={styles.cardImageContainer}>
            <View style={styles.cardBackground}>
              <Text style={styles.cardPlantEmoji}>🌱</Text>
            </View>
          </View>
          <Text style={styles.cardText}>
            Species and are the different types of plants
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  section: {
    paddingHorizontal: theme.spacing.lg,
    marginBottom: theme.spacing.xl,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#212121",
    marginBottom: theme.spacing.lg,
  },
  getStartedCards: {
    flexDirection: "row",
    gap: theme.spacing.md,
  },
  getStartedCard: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  cardImageContainer: {
    height: 120,
    position: "relative",
  },
  cardBackground: {
    flex: 1,
    backgroundColor: "#E8F5E8",
    justifyContent: "center",
    alignItems: "center",
  },
  cardPlantEmoji: {
    fontSize: 60,
  },
  scanOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  scanFrame: {
    width: 80,
    height: 80,
    position: "relative",
  },
  scanCorner: {
    position: "absolute",
    width: 20,
    height: 20,
    borderLeftWidth: 3,
    borderTopWidth: 3,
    borderColor: "rgba(255,255,255,0.8)",
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
  cardText: {
    fontSize: 14,
    fontWeight: "500",
    color: "#424242",
    padding: theme.spacing.md,
    lineHeight: 20,
  },
});

export default GetStartedSection;
