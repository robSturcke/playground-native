import { Box, Button } from 'native-base';
import { useEffect } from 'react';
import { Text, View } from 'react-native';

function HomeScreen({ navigation, route }) {
  useEffect(() => {
    if (route.params?.post) {
      // Post updated, do something with `route.params.post`
      // For example, send the post to the server
    }
  }, [route.params?.post]);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        shadow={2}
        onPress={() =>
          navigation.navigate('About', {
            itemId: 86,
            otherParam: 'dude anything',
          })
        }
      >
        Go to About
      </Button>
      {/* <Button
        title='Go to About'
        onPress={() =>
          navigation.navigate('About', {
            itemId: 86,
            otherParam: 'dude anything',
          })
        }
      />
      <Button
        title='Create post'
        onPress={() => navigation.navigate('CreatePost')}
      /> */}
      <Text style={{ margin: 10 }}>Post: {route.params?.post}</Text>
    </View>
  );
}

export default HomeScreen;

// navigation.setParams({
//   query: 'someText',
// });
