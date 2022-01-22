import { useContext } from 'react';
import { Context as LocationContext } from '../context/locationContext';
import { Context as TrackContext } from '../context/TrackContext';
import { navigate } from '../methods/navigationRef';

export default () => {
  const {
    state: { name, locations },
    reset,
  } = useContext(LocationContext);
  const { createTrack } = useContext(TrackContext);

  const saveTrack = async () => {
    await createTrack(name, locations);
    reset();
    navigate('TrackAppTrackList');
  };
  return [saveTrack];
};
