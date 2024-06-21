import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableWithoutFeedback, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const RegistrarAnamneseScreen = () => {
    const navigation = useNavigation();
    return (
        <ScrollView contentContainerStyle={styles.container}>
            {/* Header */}
            <View style={styles.headerContainer}>
                <Text style={styles.headerText}>PSICODFMANAGER</Text>
                <Text style={styles.title}>REGISTRAR ANAMNESE</Text>
            </View>

            {/* Parte 1 - Identificação */}
            <View style={styles.sectionContainer}>
                <Text style={styles.subtitle}>Data do atendimento</Text>
                <TextInput style={styles.input} placeholder="dd/mm/aaaa" />
                <Text style={styles.sectionTitle}>1 - Identificação:</Text>
                <TextInput style={styles.input} placeholder="Nome" />
                <View style={styles.row}>
                    <TextInput style={[styles.input, styles.halfInput]} placeholder="Idade" />
                    <TextInput style={[styles.input, styles.halfInput]} placeholder="Sexo" />
                </View>
                <TextInput style={styles.input} placeholder="Estado Civil" />
                <TextInput style={styles.input} placeholder="Nacionalidade" />
                <TextInput style={styles.input} placeholder="Data de nascimento" />
                <TextInput style={styles.input} placeholder="Grau de instrução" />
                <TextInput style={styles.input} placeholder="Profissão" />
                <TextInput style={styles.input} placeholder="Endereço" />
                <TextInput style={styles.input} placeholder="Telefones" />
            </View>

            {/* Parte 2 - Atendimento */}
            <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>2 - Atendimento:</Text>
                <TextInput style={styles.input} placeholder="Frequência" />
                <Text style={styles.limitText}>Limite de 100 caracteres</Text>
                <Text style={styles.subtitle}>Data/Hora:</Text>
                <View style={styles.row}>
                    <TextInput style={[styles.input, styles.halfInput]} placeholder="dd/mm/aaaa" />
                    <TextInput style={[styles.input, styles.halfInput]} placeholder="17:31 - 18:10" />
                </View>
                <TextInput style={styles.input} placeholder="Queixa principal" multiline />
                <Text style={styles.limitText}>Limite de 500 caracteres</Text>
                <TextInput style={styles.input} placeholder="Queixa secundária" multiline />
                <Text style={styles.limitText}>Limite de 500 caracteres</Text>
                <TextInput style={styles.input} placeholder="Sintomas" multiline />
                <Text style={styles.limitText}>Limite de 500 caracteres</Text>
            </View>

            {/* Parte 3 - Histórico de doença atual */}
            <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>3 - Histórico de doença atual:</Text>
                <TextInput style={styles.input} placeholder="Início da patologia" multiline />
                <Text style={styles.limitText}>Limite de 500 caracteres</Text>
                <TextInput style={styles.input} placeholder="Frequência" />
                <Text style={styles.limitText}>Limite de 100 caracteres</Text>
                <TextInput style={styles.input} placeholder="Intensidade" />
                <Text style={styles.limitText}>Limite de 100 caracteres</Text>
                <TextInput style={styles.input} placeholder="Tratamentos anteriores" multiline />
                <Text style={styles.limitText}>Limite de 500 caracteres</Text>
                <TextInput style={styles.input} placeholder="Medicamentos" multiline />
                <Text style={styles.limitText}>Limite de 500 caracteres</Text>
            </View>

            {/* Parte 4 - Histórico pessoal */}
            <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>4 - Histórico pessoal:</Text>
                <TextInput style={styles.input} placeholder="Infância" multiline />
                <Text style={styles.limitText}>Limite de 200 caracteres</Text>
                <TextInput style={styles.input} placeholder="Rotina" multiline />
                <Text style={styles.limitText}>Limite de 200 caracteres</Text>
                <TextInput style={styles.input} placeholder="Vícios" multiline />
                <Text style={styles.limitText}>Limite de 200 caracteres</Text>
                <TextInput style={styles.input} placeholder="Hobbies" multiline />
                <Text style={styles.limitText}>Limite de 200 caracteres</Text>
                <TextInput style={styles.input} placeholder="Trabalho" multiline />
                <Text style={styles.limitText}>Limite de 200 caracteres</Text>
            </View>

            {/* Parte 5 - Histórico familiar */}
            <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>5 - Histórico familiar:</Text>
                <TextInput style={styles.input} placeholder="Pais" multiline />
                <Text style={styles.limitText}>Limite de 200 caracteres</Text>
                <TextInput style={styles.input} placeholder="Irmãos" multiline />
                <Text style={styles.limitText}>Limite de 200 caracteres</Text>
                <TextInput style={styles.input} placeholder="Cônjuge" multiline />
                <Text style={styles.limitText}>Limite de 200 caracteres</Text>
                <TextInput style={styles.input} placeholder="Filhos" multiline />
                <Text style={styles.limitText}>Limite de 200 caracteres</Text>
                <TextInput style={styles.input} placeholder="Lar" multiline />
                <Text style={styles.limitText}>Limite de 200 caracteres</Text>
            </View>

            {/* Botão de Próximo */}
            <TouchableWithoutFeedback onPress={() => navigation.navigate('ProximaTela')}>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>Próximo →</Text>
                </View>
            </TouchableWithoutFeedback>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#5DC4FF', // Fundo azul claro
        padding: 20,
    },
    headerContainer: {
        alignItems: 'center',
        marginBottom: 20,
    },
    headerText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#000',
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#000',
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 18,
        color: '#000',
        marginBottom: 10,
    },
    sectionContainer: {
        marginBottom: 30,
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000',
        marginBottom: 10,
    },
    input: {
        backgroundColor: '#FFFFFF',
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 10,
        fontSize: 16,
        marginBottom: 10,
    },
    limitText: {
        fontSize: 12,
        color: '#000',
        alignSelf: 'flex-end',
        marginBottom: 10,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    halfInput: {
        width: '48%',
    },
    button: {
        backgroundColor: '#FFFFFF',
        paddingVertical: 15,
        borderRadius: 20,
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 18,
        color: '#000',
        fontWeight: 'bold',
    },
});

export default RegistrarAnamneseScreen;
