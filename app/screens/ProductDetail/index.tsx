import useCounterStore from "@/app/context/provider";
import BackButton from "@/app/components/backButton";
import { Bangers_400Regular } from "@expo-google-fonts/bangers";
import { Roboto_100Thin, Roboto_300Light, Roboto_700Bold, useFonts } from "@expo-google-fonts/roboto";
import { Button, Dimensions, Image, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Platform } from 'react-native';

const { width, height } = Dimensions.get("window");

export default function ProductDetailScreen() {
    const { product } = useCounterStore();
    const [fontsLoaded] = useFonts({
        Roboto_100Thin,
        Roboto_300Light,
        Roboto_700Bold,
        Bangers_400Regular
    });

    if (!product) return null;

    return (
        <View style={styles.main_container}>
            <BackButton />
            <View>
                <View style={styles.imageContainer}>
                    <Image source={product.logo} style={styles.logo} />
                    <Image source={{ uri: product.image }} style={styles.productImage} />
                </View>
                <View style={{ padding: 20 }}>
                    <Text style={styles.productName}>{product.name}</Text>
                    <Image source={product.logo} style={styles.logointer} />
                    <Text style={styles.description}>{product.description}</Text>
                    <Text style={styles.price}>R${product.price}</Text>
                </View>
            </View>
            <View style={{
                width: "100%",
                paddingHorizontal: 20,
                position: "absolute",
                bottom: 20,
            }}>
                <TouchableOpacity style={styles.buyButton}>
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
        fontSize: 55,
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
