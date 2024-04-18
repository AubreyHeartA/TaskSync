const globalstyles = {

    // Home.js
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        
    },
    logo: {
        width: 150,
        height: 30,
    },
    welcome: {
        padding: 30,
        fontSize: 20,
        fontWeight: '500',
    },
    countContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    ongoingTask: {
        alignItems: 'center',
        backgroundColor: '#D7A990',
        padding: 20,
        // paddingVertical: 20,
        // paddingHorizontal: 20,
        borderRadius: 10
    },
    completedTask: {
        alignItems: 'center',
        backgroundColor: '#29CD66',
        padding: 20,
        borderRadius: 10
    },
    count: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 20,
        marginBottom: 5
    },
    counting: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '800',
    },
    taskText: {
        color: '#fff',
        fontSize: 17,
        fontWeight: '600',
    },
    // Profile.js

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
        padding: 20
    },
    actions: {
        flexDirection: 'row', 
        alignItems: 'center',
        padding: 10
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
    }
};


export default globalstyles;