import React, { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import Spacer from '../../components/Spacer';
import { Context as AuthContext } from '../../utils/context/AuthContext';

const Accounts = function () {
  const { signout } = useContext(AuthContext);

  return (
    <View>
      <Text style={styles.title}>Accounts</Text>
      <Spacer>
        <Button title="Sign Out" onPress={signout} />
      </Spacer>
    </View>
  );
};

export default Accounts;

const styles = StyleSheet.create({
  title: {
    fontSize: 48,
  },
});
