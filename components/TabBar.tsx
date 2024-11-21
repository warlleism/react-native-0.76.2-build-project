import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineExplore } from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";
import { IoCreateOutline } from "react-icons/io5";

type IconKey = 'index' | 'explore' | 'profile' | 'create';


export default function TabBar({ state, descriptors, navigation }: any) {

    const icons = {
        index: (props: any) => <IoHomeOutline name="home" size={25} color="#fff" {...props} />,
        explore: (props: any) => <MdOutlineExplore name="explore" size={25} color="#fff" {...props} />,
        profile: (props: any) => <FaRegUserCircle name="user" size={25} color="#fff" {...props} />,
        create: (props: any) => <IoCreateOutline name="create" size={25} color="#fff" {...props} />,
    };

    const primaryColor = '#0891b2';
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
                            {label}
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
