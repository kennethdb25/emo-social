import React, { useEffect, useState } from 'react';
import { Text, View, Button } from 'react-native';
import * as Speech from 'expo-speech';

export default function AudioBook({ navigation }) {
  const textSpeech = async () => {
    const text = 'Hello, world!';
    Speech.speak(text, { language: 'en', rate: 0.5 });
  };
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <View>
        <Button title='Speak' onPress={textSpeech} />
      </View>
    </View>
  )
}
