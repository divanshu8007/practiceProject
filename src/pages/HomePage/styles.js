

const styles = {

    container: {
        display: "flex",
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
    },
    taskBar: {
        alignItems: "  center",
        justifyContent: "space-between",
        flex: 1,
        backgroundColor: "#FAFAFA",
        flexDirection: "row",
        display: "flex",
        padding: "20px 60px",
    },
    tasks: {
        display: "flex",
        flex: 1,
        width: "100%",
        justifyContent: "space-evenly",
       
    },
    absoluteDiv: {
        backgroundColor: "#E1E9EE",
        left: "7.5%",
        position: "absolute",
        right: "7.5%",
        top: "75%",
        alignSelf: "center",
        zIndex: 10000,
        padding: "48px 40px",
        alignContent: "center",
        alignItems: "center",
        width: "85%",
        display: "flex",
        justifyContent: "center",
        boxShadow: " 14px 20px 33px 1px rgba(0,0,0,0.6)",
    },
    blueSeparator: {
        height: 3.5,
        width: "4.2%",
        backgroundColor: "#236bf0",
        margin: "2%",
    },
    txDataMainDiv: {
        display: "flex",
        justifyContent: "space-between",
        width: "75%",
    },
    txIconsView: {
        flexDirection: "column",
        display: "flex",
        alignItems: "center",
    },
    deliveryCentre: {
        flexDirection: "column",
        display: "flex",
        alignItems: "center",
        maxWidth: "15%",
    },
    txInfoIcons: { color: "#236bf0", maxHeight: 38, maxWidth: 45 },

    txInfoBoldText: { fontSize: 36, fontWeight: "bolder", margin: 12 },

    blueBoldTxt: { fontSize: 22, fontWeight: "bold", color: "blue" },

    clientsView: { 
        marginTop: 24, 
        alignItems: 'center', 
        justifyContent: 'center', 
        alignContent: "center", 
        display: 'flex', 
        flexDirection: "column", 
        width: "100%" },

        clientLogosView : { display: 'flex', 
        justifyContent: 'space-between',
        width: '100%', 
        padding: '0px 200px', 
        alignItems: "center" }
}


export default styles