import { Text } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper'

export default function SubmitButtom({ handleSubmit, login }: any) {

    return (
        <Button
            icon="login"
            mode="contained"
            onPress={handleSubmit(login)}
            style={{ backgroundColor: "#FF3B00", alignSelf: "center" }}>
            <Text style={{ color: "#fff", fontSize: 15 }}>Entrar</Text>
        </Button>
    )
}

