import BackButton from "@/app/components/backButton";
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Platform } from 'react-native';
import useCartStore from "@/app/context/cart/cartProvider";
import useListProduct from "@/app/context/listProvider/listProvider";
import useConfigStore from "@/app/context/config/Provider";
import FavoriteButton from "@/app/components/favoriteButton";
import { useEffect } from "react";
import { Bangers_400Regular, useFonts } from "@expo-google-fonts/bangers";

const { width, height } = Dimensions.get("window");

export default function ProductDetailScreen() {

    const { product, addFavorite, favorites, initialize } = useListProduct();
    const { addProduct } = useCartStore();
    const { currency, theme } = useConfigStore();
    const [fontsLoaded] = useFonts({
        Bangers_400Regular
    });

    useEffect(() => {
        initialize()
    }, [])

    if (!fontsLoaded) {
        return null;
    }

    if (!product) return null;

    return (
        <View style={[styles.main_container, { backgroundColor: theme ? '#313131' : '#fff' }]}>
            <BackButton />
            <View style={{ width: "100%", paddingHorizontal: 20, }}>
                <View style={styles.imageContainer}>
                    <Image source={product.logo} style={styles.logo} />
                    <Image source={product.image} style={styles.productImage} />
                </View>
                <View style={{ paddingVertical: 10, width: "100%" }}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", width: "100%" }}>
                        <Text style={[styles.productName, { color: theme ? '#fff' : '#000' }]}>{product.name}</Text>
                        <FavoriteButton favorites={favorites} product={product} addFavorite={addFavorite} theme={theme} />
                    </View>
                    <Image source={product.logo} style={styles.logointer} />
                    <Text style={[styles.description, { color: theme ? '#fff' : '#000' }]}>{product.description}</Text>
                    <Text style={[styles.price, { color: theme ? '#fff' : '#000' }]}>{currency == "USD" ? `$ ${product.price} ` : `R$ ${(Number(product.price) * 6).toFixed(2)}`}</Text>
                </View>
            </View>
            <View style={{
                width: "100%",
                paddingHorizontal: 20,
                position: "absolute",
                bottom: 20,
            }}>
                <TouchableOpacity style={styles.buyButton} onPress={() => addProduct({ ...product, qtd: 1 })}>
                    <Text style={styles.buyButtonText}>Comprar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    main_container: {
        backgroundColor: "#fff",
        width: "100%",
        flex: 1
    },

    imageContainer: {
        position: "relative",
        width: "100%",
        height: height / 2.7,
        justifyContent: "center",
        alignItems: "center",
    },
    logo: {
        position: "absolute",
        top: 0,
        width: width,
        height: width / 4,
        resizeMode: "contain",
        alignSelf: "center",
    },
    productImage: {
        marginTop: height / 8,
        width: "80%",
        height: "80%",
        resizeMode: "contain",
    },
    productName: {
        fontSize: 40,
        width: "80%",
        fontWeight: "500",
        color: "#323232",
        fontFamily: Platform.select({
            android: 'Bangers_400Regular',
            ios: 'Bangers_400Regular',
        }),
    },
    enterpriseName: {
        fontSize: 25,
        width: 200,
        fontWeight: "500",
        color: "#323232",
        fontFamily: Platform.select({
            android: 'Bangers_400Regular',
            ios: 'Bangers_400Regular',
        }),
    },
    logointer: {
        width: width / 9,
        height: width / 7,
        resizeMode: "cover",
        marginBottom: 10
    },
    description: {
        fontSize: 16,
        fontWeight: "500",
        color: "#323232",
        fontFamily: Platform.select({
            android: 'Roboto_700Bold',
            ios: 'Roboto_700Bold',
        }),
    },
    price: {
        fontSize: 35,
        fontWeight: "500",
        color: "#323232",
        fontFamily: Platform.select({
            android: 'Bangers_400Regular',
            ios: 'Bangers_400Regular',
        }),
    },
    buyButton: {
        width: "100%",
        height: height * 0.1,
        backgroundColor: "#FF1E00",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        alignSelf: "center"
    },
    buyButtonText: {
        elevation: 10,
        fontSize: 35,
        fontWeight: "500",
        color: "#fff",
        fontFamily: Platform.select({
            android: 'Bangers_400Regular',
            ios: 'Bangers_400Regular',
        }),
    },
});
