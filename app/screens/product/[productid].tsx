import { Text, View } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'
import BackButton from '@/components/backButton';

export default function ProductScreen() {

  const { productid } = useLocalSearchParams();
  return (
    <View>
      <BackButton />
      <Text>Product id: {productid} </Text>
    </View>
  )
}
