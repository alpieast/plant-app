# PlantApp - React Native

A modern React Native mobile application built with Expo that demonstrates plant identification capabilities, featuring a comprehensive onboarding flow and interactive home experience. The app showcases advanced React Native development skills including state management, API integration, and pixel-perfect UI implementation.

## 🌱 Features

### Onboarding Flow

- **Welcome Screen**: Beautiful introduction with plant-themed background and call-to-action
- **Step 1 - Photo Identification**: Interactive tutorial showing how to take photos for plant identification
- **Step 2 - Learn & Grow**: Educational content about plant care and app features
- **Paywall Screen**: Premium subscription options with feature highlights and pricing plans

### Home Experience

- **Categories Screen**: Grid layout displaying plant categories fetched from API
- **Interactive Questions**: Quiz system with questions and answers
- **Search Functionality**: Real-time search across categories
- **Premium Features**: Subscription management and feature highlights
- **Tab Navigation**: Easy access to Diagnose, My Garden, and Profile sections

## 🛠 Technology Stack

- **Framework**: React Native with Expo SDK 54
- **Language**: TypeScript (Strict mode enabled)
- **State Management**: Redux Toolkit with async thunks
- **Navigation**: React Navigation v7 (Stack & Tab navigators)
- **API Integration**: Native fetch with comprehensive error handling
- **Storage**: AsyncStorage for persistent onboarding state
- **Styling**: Custom theme system with consistent design tokens
- **Icons**: Custom SVG icons and Expo Vector Icons
- **Platform Support**: iOS, Android, and Web

## 📱 App Architecture

```
src/
├── components/              # Reusable UI components
│   ├── Button.tsx          # Customizable button with variants
│   ├── Card.tsx            # Flexible card component
│   ├── LoadingSpinner.tsx  # Loading state indicator
│   ├── icons.tsx           # Custom SVG icon components
│   ├── home/               # Home-specific components
│   │   ├── CategoriesSection/
│   │   ├── GetStartedSection/
│   │   ├── HomeHeader.tsx
│   │   └── PremiumBanner.tsx
│   └── onboarding/         # Onboarding-specific components
│       ├── FeatureCard.tsx
│       └── SubscriptionOption.tsx
├── navigation/             # Navigation configuration
│   ├── AppNavigator.tsx    # Root navigation logic
│   ├── OnboardingStack.tsx # Onboarding flow navigation
│   └── TabNavigator.tsx    # Main app tab navigation
├── screens/               # Screen components
│   ├── onboarding/        # Onboarding flow screens
│   │   ├── WelcomeScreen.tsx
│   │   ├── OnboardingScreenStep1.tsx
│   │   ├── OnboardingScreenStep2.tsx
│   │   └── PaywallScreen.tsx
│   └── home/              # Home flow screens
│       ├── HomeScreen.tsx
│       ├── DiagnoseScreen.tsx
│       ├── MyGardenScreen.tsx
│       └── ProfileScreen.tsx
├── services/              # API service layer
│   └── api.ts             # Centralized API calls
├── store/                 # Redux store configuration
│   ├── index.ts           # Store setup
│   └── slices/            # Redux slices
│       ├── onboardingSlice.ts
│       ├── categoriesSlice.ts
│       └── questionsSlice.ts
├── theme/                 # Design system
│   ├── colors.ts          # Color palette
│   ├── spacing.ts         # Spacing & typography scale
│   └── index.ts           # Theme exports
└── types/                 # TypeScript definitions
    └── index.ts           # Global type definitions
```

## 🎨 Design System

The app implements a comprehensive design system featuring:

### Colors

