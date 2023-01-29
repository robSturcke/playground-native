import { Button, Text, View } from 'react-native';

function About({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        title='Go to Details... again'
        onPress={() => navigation.push('About')}
      />
      <Button title='Go to Home' onPress={() => navigation.navigate('Home')} />
      <Button title='Go back' onPress={() => navigation.goBack()} />
      <Button
        title='Go back to first screen in stack'
        onPress={() => navigation.popToTop()}
      />
    </View>
  );
}

export default About;
