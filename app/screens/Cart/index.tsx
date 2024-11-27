import { Dimensions, Image, Text, TouchableOpacity, View } from "react-native";
import useCartStore from "../../context/cartProvider";
import BackButton from "../../components/backButton";
import { FlashList } from "@shopify/flash-list";
import { useEffect } from "react";
import AntDesign from '@expo/vector-icons/AntDesign';

const { width, height } = Dimensions.get("window");

export default function Cart() {

    const { cart, price, lessQtd, moreQtd, removeProduct, calcProducts } = useCartStore();

    useEffect(() => {
        calcProducts();
    }, [cart]);

    return (
        <View style={{ flex: 1 }}>
            <BackButton />
            <FlashList
                data={cart}
                renderItem={({ item }) => (
                    <View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 10 }}>
                            <View style={{ width: "70%", flexDirection: 'row', alignItems: 'center', }}>
                                <View>
                                    <Image source={{ uri: item.image }} style={{ width: 80, height: 100 }} />
                                </View>
                                <View style={{ flex: 1, marginLeft: 10, width: "45%" }}>
                                    <Text style={{ width: "100%" }}>{item.name}</Text>
                                    <Text style={{ width: "100%", color: "#FF1E00", fontWeight: "600" }}>R${item.price}</Text>
                                </View>
                            </View>
                            <View style={{ width: "25%", flexDirection: "column", alignItems: "center", gap: 5 }}>
                                <View style={{ height: 50, overflow: "hidden", backgroundColor: "#EFEFEF", borderColor: "#666666", borderWidth: 1, borderRadius: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                    <TouchableOpacity style={{ width: "33.3%", height: "100%", justifyContent: "center", alignItems: "center" }} onPress={() => moreQtd(item)}>
                                        <Text>+</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={{ width: "33.3%", height: "65%", justifyContent: "center", alignItems: "center", backgroundColor: "#D3D3D3", borderRadius: 100, }}>
                                        <Text>{item.qtd}</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity disabled={item.qtd === 1} style={{ width: "33.3%", height: "100%", justifyContent: "center", alignItems: "center" }} onPress={() => lessQtd(item)}>
                                        <Text>-</Text>
                                    </TouchableOpacity>
                                </View>
                                <TouchableOpacity onPress={() => removeProduct(item)}>
                                    <Text style={{ color: "#FF1E00" }} >Remover</Text>
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
                    <Text style={{ color: "white", fontWeight: "700", fontSize: 20 }}>R${price?.toFixed(2)}</Text>
                </View>
                <View style={{ justifyContent: "flex-end", alignItems: "flex-end" }}>
                    <TouchableOpacity>
                        <AntDesign name="arrowright" size={34} color="white" />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}