import { View,Text, Button } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";

const drawer=createDrawerNavigator();

export default function Home({navigation}){
    return(
        <View>
      <Text>Well come to home</Text>
      
      <Button title="About"  onPress={()=>navigation.navigate("About")}></Button>
      </View>
    )
}


