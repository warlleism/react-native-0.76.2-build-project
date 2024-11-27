import { Dimensions, Image, StyleSheet, TouchableOpacity, View } from "react-native";
import Feather from '@expo/vector-icons/Feather';
import { useNavigation } from '@react-navigation/native'; // Importing from react-navigation
import { DrawerNavigationProp } from "@react-navigation/drawer";

const { width, height } = Dimensions.get("window");


type RootParamList = {
    Home: undefined;
};

type NavigationProp = DrawerNavigationProp<RootParamList>;

export default function Menu() {
    const navigation = useNavigation<NavigationProp>();


    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={require('../../../assets/logos/logo.png')} />
            <TouchableOpacity style={styles.cartButton} onPress={() => navigation.openDrawer()}>
                <Feather name="menu" size={34} color="black" />
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
    cartButton: {
        position: "relative",
    },
    logo: {
        width: 50,
        height: 50,
        resizeMode: "contain",
    },
});
