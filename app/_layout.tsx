import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import CustomDrawerContent from './components/customDrawerContent';
import { AuthProvider } from './context/auth/authProvider';
import ProtectRoute from './auth/login';

export default function Layout() {
    return (
        <AuthProvider>
            {/* <ProtectRoute> */}
            <GestureHandlerRootView style={{ flex: 1 }}>
                <Drawer
                    drawerContent={(props) => <CustomDrawerContent {...props} />}
                    screenOptions={{
                        drawerStyle: {
                            width: "100%",
                        },
                        drawerType: 'slide',
                        drawerPosition: 'left',
                    }}
                >
                    <Drawer.Screen
                        name="index"
                        options={{
                            title: 'Overview',
                            headerShown: false,
                        }}
                    />
                    <Drawer.Screen
                        name="screens/ProductDetail/index"
                        options={{
                            title: 'Product Detail',
                            headerShown: false,
                        }}
                    />
                    <Drawer.Screen
                        name="screens/ProductDetailAll/[producttype]"
                        options={{
                            title: 'Product Detail',
                            headerShown: false,
                        }}
                    />
                    <Drawer.Screen
                        name="screens/Cart/index"
                        options={{
                            title: 'Cart',
                            headerShown: false,
                        }}
                    />
                    <Drawer.Screen
                        name="screens/Config/index"
                        options={{
                            title: 'Config',
                            headerShown: false,
                        }}
                    />
                    <Drawer.Screen
                        name="screens/Favorites/index"
                        options={{
                            title: 'Not Found',
                            headerShown: false,
                        }}
                    />
                    <Drawer.Screen
                        name="+not-found"
                        options={{
                            title: 'Not Found',
                            headerShown: false,
                        }}
                    />
                    <Drawer.Screen
                        name='screens/Checkout/index'
                        options={{
                            title: 'Checkout',
                            headerShown: false
                        }}
                    />
                </Drawer>
            </GestureHandlerRootView>
            {/* </ProtectRoute> */}
        </AuthProvider>

    );
}
