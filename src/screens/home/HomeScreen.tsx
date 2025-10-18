import { theme } from "@/src/theme";
import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CategoriesSection from "../../components/home/CategoriesSection";
import GetStartedSection from "../../components/home/GetStartedSection";
import HomeHeader from "../../components/home/HomeHeader";
import PremiumBanner from "../../components/home/PremiumBanner";

const HomeScreen: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <HomeHeader />
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        <PremiumBanner />
        <GetStartedSection />
        <CategoriesSection />

        {/* Bottom Spacing for Tab Bar */}
        <View style={styles.bottomSpacing} />
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
