import BackButton from '@/app/components/backButton';
import React from 'react';
import { Button, Text, View } from 'react-native';
import useStore from '../context/provider';

export default function CreateScreen() {
    return (
        <View>
            <BackButton />
            <Text>create</Text>
        </View>
    );
}
