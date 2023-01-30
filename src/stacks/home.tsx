import { Button, Text, View } from 'react-native';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title='Go to About'
        onPress={() =>
          navigation.navigate('About', {
            itemId: 86,
            otherParam: 'dude anything',
          })
        }
      />
    </View>
  );
}

export default HomeScreen;

// navigation.setParams({
//   query: 'someText',
// });
