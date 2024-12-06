import * as React from 'react';
import { Text, View, StyleSheet, Dimensions, Image, Platform, TouchableOpacity } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { TextInput } from 'react-native-paper';
import { useAuth } from '../context/auth/authProvider';
import useConfigStore from '../context/config/Provider';
import SubmitButtom from '../components/submitButton';

const { width, height } = Dimensions.get("window");

interface ProtectRouteProps {
    children: React.ReactNode;
}

const ProtectRoute: React.FC<ProtectRouteProps> = ({ children }) => {

    const { initialize } = useConfigStore();

    React.useEffect(() => {
        initialize();
    }, [])

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

    const { login, isAuthenticated } = useAuth()

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
                        <View>
                            <Controller
                                control={control}
                                render={({ field: { onChange, onBlur, value } }) => (
                                    <TextInput
                                        theme={{ colors: { primary: "#FF3B00" } }}
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
                            <Text style={[styles.error, { opacity: errors.email ? 1 : 0, textAlign: "left" }]}>Email é obrigatório</Text>
                        </View>
                        <View>
                            <Controller
                                control={control}
                                render={({ field: { onChange, onBlur, value } }) => (
                                    <TextInput
                                        theme={{ colors: { primary: "#FF3B00" } }}
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
                            <Text style={[styles.error, { opacity: errors.password ? 1 : 0, textAlign: "left" }]}>Senha é obrigatória</Text>
                        </View>
                        <TouchableOpacity style={{ width: width * 0.4, marginTop: 10, marginBottom: 10, alignSelf: "center" }}>
                            <Text style={{ textAlign: "center", }}>Esqueci minha senha</Text>
                        </TouchableOpacity>
                        <SubmitButtom handleSubmit={handleSubmit} login={login} />
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
        height: 40,
        fontSize: 13,
        width: width * 0.8,
        backgroundColor: '#fff',
    },
    error: {
        marginTop: 5,
        width: width * 0.8,
        color: '#0000004f',
        textAlign: 'center',
    },
});