import CategoriesSection from "@/src/components/home/CategoriesSection/CategoriesSection";
import GetStartedSection from "@/src/components/home/GetStartedSection/GetStartedSection";
import HomeHeader from "@/src/components/home/HomeHeader";
import PremiumBanner from "@/src/components/home/PremiumBanner";
import { theme } from "@/src/theme";
import React, { useState } from "react";
import { ScrollView, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const HomeScreen: React.FC = () => {
  const [searchText, setSearchText] = useState("");

  const handleSearch = (text: string) => {
    setSearchText(text);
  };

  return (
    <SafeAreaView style={styles.container}>
      <HomeHeader searchText={searchText} onSearch={handleSearch} />
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        <PremiumBanner />
        <GetStartedSection hidden={searchText.length > 0} />
        <CategoriesSection searchText={searchText} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.grey.light,
  },
  scrollView: {
    flex: 1,
  },
  bottomSpacing: {
    height: 100,
  },
});

export default HomeScreen;
