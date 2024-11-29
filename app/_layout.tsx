import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import { DrawerScreenProps } from '@react-navigation/drawer'; // Importação de tipagem do Drawer
import CustomDrawerContent from './components/CustomDrawerContent';

// Definir as tipagens para as opções de tela (se necessário)
type RootDrawerParamList = {
    index: undefined;
    'screens/ProductDetail/index': undefined;
    'screens/ProductDetailAll/[producttype]': undefined;
    'screens/Cart/index': undefined;
};

export default function Layout() {
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <Drawer
                drawerContent={(props) => <CustomDrawerContent {...props} />}
                screenOptions={{
                    drawerStyle: {
                        width: "90%",
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
            </Drawer>
        </GestureHandlerRootView>
    );
}
