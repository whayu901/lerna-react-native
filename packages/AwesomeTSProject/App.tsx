import React from 'react';
import {Button, View, StyleSheet} from 'react-native';
import {createMainNavigator, navigationRef} from '@shared/navigation';

const MainNavigator = createMainNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <MainNavigator />
      <View style={styles.buttonsContainer}>
        <Button
          title="Go to App1 Home"
          onPress={() => navigationRef.navigate('Home')}
        />
        <Button
          title="Go to App2 Dashboard"
          onPress={() => navigationRef.navigate('Dashboard')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonsContainer: {
    position: 'absolute',
    bottom: 30,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});
