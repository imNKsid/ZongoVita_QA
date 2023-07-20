import {SafeAreaView, Text, Button} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';

const Screen2 = ({navigation}) => {
  const [counter, setCounter] = useState(0);
  const counterRef = useRef(counter);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!navigation.isFocused()) {
        return; // Pause the counter if the screen is not focused
      }

      setCounter(prevCounter => prevCounter + 1);
      counterRef.current = counter;
    }, 1000);

    return () => clearInterval(interval);
  }, [navigation, counter]);

  useEffect(() => {
    const unsubscribe = navigation.addListener('blur', () => {
      counterRef.current = 0;
    });

    return unsubscribe;
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
