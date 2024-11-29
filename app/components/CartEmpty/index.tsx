import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Platform } from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import { useRouter } from 'expo-router';
import { useFonts } from '@expo-google-fonts/roboto';
import { Bangers_400Regular } from '@expo-google-fonts/bangers';
export default function CartEmpty() {
  const router = useRouter();

  const [fontsLoaded] = useFonts({
    Bangers_400Regular
  });

  return (
    <View style={styles.container}>
      <Feather name="shopping-cart" size={124} color="black" />
      <Text style={styles.title}>Oops! Nenhum item no carrinho.</Text>
      <Text style={styles.description}>
        Temos ótimas opções para sua escolha!
      </Text>
      <TouchableOpacity style={styles.button} onPress={() => router.push('/' as never)}>
        <Text style={styles.buttonText}>Que tal fazer um pedido?</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 200,
    height: 200,
    objectFit: 'contain',
    marginBottom: 30
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f8f9fa',
    padding: 20,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: '500',
    textAlign: 'center',
    marginBottom: 10,
    color: "#323232",
    fontFamily: Platform.select({
      android: 'Bangers_400Regular',
      ios: 'Bangers_400Regular',
    }),
  },
  description: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
    marginBottom: 30,
    fontFamily: Platform.select({
      android: 'Bangers_400Regular',
      ios: 'Bangers_400Regular',
    }),
  },
  button: {
    backgroundColor: '#FF3C00',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  buttonText: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
    fontFamily: Platform.select({
      android: 'Bangers_400Regular',
      ios: 'Bangers_400Regular',
    }),
  },
});
