import {SafeAreaView, Text, Button} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';

const Screen2 = ({navigation}) => {
  const [counter, setCounter] = useState(0);
  const counterRef = useRef(counter); //This reference is used to pause and resume the counter value later.

  useEffect(() => {
    const interval = setInterval(() => {
      if (!navigation.isFocused()) {
        return; // Pause the counter if the screen is not focused
      }

      setCounter(prevCounter => prevCounter + 1); //Updating the counter value when the screen is focused
      counterRef.current = counter; //After updating the counter value, update the reference value as well.
      // This is for correctly resuming the counter when the user comes back to Screen2 after navigating away.
    }, 1000);

    return () => clearInterval(interval); //Unmounting the component to prevent memory leaks and stop
    //the counter from incrementing when the component is no longer in use.
  }, [navigation, counter]);

  useEffect(() => {
    const unsubscribe = navigation.addListener('blur', () => {
      counterRef.current = 0; //When the user navigates away from Screen2, the counterRef.current is reset to 0.
      //This ensures that when the user returns to Screen2, the counter will start from 0.
    });

    return unsubscribe; //Removing the listener on unmounting.
  }, [navigation]);

  return (
    <SafeAreaView>
      <Text>Screen2</Text>
      <Text>Counter: {counter}</Text>
      <Button
        title="Go back to Screen 1"
        onPress={() => navigation.navigate('Screen1')}
      />
      <Button
        title="Go to Screen 3"
        onPress={() => navigation.navigate('Screen3', {counterVal: counter})}
      />
    </SafeAreaView>
  );
};

export default Screen2;
