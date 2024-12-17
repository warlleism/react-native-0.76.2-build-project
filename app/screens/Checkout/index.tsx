import { Button, Dimensions, Image, Platform, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import useCartStore from "../../context/cart/cartProvider";
import BackButton from "../../components/backButton";
import { FlashList } from "@shopify/flash-list";
import { useEffect, useRef, useState } from "react";
import AntDesign from '@expo/vector-icons/AntDesign';
import useConfigStore from "@/app/context/config/Provider";
import LottieView from "lottie-react-native";
import { router } from "expo-router";
import { ActivityIndicator } from "react-native-paper";
import { Entypo } from "@expo/vector-icons";
const { height } = Dimensions.get("window");

export default function CheckoutScreen() {
    const { cart, price, lessQtd, moreQtd, removeProduct, calcProducts, clearAllCart } = useCartStore();
    const { theme, currency, size } = useConfigStore();
    const [loading, setLoading] = useState(false);
    const [spinner, setSpinner] = useState(false);

    useEffect(() => {
        calcProducts();
        return () => { setLoading(false) }
    }, [cart]);

    const deliveryFee = 5.00;
    const serviceFee = 2.50;
    const total = price + deliveryFee + serviceFee;

    function handlePlaceOrder() {
        setSpinner(true);

        setTimeout(() => {
            setLoading(true);
        }, 1000)

        setTimeout(() => {
            setLoading(false);
            setSpinner(false);
            router.push('/' as never);
        }, 4000)
    }

    return (
        <View style={{ flex: 1, backgroundColor: theme ? '#313131' : '#fff' }}>
            <BackButton hidden />
            <View style={styles.containeFavTitle}>
                <Text style={[styles.title, { color: theme ? '#fff' : '#000' }]}>Checkout</Text>
            </View>
            <FlashList
                data={cart}
                extraData={theme}
                contentContainerStyle={{ paddingBottom: height * 0.04 }}
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
                            height: 80,
                            paddingHorizontal: 10,
                            backgroundColor: theme ? '#4b4b4b' : "#7a7a7a0f",
                        }}>
                        <View style={{ width: "70%", flexDirection: 'row', alignItems: 'center', }}>
                            <View>
                                <Image source={item.image} style={{ width: 60, height: 80, objectFit: "contain" }} />
                            </View>
                            <View style={{ flex: 1, marginLeft: 10, width: "45%" }}>
                                <Text style={{ width: "100%", color: theme ? '#fff' : '#000' }}>{item.name}</Text>
                                <Text style={{ width: "100%", color: "#FF1E00", fontWeight: "600" }}>{currency == "USD" ? `$${item.price}` : `R$${(Number(item.price) * 6).toFixed(2)}`}</Text>
                            </View>
                        </View>
                        <View style={{ width: "22%", flexDirection: "column", alignItems: "center", gap: 5 }}>
                            <View style={{ height: 40, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 5 }}>
                                <View style={{ height: "100%", overflow: "hidden", backgroundColor: theme ? '#0000001a' : "#FF1E00", borderRadius: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                    <TouchableOpacity disabled={item.qtd === 1} style={{ opacity: item.qtd === 1 ? 0.5 : 1, width: "33.3%", height: "100%", justifyContent: "center", alignItems: "center" }} onPress={() => lessQtd(item)}>
                                        <AntDesign name="minus" size={15} color={"#fff"} />
                                    </TouchableOpacity>
                                    <TouchableOpacity style={{ width: "33.3%", height: "65%", justifyContent: "center", alignItems: "center", backgroundColor: "#FF1E00", borderRadius: 5, }}>
                                        <Text style={{ color: "#fff", fontWeight: "700" }}>{item.qtd}</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={{ width: "33.3%", height: "100%", justifyContent: "center", alignItems: "center" }} onPress={() => moreQtd(item)}>
                                        <AntDesign name="plus" size={15} color={"#fff"} />
                                    </TouchableOpacity>
                                </View>
                                <TouchableOpacity onPress={() => removeProduct(item)}>
                                    <Entypo name="trash" size={15} color={"#FF1E00"} style={{ marginTop: 5 }} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                )}
            />

            <View style={styles.feesContainer}>
                <View style={styles.feeRow}>
                    <Text style={styles.feeLabel}>Taxa de entrega:</Text>
                    <Text style={styles.feeValue}>{currency == "USD" ? `$${deliveryFee.toFixed(2)}` : `R$${(deliveryFee * 6).toFixed(2).replace(".", ",")}`}</Text>
                </View>
                <View style={styles.feeRow}>
                    <Text style={styles.feeLabel}>Taxa de serviço:</Text>
                    <Text style={styles.feeValue}>{currency == "USD" ? `$${serviceFee.toFixed(2)}` : `R$${(serviceFee * 6).toFixed(2).replace(".", ",")}`}</Text>
                </View>
                <View style={styles.totalRow}>
                    <Text style={styles.totalLabel}>TOTAL:</Text>
                    <Text style={styles.totalValue}>{currency == "USD" ? `$${total.toFixed(2)}` : `R$${(total * 6).toFixed(2).replace(".", ",")}`}</Text>
                </View>
                <View>
                    <TouchableOpacity style={{ backgroundColor: '#FF1E00', marginTop: 10, borderRadius: 100, height: 60, alignItems: "center", justifyContent: "center" }} onPress={handlePlaceOrder}>
                        {spinner ? <ActivityIndicator size="small" color="#fff" /> : <Text style={{ textAlign: "center", color: "#fff", fontSize: 16, fontWeight: "700" }}>Finalizar compra</Text>}
                    </TouchableOpacity>
                </View>
            </View>

            {
                loading &&
                (
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
                            source={require('../../../assets/animations/animation3.json')}
                        />
                    </View>
                )
            }
        </View >
    )
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
    feesContainer: {
        width: "100%",
        alignSelf: "center",
        padding: 40,
        borderTopEndRadius: 20,
        borderTopStartRadius: 20,
        backgroundColor: "#515151",
    },
    feeRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#ccc",
    },
    totalRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 10,
        marginTop: 10,
    },
    feeLabel: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "500",
    },
    feeValue: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "700",
    },
    totalLabel: {
        color: "#FF1E00",
        fontSize: 18,
        fontWeight: "700",
    },
    totalValue: {
        color: "#FF1E00",
        fontSize: 20,
        fontWeight: "800",
    },
});
