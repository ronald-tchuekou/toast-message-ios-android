import React from "react"
import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View} from 'react-native';
import {ButtonApp} from "./src/components/button"
import {RootSiblingParent} from 'react-native-root-siblings';
import Toast from "react-native-root-toast";

function App() {
  const showToastMessage = React.useCallback(() => {
    // Add a Toast on screen.
    let toast = Toast.show('This is a toast message I\'m show to you.', {
      duration: Toast.durations.LONG,
      backgroundColor: "#4b4b4b"
    });

// You can manually hide the Toast, or it will automatically disappear after a `duration` ms timeout.
    setTimeout(function hideToast() {
      Toast.hide(toast);
    }, 5000);
  }, [])
  return (
    <View style={styles.container}>
      <Text>Show toast message on cross plateformes !</Text>
      <ButtonApp handleClick={showToastMessage}/>
      <StatusBar style="auto"/>
    </View>
  );
}

export default function Context() {
  return (
    <RootSiblingParent>
      <App/>
    </RootSiblingParent>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
