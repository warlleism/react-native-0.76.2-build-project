import React from 'react';
import { router } from 'expo-router';
import { Dimensions, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Platform } from 'react-native';
import { useFonts, Roboto_100Thin, Roboto_700Bold, Roboto_300Light } from '@expo-google-fonts/roboto';
import { Bangers_400Regular } from '@expo-google-fonts/bangers';
import HomeProducts from '@/assets/data/home-products/data';
import useCounterStore from '../context/provider';
import IProduct from '../interfaces/product';
import Menu from '../components/menu';

const { width, height } = Dimensions.get("window");

export default function HomeScreen() {
    const { listProduct } = useCounterStore();
    const [fontsLoaded] = useFonts({
        Roboto_100Thin,
        Roboto_300Light,
        Roboto_700Bold,
        Bangers_400Regular
    });

    if (!fontsLoaded) {
        return null;
    }

    function handleProduct(data: IProduct) {
        listProduct(data);
        router.push('/screens/ProductDetail' as never);
    }

    return (
        <ScrollView style={styles.container}>
            <Menu />
            <View>
                <View style={styles.header}>
                    <Text style={styles.title}>Restaurantes</Text>
                </View>
                <ScrollView
                    horizontal
                    decelerationRate="normal"
                    showsHorizontalScrollIndicator={false}
                    style={styles.containerItens}
                    contentContainerStyle={styles.contentContainer}>
                    <TouchableOpacity style={styles.itens} onPress={() => router.push('/screens/ProductDetailAll/mcdonalds' as never)}>
                        <Image style={styles.itemImage} source={require('../../assets/logos/mcdonalds.png')} />
                        <Text style={styles.itemText}>MC DONALDS</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.itens} onPress={() => router.push('/screens/ProductDetailAll/kfc' as never)}>
                        <Image style={styles.itemImage} source={require('../../assets/logos/kfc.png')} />
                        <Text style={styles.itemText}>KFC</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.itens} onPress={() => router.push('/screens/ProductDetailAll/burger_king' as never)}>
                        <Image style={styles.itemImage} source={require('../../assets/logos/bk.png')} />
                        <Text style={styles.itemText}>BURGUER KING</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.itens} onPress={() => router.push('/screens/ProductDetailAll/bobs' as never)}>
                        <Image style={styles.itemImage} source={require('../../assets/logos/bobs.png')} />
                        <Text style={styles.itemText}>BOBS</Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>
            <View style={styles.productSection}>
                <View style={styles.productHeader}>
                    <Text style={styles.productTitle}>Mais Pedidos</Text>
                    <TouchableOpacity onPress={() => router.push('/screens/products' as never)} style={styles.seeAllButton}>
                        <Text style={styles.seeAllText}>VER TODOS</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.productList}>
                    {HomeProducts.map((item: IProduct, index) => (
                        <TouchableOpacity
                            key={index}
                            style={styles.productItem}
                            onPress={() => handleProduct(item)}>
                            <View style={styles.productLogoContainer}>
                                <Image style={styles.productLogo} source={item.logo} />
                            </View>
                            <Image style={styles.productImage} source={{ uri: item.image }} />
                            <Text style={styles.productName}>{item.name}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        width: width,
        padding: 10,
    },
    header: {
        marginTop: 20,
        width: "100%",
        height: 50,
        gap: 5,
        paddingLeft: width * 0.02,
    },
    logo: {
        width: 30,
        height: 30,
        resizeMode: "contain",
    },
    title: {
        height: "100%",
        fontSize: 25,
        fontWeight: "500",
        color: "#323232",
        fontFamily: Platform.select({
            android: 'Bangers_400Regular',
            ios: 'Bangers_400Regular',
        }),
    },
    containerItens: {
        height: 140,
    },
    contentContainer: {
        alignItems: "center",
        gap: 6,
    },
    itens: {
        backgroundColor: "#E8E8E8",
        height: "100%",
        width: width / 2.9,
        borderRadius: 10,
        overflow: "hidden",
        alignItems: "center",
        justifyContent: "center",
    },
    itemImage: {
        width: "60%",
        marginBottom: 10,
        height: "60%",
        resizeMode: "contain",
    },
    itemText: {
        position: "absolute",
        bottom: 1,
        fontSize: 15,
        fontWeight: "500",
        color: "#323232",
        fontFamily: Platform.select({
            android: 'Bangers_400Regular',
            ios: 'Bangers_400Regular',
        }),
    },
    productSection: {
        marginTop: 20,
    },
    productHeader: {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    productTitle: {
        fontSize: 25,
        fontWeight: "500",
        color: "#323232",
        fontFamily: Platform.select({
            android: 'Bangers_400Regular',
            ios: 'Bangers_400Regular',
        }),
    },
    seeAllButton: {
        justifyContent: 'center',
    },
    seeAllText: {
        color: "#FF8000",
        fontSize: 20,
        fontFamily: Platform.select({
            android: 'Bangers_400Regular',
            ios: 'Bangers_400Regular',
        }),
    },
    productList: {
        paddingBottom: height * 0.2,
        marginTop: 10,
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: 5,
    },
    productItem: {
        position: "relative",
        borderRadius: 10,
        backgroundColor: "#E8E8E8",
        width: width / 2.14,
        height: 150,
        justifyContent: "center",
        alignItems: "center",
    },
    productLogoContainer: {
        position: "absolute",
        backgroundColor: "#D2D2D2",
        borderRadius: 10,
        right: 20,
        top: 20,
        width: 50,
        height: 50,
        elevation: 10,
        justifyContent: "center",
        alignItems: "center",
    },
    productLogo: {
        width: "70%",
        height: "70%",
        resizeMode: "contain",
    },
    productImage: {
        width: "60%",
        marginBottom: 10,
        height: "60%",
        resizeMode: "contain",
    },
    productName: {
        fontSize: 15,
        fontWeight: "500",
        color: "#323232",
        fontFamily: Platform.select({
            android: 'Bangers_400Regular',
            ios: 'Bangers_400Regular',
        }),
    },
});
