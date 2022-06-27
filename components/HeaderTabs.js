import { View, Text ,TouchableOpacity} from 'react-native'
import {useState} from 'react'

export default function HeaderTabs() {
    const [activeTab, setActiveTab] = useState("Delivery")
  return (
    <View style={{ flexDirection: "row", alignSelf:'center'}}>
     <HeaderButton name="Delivery" btnColor="black" textColor="white" activeTab={activeTab} setActiveTab={setActiveTab} />
     <HeaderButton name="Pickup" btnColor="white" textColor="black" activeTab={activeTab} setActiveTab={setActiveTab} />
    </View>
  )
}
const HeaderButton = (props)=>(
    <View>
        <TouchableOpacity 
        style={{
            backgroundColor: props.activeTab === props.name? 'black': 'white',
            paddingVertical: 6,
            paddingHorizontal: 16,
            borderRadius: 30
        }}
        onPress={()=> props.setActiveTab(props.name)}
        >
            <Text style={{
                color:props.activeTab === props.name? 'white': 'black',
                fontSize: 15,
                fontWeight: '900'
            }}>
               {props.name}
            </Text>
        </TouchableOpacity>
    </View>
)
