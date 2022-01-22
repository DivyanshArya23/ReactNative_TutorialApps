import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';
import { withNavigationFocus } from 'react-navigation';
import Map from '../../components/TrackApp/Map';
import '../../utils/methods/_mockLocation';
import { Context as LocationContext } from '../../utils/context/locationContext';
import useLocation from '../../utils/hooks/useLocation';
import TrackForm from '../../components/TrackApp/TrackForm';

const TrackCreate = function ({ isFocused }) {
  const { state, addLocation } = useContext(LocationContext);
  const [err] = useLocation(isFocused, (location) => {
    addLocation(location, state.recording);
  });

  return (
    <SafeAreaView>
      <Text h2>TrackCreate</Text>
      <Map />
      {err ? <Text>Please enable location services</Text> : null}
      <TrackForm />
    </SafeAreaView>
  );
};

export default withNavigationFocus(TrackCreate);

const styles = StyleSheet.create({});
