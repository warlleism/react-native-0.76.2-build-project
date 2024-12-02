import BackButton from '@/app/components/backButton'
import useConfigStore from '@/app/context/config/Provider';
import React from 'react'
import { Text, View } from 'react-native'
import { Switch } from 'react-native-gesture-handler';
import { Picker } from '@react-native-picker/picker';

export default function ConfigScreen() {

    const { setTheme, setSize, size, setCurrency, currency, theme } = useConfigStore();
    function toggleSwitch() {
        setTheme()
    };

    return (
        <View style={{ flex: 1, backgroundColor: theme ? '#313131' : '#fff' }}>
            <BackButton hidden theme={theme} />
            <View style={{ padding: 10, }}>
                <View style={{ marginBottom: 10, flexDirection: "row", alignItems: "center" }}>
                    <Text style={{ color: theme ? '#fff' : '#313131', width: 80, fontSize: size as number }}>Tema: </Text>
                    <Switch
                        style={{ width: 50 }}
                        trackColor={{ false: '#FF1E00', true: '#FF1E00' }}
                        thumbColor={theme ? '#141414' : '#f4f3f4'}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitch}
                        value={theme as boolean}
                    />
                </View>
                <View style={{ marginBottom: 10, flexDirection: "row", alignItems: "center" }}>
                    <Text style={{ color: theme ? '#fff' : '#313131', width: 80, fontSize: size as number }}>Fonte: </Text>
                    <Picker
                        style={{ backgroundColor: "#FF1E00", width: 180, color: "#fff" }}
                        selectedValue={size}
                        onValueChange={(itemValue, itemIndex) =>
                            setSize(itemValue)
                        }>
                        <Picker.Item label="Pequena" value={15} />
                        <Picker.Item label="Grande" value={25} />
                    </Picker>
                </View>
                <View style={{ marginBottom: 10, flexDirection: "row", alignItems: "center" }}>
                    <Text style={{ color: theme ? '#fff' : '#313131', width: 80, fontSize: size as number }}>Moeda: </Text>
                    <Picker
                        style={{ backgroundColor: "#FF1E00", width: 180, color: "#fff" }}
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
    )
}

