import { router, useNavigation } from "expo-router";
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Feather from '@expo/vector-icons/Feather';
import AntDesign from '@expo/vector-icons/AntDesign';
import useCartStore from "@/app/context/cartProvider";
import { useEffect } from "react";
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";

const { width, height } = Dimensions.get("window");

export default function BackButton() {

    const navigation = useNavigation();
    const { cart } = useCartStore();
    const scale = useSharedValue(1);
    const color = useSharedValue("#FF1E00");

    const handleBack = () => {
        router.back();
    };

    useEffect(() => {
        scale.value = 1.5;
        color.value = "#FF9C8F";
        scale.value = withTiming(1, { duration: 300 });
        color.value = withTiming("#FF1E00", { duration: 300 });
    }, [cart?.length]);

    const animatedStyle = useAnimatedStyle(() => ({
        transform: [{ scale: scale.value }],
        backgroundColor: color.value
    }));

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={handleBack}>
                <Feather name="arrow-left" size={34} color="black" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cartButton} onPress={() => navigation.navigate("screens/Cart/index" as never)}>
                <AntDesign name="shoppingcart" size={34} color="black" />
                <Animated.View style={[styles.cartBadge, animatedStyle]}>
                    <Text style={styles.cartBadgeText}>{cart?.length == null ? 0 : cart?.length}</Text>
                </Animated.View>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        marginVertical: 20,
        alignSelf: "center",
        flexDirection: "row",
        paddingHorizontal: 20,
        justifyContent: "space-between",
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
        borderRadius: 50,
    },
    cartBadgeText: {
        color: "white",
        fontSize: 12,
        fontWeight: "bold",
    }
})
