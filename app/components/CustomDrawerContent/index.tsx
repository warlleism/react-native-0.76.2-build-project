import { AntDesign } from "@expo/vector-icons";
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import useCartStore from "@/app/context/cartProvider";
import { router } from "expo-router";

const { width, height } = Dimensions.get("window");
export default function CustomDrawerContent(props: any) {

    const { cart } = useCartStore();

    return (
        <View style={{ height: height }}>
            <View style={styles.logoContainer}>
                <TouchableOpacity style={styles.cartButton} onPress={() => router.push("../../screens/Cart" as never)}>
                    <AntDesign name="shoppingcart" size={24} color="red" />
                    <View style={styles.cartBadge}>
                        <Text style={styles.cartBadgeText}>{cart?.length == null ? 0 : cart?.length}</Text>
                    </View>
                </TouchableOpacity>
                <View style={{ gap: 5 }}>
                    <Image style={styles.logo} source={require('../../../assets/logos/logo.png')} />
                    <Text style={styles.name}>Menu Rapide</Text>
                    <Text style={styles.logoText}>Tecnologia a serviço da sua cozinha</Text>
                </View>
                <TouchableOpacity onPress={() => props.navigation.closeDrawer()} style={{ position: "absolute", top: 10, right: 20 }}>
                    <AntDesign name="arrowleft" size={34} color="#222222" />
                </TouchableOpacity>
            </View>
            <View style={styles.containerDrawerItem}>
                <TouchableOpacity style={styles.drawerItem} onPress={() => router.push("/" as never)}>
                    <AntDesign name="home" size={30} color="#222222" />
                    <Text style={styles.link}>Início</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.drawerItem} onPress={() => router.push("../../screens/Cart" as never)}>
                    <AntDesign name="shoppingcart" size={30} color="#222222" />
                    <Text style={styles.link}>Carrinho</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.drawerItem} onPress={() => router.push("../../screens/Cart" as never)}>
                    <Ionicons name="fast-food-outline" size={30} color="#222222" />
                    <Text style={styles.link}>Todos pratos</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.drawerItem} onPress={() => router.push("../../screens/Cart" as never)}>
                    <MaterialIcons name="favorite-border" size={30} color="#222222" />
                    <Text style={styles.link}>Favoritos</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.userContainer}>
                <TouchableOpacity style={styles.drawerItemUser} onPress={() => router.push("../../screens/Cart" as never)}>
                    <FontAwesome name="user-circle-o" size={35} color="#222222" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.drawerItemUser} onPress={() => router.push("../../screens/Cart" as never)}>
                    <SimpleLineIcons name="logout" size={30} color="#222222" />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    cartButton: {
        position: "absolute",
        right: 30,
        top: height / 9
    },
    cartBadge: {
        backgroundColor: "red",
        position: "absolute",
        justifyContent: "center",
        alignItems: "center",
        width: 18,
        height: 18,
        top: -13,
        right: -9,
        borderRadius: 50,
    },
    cartBadgeText: {
        color: "white",
        fontSize: 9,
        fontWeight: "bold",
    },
    logoContainer: {
        padding: 10,
        width: "95%",
        alignSelf: "center",
        paddingVertical: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottomWidth: 1,
        borderBottomColor: "#ccc",
        position: "relative"
    },
    name: {
        color: "#222222",
        fontSize: 15,
        fontWeight: "500",
    },
    logoText: {
        fontWeight: "200",
        fontSize: 15
    },
    logo: {
        width: 50,
        height: 50,
        resizeMode: "contain",
    },
    containerDrawerItem: {
        gap: 20,
        padding: 10,
        marginTop: 10,
    },
    drawerItem: {
        width: "100%",
        alignItems: "center",
        gap: 10,
        flexDirection: "row",
        fontSize: 18,
    },
    link: {
        fontSize: 20,
        fontWeight: "semibold",
    },
    userContainer: {
        borderTopWidth: 1,
        borderTopColor: "#ccc",
        position: "absolute",
        bottom: 0,
        width: "95%",
        alignSelf: "center",
        height: height / 9,
        flexDirection: "row",
        paddingHorizontal: width / 15,
        alignItems: "center",
        justifyContent: "space-between"
    },
    drawerItemUser: {

    }
});
