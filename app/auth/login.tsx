import * as React from 'react';
import { Text, View, StyleSheet, Alert, Dimensions, Image, Platform, TouchableOpacity } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { TextInput } from 'react-native-paper';
import { Button } from 'react-native-paper';
import { useAuth } from '../context/auth/authProvider';
import { Bangers_400Regular, useFonts } from '@expo-google-fonts/bangers';

const { width, height } = Dimensions.get("window");

interface ProtectRouteProps {
    children: React.ReactNode;
}

const ProtectRoute: React.FC<ProtectRouteProps> = ({ children }) => {

    const {
        register,
        setValue,
        handleSubmit,
        control,
        reset,
        formState: { errors } } = useForm({
            defaultValues: {
                email: '',
                password: ''
            }
        });

    console.log('errors', errors);
    const { login, isAuthenticated } = useAuth()

    const [fontsLoaded] = useFonts({
        Bangers_400Regular,
    });
    const onSubmit = (data: any) => {
        console.log(data);
        login()
    };
    if (!isAuthenticated) {
        return (
            <View style={styles.container}>
                <View style={styles.card}>
                    <View style={styles.form}>
                        <View style={{ justifyContent: "center", alignItems: "center" }}>
                            <Image
                                style={styles.logo}
                                source={require('../../assets/logos/logo.png')} />
                            <View style={{ flexDirection: "row", alignItems: "center", gap: 2 }}>
                                <Text style={{
                                    fontSize: 30,
                                    color: "#000",
                                    fontFamily: Platform.select({
                                        android: 'Bangers_400Regular',
                                        ios: 'Bangers_400Regular',
                                    }),
                                }}>Menu</Text>
                                <Text style={{
                                    fontSize: 30,
                                    color: "#FF3B00",
                                    fontFamily: Platform.select({
                                        android: 'Bangers_400Regular',
                                        ios: 'Bangers_400Regular',
                                    }),
                                }}>Rapide</Text>
                            </View>
                            <Text style={{
                                fontSize: 13,
                                fontWeight: "100",
                                color: "#4E4E4E",
                                marginBottom: 10,
                                textAlign: "center",
                                fontFamily: Platform.select({
                                    android: 'Bangers_400Regular',
                                    ios: 'Bangers_400Regular',
                                }),
                            }}>Seu restaurante favorito, na palma da mão!</Text>
                        </View>
                        <Controller
                            control={control}
                            render={({ field: { onChange, onBlur, value } }) => (
                                <TextInput
                                    style={styles.input}
                                    label="Email"
                                    onBlur={onBlur}
                                    onChangeText={value => onChange(value)}
                                    value={value}
                                />
                            )}
                            name="email"
                            rules={{ required: true }}
                        />
                        {errors.email && <Text style={styles.error}>Email é obrigatório</Text>}

                        <View>
                            <Controller
                                control={control}
                                render={({ field: { onChange, onBlur, value } }) => (
                                    <TextInput
                                        style={styles.input}
                                        label="Senha"
                                        onBlur={onBlur}
                                        onChangeText={value => onChange(value)}
                                        value={value}
                                    />
                                )}
                                name="password"
                                rules={{ required: true }}
                            />
                            {errors.password && <Text style={styles.error}>Senha é obrigatória</Text>}
                            <View style={{ alignItems: "flex-end", marginBottom: 20 }}>
                                <TouchableOpacity style={{ width: width * 0.4 }}>
                                    <Text style={{ textAlign: "right" }}>Esqueci minha senha</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <Button
                            icon="login"
                            mode="contained"
                            onPress={handleSubmit(onSubmit)}
                            style={{ width: width * 0.8, height: 60, justifyContent: "center", alignItems: "center", backgroundColor: "#FF3B00", borderRadius: 5 }}>
                            <Text style={{ color: "#fff", fontSize: 15 }}>Entrar</Text>
                        </Button>
                    </View>
                </View>

            </View>
        );
    }

    return children;
}


export default ProtectRoute;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#F6F6F6',
    },
    card: {
        justifyContent: 'center',
        alignItems: 'center',
        height: height * 0.65,
        width: '100%',
        padding: 24,
        borderRadius: 8,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#e0e0e0',
    },
    form: {
        justifyContent: 'center',
        alignItems: 'center',
        height: "100%",
        gap: 10,
        width: "100%",
    },
    logo: {
        width: 70,
        height: 70,
        marginTop: 20,
        objectFit: 'contain',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 24,
        textAlign: 'center',
    },
    input: {
        width: width * 0.8,
        height: 40,
        marginBottom: 16,
        backgroundColor: '#fff',
    },
    error: {
        color: 'red',
        marginBottom: 10,
        textAlign: 'center',
    },
});