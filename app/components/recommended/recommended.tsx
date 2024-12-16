import useConfigStore from "@/app/context/config/Provider";
import useListProduct from "@/app/context/listProvider/listProvider";
import IProduct from "@/app/interfaces/product";
import recommended from "@/assets/data/allProducts/data";
import { FlashList } from "@shopify/flash-list";
import { router } from "expo-router";
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View, ViewStyle } from "react-native";

export default function Recommended() {

    const { theme } = useConfigStore();
    const { listProduct } = useListProduct();

    function handleProduct(data: IProduct) {
        listProduct(data);
        router.push('screens/ProductDetail' as never);
    }

    return (
        <View>
            <View style={styles.containeFavTitle}>
                <Text style={[styles.title, { color: theme ? '#fff' : '#000' }]}>Recomendados</Text>
            </View>
            <FlashList
                data={recommended}
                extraData={theme}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => handleProduct(item)} style={[styles.cart, { backgroundColor: theme ? '#282828' : '#F9F9F9' }]}>
                        <View style={{
                            width: "100%", height: "50%", backgroundColor: theme ? '#313131' : '#fff', justifyContent: "center", alignItems: "center",
                            borderTopEndRadius: 10, borderTopStartRadius: 10, overflow: "hidden"
                        }}>
                            <Image source={item.image} style={{ width: "70%", height: "70%", resizeMode: "contain", borderRadius: 10, }} />
                        </View>
                        <View style={{ padding: 10 }}>
                            <Text style={[styles.text, { color: theme ? '#fff' : '#313131' }]}>{item.name}</Text>
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
    )
}


const styles = StyleSheet.create({
    flashMoreContent: {
    } as ViewStyle,
    cart: {
        padding: 1,
        width: 150,
        marginBottom: 10,
        height: 140,
        marginRight: 5,
        borderRadius: 10,
        overflow: "hidden",
        alignItems: 'center',
        justifyContent: "space-between",
    },
    text: {
        fontSize: 15,
        textAlign: "center",
        fontWeight: "500",
        color: "#323232",
        fontFamily: Platform.select({
            android: 'Bangers_400Regular',
            ios: 'Bangers_400Regular',
        }),
    },
    title: {
        fontSize: 18,
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
    }
});
