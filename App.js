import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-expo";
import { NavigationContainer } from '@react-navigation/native';
import Login from './Screens/LoginScreen/Login';
import * as SecureStore from "expo-secure-store";
import { useFonts } from 'expo-font';

// Load environment variables
import { CLERK_PUBLISHABLE_KEY } from "@env";
import TabNavigation from './Navigations/TabNavigation';


const tokenCache = {
  async getToken(key) {
    try {
      return SecureStore.getItemAsync(key);
    } catch (err) {
      return null;
    }
  },
  async saveToken(key, value) {
    try {
      return SecureStore.setItemAsync(key, value);
    } catch (err) {
      return;
    }
  },
};

export default function App() {

  const [fontsLoaded] = useFonts({
    'outfit': require('./assets/fonts/Outfit-Regular.ttf'),
    'outfit-medium': require('./assets/fonts/Outfit-Medium.ttf'),
    'outfit-bold': require('./assets/fonts/Outfit-Bold.ttf'),
  });

  return (
   <ClerkProvider
      publishableKey={CLERK_PUBLISHABLE_KEY}
      tokenCache={tokenCache}
      >
    <View style={styles.container}>
        {/* Sign In Component */}
        <SignedIn>
          <NavigationContainer>
             <TabNavigation />
          </NavigationContainer>
        </SignedIn>
        
        {/* Sign out Component */}
        <SignedOut>
           <Login />
        </SignedOut>
      <StatusBar style="auto" />
    </View>
   </ClerkProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
