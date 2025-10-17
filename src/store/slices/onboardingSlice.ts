import AsyncStorage from "@react-native-async-storage/async-storage";
import { Action, createSlice, Dispatch, PayloadAction } from "@reduxjs/toolkit";
import { OnboardingState } from "../../types";

const initialState: OnboardingState = {
  isCompleted: false,
  isLoading: false,
};

const onboardingSlice = createSlice({
  name: "onboarding",
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setCompleted: (state, action: PayloadAction<boolean>) => {
      state.isCompleted = action.payload;
    },
  },
});

export const { setLoading, setCompleted } = onboardingSlice.actions;

// Async thunk to check onboarding status
export const checkOnboardingStatus =
  () => async (dispatch: Dispatch<Action>) => {
    try {
      dispatch(setLoading(true));
      const isCompleted = await AsyncStorage.getItem("onboarding_completed");
      dispatch(setCompleted(isCompleted === "true"));
    } catch (error) {
      console.error("Error checking onboarding status:", error);
    } finally {
      dispatch(setLoading(false));
    }
  };

// Async thunk to complete onboarding
export const completeOnboarding = () => async (dispatch: Dispatch<Action>) => {
  try {
    dispatch(setLoading(true));
    await AsyncStorage.setItem("onboarding_completed", "true");
    dispatch(setCompleted(true));
  } catch (error) {
    console.error("Error completing onboarding:", error);
  } finally {
    dispatch(setLoading(false));
  }
};

export default onboardingSlice.reducer;
