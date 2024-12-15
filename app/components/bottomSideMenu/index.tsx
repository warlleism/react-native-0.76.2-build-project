import { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView, Image } from 'react-native';
import { Modalize } from 'react-native-modalize';
import useConfigStore from '@/app/context/config/Provider';
import React from 'react'
import { Switch } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import { Bangers_400Regular, useFonts } from '@expo-google-fonts/bangers';
const { width, height } = Dimensions.get("window");

export default function BottomSideMenu({ showConfig, setShowConfig }: { showConfig: boolean, setShowConfig: any }) {

    const modalizeRef = useRef<Modalize | null>(null);
    const { setTheme, size, setCurrency, currency, theme } = useConfigStore();
    const [fontsLoaded] = useFonts({
        Bangers_400Regular
    });

    useEffect(() => {
        if (showConfig == true) {
            modalizeRef.current?.open();
        }
    }, [showConfig]);

    const handleOnClose = () => {
        setShowConfig(false);
    };

    function toggleSwitch() {
        setTheme()
    };

    function HandleSetCurrency(event: any) {
        const newCurrency = event === 'USD' ? 'BRL' : 'USD'
        setCurrency(newCurrency);
    };

    if (!fontsLoaded) {
        return null;
    }

    return (
        <Modalize
            ref={modalizeRef}
            modalStyle={styles.modal}
            adjustToContentHeight
            handleStyle={styles.handle}
            onClose={handleOnClose}
            keyboardAvoidingBehavior="padding"
            scrollViewProps={{
                keyboardShouldPersistTaps: 'handled',
                contentContainerStyle: { flexGrow: 1 }
            }}
        >
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <View style={{ backgroundColor: '#fff' }}>
                    <View style={{ padding: 10, height: height / 4 }}>
                        <View style={{ flexDirection: "row", gap: 10, alignItems: "center", borderBottomWidth: 1, borderBottomColor: '#00000026', paddingBottom: 20 }}>
                            <Feather name="settings" size={20} color={"#222222"} />
                            <Text style={{ color: '#313131', fontSize: size as number, fontWeight: "600" }}>Configurações</Text>
                        </View>
                        <View style={{ padding: 10, }}>
                            <View style={{ marginBottom: 10, flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                                <Text style={{ color: '#313131', fontSize: size as number }}>Tema: {theme ? 'Escuro' : 'Claro'}</Text>
                                <Switch
                                    style={{ width: 50 }}
                                    trackColor={{ false: '#00000029', true: '#00000029' }}
                                    thumbColor={theme ? '#141414' : '#f4f3f4'}
                                    ios_backgroundColor="#3e3e3e"
                                    onValueChange={toggleSwitch}
                                    value={theme as boolean}
                                />
                            </View>
                            <View style={{ marginBottom: 10, flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                                <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
                                    <Text style={{ color: '#313131', fontSize: size as number }}>Moeda: </Text>
                                    <Image style={{ width: 20, height: 20 }} source={currency == 'BRL' ? require('../../../assets/images/brl-icon.png') : require('../../../assets/images/usa-icon.png')} />
                                </View>
                                <Switch
                                    style={{ width: 50 }}
                                    trackColor={{ false: '#00000029', true: '#00000029' }}
                                    thumbColor={theme ? '#141414' : '#f4f3f4'}
                                    ios_backgroundColor="#3e3e3e"
                                    onValueChange={HandleSetCurrency}
                                    value={currency == 'USD' ? true : false as boolean}
                                />
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </Modalize>
    );
};

const styles = StyleSheet.create({
    modal: {
        backgroundColor: '#fff',
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        padding: 20,
        width: width,
        elevation: 1
    },
    handle: {
        position: "absolute",
        top: 19,
        elevation: 1,
        width: "20%",
        backgroundColor: "#FF1E00"
    }

});

