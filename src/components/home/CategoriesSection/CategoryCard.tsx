import React from "react";
import {
  Dimensions,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { theme } from "../../../theme";
import { Category } from "../../../types";

const { width } = Dimensions.get("window");

interface CategoryCardProps {
  category: Category;
  onPress?: (category: Category) => void;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category, onPress }) => {
  const handleCardPress = () => {
    if (onPress) {
      onPress(category);
    }
  };

  // Calculate card width: (screen width - padding - margins) / 2
  const cardWidth = (width - theme.spacing.lg * 2 - theme.spacing.sm) / 2;

  return (
    <TouchableOpacity
      style={[styles.card, { width: cardWidth }]}
      onPress={handleCardPress}
      activeOpacity={0.8}
    >
      <View style={styles.cardContent}>
        <Text style={styles.cardTitle} numberOfLines={8}>
          {category.title}
        </Text>
        <ImageBackground
          source={{ uri: category.image.url }}
          style={styles.cardImage}
          imageStyle={styles.imageStyle}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    height: 152,
    backgroundColor: theme.colors.white,
    borderRadius: 16,
    marginBottom: theme.spacing.sm,
    shadowColor: theme.colors.black.primary,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  cardContent: {
    flex: 1,
  },
  cardTitle: {
    width: "60%",
    position: "absolute",
    top: theme.spacing.md,
    left: theme.spacing.md,
    fontSize: 14,
    fontWeight: "bold",
    color: theme.colors.text.primary,
    lineHeight: 18,
    borderRadius: 8,
    alignSelf: "flex-start",
    zIndex: 100,
  },
  cardImage: {
    flex: 1,
    borderRadius: 12,
  },
  imageStyle: {
    borderRadius: 12,
  },
});

export default CategoryCard;
