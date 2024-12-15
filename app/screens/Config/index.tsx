import BackButton from '@/app/components/backButton'
import useConfigStore from '@/app/context/config/Provider';
import React from 'react'
import { Text, View } from 'react-native'
import { Switch } from 'react-native-gesture-handler';
import { Picker } from '@react-native-picker/picker';
import { Feather } from '@expo/vector-icons';
import { Bangers_400Regular, useFonts } from '@expo-google-fonts/bangers';

export default function ConfigScreen() {

    const { setTheme, setSize, size, setCurrency, currency, theme } = useConfigStore();
    const [fontsLoaded] = useFonts({
        Bangers_400Regular
    });
    
    function toggleSwitch() {
        setTheme()
    };

    if (!fontsLoaded) {
        return null;
    }

    return (
        <View style={{ flex: 1, backgroundColor: theme ? '#313131' : '#fff' }}>
            <BackButton hidden />
            <View style={{ padding: 10 }}>

                <View style={{ flexDirection: "row", gap: 10, alignItems: "center", borderBottomWidth: 1, borderBottomColor: theme ? '#fff' : '#00000026', paddingBottom: 20 }}>
                    <Feather name="settings" size={30} color={theme ? "#fff" : "#222222"} />
                    <Text style={{ color: theme ? '#fff' : '#313131', fontSize: size as number, fontWeight: "600" }}>Configurações</Text>
                </View>

                <View style={{ padding: 10, }}>
                    <View style={{ marginBottom: 10, flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                        <Text style={{ color: theme ? '#fff' : '#313131', width: 110, fontSize: size as number }}>Tema: </Text>
                        <Switch
                            style={{ width: 50 }}
                            trackColor={{ false: '#FF1E00', true: '#FF1E00' }}
                            thumbColor={theme ? '#141414' : '#f4f3f4'}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={toggleSwitch}
                            value={theme as boolean}
                        />
                    </View>
                    <View style={{ marginBottom: 10, flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                        <Text style={{ color: theme ? '#fff' : '#313131', width: 110, fontSize: size as number }}>Fonte: </Text>
                        <Picker
                            style={{ width: 180, color: theme ? '#fff' : '#313131' }}
                            selectedValue={size}
                            onValueChange={(itemValue, itemIndex) =>
                                setSize(itemValue)
                            }>
                            <Picker.Item label="Pequena" value={15} />
                            <Picker.Item label="Media" value={18} />
                            <Picker.Item label="Grande" value={20} />
                        </Picker>
                    </View>
                    <View style={{ marginBottom: 10, flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                        <Text style={{ color: theme ? '#fff' : '#313131', width: 110, fontSize: size as number }}>Moeda: </Text>
                        <Picker
                            style={{ width: 180, color: theme ? '#fff' : '#313131' }}
                            selectedValue={currency}
                            onValueChange={(itemValue, itemIndex) =>
                                setCurrency(itemValue)
                            }>
                            <Picker.Item label="USD" value="USD" />
                            <Picker.Item label="BRL" value="BRL" />
                        </Picker>
                    </View>
                </View>
            </View>
        </View>
    )
}

