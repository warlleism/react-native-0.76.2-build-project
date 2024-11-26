import { router } from "expo-router";
import { Button, Dimensions, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Feather from '@expo/vector-icons/Feather';
import AntDesign from '@expo/vector-icons/AntDesign';

const { width, height } = Dimensions.get("window");

export default function BackButton() {

    const handleBack = () => {
        router.back();
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={handleBack}>
                <Feather name="arrow-left" size={34} color="black" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.cartButton}>
                <AntDesign name="shoppingcart" size={34} color="black" />
                <View style={styles.cartBadge}>
                    <Text style={styles.cartBadgeText}>12</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        marginVertical: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        alignSelf: "center",
        paddingHorizontal: 20
    },
    cartButton: {
        position: "relative",
    },
    cartBadge: {
        position: "absolute",
        justifyContent: "center",
        alignItems: "center",
        width: 22,
        height: 22,
        top: -13,
        right: -13,
        backgroundColor: "#FF1E00",
        borderRadius: 50,
    },
    cartBadgeText: {
        color: "white",
        fontSize: 12,
        fontWeight: "bold",
    }
})
