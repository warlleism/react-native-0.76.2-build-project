import { View, Text, ScrollView } from 'react-native'
import React from 'react'

export default function HomeScreen() {
    return (
        <ScrollView>
            {
                [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20].map((_, index) => (
                    <Text key={index} style={{ width: '100%', height: 100, backgroundColor: 'red' }}>index</Text>
                ))
            }
        </ScrollView>
    )
}
