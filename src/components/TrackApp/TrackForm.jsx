import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { Input, Button } from 'react-native-elements';
import { Context as LocationContext } from '../../utils/context/locationContext';
import useSaveTrack from '../../utils/hooks/useSaveTrack';
import Spacer from '../Spacer';

const TrackForm = function () {
  const {
    state: { locations, name, recording },
    changeName,
    startRecording,
    stopRecording,
  } = useContext(LocationContext);

  const [saveTrack] = useSaveTrack();
  return (
    <>
      <Spacer>
        <Input
          value={name}
          onChangeText={changeName}
          placeholder="Enter Track Name"
        />
      </Spacer>
      <Spacer>
        <Button
          title={!recording ? 'Start Recording' : 'Stop'}
          onPress={!recording ? startRecording : stopRecording}
        />
      </Spacer>
      {!recording && locations.length ? (
        <Spacer>
          <Button title="Save Recording" onPress={saveTrack} />
        </Spacer>
      ) : null}
    </>
  );
};

export default TrackForm;

const styles = StyleSheet.create({});
