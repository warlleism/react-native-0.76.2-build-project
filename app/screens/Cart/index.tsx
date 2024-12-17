import { Dimensions, Image, Platform, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import useCartStore from "../../context/cart/cartProvider";
import BackButton from "../../components/backButton";
import { FlashList } from "@shopify/flash-list";
import { useEffect, useState } from "react";
import AntDesign from '@expo/vector-icons/AntDesign';
import useConfigStore from "@/app/context/config/Provider";
import CartEmptyScreen from "@/app/screens/CartEmpty";
import { Bangers_400Regular, useFonts } from "@expo-google-fonts/bangers";
import LottieView from "lottie-react-native";
import { router } from "expo-router";
import { ActivityIndicator } from "react-native-paper";
import Recommended from "@/app/components/recommended/recommended";
import { Entypo } from "@expo/vector-icons";
const { height } = Dimensions.get("window");

export default function CartScreen() {
    const { cart, price, lessQtd, moreQtd, removeProduct, calcProducts, clearAllCart } = useCartStore();
    const { theme, currency, size } = useConfigStore();
    const [loading, setLoading] = useState(false);
    const [fontsLoaded] = useFonts({ Bangers_400Regular });
    const [spinner, setSpinner] = useState(false);

    useEffect(() => {
        calcProducts();
    }, [cart]);

    function handleCheckout() {
        setSpinner(true);

        setTimeout(() => {
            setLoading(true);
        }, 1000)

        setTimeout(() => {
            setLoading(false);
            setSpinner(false);
            router.push('/screens/Checkout' as never);
        }, 4000)
    }

    if (!fontsLoaded) {
        return null;
    }

    return (
        <View style={{ flex: 1, backgroundColor: theme ? '#313131' : '#fff' }}>
            {
                (cart && cart?.length !== 0) ? (
                    <View style={{ flex: 1 }}>
                        <BackButton hidden />
                        <Recommended />
                        <View style={styles.containeFavTitle}>
                            <Text style={[styles.title, { color: theme ? '#fff' : '#000' }]}>Carrinho</Text>
                            <TouchableOpacity onPress={() => clearAllCart()} style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
                                <Entypo name="trash" size={15} color={"#FF1E00"} style={{ marginTop: 5 }} />
                                <Text style={{ color: "#FF1E00", fontFamily: 'Bangers_400Regular', fontSize: size as number }}>Limpar</Text>
                            </TouchableOpacity>
                        </View>
                        <FlashList
                            data={cart}
                            extraData={theme}
                            contentContainerStyle={{ paddingBottom: height * 0.2 }}
                            renderItem={({ item, index }) => (
                                <View style={
                                    {
                                        marginBottom: 10,
                                        width: "95%",
                                        alignSelf: "center",
                                        borderRadius: 10,
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        justifyContent: 'space-between',
                                        height: 100,
                                        paddingHorizontal: 30,
                                        backgroundColor: theme ? '#4b4b4b' : "#7a7a7a0f",
                                    }
                                }>
                                    <View style={{ width: "70%", flexDirection: 'row', alignItems: 'center' }}>
                                        <Image source={item.image} style={{ width: 80, height: 100, objectFit: "contain" }} />
                                        <View style={{ flex: 1, marginLeft: 10, width: "45%" }}>
                                            <Text style={{ width: "100%", color: theme ? '#fff' : '#000' }}>{item.name}</Text>
                                            <Text style={{ width: "100%", color: "#FF1E00", fontWeight: "600" }}>{currency == "USD" ? `$${item.price}` : `R$${(Number(item.price) * 6).toFixed(2)}`}</Text>
                                        </View>
                                    </View>
                                    <View style={{ width: "25%", flexDirection: "column", alignItems: "center", gap: 5, }}>
                                        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center", gap: 5, height: 40 }}>
                                            <View style={{ height: "100%", width: 70, overflow: "hidden", backgroundColor: theme ? '#0000001a' : "#FF1E00", borderRadius: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', }}>
                                                <TouchableOpacity disabled={item.qtd === 1} style={{ opacity: item.qtd === 1 ? 0.5 : 1, width: "33.3%", height: "100%", justifyContent: "center", alignItems: "center" }} onPress={() => lessQtd(item)}>
                                                    <AntDesign name="minus" size={15} color={"#fff"} />
                                                </TouchableOpacity>
                                                <TouchableOpacity style={{
                                                    width: "33.3%", height: "65%", justifyContent: "center", alignItems: "center"
                                                }}>
                                                    <Text style={{ color: "#fff", fontWeight: "700" }}>{item.qtd}</Text>
                                                </TouchableOpacity>
                                                <TouchableOpacity style={{ width: "33.3%", height: "100%", justifyContent: "center", alignItems: "center", }} onPress={() => moreQtd(item)}>
                                                    <AntDesign name="plus" size={15} color={"#fff"} />
                                                </TouchableOpacity>
                                            </View>
                                            <TouchableOpacity onPress={() => removeProduct(item)}>
                                                <Entypo name="trash" size={20} color={"#FF1E00"} />
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </View>
                            )}
                        />
                        <View style={{
                            width: "95%",
                            alignSelf: "center",
                            boxSizing: "border-box",
                            padding: 20,
                            borderRadius: 100,
                            height: height * 0.10,
                            position: "absolute",
                            bottom: height * 0.05,
                            backgroundColor: "#FF1E00",
                            flexDirection: "row",
                            justifyContent: "space-between",
                            alignItems: "center",
                        }}>
                            <View style={{ marginLeft: 20 }}>
                                <Text style={{ color: "white", fontWeight: "500" }}>VALOR TOTAL:</Text>
                                <Text style={{ color: "white", fontWeight: "700", fontSize: 20 }}>{currency == "USD" ? `$${price.toFixed(2)}` : `R$${(Number(price) * 6).toFixed(2)}`}</Text>
                            </View>
                            <View style={{ justifyContent: "flex-end", alignItems: "flex-end" }}>
                                <TouchableOpacity onPress={() => handleCheckout()}>
                                    {spinner ? <ActivityIndicator size="small" color="#fff" /> :
                                        <AntDesign name="arrowright" size={34} color="white" />
                                    }
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                ) : (
                    <CartEmptyScreen />
                )
            }

            {
                loading && (
                    <View style={[styles.animationContainer, { backgroundColor: theme ? '#313131' : '#fff' }]}>
                        <LottieView
                            autoPlay
                            loop
                            speed={1}
                            resizeMode="contain"
                            style={{
                                width: "80%",
                                height: "80%",
                                alignSelf: 'center',
                                backgroundColor: theme ? '#313131' : '#fff'
                            }}
                            source={require('../../../assets/animations/animation5.json')}
                        />
                    </View>
                )
            }
        </View >
    );
}

const styles = StyleSheet.create({
    animationContainer: {
        position: 'absolute',
        top: 0,
        width: '100%',
        height: '100%',
        elevation: 4,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    title: {
        fontSize: 24,
        color: '#000',
        fontFamily: Platform.select({
            android: 'Bangers_400Regular',
            ios: 'Bangers_400Regular',
        }),
    },
    containeFavTitle: {
        width: "100%",
        paddingHorizontal: 18,
        paddingBottom: 10,
        alignSelf: "center",
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between",
    },
});
