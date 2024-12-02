import BackButton from "@/app/components/backButton";
import { Bangers_400Regular } from "@expo-google-fonts/bangers";
import { useFonts } from "@expo-google-fonts/roboto";
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Platform } from 'react-native';
import useCartStore from "@/app/context/cart/cartProvider";
import useListProduct from "@/app/context/listProvider/listProvider";
import useConfigStore from "@/app/context/config/Provider";

const { width, height } = Dimensions.get("window");

export default function ProductDetailScreen() {

    const { product } = useListProduct();
    const { addProduct } = useCartStore();
    const { currency, theme } = useConfigStore();

    const [fontsLoaded] = useFonts({
        Bangers_400Regular
    });

    if (!product) return null;

    return (
        <View style={[styles.main_container, { backgroundColor: theme ? '#313131' : '#fff' }]}>
            <BackButton theme={theme} />
            <View>
                <View style={styles.imageContainer}>
                    <Image source={product.logo} style={styles.logo} />
                    <Image source={product.image} style={styles.productImage} />
                </View>
                <View style={{ padding: 20 }}>
                    <Text style={styles.productName}>{product.name}</Text>
                    <Image source={product.logo} style={styles.logointer} />
                    <Text style={[styles.description, { color: theme ? '#fff' : '#000' }]}>{product.description}</Text>
                    <Text style={[styles.price, { color: theme ? '#fff' : '#000' }]}>{currency == "USD" ? `$ ${product.price} ` : `R$ ${(Number(product.price) * 5).toFixed(2)}`}</Text>
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
        height: height,
        width: "100%",
    },

    imageContainer: {
        position: "relative",
        width: width,
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
        fontSize: 45,
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
        width: width / 7,
        height: width / 7,
        resizeMode: "contain",
    },
    description: {
        fontSize: 13,
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
