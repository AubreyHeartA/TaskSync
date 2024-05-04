import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "../../config/LandingPageStyles.js";
import { useNavigation } from "@react-navigation/native";

const LandingPage = ({ onStart }) => {
    const navigation = useNavigation();

    const handleStart = () => {
        onStart(navigation);
    };

    return (
        <View style={styles.container}>
        <Image
            source={require("../../../assets/favicon.png")}
            style={styles.logo}
        />

        <Text style={styles.appName}>TaskSync</Text>
        <Text style={styles.description}>Seamlessly synchronize your tasks across all devices, your ultimate ally in conquering your to-do list with ease and efficiency!</Text>

        <TouchableOpacity style={styles.startButton} onPress={handleStart}>
            <Text style={styles.startButtonText}>Start</Text>
        </TouchableOpacity>
        </View>
    );
};

export default LandingPage;
