import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { PaperProvider } from 'react-native-paper';

import Navigation from './src/components/navigation/Navigation';
// import LoginScreen from './src/components/forms/LoginScreen';
export default function App() {

//   const [showLandingPage, setShowLandingPage] = useState(true);

//   const handleStart = () => {
//     setShowLandingPage(false);
//   };

  return (
    <PaperProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <SafeAreaView style={styles.container}>
          <StatusBar style="auto" />

          <NavigationContainer>
            {/* {showLandingPage ? (
              <LoginScreen onStart={handleStart} />
            ) : (
              <Navigation />
            )} */}
            <Navigation />
          </NavigationContainer>
        </SafeAreaView>
      </GestureHandlerRootView>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({ 
  container: {
    flex: 1
  },
});
