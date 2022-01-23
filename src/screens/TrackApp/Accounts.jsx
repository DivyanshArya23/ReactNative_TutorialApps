import React, { useContext } from 'react';
import { StyleSheet, Text } from 'react-native';
import { Button } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesome } from '@expo/vector-icons';
import Spacer from '../../components/Spacer';
import { Context as AuthContext } from '../../utils/context/AuthContext';

const Accounts = function () {
  const { signout } = useContext(AuthContext);

  return (
    <SafeAreaView forceInset={{ top: 'always' }}>
      <Text style={styles.title}>Accounts</Text>
      <Spacer>
        <Button title="Sign Out" onPress={signout} />
      </Spacer>
    </SafeAreaView>
  );
};

Accounts.navigationOptions = {
  title: 'Accounts',
  tabBarIcon: <FontAwesome name="gear" size={24} color="black" />,
};

export default Accounts;

const styles = StyleSheet.create({
  title: {
    fontSize: 48,
  },
});
