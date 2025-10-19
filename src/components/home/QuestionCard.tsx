import React from "react";
import {
  Alert,
  ImageBackground,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { theme } from "../../theme";
import { Question } from "../../types";

interface QuestionCardProps {
  question: Question;
}

const QuestionCard: React.FC<QuestionCardProps> = ({ question }) => {
  const handleCardPress = async () => {
    try {
      const supported = await Linking.canOpenURL(question.uri);
      if (supported) {
        await Linking.openURL(question.uri);
      } else {
        Alert.alert("Error", "Cannot open this URL");
      }
    } catch (error) {
      Alert.alert("Error", "Failed to open URL");
    }
  };

  return (
    <TouchableOpacity
      style={styles.card}
      onPress={handleCardPress}
      activeOpacity={0.9}
    >
      <ImageBackground
        source={{ uri: question.image_uri }}
        style={styles.cardBackground}
        imageStyle={styles.cardImage}
      >
        <View style={styles.cardTitleContainer}>
          <Text style={styles.cardTitle} numberOfLines={2}>
            {question.title}
          </Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 240,
    height: 164,
    borderRadius: theme.borderRadius.xl,
    overflow: "hidden",
    shadowColor: theme.colors.black.primary,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
    marginRight: theme.spacing.md,
  },
  cardBackground: {
    flex: 1,
    justifyContent: "flex-end",
  },
  cardImage: {
    borderRadius: theme.borderRadius.xl,
  },
  cardTitleContainer: {
    height: 64,
    backgroundColor: "rgba(26, 32, 26, 0.1)",
    justifyContent: "center",
  },
  cardTitle: {
    fontSize: theme.fontSize.sm,
    fontWeight: "regular",
    color: theme.colors.white,
    lineHeight: 20,
    paddingHorizontal: theme.spacing.md,
  },
});

export default QuestionCard;
