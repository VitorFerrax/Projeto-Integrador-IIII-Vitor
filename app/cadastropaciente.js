import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, TouchableWithoutFeedback, Image, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// Importe a imagem da seta
import setaImage from '../assets/images/seta.png';

const CadastroPaciente = () => {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [dataNascimento, setDataNascimento] = useState('');
    const [cpf, setCpf] = useState('');
    const navigation = useNavigation();

    const handleFinalizar = () => {
        // Implementar lógica de salvar as informações do paciente
        console.log('Paciente salvo:', { nome, email, dataNascimento, cpf });
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            
            {/* View para a seta de voltar */}
            <View style={styles.backButtonContainer}>
                <TouchableWithoutFeedback onPress={() => navigation.navigate('menuapp')}>
                    {/* Ícone de seta voltar */}
                    <Image source={setaImage} style={styles.backArrow} />
                </TouchableWithoutFeedback>
            </View>

            {/* View para o texto "CADASTRO DE PACIENTE" */}
            <View style={styles.titleContainer}>
                <Text style={styles.title}>CADASTRO DE PACIENTE</Text>
            </View>

            {/* Campos de cadastro */}
            <View style={styles.inputContainer}>
                <View style={styles.inputWrapper}>
                    <Text style={styles.label}>Nome completo</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Digite o nome completo"
                        value={nome}
                        onChangeText={setNome}
                    />
                </View>

                <View style={styles.inputWrapper}>
                    <Text style={styles.label}>E-mail</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Digite o e-mail"
                        keyboardType="email-address"
                        value={email}
                        onChangeText={setEmail}
                    />
                </View>

                <View style={styles.inputWrapper}>
                    <Text style={styles.label}>Data de nascimento</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="DD/MM/AAAA"
                        keyboardType="numeric"
                        value={dataNascimento}
                        onChangeText={setDataNascimento}
                    />
                </View>

                <View style={styles.inputWrapper}>
                    <Text style={styles.label}>CPF</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Digite o CPF"
                        keyboardType="numeric"
                        value={cpf}
                        onChangeText={setCpf}
                    />
                </View>
            </View>

            <TouchableOpacity style={styles.finalizarButton} onPress={handleFinalizar}>
                <Text style={styles.buttonText}>Finalizar</Text>
            </TouchableOpacity>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#5DC4FF', // Cor de fundo: Azul
        padding: 20,
    },
    backButton: {
        position: 'absolute',
        top: 40,
        left: 20,
        zIndex: 1,
    },
    backArrow: {
        width: 40,
        height: 40,
        resizeMode: 'contain', // Ajusta a imagem para caber no espaço
    },
    titleContainer: {
        alignItems: 'center',
        marginBottom: 30,
        marginTop: 70,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#000000', // Cor preta
    },
    inputContainer: {
        marginTop: 20,
    },
    inputWrapper: {
        marginBottom: 20,
    },
    label: {
        color: '#000000',
        fontSize: 18,
        marginBottom: 5,
        fontWeight: 'bold',
    },
    input: {
        backgroundColor: '#FFFFFF',
        paddingVertical: 12,
        paddingHorizontal: 15,
        borderRadius: 20,
        fontSize: 16,
    },
    finalizarButton: {
        backgroundColor: '#FFFFFF',
        paddingVertical: 15,
        borderRadius: 20,
        alignItems: 'center',
        marginTop: 20,
    },
    buttonText: {
        color: '#000000',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default CadastroPaciente;
