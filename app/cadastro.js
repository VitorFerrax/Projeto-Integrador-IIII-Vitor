import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TouchableWithoutFeedback, Image, TextInput, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// Importe a imagem da seta
import setaImage from '../assets/images/seta.png';

const CadastroScreen = () => {
    const [nomeUsuario, setNomeUsuario] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmarSenha, setConfirmarSenha] = useState('');
    const [senhasIncompativeis, setSenhasIncompativeis] = useState(false);
    const [isAluno, setIsAluno] = useState(false);
    const [aceitaPoliticas, setAceitaPoliticas] = useState(false);
    const navigation = useNavigation();

    const handleConfirmarSenha = (text) => {
        setConfirmarSenha(text);
        setSenhasIncompativeis(text !== senha);
    };

    const handleFinalizarCadastro = () => {
        if (!nomeUsuario || !senha || !confirmarSenha) {
            alert('Todos os campos são obrigatórios. Por favor, preencha todos os campos.');
            return;
        }

        if (senhasIncompativeis) {
            alert('As senhas não coincidem. Por favor, verifique.');
            return;
        }

        if (!aceitaPoliticas) {
            alert('Você deve aceitar as políticas de privacidade para prosseguir.');
            return;
        }

        // Simule o armazenamento dos dados do usuário
        const userData = {
            nomeUsuario,
            senha,
        };

        console.log('Cadastro finalizado!', userData);
        // Você pode adicionar aqui a lógica para salvar os dados do usuário em um banco de dados ou enviar para uma API

        // Navegar para a tela de login após o cadastro
        navigation.navigate('Login');
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>

            <View style={styles.backButtonContainer}>
                <TouchableWithoutFeedback onPress={() => navigation.navigate('index')}>
                    {/* Ícone de seta voltar */}
                    <Image source={setaImage} style={styles.backArrow} />
                </TouchableWithoutFeedback>
            </View>

            {/* View para o texto "CADASTRO" */}
            <View style={styles.titleContainer}>
                <Text style={styles.title}>CADASTRO</Text>
            </View>

            {/* Campos de cadastro */}
            <View style={styles.inputContainer}>
                <View style={styles.inputWrapper}>
                    <Text style={styles.label}>Nome completo</Text>
                    <TextInput style={styles.input} placeholder="Digite seu nome completo" />
                </View>

                <View style={styles.inputWrapper}>
                    <Text style={styles.label}>E-mail</Text>
                    <TextInput style={styles.input} placeholder="Digite seu e-mail" keyboardType="email-address" />
                </View>

                <View style={styles.inputWrapper}>
                    <Text style={styles.label}>Data de Nascimento</Text>
                    <TextInput style={styles.input} placeholder="DD/MM/AAAA" keyboardType="text" />
                </View>

                <View style={styles.inputWrapper}>
                    <Text style={styles.label}>CPF</Text>
                    <TextInput style={styles.input} placeholder="Digite seu CPF" keyboardType="numeric" />
                </View>

                <View style={styles.inputWrapper}>
                    <Text style={styles.label}>Código CRP</Text>
                    <TextInput style={styles.input} placeholder="Digite seu código CRP" keyboardType="numeric" />
                </View>

                <View style={styles.checkboxWrapper}>
                    <TouchableOpacity
                        style={[styles.checkbox, isAluno ? styles.checkboxSelected : null]}
                        onPress={() => setIsAluno(!isAluno)}
                    />
                    <Text style={styles.checkboxLabel}>Sou aluno</Text>
                </View>

                <Text style={styles.checkboxObservation}>
                    **Alunos poderão fazer as anamneses, porém, vão ficar com pendência para o psicólogo com CRP aprovar as anamneses**
                </Text>

                {/* Linha separadora */}
                <View style={styles.separator} />

                <View style={styles.inputWrapper}>
                    <Text style={styles.label}>Nome de usuário</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Digite seu nome de usuário"
                        value={nomeUsuario}
                        onChangeText={(text) => setNomeUsuario(text)}
                    />
                </View>

                <View style={styles.inputWrapper}>
                    <Text style={styles.label}>Senha</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Digite sua senha"
                        secureTextEntry={true}
                        value={senha}
                        onChangeText={(text) => setSenha(text)}
                    />
                </View>

                <View style={styles.inputWrapper}>
                    <Text style={styles.label}>Confirmar Senha</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Confirme sua senha"
                        secureTextEntry={true}
                        value={confirmarSenha}
                        onChangeText={handleConfirmarSenha}
                    />
                    {senhasIncompativeis && <Text style={styles.errorText}>Senhas não compatíveis</Text>}
                </View>

                {/* Checkbox para aceitar as políticas */}
                <View style={styles.checkboxWrapper}>
                    <TouchableOpacity
                        style={[styles.checkbox, aceitaPoliticas ? styles.checkboxSelected : null]}
                        onPress={() => setAceitaPoliticas(!aceitaPoliticas)}
                    />
                    <Text style={styles.checkboxLabel}>Aceito as políticas de privacidade da PSICODFMANAGER</Text>
                </View>

                {/* Botão para finalizar cadastro */}
                <View style={styles.finalizarButton}>
                    <TouchableOpacity onPress={handleFinalizarCadastro}>
                        <Text style={styles.finalizarText}>Finalizar Cadastro</Text>
                    </TouchableOpacity>
                </View>

            </View>
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
        marginTop: 70
    },
    title: {
        fontSize: 37,
        fontWeight: 'bold',
        color: '#000000', // Cor preta
    },
    inputContainer: {
        marginTop: 20,
    },
    inputWrapper: {
        marginBottom: 20,
    },
    checkboxWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
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
    checkbox: {
        width: 20,
        height: 20,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#000000',
        marginRight: 10,
    },
    checkboxSelected: {
        backgroundColor: '#FF5733',
    },
    checkboxLabel: {
        fontSize: 16,
    },
    checkboxObservation: {
        color: '#000000',
        fontSize: 14,
        marginBottom: 30, // Adiciona um espaçamento superior entre o texto anterior e este
    },
    separator: {
        borderBottomColor: '#000000',
        borderBottomWidth: 2,
        marginBottom: 30,
        marginTop: 1
    },
    finalizarButton: {
        backgroundColor: '#FF5733',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 20,
    },
    finalizarText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
    errorText: {
        color: 'red',
        fontSize: 14,
        marginTop: 5,
    },
});

export default CadastroScreen;
