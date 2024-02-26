import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    text:{
        color: 'white',
        fontSize:18
    },
    priceContainer:{
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between'
    },
    price:{
      color: "white",
      fontSize: 32,
      fontWeight: 'bold'
    },
    percentageChange:{
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: 6,
      paddingHorizontal: 8,
      fontSize: 16,
      fontWeight: 'bold',
    //   backgroundColor: ,
      borderRadius: 8
    },
    changeIcon:{
      marginRight: 5
    },
    buttonsWrapper:{
        // display: 'flex',
        flexDirection: 'row',
        justifyContent: "space-between",
        maxWidth: 300,
        marginLeft: 5
    },
    button:{
        flex:1
    },
    switchButton:{
        // width: 200
    },
    loaderOverlay:{
      position: "absolute",
      width: '100%',
      height: '100%',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center'
    }

})

export default styles