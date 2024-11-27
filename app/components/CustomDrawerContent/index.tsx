import { AntDesign, Ionicons } from "@expo/vector-icons";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function CustomDrawerContent(props: any) {
    return (
        <View style={{ flex: 1 }}>
            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require('../../../assets/logos/logo.png')} />
                <TouchableOpacity onPress={() => props.navigation.closeDrawer()}>
                    <AntDesign name="close" size={34} color="black" />
                </TouchableOpacity>
            </View>
            <View style={{ flex: 1 }}>
                <Text
                    style={styles.drawerItem}
                    onPress={() => props.navigation.navigate("Home")}
                >
                    <Ionicons name="home-outline" size={24} color="black" /> Home
                </Text>
                <Text
                    style={styles.drawerItem}
                    onPress={() => props.navigation.navigate("Settings")}
                >
                    <Ionicons name="settings-outline" size={24} color="black" /> Settings
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    logo: {
        width: 70,
        height: 70,
        resizeMode: "contain",
    },
    logoContainer: {
        width: "90%",
        paddingVertical: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        alignSelf: "center",
        alignItems: "center",
        borderBottomWidth: 1,
        borderBottomColor: "#ccc",
    },
    logoText: {
        fontSize: 20,
        fontWeight: "bold",
    },
    drawerItem: {
        paddingVertical: 20,
        paddingLeft: 20,
        fontSize: 18,
    },
});
