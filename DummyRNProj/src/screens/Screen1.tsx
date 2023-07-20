import {SafeAreaView, Text, Button} from 'react-native';
import React, {useEffect, useState} from 'react';

const Screen1 = ({navigation}) => {
  const [counter, setCounter] = useState(0);

  return (
    <SafeAreaView>
      <Text>Screen1</Text>
      <Text>Counter: {counter}</Text>
      <Button
        title="Go to Screen 2"
        onPress={() => navigation.navigate('Screen2')}
      />
    </SafeAreaView>
  );
};

export default Screen1;
