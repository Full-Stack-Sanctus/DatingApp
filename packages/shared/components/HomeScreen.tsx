import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
  Platform,
  Dimensions,
} from 'react-native';

export default function HomeScreen() {
  const [screenHeight, setScreenHeight] = useState(
    Dimensions.get("window").height
  );

  useEffect(() => {
    if (Platform.OS === "web") {
      const updateSize = () => setScreenHeight(window.innerHeight);
      updateSize();

      window.addEventListener("resize", updateSize);
      return () => window.removeEventListener("resize", updateSize);
    }
  }, []);

  return (
    <ImageBackground
      source={{
        uri: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&w=1000&q=80',
      }}
      style={[styles.background, { minHeight: screenHeight }]} // <-- NUMBER ONLY ✔
      resizeMode="cover"
    >
      <View style={styles.header}>
        <Text style={styles.logo}>Empire Date</Text>

        <View style={styles.authButtons}>
          <TouchableOpacity style={styles.signInButton}>
            <Text style={styles.signInText}>Sign In</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.signUpButton}>
            <Text style={styles.signUpText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.centerContent}>
        <Text style={styles.welcomeText}>Welcome to Empire Date 💞</Text>
        <Text style={styles.subText}>
          {Platform.OS === "web"
            ? "Find your perfect match on the web."
            : "Meet amazing people on mobile."}
        </Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
    justifyContent: "space-between",
  },

  header: {
    width: "100%",
    paddingTop: Platform.OS === "web" ? 40 : 60,
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  logo: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#fff",
    letterSpacing: 1,
  },

  authButtons: {
    flexDirection: "row",
    alignItems: "center",
  },

  signInButton: {
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#fff",
    marginRight: 10,
  },

  signUpButton: {
    paddingVertical: 6,
    paddingHorizontal: 18,
    borderRadius: 20,
    backgroundColor: "#fff",
  },

  signInText: {
    color: "#fff",
    fontWeight: "500",
  },

  signUpText: {
    color: "#d63384",
    fontWeight: "600",
  },

  centerContent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },

  welcomeText: {
    fontSize: 32,
    fontWeight: "700",
    color: "#fff",
    textAlign: "center",
    marginBottom: 10,
  },

  subText: {
    fontSize: 18,
    color: "#f1f1f1",
    textAlign: "center",
  },
});
