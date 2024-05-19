import { StyleSheet } from "react-native"; 

const styles = StyleSheet.create({ 
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#FFFFFF',
    },
    searchSection: {
        flexDirection: 'row', 
        alignItems: 'center', 
        marginBottom: 20
    },
    bannerImage: {
        width: 140, 
        height: 40, 
        resizeMode: 'contain', 
        marginRight: 40
    },
    searchBarContainer: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderRadius: 20,
        padding: 8,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 5,
        marginRight: 5
    },
    searchIcon: {
        backgroundColor: '#2ECC71',
        borderRadius: 15,
        width: 25,
        height: 25,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10
    },
    searchInput: {
        flex: 1, 
        fontSize: 14
    },
    profileSection: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    welcome: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
    },
    countContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 20,
        alignItems: 'center',
    },
    verticalLayout: {
        flexDirection: 'column',
    },
    iconWithLabel: {
        alignItems: 'center',
    },
    iconLabel: {
        color: 'white',
        fontSize: 18,
        marginTop: 4,
        fontWeight: 'bold',
    },
    arrowNumberTask: {
        flexDirection: 'column',
        alignItems: 'center',
    },
    taskCard: {
        backgroundColor: '#ffffff',
        padding: 15,
        borderRadius: 10,
        marginBottom: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
        borderColor: "#black",
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 10,
    },
    taskCounter: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 12,
        borderRadius: 10,
        flex: 1,
        margin: 5,
        height: 140,
    },
    activeTaskCounter: {
        backgroundColor: '#FFA07A',
    },
    completedTaskCounter: {
        backgroundColor: '#3CB371',
    },
    counterText: {
        color: 'white',
        fontSize: 14,
        textAlign: 'center',
        marginTop: 10,
    },
    taskIcon: {
        marginTop: 10,
    },
    taskTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 2,
    },
    taskStatus: {
        fontSize: 14,
    },
    taskDeadline: {
        color: 'red',
        fontSize: 14,
    },
    taskCreated: {
        color: "#5497FF",
        fontSize: 14,
    },
    taskListContainer: {
        marginBottom: 60,
        flex: 1,
    },
}); 

export default styles;
