import TabBar from "@/app/components/TabBar";
import { Tabs } from "expo-router";

export default function RootLayout() {
    return (
        <Tabs
            screenOptions={{ headerShown: false }}
            tabBar={props => <TabBar {...props} />}
        >
            <Tabs.Screen name="index" />
            <Tabs.Screen name="create" />
            <Tabs.Screen name="profile" />
            <Tabs.Screen name="explore" />
        </Tabs>
    );
}