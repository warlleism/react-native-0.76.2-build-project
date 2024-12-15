import { router } from "expo-router";
import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import useConfigStore from "./context/config/Provider";
import { Bangers_400Regular, useFonts } from "@expo-google-fonts/bangers";

export default function NotFoundScreen() {

  const { theme } = useConfigStore();

  const [fontsLoaded] = useFonts({
    Bangers_400Regular
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={[styles.container, { backgroundColor: theme ? '#313131' : '#fff' }]}>
      <Image style={styles.logo} source={require('../assets/logos/404.png')} />
      <Text style={[styles.title, { color: theme ? '#fff' : '#000' }]}>Oops! Página não encontrada.</Text>
      <Text style={[styles.description, { color: theme ? '#fff' : '#000' }]}>
        A página que você está procurando não existe ou foi removida.
      </Text>
      <TouchableOpacity style={styles.button} onPress={() => router?.push('/' as never)}>
        <Text style={styles.buttonText}>Voltar para a página inicial</Text>
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
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#FF3C00',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
