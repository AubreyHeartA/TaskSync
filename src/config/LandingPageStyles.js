import { StyleSheet } from "react-native";

const landingStyles = StyleSheet.create({
    logo: {
        width: 180,
        height: 180,
        marginBottom: 20,
        marginLeft: 20,
    },
    appName: {
        fontSize: 28,
        fontWeight: "bold",
        marginBottom: 10,
        color: "#333",
        textAlign: "center",
    },
    description: {
        fontSize: 16,
        color: "#666",
        marginBottom: 20,
        textAlign: "center",
    },
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        fontSize: 28,
        fontWeight: "bold",
        marginBottom: 20,
    },
    description: {
        fontSize: 16,
        marginLeft: 30,
        marginRight: 30,
        marginBottom: 20,
        textAlign: "center",
    },
    startButton: {
        backgroundColor: "#2ECC71",
        paddingVertical: 15,
        padding: 50,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
    },
    startButtonText: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold",
    },
});

export default landingStyles;
