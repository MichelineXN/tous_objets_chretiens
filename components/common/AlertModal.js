import React from 'react';
import { Modal, View, Text, TouchableOpacity } from 'react-native';


//Un composant modal de base qui affiche un message d'alerte à l'utilisateur
const AlertModal = ({ visible, message, onClose }) => {
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={visible}
            onRequestClose={onClose}
        >
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <View style={{ margin: 20, backgroundColor: 'white', padding: 35, alignItems: 'center', shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5 }}>
                    <Text style={{ marginBottom: 15 }}>{message}</Text>
                    <TouchableOpacity onPress={onClose}>
                        <Text>Hide Modal</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
};

export default AlertModal;
