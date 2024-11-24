import React from 'react';
import { FlashList } from '@shopify/flash-list';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Link, router, useNavigation } from 'expo-router';

export default function HomeScreen() {

    const navigation = useNavigation();

    const DATA = [
        {
            title: 'First Item',
            price: 100,
            category: 'Food',
        },
        {
            title: 'Second Item',
            price: 200,
            category: 'Food',
        },
        {
            title: 'Third Item',
            price: 300,
            category: 'Food',
        },
        {
            title: 'Fourth Item',
            price: 400,
            category: 'Food',
        },
        {
            title: 'Fifth Item',
            price: 500,
            category: 'Food',
        },
    ];


    function goToProduct() {
        const ramdomId = Math.ceil(Math.random() * 10)
        router.push(`/screens/product/${ramdomId}` as never)
    }

    return (
        <View style={styles.containerList}>

            <TouchableOpacity
                style={{
                    backgroundColor: '#0891b2',
                    padding: 10,
                    borderRadius: 5,
                    marginBottom: 10
                }}
                onPress={() => navigation.navigate('create' as never)}>Create</TouchableOpacity>

            <Link href={'/screens/product/10' as never} >Product</Link>
            <Button title='Go to random product' onPress={goToProduct}></Button>
            <FlashList
                data={DATA}
                renderItem={({ item }) => (
                    <View style={styles.cart}>
                        <Text style={styles.title}>{item.title}</Text>
                        <Text style={styles.price}>R${item.price}</Text>
                        <Text style={styles.category}>{item.category}</Text>
                    </View>
                )}
                horizontal
                estimatedItemSize={100}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.flashListContent}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    containerList: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 10,
    },
    flashListContent: {
        gap: 10,
        paddingBottom: 20,
    },
    cart: {
        width: 200,
        marginLeft: 10,
        padding: 15,
        borderRadius: 10,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
        alignItems: 'flex-start',
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
        color: '#333',
    },
    price: {
        fontSize: 14,
        color: '#27ae60',
        marginBottom: 5,
    },
    category: {
        fontSize: 12,
        color: '#7f8c8d',
    },
});