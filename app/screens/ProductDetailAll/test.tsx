import { useEffect, useState } from "react";
import { FlashList } from "@shopify/flash-list";
import Products from "@/assets/data/products/data";
import { Dimensions, ScrollView, StyleSheet, VirtualizedList, Text, View, StatusBar, FlatList } from "react-native";
import { useLocalSearchParams } from "expo-router";

const { width, height } = Dimensions.get("window");

type ProductType = 'mcdonalds' | 'kfc' | 'burger_king' | 'bobs';
export default function ProductsScreen() {

    const [mcDonaldsMoreRequestData, setMcdonaldsMoreRequestData] = useState<any[]>([]);
    const [mcDonaldsList, setMcDonaldsList] = useState<any[]>([]);
    const { producttype } = useLocalSearchParams();

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

    const renderItem = ({ item }: any) => (
        <View style={styles.cartList}>
            <Text>{item.name}</Text>
        </View>
    );

    return (
        <ScrollView horizontal decelerationRate="normal" pagingEnabled={true}>
     
            <ScrollView>
                <View style={styles.flashListContent}>
                    {mcDonaldsList.map((item, index) => (
                        <View style={styles.cartList} key={index}>
                            <Text>{item.name}</Text>
                        </View>
                    ))}
                </View>
            </ScrollView>

            <ScrollView>
                <View style={styles.flashListContent}>
                    {mcDonaldsList.map((item, index) => (
                        <View key={index}>
                            <View style={{ height: (height - 600), width: width, backgroundColor: 'green' }} />
                            <View style={styles.cartList} >
                                <Text>{item.name}</Text>
                            </View>
                        </View>
                    ))}
                </View>
            </ScrollView>

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
        backgroundColor: "#FF8000",
        borderRadius: 10,
        alignItems: 'flex-start',
    },
    flashListContent: {
        width: width,
        gap: 5,
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "row",
        justifyContent: "center",
    },
    cartList: {
        width: "45%",
        marginBottom: 10,
        height: 200,
        backgroundColor: "#FF8000",
        borderRadius: 10,
        // shadowColor: '#000',
        // shadowOffset: { width: 0, height: 1 },
        // shadowOpacity: 0.1,
        // shadowRadius: 5,
        elevation: 3,
        alignItems: 'flex-start',
    },
});
