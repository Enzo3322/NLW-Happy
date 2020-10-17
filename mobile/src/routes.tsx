import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import OrphanagesMap from '../src/pages/OrphanagesMap';
import OrphanageDetails from '../src/pages/CreateOrphanage/OrphanageDetails';
import OrphanageData from '../src/pages/CreateOrphanage/OrphanageData';
import SelectMapPosition from '../src/pages/CreateOrphanage/SelectMapPosition';


const { Navigator, Screen } = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name="OrphanagesMap" component={OrphanagesMap} />
        <Screen name="OrphanageDetails" component={OrphanageDetails} />
        <Screen name="OrphanageData" component={OrphanageData}/>
        <Screen name="SelectMapPosition" component={SelectMapPosition}/>        
      </Navigator>
    </NavigationContainer>
  );
}