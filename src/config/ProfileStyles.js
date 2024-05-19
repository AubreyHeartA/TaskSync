import { StyleSheet } from "react-native"; 

const styles = StyleSheet.create({ 
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 10,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 15,
        paddingTop: 15,
    },
    profileHeader: {
        flex: 1,
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
    },
    profileContainer: {
        alignItems: "center", 
        padding: 20,
    },
    profileImage: {
        width: 130,
        height: 130,
        borderRadius: 65,
        marginBottom: 10,
    },
    greetings: {
        fontSize: 24, 
        fontWeight: "bold",
        marginTop: 10,
    },
    accountInfoContainer: {
        paddingHorizontal: 20,
        marginBottom: 15,
    },
    sectionHeader: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    displayInfo: {
        marginBottom: 15,
    },
    label: {
        fontWeight: '700',
        color: '#2ECC71',
        marginBottom: 5,
    },
    textInput: { 
        borderWidth: 1, 
        borderColor: '#DADADA', 
        padding: 10,
        borderRadius: 5,
        backgroundColor: '#F5F5F5',
        color: '#000',
    },
    updateButton: {
        backgroundColor: '#00BF63',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
    },
    updateButtonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 14,
    },
    actionsContainer: {
        paddingHorizontal: 20,
        marginBottom: 20, // Adjusted to ensure all items fit
        marginTop: 20,
    },
    actions: {
        flexDirection: 'row', 
        alignItems: 'center',
        padding: 15,
        borderWidth: 1,
        borderColor: '#DADADA',
        borderRadius: 5,
        marginBottom: 10,
    },
    actionsItem: {
        marginLeft: 10,
        fontWeight: '500',
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#fff',
    },
    modalView: {
        padding: 20,        
    },
    information: {
        marginBottom: 20,
    },
    saveButton: {
        backgroundColor: '#00BF63',
        padding: 10,
        borderRadius: 10,
        alignItems: 'center',
    },
    cancelButton: {
        backgroundColor: 'red',
        padding: 10,
        marginTop: 10,
        borderRadius: 10,
        alignItems: 'center',
    },
    textButton: {
        color: '#fff',
        fontWeight: '700',
    },
});

export default styles;
