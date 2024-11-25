import { useEffect, useState } from "react";
import { FlashList } from "@shopify/flash-list";
import { products } from "@/app/products/data";
const { width, height } = Dimensions.get("window");
import { Dimensions, ScrollView, StyleSheet, Text, View, StatusBar, FlatList } from "react-native";
import { useLocalSearchParams } from "expo-router";

type ProductType = 'mcdonalds' | 'kfc' | 'burger_king' | 'bobs';
export default function ProductsScreen() {

    const [mcDonaldsMoreRequestData, setMcdonaldsMoreRequestData] = useState<any[]>([]);
    const [mcDonaldsList, setMcDonaldsList] = useState<any[]>([]);
    const { producttype } = useLocalSearchParams();

    useEffect(() => {
        const getData = () => {
            if (producttype) {
                const productArray = products.map((item) => item[producttype as ProductType]);
                const productList = productArray.map((item) => item);
                setMcdonaldsMoreRequestData(productList[0].more_requests);
                setMcDonaldsList(productList[0].list_products)
            }
        };
        getData();
    }, []);

    return (
        <ScrollView>
            <Text style={{ marginTop: StatusBar.currentHeight || 0, }}>Products </Text>
            <View style={{ height: (height - 600) }}>
                <FlashList
                    data={mcDonaldsMoreRequestData}
                    renderItem={({ item }) => (
                        <View style={styles.cart}>
                            <Text>{item.name}</Text>
                        </View>
                    )}
                    horizontal
                    keyExtractor={(item, index) => index.toString()}
                    estimatedItemSize={100}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.flashMoreContent}
                />
            </View>

            <View style={styles.flashListContent}>
                <FlatList
                    data={mcDonaldsList}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => (
                        <View style={styles.cartList}>
                            <Text>{item.name}</Text>
                        </View>
                    )}
                    numColumns={2}
                />
            </View>

        </ScrollView>
    );
};

const styles = StyleSheet.create({
    flashMoreContent: {
        gap: 10,
        paddingBottom: 100
    },
    cart: {
        width: 200,
        marginBottom: 10,
        height: 200,
        marginLeft: 10,
        padding: 15,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
        alignItems: 'flex-start',
    },
    flashListContent: {
        marginTop: 10,
        width: width,
        display: "flex",
        flexWrap: "wrap",
        paddingBottom: 100,
        flexDirection: "row",
        justifyContent: "center",
    },
    cartList: {
        width: (width - 200),
        marginBottom: 10,
        height: 200,
        marginLeft: 10,
        padding: 15,
        backgroundColor: "red",
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
        alignItems: 'flex-start',
    },
});
