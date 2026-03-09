import React, { useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import { useConfigStore } from './store/useConfigStore'; // Asumiendo estructura similar
import { StatusBar } from 'expo-status-bar';

/**
 * @component App
 * @description Punto de entrada de la aplicación móvil con soporte para diseño dinámico.
 */
export default function App() {
    const { config, fetchConfig } = useConfigStore();

    useEffect(() => {
        // En un entorno real, fetchConfig se conectaría a la IP de la máquina local o servidor
        // fetchConfig(); 
    }, []);

    return (
        <SafeAreaView style={[styles.container, { backgroundColor: '#fff' }]}>
            <StatusBar style="auto" />

            {/* Navbar Móvil */}
            <View style={styles.navbar}>
                <Text style={[styles.logo, { color: config?.primaryColor || '#000' }]}>TIENDA.CODE</Text>
            </View>

            <ScrollView contentContainerStyle={styles.scrollContent}>
                {/* Hero Mobile */}
                <View style={styles.hero}>
                    <Text style={styles.heroTitle}>Elegancia en cada detalle</Text>
                    <Text style={styles.heroSub}>Nueva Colección 2026</Text>
                    <TouchableOpacity style={[styles.button, { backgroundColor: config?.primaryColor || '#000' }]}>
                        <Text style={styles.buttonText}>Ver Catálogo</Text>
                    </TouchableOpacity>
                </div>

                {/* Placeholder de Catálogo */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Tendencias</Text>
                    <View style={styles.grid}>
                        {/* Aquí irían los componentes de ProductCard adaptados a RN */}
                        <Text style={styles.placeholderText}>Cargando productos premium...</Text>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    navbar: {
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#f0f0f0',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        fontSize: 20,
        fontWeight: '900',
        letterSpacing: 1,
    },
    scrollContent: {
        paddingBottom: 40,
    },
    hero: {
        padding: 30,
        backgroundColor: '#f9f9f9',
        alignItems: 'center',
        marginBottom: 20,
    },
    heroTitle: {
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10,
    },
    heroSub: {
        fontSize: 16,
        color: '#666',
        marginBottom: 20,
    },
    button: {
        paddingHorizontal: 30,
        paddingVertical: 15,
        borderRadius: 12,
    },
    buttonText: {
        color: '#fff',
        fontWeight: '600',
    },
    section: {
        padding: 20,
    },
    sectionTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 15,
    },
    placeholderText: {
        color: '#999',
        fontStyle: 'italic',
    }
});
