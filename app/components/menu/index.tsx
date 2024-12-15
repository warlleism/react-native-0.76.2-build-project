import { Platform, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { useFonts } from "@expo-google-fonts/roboto";
import { Bangers_400Regular } from "@expo-google-fonts/bangers";
import { useNavigation } from "expo-router";

type RootParamList = {
    Home: undefined;
};

type NavigationProp = DrawerNavigationProp<RootParamList>;

export default function Menu({ ...props }: { theme?: Boolean }) {

    const navigation = useNavigation<NavigationProp>();
    const [fontsLoaded] = useFonts({
        Bangers_400Regular
    });

    if (!fontsLoaded) {
        return null;
    }

    return (
        <View style={styles.container}>
            <View style={{ width: "33.3%", height: 10 }} />
            <View style={styles.menuTitle}>
                <Text style={[styles.nameTitulo, { color: props.theme ? "#fff" : "#000", }]}>Menu</Text>
                <Text style={[styles.nameTitulo, { color: "#FF3B00" }]}>Rapide</Text>
            </View>
            <TouchableOpacity style={styles.cartButton} onPress={() => navigation.openDrawer()}>
                <View style={[styles.barMenu, { backgroundColor: props.theme ? "#fff" : "#000", }]} />
                <View style={[styles.barMenu, { width: 20, backgroundColor: props.theme ? "#fff" : "#000", }]} />
                <View style={[styles.barMenu, { backgroundColor: props.theme ? "#fff" : "#000", }]} />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        paddingVertical: 10,
        paddingHorizontal: 20,
        alignSelf: "center",
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    menuTitle: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        width: "33.3%",
        gap: 4
    },
    nameTitulo: {
        fontSize: 26,
        fontWeight: '500',
        textAlign: 'left',
        color: "#323232",
        fontFamily: Platform.select({
            android: 'Bangers_400Regular',
            ios: 'Bangers_400Regular',
        }),
    },
    cartButton: {
        width: "33.3%",
        height: 40,
        gap: 7,
        justifyContent: "center",
        alignItems: "flex-end",
    },
    barMenu: {
        width: 30,
        height: 2,
        borderRadius: 100
    },
    logo: {
        width: 50,
        height: 50,
        resizeMode: "contain",
    },
});
