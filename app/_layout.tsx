import { Stack } from "expo-router";
export default function RootLayout() {
    return (
        <Stack
            screenOptions={{ headerShown: false }}>
            <Stack.Screen
                name="screens/ProductDetail/index"
                options={{
                    headerTitle: "product",
                    headerShown: false
                }} />
            <Stack.Screen
                name="screens/ProductDetailAll/[producttype]"
                options={{
                    headerTitle: "product",
                    headerShown: false
                }} />
            <Stack.Screen
                name="screens/Cart/index"
                options={{
                    headerTitle: "cart",
                    headerShown: false
                }} />
        </Stack>
    );
}