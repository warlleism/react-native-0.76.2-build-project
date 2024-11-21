import React from 'react'
import { Tabs } from 'expo-router'
import TabBar from '@/components/TabBar'

export default function _layout() {
    return (
        <Tabs
            tabBar={props => <TabBar {...props}  />}
        >
            <Tabs.Screen
                name="index"
                options={{ title: 'Home', headerShown: false }}
            />
            <Tabs.Screen
                name="explore"
                options={{ title: 'Explore', headerShown: false }}
            />
            <Tabs.Screen
                name="profile"
                options={{ title: 'Profile', headerShown: false }}
            />
            <Tabs.Screen
                name="create"
                options={{ title: 'Create', headerShown: false }}
            />
        </Tabs>
    )
}
