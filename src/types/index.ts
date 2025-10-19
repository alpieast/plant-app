// API Response Types
export interface CategoryImage {
  id: number;
  name: string;
  alternativeText: string | null;
  caption: string | null;
  width: number;
  height: number;
  formats: any | null;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: string | null;
  provider: string;
  provider_metadata: any | null;
  createdAt: string;
  updatedAt: string;
}

export interface Category {
  id: number;
  name: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  title: string;
  rank: number;
  image: CategoryImage;
}

export interface Question {
  id: number;
  title: string;
  subtitle: string;
  image_uri: string;
  uri: string;
  order: number;
}

// Redux State Types
export interface OnboardingState {
  isCompleted: boolean;
  isLoading: boolean;
}

export interface CategoriesState {
  categories: Category[];
  isLoading: boolean;
  error: string | null;
}

export interface QuestionsState {
  questions: Question[];
  isLoading: boolean;
  error: string | null;
  selectedCategoryId: number | null;
}

export interface RootState {
  onboarding: OnboardingState;
  categories: CategoriesState;
  questions: QuestionsState;
}

// Navigation Types
export type RootStackParamList = {
  Onboarding: undefined;
  Main: undefined;
};

export type OnboardingStackParamList = {
  Welcome: undefined;
  OnboardingStep1: undefined;
  OnboardingStep2: undefined;
  Paywall: undefined;
};

export type HomeStackParamList = {
  Categories: undefined;
  Questions: { categoryId: number; categoryName: string };
};

export type TabParamList = {
  Home: undefined;
  Diagnose: undefined;
  Scan: undefined;
  MyGarden: undefined;
  Profile: undefined;
};
