import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-expo";
import Login from './Screens/LoginScreen/Login';
import * as SecureStore from "expo-secure-store";

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
      publishableKey='pk_test_cG9ldGljLXdhcnRob2ctMzQuY2xlcmsuYWNjb3VudHMuZGV2JA'
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
