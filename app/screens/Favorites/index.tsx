import React, { useEffect } from 'react';
import {
    Image,
    Platform,
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { usePathname, useRouter } from 'expo-router';
import { FlashList } from '@shopify/flash-list';
import useListProduct from '@/app/context/listProvider/listProvider';
import useConfigStore from '@/app/context/config/Provider';
import IProduct from '@/app/interfaces/product';
import BackButton from '@/app/components/backButton';
import Fontisto from '@expo/vector-icons/Fontisto';
import { Bangers_400Regular, useFonts } from '@expo-google-fonts/bangers';
import LottieView from 'lottie-react-native';


export default function FavoriteScreen() {
    const pathname = usePathname();

    const router = useRouter();
    const { size, theme, currency } = useConfigStore();
    const { listProduct, clearAllFavorites, removeFavorite, favorites, initialize } = useListProduct();
    const [fontsLoaded] = useFonts({
        Bangers_400Regular
    });

    function handleProduct(data: IProduct) {
        listProduct(data);
        router.push('screens/ProductDetail' as never);
    }

    useEffect(() => {
        initialize()
    }, [])


    const renderProduct = ({ item }: { item: IProduct }) => (
        <TouchableOpacity onPress={() => handleProduct(item)} style={[styles.productContainer, {
            borderColor: theme ? '#ffffff2b' : '#0000001a',
            backgroundColor: theme ? '#323232' : "#fff",
        }]}>
            <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
                <Image source={item.image} style={styles.image} />
                <Text style={[styles.name, { width: 100, textAlign: "center", fontFamily: 'Bangers_400Regular', fontSize: size as number, color: theme ? '#fff' : '#000' }]}>{item.name}</Text>
            </View>
            <Image source={item.logo} style={styles.logo} />
            <View style={{ justifyContent: "center", alignItems: "center" }}>
                <Text style={[styles.name, { fontFamily: 'Bangers_400Regular', fontSize: size as number, color: theme ? '#fff' : '#000' }]}>{currency == "USD" ? `$ ${item.price} ` : `R$ ${(Number(item.price) * 6).toFixed(2)}`}</Text>
                <TouchableOpacity onPress={() => removeFavorite(item)}>
                    <Text style={{ color: "#FF1E00", fontSize: 15 }}>Remover</Text>
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    );

    if (!fontsLoaded) {
        return null;
    }

    return (
        <View style={{ flex: 1, backgroundColor: theme ? '#313131' : '#fff' }}>
            {favorites?.length == 0 && <BackButton hidden />}
            {
                favorites?.length == 0 ?
                    <View style={styles.containerEmpty}>
                        <LottieView
                            autoPlay
                            loop
                            speed={1}
                            resizeMode="contain"
                            style={{
                                width: 120,
                                height: 120,
                                alignSelf: 'center',
                                marginBottom: 50,
                            }}
                            source={theme ? require('../../../assets/animations/animation6-ligth.json') : require('../../../assets/animations/animation6.json')}
                        />
                        <Text style={styles.titleEmpty}>Oops! Nenhum item favoritado.</Text>
                        <Text style={[styles.description, { color: theme ? '#fff' : '#555' }]}>
                            Temos ótimas opções para sua escolha!
                        </Text>
                        <TouchableOpacity style={styles.button} onPress={() => router.push('/' as never)}>
                            <Text style={styles.buttonText}>Que tal dar uma olhada?</Text>
                        </TouchableOpacity>
                    </View>
                    :
                    <View style={{ flex: 1 }}>
                        <BackButton />
                        <View style={[styles.container, { backgroundColor: theme ? '#313131' : '#fff' }]}>
                            <View style={styles.containeFavTitle}>
                                <Text style={[styles.title, { color: theme ? '#fff' : '#000' }]}>Favoritos</Text>
                                <TouchableOpacity
                                    onPress={() => clearAllFavorites()}>
                                    <Text style={{
                                        color: "#FF1E00",
                                        fontFamily: 'Bangers_400Regular',
                                        fontSize: size as number
                                    }}>Limpar</Text>
                                </TouchableOpacity>
                            </View>
                            <FlashList
                                showsVerticalScrollIndicator={false}
                                extraData={theme}
                                data={favorites}
                                renderItem={renderProduct}
                                keyExtractor={(item, index) => index.toString()}
                                estimatedItemSize={150}
                                contentContainerStyle={{ paddingBottom: 100 }}
                            />
                        </View>
                    </View>
            }
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        alignSelf: "center"
    },
    containeFavTitle: {
        width: "90%",
        paddingBottom: 15,
        alignSelf: "center",
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    title: {
        fontSize: 24,
        color: '#000',
        fontFamily: Platform.select({
            android: 'Bangers_400Regular',
            ios: 'Bangers_400Regular',
        }),
    },
    productContainer: {
        borderWidth: 1,
        width: "100%",
        paddingVertical: 20,
        paddingHorizontal: 10,
        alignSelf: "center",
        borderRadius: 10,
        marginBottom: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    logo: {
        width: 50,
        height: 50,
        resizeMode: 'contain',
    },
    image: {
        width: 50,
        height: 50,
        resizeMode: 'contain',
        borderRadius: 10,
    },
    name: {
        fontSize: 18,
        color: '#000',
    },
    containerEmpty: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    titleEmpty: {
        fontSize: 24,
        fontWeight: '500',
        textAlign: 'center',
        marginBottom: 10,
        color: "#323232",
        fontFamily: Platform.select({
            android: 'Bangers_400Regular',
            ios: 'Bangers_400Regular',
        }),
    },
    description: {
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 30,
        fontFamily: Platform.select({
            android: 'Bangers_400Regular',
            ios: 'Bangers_400Regular',
        }),
    },
    button: {
        backgroundColor: '#FF3C00',
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 8,
    },
    buttonText: {
        fontSize: 16,
        color: '#fff',
        textAlign: 'center',
        fontFamily: Platform.select({
            android: 'Bangers_400Regular',
            ios: 'Bangers_400Regular',
        }),
    },
});
