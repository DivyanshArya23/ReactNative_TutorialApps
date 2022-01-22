import React from 'react';
import { StyleSheet } from 'react-native';
import { Input, Button } from 'react-native-elements';
import Spacer from '../Spacer';

const TrackForm = function () {
  return (
    <>
      <Spacer>
        <Input placeholder="Enter Track Name" />
      </Spacer>
      <Button title="Start Recording" />
    </>
  );
};

export default TrackForm;

const styles = StyleSheet.create({});
