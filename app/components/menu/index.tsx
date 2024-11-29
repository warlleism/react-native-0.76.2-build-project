import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Feather from '@expo/vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { useFonts } from "@expo-google-fonts/roboto";
import { Bangers_400Regular } from "@expo-google-fonts/bangers";


type RootParamList = {
    Home: undefined;
};

type NavigationProp = DrawerNavigationProp<RootParamList>;

export default function Menu() {

    const navigation = useNavigation<NavigationProp>();
    const [fontsLoaded] = useFonts({
        Bangers_400Regular
    });

    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={require('../../../assets/logos/logo.png')} />
            <View style={{ flexDirection: "row", alignItems: "center", gap: 2 }}>
                <Text style={styles.nameTitulo}>Menu</Text>
                <Text style={[styles.nameTitulo, { color: "#FF3B00" }]}>Rapide</Text>
            </View>
            <TouchableOpacity style={styles.cartButton} onPress={() => navigation.openDrawer()}>
                <View style={{ width: "100%", height: 2, backgroundColor: "#000", borderRadius: 100 }} />
                <View style={{ width: "70%", height: 2, backgroundColor: "#000", borderRadius: 100 }} />
                <View style={{ width: "60%", height: 2, backgroundColor: "#363636", borderRadius: 100 }} />
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
        gap: 10,
        justifyContent: "center",
        alignItems: "flex-start",
    },
    logo: {
        width: 50,
        height: 50,

        resizeMode: "contain",
    },
});
