import { View, Text, TouchableOpacity, Modal,StyleSheet } from 'react-native'
import { useSelector } from 'react-redux'
import {useState} from 'react'
import OrderItem from './OrderItem'
import firebase from '../firebase'
export default function ViewCart({restuarantName}) {
  const [visible, setVisible] = useState(false)
    const items = useSelector((state) => state.cartReducer.selectedItem.item)

    const total = items.map((item)=> Number(item.price.replace('$', ''))).reduce((prev, curr)=> prev + curr, 0)

    const totalUSD = total.toLocaleString("en", {
        style: "currency",
        currency: "USD"
    })
  const addToFireBase = ()=>{
    const db = firebase.firestore();
    db.collection("Order")
      .add({
        items: items,
        restaurantName: restuarantName,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      })
    setVisible(false)
  }
  
    const checkOut = ()=>{
       return (
        <>
        <View style={styles.modalContainer}>
                 <View style={styles.modalCheckoutContainer}>
    <Text style={styles.restaurantName}>{restuarantName}</Text>
    {items.map((item, index) => (
              <OrderItem key={index} item={item} />
            ))}
             <View style={styles.subtotalContainer}>
              <Text style={styles.subtotalText}>Subtotal</Text>
              <Text>${totalUSD}</Text>
            </View>
            <View style={{ flexDirection: "row", justifyContent: "center" }}>
              <TouchableOpacity
                style={{
                  marginTop: 20,
                  backgroundColor: "black",
                  alignItems: "center",
                  padding: 13,
                  borderRadius: 30,
                  width: 300,
                  position: "relative",
                }}
                onPress={()=> {
                  addToFireBase()
                }}
              >
                <Text style={{ color: "white", fontSize: 20 }} >Checkout</Text>
                <Text
                  style={{
                    position: "absolute",
                    right: 20,
                    color: "white",
                    fontSize: 15,
                    top: 17,
                  }}
                >
                  {total ? totalUSD : ""}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        </>
       )
    }
  return (
      <>
      <Modal animationType='slide'
      transparent={true}
      visible={visible}
      onRequestClose={()=> setVisible(false)}
      >{checkOut()}
      </Modal>
      {totalUSD != 0 ? (
          <View style={{ flex: 1,alignItems: "center", flexDirection: 'row',
      position: "absolute",
      justifyContent: 'center',
      alignSelf: 'center',
      bottom:  20,
      zIndex: 999}}>

    <View style={{flexDirection: 'row', justifyContent: "center"}}>
        <TouchableOpacity
        style={{
            marginTop: 20,
            backgroundColor: "rgba(0, 0, 0, .88)",
            alignItems: "center",
            padding: 13,
            borderRadius: 30,
            width: 300,
            position: "relative",
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            padding: 15,

        }}
        onPress={()=> setVisible(true)}
        >
      
          
      <Text style={{color: "white", fontSize: 20}}>ViewCart</Text>

      <Text style={{color: 'white', fontSize: 16}}>${totalUSD}</Text>
      
        </TouchableOpacity>
    </View>
            </View>
  ): <></>}
  </>
  )
}


const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: "flex-end",
        backgroundColor: "rgba(0,0,0,0.2)",
      },
  
      modalCheckoutContainer: {
        backgroundColor: "white",
        padding: 16,
        height: 500,
        borderWidth: 1,
      },
  
      restaurantName: {
        textAlign: "center",
        fontWeight: "600",
        fontSize: 18,
        marginBottom: 10,
      },
  
      subtotalContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 15,
      },
  
      subtotalText: {
        textAlign: "left",
        fontWeight: "600",
        fontSize: 15,
        marginBottom: 10,
      },
});