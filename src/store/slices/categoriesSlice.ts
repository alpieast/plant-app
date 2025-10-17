import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ApiService } from "../../services/api";
import { CategoriesState, Category } from "../../types";

const initialState: CategoriesState = {
  categories: [],
  isLoading: false,
  error: null,
};

// Async thunk to fetch categories
export const fetchCategories = createAsyncThunk(
  "categories/fetchCategories",
  async (_, { rejectWithValue }) => {
    try {
      const categories = await ApiService.getCategories();
      return categories;
    } catch (error) {
      return rejectWithValue(
        error instanceof Error ? error.message : "Failed to fetch categories"
      );
    }
  }
);

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(
        fetchCategories.fulfilled,
        (state, action: PayloadAction<Category[]>) => {
          state.isLoading = false;
          state.categories = action.payload;
        }
      )
      .addCase(fetchCategories.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });
  },
});

export const { clearError } = categoriesSlice.actions;
export default categoriesSlice.reducer;
