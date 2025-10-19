import React, { useEffect } from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../store";
import { fetchCategories } from "../../../store/slices/categoriesSlice";
import { theme } from "../../../theme";
import CategoryCard from "./CategoryCard";

interface CategoriesSectionProps {
  searchText?: string;
}

const CategoriesSection: React.FC<CategoriesSectionProps> = ({
  searchText = "",
}: CategoriesSectionProps) => {
  const { categories, isLoading, error } = useSelector(
    (state: RootState) => state.categories
  );
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const handleCategoryPress = (category: any) => {
    console.log(`Category ${category.id} pressed:`, category.title);
  };

  if (isLoading) {
    return (
      <View style={styles.section}>
        <ActivityIndicator size="large" color={theme.colors.primary} />
      </View>
    );
  }

  if (error) {
    return <View style={styles.emptySection} />;
  }

  return (
    <View style={styles.section}>
      <View style={styles.categoriesGrid}>
        {categories
          .filter((category) =>
            category.title.toLowerCase().includes(searchText.toLowerCase())
          )
          .map((category) => (
            <CategoryCard
              key={category.id}
              category={category}
              onPress={handleCategoryPress}
            />
          ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  section: {
    paddingHorizontal: theme.spacing.lg,
  },
  categoriesGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  emptySection: {
    height: 0,
  },
});

export default CategoriesSection;
