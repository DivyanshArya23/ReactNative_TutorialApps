import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { Input, Button } from 'react-native-elements';
import { Context as LocationContext } from '../../utils/context/locationContext';
import Spacer from '../Spacer';

const TrackForm = function () {
  const {
    state: { locations, name, recording },
    changeName,
    startRecording,
    stopRecording,
  } = useContext(LocationContext);
  console.log(locations.length);
  return (
    <>
      <Spacer>
        <Input
          value={name}
          onChangeText={changeName}
          placeholder="Enter Track Name"
        />
      </Spacer>
      <Button
        title={!recording ? 'Start Recording' : 'Stop'}
        onPress={!recording ? startRecording : stopRecording}
      />
    </>
  );
};

export default TrackForm;

const styles = StyleSheet.create({});
