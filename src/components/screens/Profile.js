import React, { useState, useEffect } from "react";
import { SafeAreaView, ScrollView, View, Text, TextInput, Image, TouchableOpacity, StyleSheet, Modal, Alert, Linking } from "react-native";
import { Icon, Divider } from "react-native-paper";
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as ImagePicker from 'expo-image-picker';
import * as FileSystem from 'expo-file-system';
import { MaterialIcons } from 'react-native-vector-icons';
import styles from "../../config/ProfileStyles";

const Profile = ({ navigation }) => {
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
            const userCredentials = JSON.parse(await AsyncStorage.getItem('userCredentials'));
            const profilePhotoUri = await AsyncStorage.getItem('profilePhoto');
            if (userCredentials) {
                setFirstName(userCredentials.firstName);
                setLastName(userCredentials.lastName);
                setWorkEmail(userCredentials.email);
            }
            if (profilePhotoUri) {
                setProfilePhoto(profilePhotoUri);
            }
        } catch (e) {
            console.error('Error loading user data:', e);
        }
    };

    const saveChanges = async () => {
        try {
            const userCredentials = JSON.parse(await AsyncStorage.getItem('userCredentials'));
            // Save user data to AsyncStorage
            await AsyncStorage.setItem('userCredentials', JSON.stringify({
                firstName,
                lastName,
                email: workEmail,
                password: userCredentials.password, // Maintain the existing password
            }));
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

    const chatWithUs = () => {
        Linking.openURL("https://m.me/claricedomingo07")
            .catch((err) => console.error('An error occurred', err));
    };

    const reportIssue = () => {
        Linking.openURL("mailto:studymate.project101@gmail.com")
            .catch((err) => console.error('An error occurred', err));
    };

    const handleLogout = async () => {
        try {
            await AsyncStorage.removeItem('userToken');
            navigation.replace('Login');
        } catch (error) {
            Alert.alert('Error', 'An error occurred during logout');
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={{ flexGrow: 1, paddingBottom: 50 }} showsVerticalScrollIndicator={false}>
                <View style={styles.header}>
                    <MaterialIcons name="arrow-back" size={30} onPress={() => navigation.goBack()} />
                    <Text style={styles.profileHeader}>Edit Profile</Text>
                </View>
                <View style={styles.profileContainer}>
                    <TouchableOpacity onPress={selectProfilePhoto}>
                        {profilePhoto ? (
                            <Image key={profilePhoto} source={{ uri: profilePhoto }} style={styles.profileImage} />
                        ) : (
                            <Image source={require('../../../assets/blank-profile-picture.png')} style={styles.profileImage} />
                        )}
                    </TouchableOpacity>
                    <Text style={styles.greetings}>Hello, {firstName} {lastName}!</Text>
                </View>

                <View style={styles.accountInfoContainer}>
                    <Text style={styles.sectionHeader}>Account Information:</Text>
                    <View style={styles.displayInfo}>
                        <Text style={styles.label}>Name</Text>
                        <TextInput
                            style={styles.textInput}
                            value={`${firstName} ${lastName}`}
                            editable={false}
                        />
                    </View>

                    <View style={styles.displayInfo}>
                        <Text style={styles.label}>Email</Text>
                        <TextInput
                            style={styles.textInput}
                            value={workEmail}
                            editable={false}
                        />
                    </View>

                    <TouchableOpacity style={styles.updateButton} onPress={() => setModalVisible(true)} >
                        <Text style={styles.updateButtonText}>Edit Profile</Text>
                    </TouchableOpacity>
                </View>
                
                <Divider style={{ marginTop: 10 }} />
                <View style={styles.actionsContainer}>
                    <Text style={styles.sectionHeader}>Actions:</Text>
                                
                    <TouchableOpacity style={styles.actions} onPress={chatWithUs}>
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

                    <TouchableOpacity style={styles.actions} onPress={handleLogout}>
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
                            <Text style={{ textAlign: 'center', fontSize: 20, marginBottom: 20 }}>Edit Profile</Text>
                            
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
        </SafeAreaView>
    );
};

export default Profile;
