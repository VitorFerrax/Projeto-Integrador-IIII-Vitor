import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image, TouchableWithoutFeedback } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// Importe a imagem da seta
import setaImage from '../assets/images/seta.png';

const LoginScreen = () => {

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            {/* View para o ícone de voltar */}
            <View style={styles.backButtonContainer}>
                <TouchableWithoutFeedback onPress={() => navigation.navigate('index')}>
                    {/* Ícone de seta voltar */}
                    <Image source={setaImage} style={styles.backArrow} />
                </TouchableWithoutFeedback>
            </View>

            {/* View para o texto "LOGIN" centralizado */}
            <View style={styles.loginTextContainer}>
                <Text style={styles.loginText}>LOGIN</Text>
            </View>

            {/* View para os campos de usuário e senha */}
            {/* Esta View pode ser ajustada para mover os campos mais para baixo */}
            <View style={[styles.inputContainer, { marginTop: 60 }]}>
                {/* Campo de usuário */}
                <View style={styles.inputWrapper}>
                    <Text style={styles.label}>Usuário</Text>
                    <TextInput style={styles.input} placeholder="Digite seu usuário" />
                </View>
                {/* Campo de senha */}
                <View style={styles.inputWrapper}>
                    <Text style={styles.label}>Senha</Text>
                    <TextInput style={styles.input} placeholder="Digite sua senha" secureTextEntry={true} />
                </View>
                {/* Links "Esqueci minha senha" e "Cadastre-se" */}
                <View style={styles.linksContainer}>
                    <TouchableWithoutFeedback onPress={() => navigation.navigate('emailrec')}>
                        <Text style={styles.link}>Esqueci minha senha</Text>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={() => navigation.navigate('cadastro')}>
                        <Text style={styles.link}>Cadastre-se</Text>
                    </TouchableWithoutFeedback>
                </View>

                {/* Nova View para o botão "Entrar" */}
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.loginButton}>
                        <Text style={styles.buttonText}>Entrar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#5DC4FF', // Cor de fundo: Azul
        padding: 20,
    },
    backButtonContainer: {
        alignSelf: 'flex-start', // Alinha à esquerda
    },
    backArrow: {
        width: 40,
        height: 40,
        resizeMode: 'contain', // Ajusta a imagem para caber no espaço
    },
    loginTextContainer: {
        alignItems: 'center', // Centraliza horizontalmente
        marginBottom: 30,
    },
    loginText: {
        fontSize: 44,
        fontWeight: 'bold',
        color: '#000000',
        marginTop: 80,
    },
    inputContainer: {
        flex: 1,
    },
    inputWrapper: {
        marginBottom: 15,
    },
    label: {
        color: '#000000',
        fontSize: 18,
        marginBottom: 5,
        fontWeight: 'bold',
        marginLeft: 6,
        letterSpacing: 0.5
    },
    input: {
        backgroundColor: '#FFFFFF',
        paddingVertical: 12,
        paddingHorizontal: 15,
        borderRadius: 20,
        fontSize: 16,
    },
    linksContainer: {
        flexDirection: 'column', // Ajusta para coluna para centralizar os links
        alignItems: 'center', // Centraliza horizontalmente
        marginTop: 10,
    },
    link: {
        color: '#000000',
        fontSize: 14,
        marginBottom: 10, // Espaço entre os links
    },
    buttonContainer: {
        alignItems: 'center', // Centraliza horizontalmente
        marginTop: 20,
    },
    loginButton: {
        backgroundColor: '#FFFFFF',
        width: '40%',
        paddingVertical: 15,
        borderRadius: 15,
        alignItems: 'center',
    },
    buttonText: {
        color: '#000000',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default LoginScreen;
