import React, { useEffect } from "react";
import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../store";
import { fetchQuestions } from "../../../store/slices/questionsSlice";
import { theme } from "../../../theme";
import QuestionCard from "./QuestionCard";

interface GetStartedSectionProps {
  hidden?: boolean;
}

const GetStartedSection: React.FC<GetStartedSectionProps> = ({
  hidden = false,
}: GetStartedSectionProps) => {
  const { questions, isLoading, error } = useSelector(
    (state: RootState) => state.questions
  );
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchQuestions());
  }, []);

  if (isLoading) {
    return <ActivityIndicator size="large" color={theme.colors.primary} />;
  }

  if (error) {
    return <Text>{error}</Text>;
  }

  return (
    <View style={hidden ? styles.hidden : styles.section}>
      <Text style={styles.sectionTitle}>Get Started</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {questions.map((question) => {
          return <QuestionCard key={question.id} question={question} />;
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  section: {
    paddingHorizontal: theme.spacing.lg,
    marginBottom: theme.spacing.xl,
  },
  sectionTitle: {
    fontSize: theme.fontSize.md,
    fontWeight: "bold",
    color: theme.colors.text.main,
    marginBottom: theme.spacing.lg,
  },
  hidden: {
    height: 0,
  },
});

export default GetStartedSection;