- **Primary**: Green theme (#28AF6E) with light/dark variants
- **Secondary**: Orange accent (#FF6F00) for highlights
- **Semantic Colors**: Success, error, warning, info states
- **Text Colors**: Primary, secondary, disabled, hint variations
- **Background**: Light grey (#F7F7F7) for main screens

### Typography

- **Font Sizes**: xs (10px) to xxl (32px) scale
- **Font Weights**: Light, medium, bold variations
- **Consistent Hierarchy**: Clear visual hierarchy throughout

### Spacing & Layout

- **Spacing Scale**: 4px to 48px consistent spacing
- **Border Radius**: 4px to 50px for different component types
- **Component Variants**: Multiple sizes and styles for reusability

## 🔧 Setup & Installation

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Expo CLI (`npm install -g @expo/cli`)
- iOS Simulator (macOS) or Android Emulator
- Expo Go app for physical device testing

### Installation Steps

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd PlantApp
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**

   ```bash
   npm start
   # or
   yarn start
   ```

4. **Run on device/simulator**

   ```bash
   # iOS
   npm run ios
   # or
   yarn ios

   # Android
   npm run android
   # or
   yarn android

   # Web
   npm run web
   # or
   yarn web
   ```

## 🚀 Running the App

### Development Mode

```bash
# Start Expo development server
npm start

# Run on specific platform
npm run ios      # iOS Simulator
npm run android  # Android Emulator
npm run web      # Web browser
```

### Production Build

```bash
# Build for production
expo build:ios     # iOS App Store
expo build:android # Google Play Store
expo build:web     # Web deployment
```

## 📊 API Integration

The app integrates with real plant data APIs:

### Endpoints

- **Categories API**: `https://dummy-api-jtg6bessta-ey.a.run.app/getCategories`
- **Questions API**: `https://dummy-api-jtg6bessta-ey.a.run.app/getQuestions`

### API Features

- **Error Handling**: Comprehensive error catching and user feedback
- **Loading States**: Visual indicators during API calls
- **Type Safety**: Full TypeScript integration with API responses
- **Retry Logic**: Automatic retry mechanisms for failed requests
- **Caching**: Efficient data management with Redux

## 🗂 State Management

Redux Toolkit powers the app's state management with three main slices:

### Onboarding Slice

- Manages onboarding completion status
- Persistent storage with AsyncStorage
- Loading states for smooth transitions

### Categories Slice

- Handles plant categories data
- Loading and error states
- Async thunk for API integration

### Questions Slice

- Manages quiz questions and answers
- Selected category tracking
- Question filtering and display

## 📱 App Flow

1. **First Launch**: User sees onboarding flow with welcome screen
2. **Onboarding Steps**: Interactive tutorial through app features
3. **Paywall**: Premium subscription options (can be skipped)
4. **Home Screen**: Main app experience with categories and questions
5. **Tab Navigation**: Access to Diagnose, My Garden, and Profile
6. **Persistent State**: App remembers user's progress and preferences

## 🎯 Key Features Implemented

- ✅ **Modern Architecture**: Clean folder structure with separation of concerns
- ✅ **TypeScript**: Strict typing throughout the application
- ✅ **State Management**: Redux Toolkit with async thunks and persistence
- ✅ **Navigation**: Type-safe navigation with React Navigation v7
- ✅ **API Integration**: Robust error handling and loading states
- ✅ **Design System**: Consistent theming and reusable components
- ✅ **Responsive Design**: Adapts to different screen sizes and orientations
- ✅ **Performance**: Optimized rendering and efficient state updates
- ✅ **Cross-Platform**: Works seamlessly on iOS, Android, and Web
- ✅ **User Experience**: Smooth animations and intuitive interactions

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the root directory:

```
API_BASE_URL=https://dummy-api-jtg6bessta-ey.a.run.app
```

### TypeScript Configuration

The app uses strict TypeScript configuration with:

- Strict null checks
- No implicit any
- Strict function types
- Full IntelliSense support

### Expo Configuration

The `app.json` file contains:

- App metadata and icons
- Platform-specific settings
- Splash screen configuration
- Build and deployment settings

## 📝 Development Notes

- **Component Architecture**: All components are functional with TypeScript
- **State Management**: Follows Redux Toolkit best practices
- **Navigation**: Type-safe with proper parameter typing
- **API Calls**: Include comprehensive error handling and loading states
- **Styling**: Uses StyleSheet for optimal performance
- **Accessibility**: Proper accessibility labels and navigation
- **Performance**: Memoized components and optimized re-renders

## 🚀 Performance Optimizations

- **Lazy Loading**: Screens loaded on demand
- **Memoization**: React.memo for expensive components
- **Efficient Lists**: Optimized FlatList rendering
- **Image Optimization**: Proper image sizing and caching
- **Bundle Splitting**: Code splitting for better performance
- **Redux Optimization**: Efficient state updates and selectors

## 🧪 Testing

The app includes testing setup for:

```bash
# Run tests
npm test

# Run tests with coverage
npm run test:coverage
```

## 📄 License

This project is a production-ready React Native application showcasing modern mobile app development practices and plant identification technology.

---

**Built with ❤️ using React Native, Expo, TypeScript, and Redux Toolkit**

_PlantApp - Where technology meets nature_ 🌿
