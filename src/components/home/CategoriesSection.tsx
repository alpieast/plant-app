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

const CategoriesSection: React.FC = () => {
  const categories = [
    { id: 1, name: "Edible Plants", emoji: "🌿" },
    { id: 2, name: "Ferns", emoji: "🌿" },
    { id: 3, name: "Cacti and Succulents", emoji: "🌵" },
    { id: 4, name: "Palms", emoji: "🌴" },
  ];

  const handleCategoryPress = (categoryId: number) => {
    console.log(`Category ${categoryId} pressed`);
  };

  return (
    <View style={styles.section}>
      <View style={styles.categoriesGrid}>
        {categories.map((category) => (
          <TouchableOpacity
            key={category.id}
            style={styles.categoryCard}
            onPress={() => handleCategoryPress(category.id)}
          >
            <View style={styles.categoryImage}>
              <Text style={styles.categoryEmoji}>{category.emoji}</Text>
            </View>
            <Text style={styles.categoryTitle}>{category.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  section: {
    paddingHorizontal: theme.spacing.lg,
    marginBottom: theme.spacing.xl,
  },
  categoriesGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: theme.spacing.md,
  },
  categoryCard: {
    width: (width - theme.spacing.lg * 2 - theme.spacing.md) / 2,
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: theme.spacing.md,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  categoryImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#E8F5E8",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: theme.spacing.sm,
  },
  categoryEmoji: {
    fontSize: 30,
  },
  categoryTitle: {
    fontSize: 14,
    fontWeight: "600",
    color: "#424242",
    textAlign: "center",
  },
});

export default CategoriesSection;
