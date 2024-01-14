import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-expo";
import Login from './Screens/LoginScreen/Login';
import * as SecureStore from "expo-secure-store";

// Load environment variables
import { CLERK_PUBLISHABLE_KEY } from "@env";


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
  return (
   <ClerkProvider
      publishableKey={CLERK_PUBLISHABLE_KEY}
      tokenCache={tokenCache}
      >
    <View style={styles.container}>
        {/* Sign In Component */}
        <SignedIn>
          <Text>You are Signed in</Text>
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
    marginTop: 50
  },
});
