import { createStackNavigator } from '@react-navigation/stack';
import { Screem1 } from '../screems/Screem1';
import { Screem4 } from '../screems/Screem4';
import { Screem2 } from '../screems/Screem2';
import { Screem3 } from '../screems/Screem3';
import { Screem5 } from '../screems/Screem5';

export type RootStackParamList ={
    Screem1:undefined,
    Screem2:undefined,
    Screem3:undefined,
    Screem4:undefined,
    Screem5:undefined
}



const Stack = createStackNavigator<RootStackParamList>();

export const StackNavigator =()=> {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Screem1" options={{title:'Home'}} component={Screem1}/>
      <Stack.Screen name="Screem2" options={{title:'Pantalla 1'}} component={Screem2}/>
      <Stack.Screen name="Screem3" options={{title:'Pantalla 2'}} component={Screem3}/>
      <Stack.Screen name="Screem4" options={{title:'Pantalla 3'}} component={Screem4}/>
      <Stack.Screen name="Screem5" options={{title:'Pantalla 4'}} component={Screem5}/>
    </Stack.Navigator>
  );
}