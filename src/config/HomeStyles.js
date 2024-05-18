import { StyleSheet } from "react-native"; 

const styles = StyleSheet.create({ 
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: "#f7f", 
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'flex-start', 
        paddingVertical: 10,
        paddingHorizontal: 15,
        marginBottom: 10,
    },
    logo: {
        width: 10,
        height: 10,
        resizeMode: 'contain',
        marginRight: 10,
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
    welcome: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#333', // Darker text for better readability
        marginVertical: 20,
    },
    countContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 20,
    },
    activeTask: {
        alignItems: 'center',
        backgroundColor: '#34C759', // Green background for active tasks
        padding: 20,
        borderRadius: 10,
    },
    completedTask: {
        alignItems: 'center',
        backgroundColor: '#FF9500', // Orange background for completed tasks
        padding: 20,
        borderRadius: 10,
    },
    count: {
        backgroundColor: '#5ccb51',
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 15,
    },
    counting: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    taskText: {
        color: '#fff',
        fontSize: 17,
    },
    taskText: {
        marginTop: 5,
        color: '#333',
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333', // Dark text for section titles
        marginBottom: 10,
    },
    taskCounter: {
        display: 'flex',
        alignItems: 'center',      // Keeps content vertically centered
        paddingHorizontal: 20,     // Padding on both sides
        paddingVertical: 20,       // Vertical padding for better look
        borderRadius: 10,
        flex: 1,
        margin: 5,                 // Adjust spacing between the boxes
        height: 130,               // Specify height to maintain size
        flexDirection: 'row',      // Aligns children (icon and text) in a row
        justifyContent: 'space-between', // Space between items
    },
    iconWithLabel: {
        alignItems: 'center', // Aligns the icon and text vertically
    },
    iconLabel: {
        color: 'white',
        fontSize: 20, // Smaller font size for the label
        marginTop: 4, // Spacing between the icon and text label
        fontWeight: 'bold',
    },
    activeTaskCounter: {
        backgroundColor: '#FFA07A', // Soft brown
    },
    completedTaskCounter: {
        backgroundColor: '#3CB371', // Vibrant green
    },
    counterText: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center',
        marginTop: 10,
        textAlign: 'right',
    },
    taskIcon: {
        marginTop: 10,
    },
    arrowNumberTask: {
        flexDirection: 'row', // Ensures horizontal layout
        alignItems: 'center', // Vertically center the contents
        justifyContent: 'flex-end', // Aligns children to the right, adjust as needed
    },
    chevronIcon: {
        marginTop: 10,
        paddingLeft: 0, 
    },
    taskCard: {
        backgroundColor: '#ffffff', // White background for task cards
        padding: 15,
        borderRadius: 10,
        marginBottom: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
    },
}); 

export default styles;