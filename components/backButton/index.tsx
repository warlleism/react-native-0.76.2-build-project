import { router } from "expo-router";
import { Button, View } from "react-native";

export default function BackButton() {

    function handleBack() {
        router.push('(tabs)' as never);
    }

    return (
        <View>
            <Button title="Voltar" onPress={handleBack} />
        </View>
    );
}