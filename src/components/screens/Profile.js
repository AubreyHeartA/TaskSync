import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  StyleSheet,
  Modal,
} from "react-native";
import { Icon, Button, Divider, List } from "react-native-paper";

import globalstyles from "../../config/styles";

export default function Profile() {
    const [modalVisible, setModalVisible] = useState(false);

    const [firstName, setFirstName] = useState("Firstname");
    const [lastName, setlastName] = useState("lastname");
    const [workEmail, setWorkEmail] = useState("set email");

    // this is just a test -- this is originally to fetch data an update it
    // this function posts an info to the db
    // http://192.168.16.102:3000/api/profile 

    const saveChanges = async () => {
    try {
        const response = await fetch('http://192.168.16.102:3000/api/profile', {  // Replace <express-server-ip> with your server's IP and port
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                firstName: firstName,
                lastName: lastName,
                workEmail: workEmail,
            }),
        });
        const json = await response.json();
        console.log('Profile Update Response:', json);
        setModalVisible(false);
    } catch (error) {
        console.error('Error updating profile:', error);
    }
};

    

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
      style={{ backgroundColor: "#fff" }}
    >
        <Text style={styles.profileHeader}>Profile</Text>
        <View style={styles.profileContainer}>
            <Icon source="account-circle" size={200} />
            <Text style={styles.greetings}>Hello, {firstName} {lastName}!</Text>
        </View>

        <Divider />
        <View style={{ padding: 20 }}>
            <Text>Account Information:</Text>
            <View style={styles.displayInfo}>
                <Text style={styles.label}>Name</Text>
                <Text>{firstName} {lastName}</Text>
            </View>
            <View style={styles.displayInfo}>
                <Text style={styles.label}>Work Email</Text>
                <Text>{workEmail}</Text>
            </View>

            <TouchableOpacity style={styles.updateButton} onPress={() => setModalVisible(true)} >
                <Text style={styles.textButton}>Edit Profile</Text>
            </TouchableOpacity>
        </View>
        
        <Divider style={{ marginTop: 10 }} />
        <View style={styles.actionsContainer}>
            <Text>Actions</Text>
            {/* Repeat the block below for each action */}

            <TouchableOpacity style={styles.actions}>
                <Icon source="help-circle-outline" size={24} color="black" />
                <Text style={styles.actionsItem}>Help and Support</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.actions}>
                <Icon source="message-text-outline" size={24} color="black" />
                <Text style={styles.actionsItem}>Chat With Us</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.actions}>
                <Icon source="exclamation-thick" size={24} color="black" />
                <Text style={styles.actionsItem}>Report an Issue</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.actions}>
                <Icon source="layers-outline" size={24} color="black" />
                <Text style={styles.actionsItem}>App Version 1.0.0</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.actions}>
                <Icon source="logout" size={24} color="black" />
                <Text style={styles.actionsItem}>Log Out</Text>
            </TouchableOpacity>
        </View>
        
        
        <Modal
            animationType="slide"
            transparent={false}
            visible={modalVisible}
            onRequestClose={() => setModalVisible(false)}
        >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Text style={{ textAlign: 'center', fontSize: 20, marginBottom: 80 }}>Edit Profile</Text>
                    <View style={styles.information}>
                        <Text>First Name</Text>
                        <TextInput
                            style={styles.textInput}
                            placeholder="Juan"
                            onChangeText={text => setFirstName(text)}
                        />
                    </View>
                    <View style={styles.information}>
                        <Text>Last Name</Text>
                        <TextInput
                            style={styles.textInput}
                            placeholder="de la Cruz"
                            onChangeText={text => setlastName(text)}
                        />
                    </View>
                    <View style={styles.information}>
                        <Text>Work Email</Text>
                        <TextInput
                            style={styles.textInput}
                            placeholder="juandelacruz@gmail.com"
                            onChangeText={text => setWorkEmail(text)}
                        />
                    </View>

                    <TouchableOpacity style={styles.saveButton} onPress={saveChanges} >
                        <Text style={styles.textButton}>Save Changes</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.cancelButton} onPress={() => setModalVisible(false)} >
                        <Text style={styles.textButton}>Cancel</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    </ScrollView>
  );
}

const styles = StyleSheet.create(globalstyles);
