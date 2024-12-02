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

    return (
        <View style={styles.container}>
            <View />
            <View style={{ flexDirection: "row", alignItems: "center", gap: 2 }}>
                <Text style={styles.nameTitulo}>Menu</Text>
                <Text style={[styles.nameTitulo, { color: "#FF3B00" }]}>Rapide</Text>
            </View>
            <TouchableOpacity style={styles.cartButton} onPress={() => navigation.openDrawer()}>
                <View style={{ width: "75%", height: 2, backgroundColor: props.theme ? "#fff" : "#000", borderRadius: 100 }} />
                <View style={{ width: "55%", height: 2, backgroundColor: props.theme ? "#fff" : "#000", borderRadius: 100 }} />
                <View style={{ width: "45%", height: 2, backgroundColor: props.theme ? "#fff" : "#000", borderRadius: 100 }} />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        paddingVertical: 10,
        alignSelf: "center",
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    nameTitulo: {
        fontSize: 20,
        fontWeight: '500',
        textAlign: 'center',
        color: "#323232",
        fontFamily: Platform.select({
            android: 'Bangers_400Regular',
            ios: 'Bangers_400Regular',
        }),
    },
    cartButton: {
        width: 40,
        height: 40,
        gap: 7,
        justifyContent: "center",
        alignItems: "flex-start",
    },
    logo: {
        width: 50,
        height: 50,
        resizeMode: "contain",
    },
});
