import {SafeAreaView, Text, Button} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';

const Screen3 = ({route, navigation}) => {
  const {counterVal} = route.params;
  const [counter, setCounter] = useState(counterVal);

  useEffect(() => {
    const unsubscribe = navigation.addListener('blur', () => {
      setCounter(counterVal);
    });

    return () => {
      unsubscribe();
    };
  }, [navigation]);

  return (
    <SafeAreaView>
      <Text>Screen3</Text>
      <Text>Counter: {counter}</Text>
      <Button
        title="Go back to Screen 2"
        onPress={() => navigation.navigate('Screen2')}
      />
      <Button
        title="Go to Screen 1"
        onPress={() => navigation.navigate('Screen1')}
      />
    </SafeAreaView>
  );
};

export default Screen3;
