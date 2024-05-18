import { StyleSheet } from "react-native"; 

const styles = StyleSheet.create({ 
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#FFFFFF', // Set the background to white as requested
    },
    searchSection: {
        flexDirection: 'row', 
        alignItems: 'center', 
        marginBottom: 20
    },
    bannerImage: {
        width: 150, 
        height: 40, 
        resizeMode: 'contain', 
        marginRight: 50
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
        marginBottom: 20,
    },
    profilePhoto: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 10,
    },
    welcome: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#333',
        marginVertical: 20,
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
        fontSize: 20,
        marginTop: 4,
        fontWeight: 'bold',
    },
    arrowNumberTask: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingRight: 41,
    },
    chevronIcon: {
        marginTop: 10,
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
    },
    sectionTitle: {
        fontSize: 18,
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
        fontSize: 16,
        textAlign: 'center',
        marginTop: 10,
        marginLeft: 60,
    },
    taskIcon: {
        marginTop: 10,
    },
}); 

export default styles;
