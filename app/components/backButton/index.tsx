import { useRouter, usePathname } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Feather from '@expo/vector-icons/Feather';
import AntDesign from '@expo/vector-icons/AntDesign';
import useCartStore from "@/app/context/cart/cartProvider";
import { useEffect } from "react";
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";
import useConfigStore from "@/app/context/config/Provider";
import { Bangers_400Regular, useFonts } from "@expo-google-fonts/bangers";

export default function BackButton({ ...props }: { hidden?: Boolean, route?: String }) {

    const router = useRouter();
    const { theme } = useConfigStore();
    const { cart } = useCartStore();
    const scale = useSharedValue(1);
    const color = useSharedValue("#FF1E00");
    const [fontsLoaded] = useFonts({
        Bangers_400Regular
    });

    const handleBack = () => {
        if (router.canGoBack()) {
            router.back();
        } else {
            router.push('/');
        }
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

    if (!fontsLoaded) {
        return null;
    }
    
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={handleBack}>
                <Feather name="arrow-left" size={34} color={theme ? "#fff" : "#000"} />
            </TouchableOpacity>
            {props.hidden ?
                <View />
                :
                <TouchableOpacity style={styles.cartButton} onPress={() => router.push('../../screens/Cart')}>
                    <AntDesign name="shoppingcart" size={34} color={theme ? "#fff" : "#000"} />
                    <Animated.View style={[styles.cartBadge, animatedStyle]}>
                        <Text style={styles.cartBadgeText}>{cart?.length ?? 0}</Text>
                    </Animated.View>
                </TouchableOpacity>}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        marginVertical: 20,
        alignSelf: "center",
        flexDirection: "row",
        paddingHorizontal: 10,
        justifyContent: "space-between",
    },
    cartButton: {
        width: 50,
        position: "relative",
    },
    cartBadge: {
        position: "absolute",
        justifyContent: "center",
        alignItems: "center",
        width: 22,
        height: 22,
        top: -13,
        right: 5,
        borderRadius: 50,
    },
    cartBadgeText: {
        color: "white",
        fontSize: 12,
        fontWeight: "bold",
    }
})
