import { Link } from "expo-router";
import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { Colors } from "@/constants/theme";
import { useColorScheme } from "@/hooks/use-color-scheme";

export default function HomeScreen() {
  const colorScheme = useColorScheme();
  const tintColor = Colors[colorScheme ?? 'light'].tint;

  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: "center", alignItems: "center", padding: 20 }}
    >
      <ThemedView style={styles.container}>
        <ThemedText type="title" style={styles.title}>
          Головна сторінка
        </ThemedText>
        
        <ThemedView style={styles.linksContainer}>
          <Link href="/login" asChild>
            <TouchableOpacity style={[styles.button, { backgroundColor: tintColor }]}>
              <ThemedText style={styles.buttonText}>Увійти</ThemedText>
            </TouchableOpacity>
          </Link>

          <Link href="/register" asChild>
            <TouchableOpacity style={[styles.button, { backgroundColor: tintColor }]}>
              <ThemedText style={styles.buttonText}>Зареєструватися</ThemedText>
            </TouchableOpacity>
          </Link>
        </ThemedView>
      </ThemedView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
  },
  title: {
    marginBottom: 40,
    textAlign: 'center',
  },
  linksContainer: {
    width: '100%',
    gap: 16,
  },
  button: {
    height: 52,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});