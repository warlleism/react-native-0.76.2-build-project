import { Dimensions, Image, Text, TouchableOpacity, View } from "react-native";
import useCartStore from "../../context/cart/cartProvider";
import BackButton from "../../components/backButton";
import { FlashList } from "@shopify/flash-list";
import { useEffect } from "react";
import AntDesign from '@expo/vector-icons/AntDesign';
import CartEmpty from "@/app/screens/CartEmpty";
import useConfigStore from "@/app/context/config/Provider";
import CartEmptyScreen from "@/app/screens/CartEmpty";

const { height } = Dimensions.get("window");

export default function CartScreen() {

    const { cart, price, lessQtd, moreQtd, removeProduct, calcProducts } = useCartStore();
    const { theme, currency, size } = useConfigStore();

    useEffect(() => {
        calcProducts();
    }, [cart]);

    return (
        <View style={{ flex: 1, backgroundColor: theme ? '#313131' : '#fff' }}>
            {
                (cart && cart.length !== 0) ?
                    <View style={{ flex: 1 }}>
                        <BackButton hidden />
                        <FlashList
                            data={cart}
                            renderItem={({ item, index }) => (
                                <View style={[
                                    index + 1 === cart?.length ? { marginBottom: height / 6 } : { marginBottom: 10 },
                                    , {
                                        width: "95%",
                                        alignSelf: "center",
                                        borderRadius: 10,
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        justifyContent: 'space-between',
                                        height: 90,
                                        paddingHorizontal: 10,
                                        borderWidth: 1,
                                        borderColor: theme ? '#ffffff2b' : '#0000001a',
                                        backgroundColor: theme ? '#323232' : "#fff",
                                    }]}>
                                    <View style={{ width: "70%", flexDirection: 'row', alignItems: 'center', }}>
                                        <View>
                                            <Image source={item.image} style={{ width: 80, height: 100, objectFit: "contain" }} />
                                        </View>
                                        <View style={{ flex: 1, marginLeft: 10, width: "45%" }}>
                                            <Text style={{ width: "100%" }}>{item.name}</Text>
                                            <Text style={{ width: "100%", color: "#FF1E00", fontWeight: "600" }}>{currency == "USD" ? `$${item.price}` : `R$${(Number(item.price) * 5).toFixed(2)}`}</Text>
                                        </View>
                                    </View>
                                    <View style={{ width: "25%", flexDirection: "column", alignItems: "center", gap: 5 }}>
                                        <View style={{ height: 50, overflow: "hidden", backgroundColor: "#fff", borderColor: "#666666", borderWidth: 1, borderRadius: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                            <TouchableOpacity style={{ width: "33.3%", height: "100%", justifyContent: "center", alignItems: "center" }} onPress={() => moreQtd(item)}>
                                                <AntDesign name="plus" size={15} color="black" />
                                            </TouchableOpacity>
                                            <TouchableOpacity style={{ width: "33.3%", height: "65%", justifyContent: "center", alignItems: "center", backgroundColor: "#FF1E00", borderRadius: 5, }}>
                                                <Text style={{ color: "#fff", fontWeight: "700" }}>{item.qtd}</Text>
                                            </TouchableOpacity>
                                            <TouchableOpacity disabled={item.qtd === 1} style={{ width: "33.3%", height: "100%", justifyContent: "center", alignItems: "center" }} onPress={() => lessQtd(item)}>
                                                <AntDesign name="minus" size={15} color="black" />
                                            </TouchableOpacity>
                                        </View>
                                        <TouchableOpacity onPress={() => removeProduct(item)}>
                                            <Text style={{ color: "#FF1E00", fontSize: size as number }}>Remover</Text>
                                        </TouchableOpacity>
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
                                <Text style={{ color: "white", fontWeight: "700", fontSize: 20 }}>{currency == "USD" ? `$${price}` : `R$${(Number(price) * 5).toFixed(2)}`}</Text>
                            </View>
                            <View style={{ justifyContent: "flex-end", alignItems: "flex-end" }}>
                                <TouchableOpacity>
                                    <AntDesign name="arrowright" size={34} color="white" />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    :
                    <CartEmptyScreen />
            }
        </View >
    )
}