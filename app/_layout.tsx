import { Stack } from "expo-router";

export default function RootLayout() {
    return (
        <Stack
            screenOptions={{ headerShown: false }}>
            <Stack.Screen
                name="screens/product/[productid]"
                options={{
                    headerTitle: "product",
                    headerShown: false
                }} />
        </Stack>
    );
}