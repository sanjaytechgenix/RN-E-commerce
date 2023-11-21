import { NavigationContainer } from '@react-navigation/native';


import { Aboutstack } from './stacknavigators/appstack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './login/login';
import Mainhome from './home/home';
import { ProductsList } from './screens/ProductsList';
import { ProductDetails } from './screens/ProductDetails';
import { Cart } from './screens/Cart';
import { CartIcon } from './components/CartIcon';
import { CartProvider } from './CartContext';
import { Product } from './components/Product';
import Profile from './Account/Account';
import MyAddress from './Account/myaddress';
import PrivacyPolicy from './Account/privacypolicy';
import Myorders from './Account/orders';



const mlLogo=require("./assets/react logo.webp");


const stack=createNativeStackNavigator();


export default function App({navigation}) {
  return (
    <NavigationContainer>
      <stack.Navigator>
      <stack.Screen name='Aboutstack' component={Aboutstack} options={{
          headerShown:false,
        }}/>
        {/* <stack.Screen name='account' component={Account}/>
        <stack.Screen name='Home' component={Home}/>
        <stack.Screen name='Cart' component={Cart}/> */}
       
        <stack.Screen name="Login" component={Login} />
        <stack.Screen name="Mainhome" component={Mainhome} />
        <stack.Screen name="ProductsList" component={ProductsList} />
        <stack.Screen name="ProductDetails" component={ProductDetails} />
        <stack.Screen name="Cart" component={Cart} />
        <stack.Screen name="CartIcon" component={CartIcon} />
        <stack.Screen name="CartProvider" component={CartProvider} />
        <stack.Screen name="Product" component={Product} />
        <stack.Screen name="Profile" component={Profile} />
        <stack.Screen name="MyAddress" component={MyAddress} />
        <stack.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
        <stack.Screen name="Myorders" component={Myorders} />
      </stack.Navigator>
    </NavigationContainer>
  );      
}