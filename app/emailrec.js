import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TouchableWithoutFeedback, TextInput, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';


// Importe a imagem da seta
import setaImage from '../assets/images/seta.png';

const RecoveryScreen = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            {/* View para o ícone de voltar */}
            <View style={styles.backButtonContainer}>
                <TouchableWithoutFeedback onPress={() => navigation.navigate('login')}>
                    {/* Ícone de seta voltar */}
                    <Image source={setaImage} style={styles.backArrow} />
                </TouchableWithoutFeedback>
            </View>

            {/* View para o texto "RECUPERAÇÃO" centralizado */}
            <View style={styles.recoveryTextContainer}>
                <Text style={styles.recoveryText}>RECUPERAÇÃO</Text>
            </View>

            {/* View para o campo de e-mail de recuperação */}
            <View style={styles.inputContainer}>
                {/* Label e campo de e-mail */}
                <View style={styles.inputWrapper}>
                    <Text style={styles.label}>E-mail para Recuperação</Text>
                    <TextInput style={styles.input} placeholder="Digite seu e-mail" />
                </View>
            </View>

            {/* View para o botão "Enviar" */}
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.sendButton}>
                    <Text style={styles.buttonText}>Enviar</Text>
                </TouchableOpacity>
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
    recoveryTextContainer: {
        alignItems: 'center', // Centraliza horizontalmente
        marginBottom: 80,
        marginTop: 100
    },
    recoveryText: {
        fontSize: 35,
        fontWeight: 'bold',
        color: '#000000',
    },
    inputContainer: {
        marginBottom: 20,
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
        letterSpacing: 0.5,
    },
    input: {
        backgroundColor: '#FFFFFF',
        paddingVertical: 12,
        paddingHorizontal: 15,
        borderRadius: 20,
        fontSize: 16,
    },
    buttonContainer: {
        alignItems: 'center',
    },
    sendButton: {
        backgroundColor: '#FFFFFF',
        paddingVertical: 15,
        paddingHorizontal: 50,
        borderRadius: 20,
        alignItems: 'center',
    },
    buttonText: {
        color: '#000000',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default RecoveryScreen;
