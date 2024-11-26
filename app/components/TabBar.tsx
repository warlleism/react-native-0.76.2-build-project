import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
type IconKey = 'index' | 'create' | 'profile' | 'explore';

export default function TabBar({ state, descriptors, navigation }: any) {

    const icons = {
        'index': (props: any) => <AntDesign name="home" size={25} color="#fff" {...props} />,
        'create': (props: any) => <Ionicons name="create-outline" size={25} color="#fff" {...props} />,
        'profile': (props: any) => <AntDesign name="user" size={25} color="#fff" {...props} />,
        'explore': (props: any) => <FontAwesome5 name="wpexplorer" size={25} color="#fff" {...props} />,
    };

    const primaryColor = '#FF8000';
    const secondaryColor = '#737373';

    return (
        <View style={styles.TabBar}>
            {state.routes.map((route: any, index: number) => {
                const { options } = descriptors[route.key];
                const label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                            ? options.title
                            : route.name;

                if (['_sitemap', '+not-found'].includes(route.name)) return null;

                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name, route.params);
                    }
                };

                const onLongPress = () => {
                    navigation.emit({
                        type: 'tabLongPress',
                        target: route.key,
                    });
                };

                return (
                    <TouchableOpacity
                        key={route.key}
                        accessibilityRole="button"
                        accessibilityState={isFocused ? { selected: true } : {}}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        testID={options.tabBarButtonTestID}
                        onPress={onPress}
                        onLongPress={onLongPress}
                        style={{ flex: 1, alignItems: 'center' }}
                    >
                        {icons[route.name as IconKey]({
                            color: isFocused ? primaryColor : secondaryColor,
                        })}

                        <Text style={{ color: isFocused ? primaryColor : secondaryColor }}>
                            {label == 'index' ? "Home" : label}
                        </Text>
                    </TouchableOpacity>
                );
            })}
        </View>
    );
}

const styles = StyleSheet.create({
    TabBar: {
        position: 'absolute',
        bottom: 20,
        paddingVertical: 10,
        borderRadius: 100,
        width: '96%',
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#fff',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowRadius: 10,
        shadowColor: '#00000075',
        shadowOpacity: 0.25,
    },
});
