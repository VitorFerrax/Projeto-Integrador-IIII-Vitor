import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// Importe a imagem
import psicologiaSymbol from '../assets/images/simbolopsico.png';

const TelaInicial = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            {/* Primeira View para o texto PSICODFMANAGER */}
            <View style={styles.textContainer}>
                <Text style={styles.appName}>PSICODFMANAGER</Text>
            </View>

            {/* Nova View para exibir a imagem */}
            <View style={styles.imageContainer}>
                <Image source={psicologiaSymbol} style={styles.psychologySymbol} />
            </View>

            {/* Segunda View para os botões de login e cadastrar */}
            <View style={styles.buttonContainer}>
                <TouchableWithoutFeedback onPress={() => navigation.navigate('menuapp')}>
                    <View style={styles.loginButton}>
                        <Text style={[styles.buttonText, styles.loginText]}>LOGIN</Text>
                    </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={() => navigation.navigate('cadastro')}>
                    <View style={styles.registerButton}>
                        <Text style={styles.buttonText}>CADASTRAR</Text>
                    </View>
                </TouchableWithoutFeedback>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#5DC4FF', // Cor de fundo: Azul
        justifyContent: 'center',
        alignItems: 'center',
    },
    textContainer: {
        flex: 1,
        justifyContent: 'center', // Alinhar o texto ao final da View
        paddingBottom: 10, // Reduzir o espaço abaixo do texto
    },
    appName: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#000000', // Cor preta mais escura
    },
    imageContainer: {
        flex: 1, // Proporção ajustável conforme necessário
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: -130, // Reduzir o espaço acima da imagem
        marginBottom: 100
    },
    psychologySymbol: {
        width: 170, // Largura da imagem
        height: 170, // Altura da imagem
    },
    buttonContainer: {
        flex: 1,
        width: '97%',
        alignItems: 'center',
        justifyContent: 'flex-start', // Alinhar os botões ao topo
        marginBottom: 90, // Espaço acima da buttonContainer
    },
    loginButton: {
        backgroundColor: '#FFFFFF', // Branco
        width: '80%',
        paddingVertical: 15,
        borderRadius: 20,
        marginBottom: 20,
        alignItems: 'center',
    },
    registerButton: {
        backgroundColor: '#FFFFFF', // Branco
        width: '80%',
        paddingVertical: 15,
        borderRadius: 20,
        alignItems: 'center',
    },
    buttonText: {
        color: '#000000', // Preto
        fontSize: 22,
        fontWeight: 'bold',
        letterSpacing: 1, // Aumenta o espaçamento entre as letras
    },
    loginText: {
        textAlign: 'center', // Centralizar o texto dentro do botão
    },
});

export default TelaInicial;
