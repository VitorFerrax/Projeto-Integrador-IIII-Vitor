import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, TouchableWithoutFeedback, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const RegistrarAnamneseParte2 = () => {
    const navigation = useNavigation();
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.headerText}>PSICODFMANAGER</Text>
                <Text style={styles.title}>REGISTRAR ANAMNESE</Text>
                <Text style={styles.subtitle}>2 - Atendimento:</Text>
            </View>

            <View style={styles.sectionContainer}>
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

            <TouchableWithoutFeedback onPress={() => navigation.navigate('ra3')}>
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
        marginBottom: 10,
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

export default RegistrarAnamneseParte2;
