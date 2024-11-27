import { createDrawerNavigator } from "@react-navigation/drawer";
import TabBar from "@/app/components/TabBar";
import { Tabs } from "expo-router";
import CustomDrawerContent from "../components/CustomDrawerContent";

const Drawer = createDrawerNavigator();

function TabsNavigator() {
    return (
        <Tabs
            screenOptions={{ headerShown: false }}
            tabBar={(props) => <TabBar {...props} />}
        >
            <Tabs.Screen name="index" />
            <Tabs.Screen name="create" />
            <Tabs.Screen name="profile" />
        </Tabs>
    );
}

export default function RootLayout() {
    return (
        <Drawer.Navigator screenOptions={{ headerShown: false }} drawerContent={(props) => <CustomDrawerContent {...props} />}>
            <Drawer.Screen name="Home" component={TabsNavigator} />
        </Drawer.Navigator>
    );
}

