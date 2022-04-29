import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

function test() {
  return (
    <div>Drawer</div>
  )
}


function DrawerComponent() {
  return (
    <Drawer.Navigator initialRouteName="TabOne">
        <Drawer.Screen name="Home" component={test} />
    </Drawer.Navigator>
  )
}

export default DrawerComponent