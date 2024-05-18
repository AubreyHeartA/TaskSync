import { StyleSheet } from "react-native"; 

const styles = StyleSheet.create({ 

    profileHeader: {
        textAlign: 'center',
        fontSize: 20,
        padding: 15
    },
    profileContainer: {
        alignItems: "center", 
        padding: 20
    },
    greetings: {
        fontSize: 24, 
        fontWeight: "bold"
    },
    displayInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#F0F3F4',
        marginTop: 20,
    },
    label: {
        fontWeight: '700',
    },
    updateButton: {
        marginTop: 20,
        backgroundColor: '#00BF63',
        padding: 10,
        borderRadius: 10,
    },
    actionsContainer: {
        // marginTop: 10,
        padding: 20,
        marginBottom: 60,
    },
    actions: {
        flexDirection: 'row', 
        alignItems: 'center',
        padding: 10,
    },
    actionsItem: {
        marginLeft: 10,
    },
    centeredView: {
        backgroundColor: '#fff'
    },
    modalView: {
        padding: 20,        
    },
    information: {
        marginBottom: 20,
    },
    textInput: { 
        borderWidth: 1, 
        borderColor: 'rgba(0, 0, 0, 0.2)', 
        padding: 5 
    },
    saveButton: {
        backgroundColor: '#00BF63',
        padding: 10,
        borderRadius: 10,
    },
    cancelButton: {
        backgroundColor: 'red',
        padding: 10,
        marginTop: 10,
        borderRadius: 10,
    },
    textButton: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: '700',
    },
    container: {
        flex: 1,
        padding: 20,
    },
    header: {
        marginBottom: 10,
    },
    logo: {
        height: 60,
        width: '100%',
    },
    welcome: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    countContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 20,
    },
    activeTasks: {
        alignItems: 'center',
    },
    completedTask: {
        alignItems: 'center',
    },
    count: {
        backgroundColor: '#5ccb51',
        borderRadius: 10,
        padding: 10,
    },
    counting: {
        fontSize: 16,
        color: '#ffffff',
        fontWeight: 'bold',
    },
    profileSection: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    profilePic: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 10,
    },
}); 

export default styles;