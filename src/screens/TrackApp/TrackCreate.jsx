import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';
import { withNavigationFocus } from 'react-navigation';
import Map from '../../components/TrackApp/Map';
import '../../utils/methods/_mockLocation';
import { Context as LocationContext } from '../../utils/context/locationContext';
import useLocation from '../../utils/hooks/useLocation';

const TrackCreate = function ({ isFocused }) {
  const { addLocation } = useContext(LocationContext);
  const [err] = useLocation(isFocused, addLocation);

  return (
    <SafeAreaView>
      <Text h2>TrackCreate</Text>
      <Map />
      {err ? <Text>Please enable location services</Text> : null}
    </SafeAreaView>
  );
};

export default withNavigationFocus(TrackCreate);

const styles = StyleSheet.create({});
