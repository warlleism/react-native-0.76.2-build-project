import { useEffect, useState } from "react";
import { FlashList } from "@shopify/flash-list";
import Products from "@/assets/data/products/data";
import { Dimensions, ScrollView, StyleSheet, Text, View, Image, Platform, TouchableOpacity, TextInput } from "react-native";
import { router, useLocalSearchParams } from "expo-router";
import BackButton from "@/app/components/backButton";
import { Roboto_100Thin, Roboto_300Light, Roboto_700Bold, useFonts } from "@expo-google-fonts/roboto";
import { Bangers_400Regular } from "@expo-google-fonts/bangers";
import IProduct from "@/app/interfaces/product";
import useCounterStore from "@/app/context/provider";

const { width, height } = Dimensions.get("window");

type ProductType = 'mcdonalds' | 'kfc' | 'burger_king' | 'bobs';
export default function ProductsScreen() {

    const [mcDonaldsMoreRequestData, setMcdonaldsMoreRequestData] = useState<any[]>([]);
    const [mcDonaldsList, setMcDonaldsList] = useState<any[]>([]);
    const { producttype } = useLocalSearchParams();
    const { listProduct } = useCounterStore();
    const [fontsLoaded] = useFonts({
        Roboto_100Thin,
        Roboto_300Light,
        Roboto_700Bold,
        Bangers_400Regular
    });

    useEffect(() => {
        const getData = () => {
            if (producttype) {
                const productArray = Products.map((item) => item[producttype as ProductType]);
                const productList = productArray.map((item) => item);
                setMcdonaldsMoreRequestData(productList[0].more_requests);
                setMcDonaldsList(productList[0].list_products)
            }
        };
        getData();
    }, []);


    function handleProduct(data: IProduct) {
        listProduct(data);
        router.push('/screens/ProductDetail' as never);
    }

    return (
        <View style={{ backgroundColor: "#fff" }}>
            <BackButton />
            <ScrollView>
                {/* <Text style={{ marginTop: StatusBar.currentHeight || 0, }}>Products</Text> */}
                <View style={{ height: 50, width: "100%", paddingHorizontal: 10, borderRadius: 10, overflow: "hidden", marginBottom: 20 }}>
                    <TextInput placeholder="Pesquisar" style={{ width: "100%", height: "100%", backgroundColor: "#EFEFEF", borderRadius: 10, }} />
                </View>
                <View style={{ paddingLeft: 20, justifyContent: "center", marginBottom: 20 }}>
                    <Text style={{
                        fontSize: 30,
                        fontWeight: "500",
                        color: "#FF8000",
                        fontFamily: Platform.select({
                            android: 'Bangers_400Regular',
                            ios: 'Bangers_400Regular',
                        }),
                    }}>Mais pedidos</Text>
                    <FlashList
                        data={mcDonaldsMoreRequestData}
                        renderItem={({ item }) => (
                            <TouchableOpacity onPress={() => handleProduct(item)} style={styles.cart}>
                                <View style={{
                                    width: "100%", height: "50%", backgroundColor: "#fff", justifyContent: "center", alignItems: "center",
                                    borderTopEndRadius: 10, borderTopStartRadius: 10, overflow: "hidden"
                                }}>
                                    <Image source={{ uri: item.image }} style={{ width: "70%", height: "70%", resizeMode: "contain", borderRadius: 10, }} />
                                </View>
                                <View style={{ padding: 10 }}>
                                    <Text style={styles.text}>{item.name}</Text>
                                    <Text style={[styles.text, { fontSize: 15, color: "#FF8000", textAlign: "center" }]}>R${item.price}</Text>
                                </View>
                            </TouchableOpacity>
                        )}
                        horizontal
                        keyExtractor={(item, index) => index.toString()}
                        estimatedItemSize={100}
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={styles.flashMoreContent}
                    />
                </View>
                <View>
                    <Text style={{
                        marginLeft: 20,
                        fontSize: 25,
                        fontWeight: "500",
                        color: "#FF8000",
                        fontFamily: Platform.select({
                            android: 'Bangers_400Regular',
                            ios: 'Bangers_400Regular',
                        }),
                    }}>Cardápio</Text>
                    <View style={styles.flashListContent}>
                        {mcDonaldsList.map((item, index) => (
                            <TouchableOpacity onPress={() => handleProduct(item)} style={styles.cartList} key={index}>
                                <View style={{
                                    width: "100%", height: "50%", backgroundColor: "#fff", justifyContent: "center", alignItems: "center",
                                    borderTopEndRadius: 10, borderTopStartRadius: 10,
                                    overflow: "hidden"
                                }}>
                                    <Image source={{ uri: item.image }} style={{ width: "70%", height: "70%", resizeMode: "contain", borderRadius: 10, }} />
                                </View>
                                <View style={{ padding: 10 }}>
                                    <Text style={styles.text}>{item.name}</Text>
                                    <Text style={[styles.text, { fontSize: 16, color: "#FF8000", textAlign: "center" }]}>R${item.price}</Text>
                                </View>
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    flashMoreContent: {
        paddingBottom: 100
    },
    cart: {
        padding: 1,
        width: 250,
        marginBottom: 10,
        height: 200,
        marginRight: 5,
        borderRadius: 10,
        overflow: "hidden",
        alignItems: 'center',
        backgroundColor: "#F9F9F9",
        justifyContent: "space-between",
    },
    cartList: {
        padding: 1,
        width: "45%",
        height: 200,
        borderRadius: 10,
        overflow: "hidden",
        alignItems: 'center',
        backgroundColor: "#F9F9F9",
        justifyContent: "space-between",
    },
    text: {
        fontSize: 20,
        fontWeight: "500",
        color: "#323232",
        fontFamily: Platform.select({
            android: 'Bangers_400Regular',
            ios: 'Bangers_400Regular',
        }),
    },
    flashListContent: {
        width: width,
        gap: 5,
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "row",
        justifyContent: "center",
    },
});
