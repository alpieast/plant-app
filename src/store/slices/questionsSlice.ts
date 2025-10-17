import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { ApiService } from '../../services/api';
import { Question, QuestionsState } from '../../types';

const initialState: QuestionsState = {
  questions: [],
  isLoading: false,
  error: null,
  selectedCategoryId: null,
};

// Async thunk to fetch questions
export const fetchQuestions = createAsyncThunk(
  'questions/fetchQuestions',
  async (_, { rejectWithValue }) => {
    try {
      const questions = await ApiService.getQuestions();
      return questions;
    } catch (error) {
      return rejectWithValue(error instanceof Error ? error.message : 'Failed to fetch questions');
    }
  }
);

const questionsSlice = createSlice({
  name: 'questions',
  initialState,
  reducers: {
    setSelectedCategory: (state, action: PayloadAction<number>) => {
      state.selectedCategoryId = action.payload;
    },
    clearError: (state) => {
      state.error = null;
    },
    clearQuestions: (state) => {
      state.questions = [];
      state.selectedCategoryId = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchQuestions.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchQuestions.fulfilled, (state, action: PayloadAction<Question[]>) => {
        state.isLoading = false;
        state.questions = action.payload;
      })
      .addCase(fetchQuestions.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });
  },
});

export const { setSelectedCategory, clearError, clearQuestions } = questionsSlice.actions;
export default questionsSlice.reducer;
