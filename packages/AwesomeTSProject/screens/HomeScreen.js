// packages/host/src/screens/HomeScreen.js
import React from 'react';
import {View, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Button title="Go to App 1" onPress={() => navigation.navigate('App1')} />
      <Button title="Go to App 2" onPress={() => navigation.navigate('App2')} />
    </View>
  );
};

export default HomeScreen;
