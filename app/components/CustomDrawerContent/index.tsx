import { AntDesign, Entypo, FontAwesome5 } from "@expo/vector-icons";
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import useCartStore from "@/app/context/cart/cartProvider";
import { router, usePathname } from "expo-router";
import { useAuth } from "@/app/context/auth/authProvider";
import useConfigStore from "@/app/context/config/Provider";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import BottomSideMenu from "../bottomSideMenu";
import { useState } from "react";
import { Bangers_400Regular, useFonts } from "@expo-google-fonts/bangers";

const { width, height } = Dimensions.get("window");
export default function CustomDrawerContent(props: any) {

    const { cart } = useCartStore();
    const { logout } = useAuth()
    const { theme } = useConfigStore();
    const [showConfig, setShowConfig] = useState(false);
    const [fontsLoaded] = useFonts({ Bangers_400Regular });
    const pathname = usePathname();

    const handleLogout = () => {
        logout();
        props.navigation.closeDrawer();
    };

    function handleSetUrl(url: string) {
        router.push(url as never);
    };

    if (!fontsLoaded) {
        return null;
    }

    return (
        <View style={{ flex: 1, justifyContent: "space-between", backgroundColor: theme ? '#313131' : '#fff' }}>
            <BottomSideMenu showConfig={showConfig} setShowConfig={setShowConfig} />
            <View style={styles.logoContainer}>
                <TouchableOpacity style={styles.cartButton} onPress={() => handleSetUrl("../../screens/Cart" as never)}>
                    <AntDesign name="shoppingcart" size={24} color="#FF3B00" />
                    <View style={styles.cartBadge}>
                        <Text style={styles.cartBadgeText}>{cart?.length == null ? 0 : cart?.length}</Text>
                    </View>
                </TouchableOpacity>
                <View style={{ gap: 5 }}>
                    <Image style={styles.logo} source={require('../../../assets/logos/logo.png')} />
                    <Text style={[styles.name, { color: theme ? '#fff' : '#000' }]}>Menu Rapide</Text>
                    <Text style={[styles.logoText, { color: theme ? '#fff' : '#000' }]}>Tecnologia a serviço da sua cozinha</Text>
                </View>
                <TouchableOpacity onPress={() => props.navigation.closeDrawer()} style={{ position: "absolute", top: 10, right: 20 }}>
                    <AntDesign name="arrowleft" size={34} color={theme ? "#fff" : "#222222"} />
                </TouchableOpacity>
            </View>
            <View style={styles.containerDrawerItem}>
                <TouchableOpacity style={styles.drawerItem} onPress={() => handleSetUrl("/" as never)}>
                    <FontAwesome5 name="home" size={25} color={"#FF3B00"} />
                    <Text style={[styles.link, { color: theme ? "#fff" : "#222222" }]}>Início</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.drawerItem} onPress={() => handleSetUrl("../../screens/Cart" as never)}>
                    <Entypo name="shopping-cart" size={25} color={"#FF3B00"} />
                    <Text style={[styles.link, { color: theme ? "#fff" : "#222222" }]}>Carrinho</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.drawerItem} onPress={() => handleSetUrl("../../screens/Favorites" as never)}>
                    <MaterialIcons name="favorite" size={25} color={"#FF3B00"} />
                    <Text style={[styles.link, { color: theme ? "#fff" : "#222222" }]}>Favoritos</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.drawerItem} onPress={() => handleSetUrl("../../screens/Config" as never)}>
                    <Ionicons name="settings" size={25} color={"#FF3B00"} />
                    <Text style={[styles.link, { color: theme ? "#fff" : "#222222" }]}>Configurações</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.userContainer}>
                <TouchableOpacity style={styles.drawerItemUser} onPress={() => handleSetUrl("../../screens/Cart" as never)}>
                    <FontAwesome name="user-circle-o" size={35} color={"#FF3B00"} />
                </TouchableOpacity>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    {
                        theme ?
                            <TouchableOpacity onPress={() => setShowConfig(!showConfig)}>
                                <MaterialIcons name="dark-mode" size={24} color="#FF3B00" />
                            </TouchableOpacity>
                            :
                            <TouchableOpacity onPress={() => setShowConfig(!showConfig)}>
                                <MaterialCommunityIcons name="white-balance-sunny" size={24} color="#FF3B00" />
                            </TouchableOpacity>
                    }
                </View>
                <TouchableOpacity style={styles.drawerItemUser} onPress={handleLogout}>
                    <SimpleLineIcons name="logout" size={30} color={"#FF3B00"} />
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
        position: "absolute",
        justifyContent: "center",
        alignItems: "center",
        width: 18,
        height: 18,
        top: -13,
        right: -9,
        borderRadius: 50,
        backgroundColor: "#FF3B00"
    },
    cartBadgeText: {
        color: "white",
        fontSize: 9,
        fontWeight: "bold",
    },
    logoContainer: {
        padding: 30,
        width: "95%",
        height: "20%",
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
        fontWeight: "300",
        fontSize: 15
    },
    logo: {
        width: 50,
        height: 50,
        resizeMode: "contain",
    },
    containerDrawerItem: {
        gap: 30,
        padding: 30,
        marginTop: 10,
        height: "70%",
    },
    drawerItem: {
        width: "100%",
        alignItems: "center",
        gap: 20,
        flexDirection: "row",
        fontSize: 18,
    },
    link: {
        fontSize: 20,
        fontWeight: "bold",
    },
    userContainer: {
        borderTopWidth: 1,
        borderTopColor: "#ccc",
        width: "100%",
        alignSelf: "center",
        height: "10%",
        flexDirection: "row",
        paddingHorizontal: width / 15,
        alignItems: "center",
        justifyContent: "space-between",

    },
    drawerItemUser: {

    }
});
