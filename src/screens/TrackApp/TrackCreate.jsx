import React, { useContext, useCallback } from 'react';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';
import { withNavigationFocus } from 'react-navigation';
import { Feather } from '@expo/vector-icons';
import Map from '../../components/TrackApp/Map';
import '../../utils/methods/_mockLocation';
import { Context as LocationContext } from '../../utils/context/locationContext';
import useLocation from '../../utils/hooks/useLocation';
import TrackForm from '../../components/TrackApp/TrackForm';

const TrackCreate = function ({ isFocused }) {
  const {
    state: { recording },
    addLocation,
  } = useContext(LocationContext);

  const callback = useCallback(
    (location) => {
      addLocation(location, recording);
    },
    [recording]
  );
  const [err] = useLocation(isFocused || recording, callback);

  return (
    <SafeAreaView>
      <Text h2>TrackCreate</Text>
      <Map />
      {err ? <Text>Please enable location services</Text> : null}
      <TrackForm />
    </SafeAreaView>
  );
};

TrackCreate.navigationOptions = {
  title: 'Add Track',
  tabBarIcon: <Feather name="plus-circle" size={24} color="black" />,
};

export default withNavigationFocus(TrackCreate);

const styles = StyleSheet.create({});
