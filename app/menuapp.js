import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TouchableWithoutFeedback, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// Importe a imagem
import psicologiaSymbol from '../assets/images/simbolopsico.png';

const MenuApp = () => {

    const navigation = useNavigation();

    const handleCadastrarPaciente = () => {
        // Implemente a navegação para a tela de cadastro de paciente aqui
        console.log('Cadastrar Paciente');
    };

    const handleRegistrarAnamnese = () => {
        // Implemente a navegação para a tela de registro de anamnese aqui
        console.log('Registrar Anamnese');
    };

    const handleDesconectar = () => {
        Alert.alert(
            "Desconectar",
            "Você tem certeza que deseja se desconectar?",
            [
                {
                    text: "Cancelar",
                    style: "cancel"
                },
                {
                    text: "Sim",
                    onPress: () => {
                        console.log('Desconectar');
                        navigation.navigate('index'); // Navegar para a tela de login (ajuste conforme necessário)
                    }
                }
            ]
        );
    };

    return (
        <View style={styles.container}>
            {/* Botão Desconectar */}
            <TouchableOpacity style={styles.logoutButton} onPress={handleDesconectar}>
                <Text style={styles.logoutButtonText}>Desconectar</Text>
            </TouchableOpacity>

            {/* Primeira View para o texto PSICODFMANAGER */}
            <View style={styles.textContainer}>
                <Text style={styles.appName}>PSICODFMANAGER</Text>
            </View>

            {/* Nova View para exibir a imagem */}
            <View style={styles.imageContainer}>
                <Image source={psicologiaSymbol} style={styles.psychologySymbol} />
            </View>

            {/* Segunda View para os botões de menu */}
            <View style={styles.buttonContainer}>
                <TouchableWithoutFeedback onPress={() => navigation.navigate('cadastropaciente')}>
                    <View style={styles.cadastrarButton}>
                        <Text style={styles.buttonText}>Cadastrar Paciente</Text>
                    </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={() => navigation.navigate('ra')}>
                    <View style={styles.registrarButton}>
                        <Text style={styles.buttonText}>Registrar Anamnese</Text>
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
        paddingTop: 50, // Adicionado padding para evitar sobreposição com o status bar
    },
    logoutButton: {
        position: 'absolute',
        top: 10,
        left: 10,
        backgroundColor: '#FF5733', // Cor vermelha para o botão Desconectar
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 20,
    },
    logoutButtonText: {
        color: '#FFFFFF', // Branco
        fontSize: 16,
        fontWeight: 'bold',
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
    cadastrarButton: {
        backgroundColor: '#FFFFFF', // Branco
        width: '80%',
        paddingVertical: 15,
        borderRadius: 20,
        marginBottom: 20,
        alignItems: 'center',
    },
    registrarButton: {
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
        alignItems: 'center',
        justifyContent: 'center'
    },
});

export default MenuApp;
