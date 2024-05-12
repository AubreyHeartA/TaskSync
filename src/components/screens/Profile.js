import React, { useState, useEffect } from "react";
import { SafeAreaView, ScrollView, View, Text, TextInput, Image, TouchableOpacity, StyleSheet, Modal, Alert } from "react-native";
import { Icon, Button, Divider, List } from "react-native-paper";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Linking } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as FileSystem from 'expo-file-system';
import globalstyles from "../../config/styles";

export default function Profile() {
    const [modalVisible, setModalVisible] = useState(false);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [workEmail, setWorkEmail] = useState("");
    const [profilePhoto, setProfilePhoto] = useState(null);

    useEffect(() => {
        // Load user data from AsyncStorage
        loadUserData();
    }, []);

    const loadUserData = async () => {
        try {
            const firstNameValue = await AsyncStorage.getItem('firstName');
            const lastNameValue = await AsyncStorage.getItem('lastName');
            const workEmailValue = await AsyncStorage.getItem('workEmail');
            const profilePhotoUri = await AsyncStorage.getItem('profilePhoto');

            if (firstNameValue !== null) {
                setFirstName(firstNameValue);
            }
            if (lastNameValue !== null) {
                setLastName(lastNameValue);
            }
            if (workEmailValue !== null) {
                setWorkEmail(workEmailValue);
            }
            if (profilePhotoUri !== null) {
                setProfilePhoto(profilePhotoUri);
            }
        } catch (e) {
            console.error('Error loading user data:', e);
        }
    };

    const saveChanges = async () => {
        try {
            // Save user data to AsyncStorage
            await AsyncStorage.setItem('firstName', firstName);
            await AsyncStorage.setItem('lastName', lastName);
            await AsyncStorage.setItem('workEmail', workEmail);
            await AsyncStorage.setItem('profilePhoto', profilePhoto || '');

            Alert.alert('Profile Updated', 'Your profile has been successfully updated.');

            setModalVisible(false);
        } catch (error) {
            console.error('Error updating profile:', error);
        }
    };

    const selectProfilePhoto = async () => {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
            Alert.alert('Permission Denied', 'You need to grant permission to access the photo library.');
            return;
        }
    
        try {
            const result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true,
                aspect: [1, 1],
                quality: 1,
            });
    
            console.log('ImagePicker result:', result);
    
            if (result.cancelled || !result.uri) {
                return;
            }

            const profilePhotoUri = `${FileSystem.documentDirectory}profilePhoto.jpg`;
            await FileSystem.copyAsync({
                from: result.uri,
                to: profilePhotoUri,
            });
    
            // Update the profile photo state with the URI of the selected image
            setProfilePhoto(profilePhotoUri);
    
            // You can also save the image to AsyncStorage here if needed
            Alert.alert('Profile Photo Updated', 'Your profile photo has been successfully updated.');
        } catch (error) {
            console.error('Error selecting image:', error);
            Alert.alert('Error', 'There was an error selecting the profile photo.');
        }
    };

    const chatWIthUs = () => {
        Linking.openURL("https://m.me/claricedomingo07")
            .catch((err) => console.error('An error occurred', err));
    };

    const reportIssue = () => {
        Linking.openURL("mailto:studymate.project101@gmail.com")
            .catch((err) => console.error('An error occurred', err));
    };

    return (
        <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
        style={{ backgroundColor: "#fff" }}
        >
            <Text style={styles.profileHeader}>Profile</Text>
            <View style={styles.profileContainer}>
                <TouchableOpacity onPress={selectProfilePhoto}>
                    {profilePhoto ? (
                        <Image key={profilePhoto} source={{ uri: profilePhoto }} style={{ width: 200, height: 200, borderRadius: 100 }} />
                    ) : (
                        <Icon source="account-circle" size={200} />
                    )}
                </TouchableOpacity>
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
                    <Text style={styles.label}>Email</Text>
                    <Text>{workEmail}</Text>
                </View>

                <TouchableOpacity style={styles.updateButton} onPress={() => setModalVisible(true)} >
                    <Text style={styles.textButton}>Edit Profile</Text>
                </TouchableOpacity>
            </View>
            
            <Divider style={{ marginTop: 10 }} />
            <View style={styles.actionsContainer}>
                <Text>Actions</Text>
                            
                <TouchableOpacity style={styles.actions}>
                    <Icon source="help-circle-outline" size={24} color="black" />
                    <Text style={styles.actionsItem}>Help and Support</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.actions} onPress={chatWIthUs}>
                    <Icon source="message-text-outline" size={24} color="black" />
                    <Text style={styles.actionsItem}>Chat With Us</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.actions} onPress={reportIssue}>
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
                                placeholder="Enter first name"
                                value={firstName}
                                onChangeText={text => setFirstName(text)}
                            />
                        </View>
                        <View style={styles.information}>
                            <Text>Last Name</Text>
                            <TextInput
                                style={styles.textInput}
                                placeholder="Enter last name"
                                value={lastName}
                                onChangeText={text => setLastName(text)}
                            />
                        </View>
                        <View style={styles.information}>
                            <Text>Email</Text>
                            <TextInput
                                style={styles.textInput}
                                placeholder="Enter a valid email"
                                value={workEmail}
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