import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Platform } from 'react-native';
import { useRouter } from 'expo-router';
import BackButton from '@/app/components/backButton';
import useConfigStore from '@/app/context/config/Provider';
import { Bangers_400Regular, useFonts } from '@expo-google-fonts/bangers';
import LottieView from 'lottie-react-native';
export default function CartEmptyScreen() {

  const router = useRouter();
  const { theme } = useConfigStore()
  const [fontsLoaded] = useFonts({
    Bangers_400Regular
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: theme ? '#313131' : '#f8f9fa',
    }}>
      <View style={{ position: "absolute", top: 0 }}>
        <BackButton hidden />
      </View>
      <View style={styles.container}>
        <LottieView
          autoPlay
          loop
          speed={1}
          resizeMode="contain"
          style={{
            width: 120,
            height: 120,
            alignSelf: 'center',
            marginBottom: 50,
          }}
          source={theme ? require('../../../assets/animations/animation2-ligth.json') : require('../../../assets/animations/animation2.json')}
        />

        <Text style={[styles.title, { color: theme ? '#fff' : '#000' }]}>Oops! Nenhum item no carrinho.</Text>
        <Text style={[styles.description, { color: theme ? '#fff' : '#000' }]}>
          Temos ótimas opções para sua escolha!
        </Text>
        <TouchableOpacity style={styles.button} onPress={() => router.push('/' as never)}>
          <Text style={styles.buttonText}>Que tal fazer um pedido?</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  logo: {
    width: 200,
    height: 200,
    objectFit: 'contain',
    marginBottom: 30
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
