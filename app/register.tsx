import { Link } from 'expo-router';
import { useState } from 'react';
import {
    ActivityIndicator,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    StyleSheet,
    TextInput,
    TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { useThemeColor } from '@/hooks/use-theme-color';

export default function RegisterScreen() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const colorScheme = useColorScheme();
  const backgroundColor = useThemeColor({}, 'background');
  const textColor = useThemeColor({}, 'text');
  const tintColor = Colors[colorScheme ?? 'light'].tint;

  const handleRegister = () => {
    // Тільки UI, без логіки
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      // router.replace('/(tabs)');
    }, 1000);
  };

  return (
    <SafeAreaView style={[styles.container, { backgroundColor }]} edges={['top', 'bottom']}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardView}>
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}>
          <ThemedView style={styles.content}>
            {/* Header */}
            <ThemedView style={styles.header}>
              <ThemedText type="title" style={styles.title}>
                Створіть акаунт
              </ThemedText>
              <ThemedText style={styles.subtitle}>
                Заповніть форму для реєстрації
              </ThemedText>
            </ThemedView>

            {/* Form */}
            <ThemedView style={styles.form}>
              <ThemedView style={styles.inputContainer}>
                <ThemedText style={styles.label}>Ім&apos;я</ThemedText>
                <TextInput
                  style={[
                    styles.input,
                    {
                      backgroundColor: colorScheme === 'dark' ? '#1C1C1E' : '#F5F5F5',
                      color: textColor,
                      borderColor: colorScheme === 'dark' ? '#2C2C2E' : '#E0E0E0',
                    },
                  ]}
                  placeholder="Ваше ім&apos;я"
                  placeholderTextColor={colorScheme === 'dark' ? '#8E8E93' : '#999'}
                  value={name}
                  onChangeText={setName}
                  autoCapitalize="words"
                  autoComplete="name"
                />
              </ThemedView>

              <ThemedView style={styles.inputContainer}>
                <ThemedText style={styles.label}>Email</ThemedText>
                <TextInput
                  style={[
                    styles.input,
                    {
                      backgroundColor: colorScheme === 'dark' ? '#1C1C1E' : '#F5F5F5',
                      color: textColor,
                      borderColor: colorScheme === 'dark' ? '#2C2C2E' : '#E0E0E0',
                    },
                  ]}
                  placeholder="example@email.com"
                  placeholderTextColor={colorScheme === 'dark' ? '#8E8E93' : '#999'}
                  value={email}
                  onChangeText={setEmail}
                  keyboardType="email-address"
                  autoCapitalize="none"
                  autoComplete="email"
                />
              </ThemedView>

              <ThemedView style={styles.inputContainer}>
                <ThemedText style={styles.label}>Пароль</ThemedText>
                <TextInput
                  style={[
                    styles.input,
                    {
                      backgroundColor: colorScheme === 'dark' ? '#1C1C1E' : '#F5F5F5',
                      color: textColor,
                      borderColor: colorScheme === 'dark' ? '#2C2C2E' : '#E0E0E0',
                    },
                  ]}
                  placeholder="Мінімум 8 символів"
                  placeholderTextColor={colorScheme === 'dark' ? '#8E8E93' : '#999'}
                  value={password}
                  onChangeText={setPassword}
                  secureTextEntry
                  autoCapitalize="none"
                  autoComplete="password-new"
                />
              </ThemedView>

              <ThemedView style={styles.inputContainer}>
                <ThemedText style={styles.label}>Підтвердити пароль</ThemedText>
                <TextInput
                  style={[
                    styles.input,
                    {
                      backgroundColor: colorScheme === 'dark' ? '#1C1C1E' : '#F5F5F5',
                      color: textColor,
                      borderColor: colorScheme === 'dark' ? '#2C2C2E' : '#E0E0E0',
                    },
                  ]}
                  placeholder="Повторіть пароль"
                  placeholderTextColor={colorScheme === 'dark' ? '#8E8E93' : '#999'}
                  value={confirmPassword}
                  onChangeText={setConfirmPassword}
                  secureTextEntry
                  autoCapitalize="none"
                  autoComplete="password-new"
                />
              </ThemedView>

              <TouchableOpacity
                style={[styles.button, { backgroundColor: tintColor }]}
                onPress={handleRegister}
                disabled={isLoading}>
                {isLoading ? (
                  <ActivityIndicator color="#fff" />
                ) : (
                  <ThemedText style={styles.buttonText}>Зареєструватися</ThemedText>
                )}
              </TouchableOpacity>
            </ThemedView>

            {/* Footer */}
            <ThemedView style={styles.footer}>
              <ThemedText style={styles.footerText}>Вже є акаунт? </ThemedText>
              <Link href="/login" asChild>
                <TouchableOpacity>
                  <ThemedText style={[styles.footerLink, { color: tintColor }]}>
                    Увійти
                  </ThemedText>
                </TouchableOpacity>
              </Link>
            </ThemedView>
          </ThemedView>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  keyboardView: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
  },
  content: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
  },
  header: {
    marginBottom: 32,
    alignItems: 'center',
  },
  title: {
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    opacity: 0.7,
    textAlign: 'center',
  },
  form: {
    width: '100%',
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 8,
  },
  input: {
    height: 52,
    borderRadius: 12,
    paddingHorizontal: 16,
    fontSize: 16,
    borderWidth: 1,
  },
  button: {
    height: 52,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 32,
  },
  footerText: {
    fontSize: 14,
  },
  footerLink: {
    fontSize: 14,
    fontWeight: '600',
  },
});

